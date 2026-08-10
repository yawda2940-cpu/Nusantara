import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../i18n/LanguageContext';

interface Message {
  role: 'user' | 'model';
  content: string;
}

export default function Chatbot() {
  const { t, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', content: t('chatbot.initial') }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.error || 'Failed to get response');
      }

      const data = await response.json();
      setMessages(prev => [...prev, { role: 'model', content: data.reply }]);
    } catch (error: any) {
      console.error('Chatbot error:', error);
      const errorMessage = error.message || t('chatbot.error');
      setMessages(prev => [...prev, { role: 'model', content: errorMessage }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 w-14 h-14 bg-[#b6452c] text-white-pure rounded-full shadow-lg flex items-center justify-center hover:scale-105 transition-transform z-40 ${isOpen ? 'hidden' : 'flex'}`}
        aria-label="Open Chat"
      >
        <span className="material-symbols-outlined text-[28px]">forum</span>
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-6 right-6 w-[350px] sm:w-[400px] h-[500px] bg-white-pure rounded-2xl shadow-2xl border border-surface-variant flex flex-col overflow-hidden z-50 font-body-md"
          >
            {/* Header */}
            <div className="bg-[#b6452c] p-4 flex justify-between items-center text-white-pure">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined">support_agent</span>
                <div>
                  <h3 className="font-label-md font-bold">{t('chatbot.title')}</h3>
                  <p className="text-xs opacity-80">{t('chatbot.status')}</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white-pure/80 hover:text-white-pure transition-colors"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 p-4 overflow-y-auto bg-surface-container-lowest flex flex-col gap-3">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`max-w-[80%] rounded-2xl p-3 ${
                    msg.role === 'user'
                      ? 'bg-surface-container-low text-on-surface self-end rounded-tr-sm'
                      : 'bg-primary-container text-on-primary-container self-start rounded-tl-sm'
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap leading-relaxed">{msg.content}</p>
                </div>
              ))}
              {isLoading && (
                <div className="max-w-[80%] rounded-2xl p-3 bg-primary-container text-on-primary-container self-start rounded-tl-sm flex gap-1 items-center">
                  <div className="w-2 h-2 bg-on-primary-container/50 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-on-primary-container/50 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-on-primary-container/50 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleSubmit} className="p-3 bg-white-pure border-t border-surface-variant flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t('chatbot.placeholder')}
                className="flex-1 bg-surface-container-low border border-surface-variant rounded-full px-4 py-2 text-sm focus:outline-none focus:border-[#b6452c] transition-colors text-on-surface"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="w-10 h-10 bg-[#b6452c] text-white-pure rounded-full flex items-center justify-center disabled:opacity-50 hover:bg-[#b6452c]/90 transition-colors"
              >
                <span className="material-symbols-outlined text-[20px] ml-1">send</span>
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
