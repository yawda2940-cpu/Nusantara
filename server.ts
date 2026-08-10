import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API routes FIRST
  app.post("/api/chat", async (req, res) => {
    try {
      const { messages } = req.body;

      if (!messages || !Array.isArray(messages)) {
        return res.status(400).json({ error: "Invalid messages format" });
      }

      // Convert messages to Gemini's format, ensuring it starts with user
      let validMessages = messages;
      if (validMessages.length > 0 && validMessages[0].role !== 'user') {
        validMessages = validMessages.slice(1);
      }
      
      const contents = validMessages.map((msg: any) => ({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.content }]
      }));

      const systemInstruction = `Kamu adalah MinTar (Admin Nusantara), admin customer service dari "Nusantara Meal Prep". 
Nusantara Meal Prep adalah penyedia layanan meal prep premium masakan otentik Indonesia sehat.
PENTING: Gaya bahasamu harus sangat natural, santai tapi sopan, selayaknya admin manusia (CS) sungguhan yang sedang membalas chat pelanggan. JANGAN pernah menggunakan kalimat yang terdengar kaku, formal seperti robot, atau khas AI.
Aturan gaya bahasa:
- Gunakan sapaan yang akrab dan ramah seperti "Halo Kak!", "Bisa banget Kak", "Oke Kak".
- Balas dengan singkat, padat, dan langsung ke intinya. Hindari paragraf panjang atau poin-poin list yang kaku.
- Jangan mengulang-ulang informasi.
- Untuk pesanan, komplain, atau pertanyaan lebih detail, arahkan langsung dengan ramah ke:
  WhatsApp: 087881485375
  Instagram: @yawdasaja
  Email: yawda2940@gmail.com
- Jika pelanggan bertanya hal yang kamu tidak tahu, jawab natural seperti: "Wah, sebentar ya Kak, aku bantu cek dulu ke tim dapur/admin."
- Sesuaikan bahasa dengan pengguna (jika Inggris gunakan gaya admin yang friendly, jika Indo gunakan gaya casual sopan).`;

      const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: contents,
        config: {
          systemInstruction: systemInstruction,
          temperature: 0.7,
        }
      });

      const reply = response.text || "Mohon maaf, saya sedang mengalami kendala. Silakan coba lagi.";
      res.json({ reply });
    } catch (error: any) {
      console.error("Chat API error:", error);
      res.status(500).json({ error: error.message || "Internal server error", details: error });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
