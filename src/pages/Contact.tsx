import { FormEvent } from 'react';
import ParallaxImage from '../components/ParallaxImage';
import FadeIn from '../components/FadeIn';
import { useLanguage } from '../i18n/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();

  const handleWhatsAppSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const company = formData.get('company') as string;
    const phone = formData.get('phone') as string;
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;

    let waText = `Halo Admin Nusantara,\n\nNama: ${name || '-'}\nNo. HP: ${phone || '-'}\nEmail: ${email || '-'}`;
    if (company) waText += `\nPerusahaan: ${company}`;
    if (subject) waText += `\nSubjek: ${subject}`;
    waText += `\n\nPesan:\n${message || '-'}`;

    const encodedText = encodeURIComponent(waText);
    window.open(`https://wa.me/6287881485375?text=${encodedText}`, '_blank');
  };

  return (
    <>
      {/* 1. Hero Section */}
      <section className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <ParallaxImage alt="Cinematic Food Prep" className="brightness-[0.3]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBib3IyCxN0d4t0bD1pctUsXeXb5QjAwmQBSOj_szd-umJ9HOX2sph2jJOd9cgP6b_rzST3pK8OyW5k1_o9FlomACI3ITL-onsQrYDLOVSTUgcBWjc3hmQzzDnzSaKh4hIiAJYtv26WnruNbZpyKLEqtdOdu8TsauHc7Ce9TlXLzaxwdShio5X44Q-_jzUfZoUEOK4cH5HvkfTldoZOgkbh83yzIOlo-lPlKepUeFLTfIIn7rFU3q4F" />
        </div>
        <div className="relative z-10 text-center px-4">
          <FadeIn><h1 className="font-display-lg text-white-pure text-[52px] md:text-[64px] mb-4">{t('contact.title')}</h1></FadeIn>
          <FadeIn delay={0.1}><p className="font-body-md text-white-pure/90 max-w-4xl mx-auto text-lg text-justify md:text-center">
            Nusantara Meal Prep senantiasa hadir untuk memberikan solusi nutrisi terbaik yang disesuaikan dengan kebutuhan personal Anda. Jangan ragu untuk menghubungi kami jika Anda ingin berkonsultasi mengenai pemilihan paket makanan, memberikan masukan, atau sekadar bertanya lebih lanjut seputar layanan kami. Tim profesional kami akan dengan senang hati membantu Anda setiap saat.
          </p></FadeIn>
        </div>
      </section>

      {/* 2. Contact Info Section */}
      <section id="contact-form" className="bg-white-pure py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="bg-kertas-nasi rounded-xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-12">
            <div className="md:col-span-5 p-8 md:p-12 bg-surface-container-low">
              <FadeIn><h2 className="font-headline-md text-on-surface mb-6">{t('contact.contactInfo')}</h2></FadeIn>
              <FadeIn delay={0.1}><p className="font-body-md text-on-surface/60 mb-12">{t('contact.infoDesc')}</p></FadeIn>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-white-pure">location_on</span>
                  </div>
                  <div>
                    <h4 className="font-label-md text-on-surface">{t('contact.addressLabel')}</h4>
                    <p className="font-body-md text-on-surface/60 text-sm">{t('contact.addressVal')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-white-pure">mail</span>
                  </div>
                  <div>
                    <h4 className="font-label-md text-on-surface">{t('contact.emailLabel')}</h4>
                    <a href="mailto:yawda2940@gmail.com" className="font-body-md text-on-surface/60 text-sm hover:text-primary transition-colors">yawda2940@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-white-pure">call</span>
                  </div>
                  <div>
                    <h4 className="font-label-md text-on-surface">{t('contact.phoneLabel')}</h4>
                    <a href="https://wa.me/6287881485375" target="_blank" rel="noopener noreferrer" className="font-body-md text-on-surface/60 text-sm hover:text-primary transition-colors">087881485375</a>
                  </div>
                </div>
              </div>
              <div className="mt-12">
                <h4 className="font-label-md text-on-surface mb-4">{t('contact.social')}</h4>
                <div className="flex gap-3">
                  <a href="https://instagram.com/yawdasaja" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white-pure hover:opacity-80 transition-opacity">
                    <span className="material-symbols-outlined text-sm">alternate_email</span>
                  </a>
                </div>
              </div>
            </div>
            
            <FadeIn delay={0.2} className="md:col-span-7"><div className="p-8 md:p-12 bg-white-pure">
              <h2 className="font-headline-md text-on-surface mb-8">{t('contact.subtitle')}</h2>
              <form className="space-y-6" onSubmit={handleWhatsAppSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-label-md text-xs text-on-surface/40 mb-1">{t('contact.name')}</label>
                    <input name="name" required className="w-full bg-surface-container-low border-none rounded-lg px-4 py-3 font-body-md text-on-surface focus:ring-2 focus:ring-primary outline-none" placeholder={t('contact.name')} type="text" />
                  </div>
                  <div>
                    <label className="block font-label-md text-xs text-on-surface/40 mb-1">{t('contact.company')}</label>
                    <input name="company" className="w-full bg-surface-container-low border-none rounded-lg px-4 py-3 font-body-md text-on-surface focus:ring-2 focus:ring-primary outline-none" placeholder={t('contact.company')} type="text" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-label-md text-xs text-on-surface/40 mb-1">{t('contact.phone')}</label>
                    <input name="phone" required className="w-full bg-surface-container-low border-none rounded-lg px-4 py-3 font-body-md text-on-surface focus:ring-2 focus:ring-primary outline-none" placeholder={t('contact.phone')} type="tel" />
                  </div>
                  <div>
                    <label className="block font-label-md text-xs text-on-surface/40 mb-1">{t('contact.email')}</label>
                    <input name="email" className="w-full bg-surface-container-low border-none rounded-lg px-4 py-3 font-body-md text-on-surface focus:ring-2 focus:ring-primary outline-none" placeholder={t('contact.email')} type="email" />
                  </div>
                </div>
                <div>
                  <label className="block font-label-md text-xs text-on-surface/40 mb-1">{t('contact.subject')}</label>
                  <input name="subject" required className="w-full bg-surface-container-low border-none rounded-lg px-4 py-3 font-body-md text-on-surface focus:ring-2 focus:ring-primary outline-none" placeholder={t('contact.subject')} type="text" />
                </div>
                <div>
                  <label className="block font-label-md text-xs text-on-surface/40 mb-1">{t('contact.message')}</label>
                  <textarea name="message" required className="w-full bg-surface-container-low border-none rounded-lg px-4 py-3 font-body-md text-on-surface focus:ring-2 focus:ring-primary outline-none h-32 resize-none" placeholder={t('contact.message')}></textarea>
                </div>
                <button type="submit" className="w-full bg-primary text-white-pure font-label-md py-4 rounded-full hover:opacity-90 transition-all shadow-md text-center block cursor-pointer">
                  {t('contact.send')}
                </button>
              </form>
            </div></FadeIn>
          </div>
        </div>
      </section>

      {/* 4. Map Section */}
      <section className="bg-kertas-nasi py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div className="space-y-2">
              <span className="font-data-mono text-xs tracking-[0.2em] uppercase text-primary">{t('contact.ourPresence')}</span>
              <h2 className="font-display-lg text-on-surface text-[40px] md:text-[64px] tracking-tight">{t('contact.ourLocation')}</h2>
            </div>
            <div className="flex items-center gap-3 text-on-surface/40 pb-2">
              <span className="material-symbols-outlined text-[20px] font-light">location_on</span>
              <span className="font-data-mono text-xs tracking-widest uppercase">MADIUN . INDONESIA</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center mb-16">
            <div className="md:col-span-6 space-y-6">
              <h3 className="font-headline-md text-on-surface text-[32px] md:text-[40px] leading-tight">{t('contact.centerTitle')}</h3>
              <div className="space-y-4 font-body-md text-on-surface/70 text-lg leading-relaxed">
                <p>{t('contact.centerDesc1')}</p>
                <p>{t('contact.centerDesc2')}</p>
              </div>
              <div className="pt-6 border-t border-on-surface/5">
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-full bg-white-pure shadow-sm border border-on-surface/5 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined font-light">verified</span>
                  </div>
                  <div>
                    <p className="font-data-mono text-[10px] uppercase tracking-widest text-on-surface/40">{t('contact.qualityStandard')}</p>
                    <p className="font-body-md text-on-surface font-semibold">{t('contact.techHygiene')}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-6">
              <div className="p-4 bg-white-pure rounded-2xl shadow-xl border border-on-surface/5">
                <div className="p-2 bg-surface-container-low rounded-xl border border-on-surface/5">
                  <div className="relative rounded-lg overflow-hidden aspect-[16/9]">
                    <ParallaxImage alt="Nusantara Meal Prep Headquarters" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5bcHWYGfDgsskoPddLPYO_MA1qYlbfTQBANOoR1tkU2RNGNHGjIhygP40T2CLWvkvB-bBUZf5FV-7-OwFa54fYtxEuQJUzjHh4PaKXp93_QkQtu3mtXeCyn_V621Z1V07XdbDZNzuamtjDt854gRKKWnjpX3I5HTxLIrXV25sGKbkvG02poUn7R9kEjNcw1c3wjatBepmWXvh3Lxh5-LMydntx9fJs3Wl8S4rbB1LAwF1dTHTnncI" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-margin-mobile md:px-margin-desktop pb-16">
          <div className="p-4 bg-white-pure rounded-2xl shadow-2xl border border-on-surface/5">
            <div className="w-full h-[600px] bg-surface-container-highest relative overflow-hidden rounded-xl border border-on-surface/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.4449826330084!2d111.52192707579173!3d-7.635219992381285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e79bed720f171bb%3A0xc682223bdfbc34f3!2sJl.%20Pahlawan%2C%20Kota%20Madiun%2C%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 z-0"
              ></iframe>
              <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 bg-white-pure/95 backdrop-blur-sm p-5 rounded-xl border border-on-surface/10 shadow-lg w-[calc(100%-3rem)] md:w-96 z-10 pointer-events-none">
                <p className="font-label-md text-[10px] uppercase tracking-widest text-primary mb-1 font-bold">{t('contact.liveLocation')}</p>
                <p className="font-body-md text-on-surface text-sm leading-relaxed">{t('contact.liveLocationDesc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}