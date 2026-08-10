import React, { useState, useEffect, useRef } from 'react';

import ParallaxImage from '../components/ParallaxImage';
import FadeIn from '../components/FadeIn';
import { useLanguage } from '../i18n/LanguageContext';

export default function Promo() {
  const { t } = useLanguage();
  const [billingPeriod, setBillingPeriod] = useState<'weekly' | 'monthly'>('weekly');
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.id === 'pricing-heading') {
            entry.target.querySelectorAll('.char-reveal').forEach((char) => {
              char.classList.add('is-visible');
            });
          } else if (entry.target.classList.contains('timeline-card')) {
            entry.target.classList.add('is-visible');
          }
        }
      });
    }, { threshold: 0.1 });

    const heading = document.getElementById('pricing-heading');
    if (heading) observer.observe(heading);

    document.querySelectorAll('.timeline-card').forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  const toggleFaq = (e: React.MouseEvent<HTMLButtonElement>) => {
    const content = e.currentTarget.nextElementSibling;
    const icon = e.currentTarget.querySelector('.material-symbols-outlined');
    if (content && icon) {
      content.classList.toggle('hidden');
      if (content.classList.contains('hidden')) {
        icon.classList.remove('rotate-180');
      } else {
        icon.classList.add('rotate-180');
      }
    }
  };

  const textHeading = "Pilih Paket yang Pas Untuk Anda";

  return (
    <>
      {/* Section 1: Hero */}
      <section className="relative bg-primary text-white-pure py-xl md:py-xxl px-margin-mobile md:px-margin-desktop leaf-pattern overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-xl items-center relative z-10">
          <div className="space-y-sm">
            <span className="inline-block bg-secondary text-white-pure px-xs py-[4px] rounded-full font-label-md text-data-mono uppercase tracking-wider">{t('promo.title')}</span>
            <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg">Hemat &amp; Sehat</h1>
            <p className="font-body-lg text-body-lg text-primary-fixed-dim opacity-90 text-justify">
              Nikmati kelezatan hidangan Nusantara premium dengan penawaran harga yang jauh lebih bersahabat. Melalui promo spesial ini, Anda berkesempatan untuk memulai perjalanan hidup sehat tanpa perlu mengkhawatirkan anggaran pengeluaran. Berlanggananlah sekarang dan rasakan sendiri manfaat nyata dari asupan bergizi setiap hari bersama kami.
            </p>
            <div className="pt-sm">
              <a className="inline-block bg-white-pure text-primary font-label-md text-label-md px-md py-sm rounded hover:bg-surface-variant transition-colors duration-200" href="#bundle">Lihat Penawaran</a>
            </div>
          </div>
          <div className="relative h-64 md:h-96 rounded-xl overflow-hidden shadow-2xl shadow-primary/20">
            <ParallaxImage className="object-cover w-full h-full" alt="Healthy meal prep box" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeQojZ7tsIn85OBphGrAtc7qLuToz75XZ3OlC-rR6GBQLfJyurxJ4wwha2N6PLttf4AYUV5R39SweeDqxbG1qjbq_zDnD8PM8D-FNX0qNCKIJYCPaAekT1rUwm2XOfjaX_Cf9LZiUW5tQwdwO85V7hIaoz8eYuO2iaxv9a0QBbjsDH49q3Uf8Qaupzg7D9jyrFiJu9uLCdlKIsCxpHO9ll-B0K0yCvHP_xT8zrd7ZeEJKUiL0Pfj3F" />
          </div>
        </div>
      </section>

      {/* Section 2: Bundle Deals with Interactive Pricing */}
      <section className="py-xl md:py-xxl px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto bg-kertas-nasi" id="bundle">
        <div className="text-center mb-xl">
          <h2 className="font-headline-md-mobile md:font-headline-md text-headline-md-mobile md:text-headline-md text-primary mb-xs clip-text-reveal" id="pricing-heading">
            {textHeading.split('').map((char, index) => (
              <span key={index} className="char-reveal" style={{ transitionDelay: `${index * 30}ms` }}>
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </h2>
          <p className="text-abu-netral max-w-2xl mx-auto font-body-md">{t('promo.desc')}</p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="bg-surface-variant p-1 rounded-full inline-flex relative">
            <div className={`absolute inset-y-1 w-1/2 bg-white-pure rounded-full shadow-sm transition-transform duration-300 ease-out ${billingPeriod === 'monthly' ? 'translate-x-full' : 'translate-x-0'}`}></div>
            <button 
              className={`relative z-10 px-6 py-2 text-sm font-semibold rounded-full transition-colors duration-200 ${billingPeriod === 'weekly' ? 'text-[#b6452c]' : 'text-on-surface-variant hover:text-on-surface'}`}
              onClick={() => setBillingPeriod('weekly')}
            >
              Mingguan
            </button>
            <button 
              className={`relative z-10 px-6 py-2 text-sm font-semibold rounded-full transition-colors duration-200 ${billingPeriod === 'monthly' ? 'text-[#b6452c]' : 'text-on-surface-variant hover:text-on-surface'}`}
              onClick={() => setBillingPeriod('monthly')}
            >
              Bulanan
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {/* Card 1 */}
          <div className="timeline-card bg-white-pure rounded border border-surface-variant p-md flex flex-col h-full transition-transform duration-200 hover:-translate-y-1">
            <div className="mb-sm">
              <h3 className="font-headline-md text-primary text-[24px]">{t('promo.duoSehat')}</h3>
              <p className="font-data-mono text-data-mono text-abu-netral mt-2">{t('promo.for2')}</p>
            </div>
            <div className="my-sm flex-grow">
              <span className="font-display-lg text-[32px] text-on-surface">{billingPeriod === 'weekly' ? 'Rp 850k' : 'Rp 3.2M'}</span>
              <span className="text-abu-netral text-sm ml-2">/{billingPeriod === 'weekly' ? t('promo.perWeek') : t('promo.perMonth')}</span>
              <ul className="mt-md space-y-2 text-sm font-body-md text-on-surface-variant">
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-sm">check</span> {t('promo.bonus2')}</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-sm">check</span> {t('promo.bonus1')}</li>
              </ul>
            </div>
            <a href="/contact#contact-form" className="w-full bg-[#b6452c] text-white-pure font-label-md py-sm rounded hover:opacity-90 transition-opacity mt-auto text-center inline-block">{t('promo.choosePackage')}</a>
          </div>

          {/* Card 2 (Featured) */}
          <div className="timeline-card bg-surface-container-lowest rounded border-2 border-secondary p-md flex flex-col h-full relative transform md:-translate-y-4 shadow-sm shadow-secondary/10" style={{ transitionDelay: '150ms' }}>
            <div className="absolute top-0 right-0 bg-[#b6452c] text-white-pure text-xs px-2 py-1 rounded-bl rounded-tr font-label-md">{t('promo.mostPopular')}</div>
            <div className="mb-sm">
              <h3 className="font-headline-md text-secondary text-[24px]">{t('promo.familyPack')}</h3>
              <p className="font-data-mono text-data-mono text-abu-netral mt-2">{t('promo.for4')}</p>
            </div>
            <div className="my-sm flex-grow">
              <span className="font-display-lg text-[32px] text-on-surface">{billingPeriod === 'weekly' ? 'Rp 1.6M' : 'Rp 6M'}</span>
              <span className="text-abu-netral text-sm ml-2">/{billingPeriod === 'weekly' ? t('promo.perWeek') : t('promo.perMonth')}</span>
              <ul className="mt-md space-y-2 text-sm font-body-md text-on-surface-variant">
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-sm">check</span> {t('promo.bonus6')}</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-sm">check</span> {t('promo.bonus5')}</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-sm">check</span> {t('promo.bonus7')}</li>
              </ul>
            </div>
            <a href="/contact#contact-form" className="w-full bg-secondary text-white-pure font-label-md py-sm rounded hover:opacity-90 transition-opacity mt-auto text-center inline-block">{t('promo.choosePackage')}</a>
          </div>

          {/* Card 3 */}
          <div className="timeline-card bg-white-pure rounded border border-surface-variant p-md flex flex-col h-full transition-transform duration-200 hover:-translate-y-1" style={{ transitionDelay: '300ms' }}>
            <div className="mb-sm">
              <h3 className="font-headline-md text-primary text-[24px]">{t('promo.personalPack')}</h3>
              <p className="font-data-mono text-data-mono text-abu-netral mt-2">{t('promo.for1')}</p>
            </div>
            <div className="my-sm flex-grow">
              <span className="font-display-lg text-[32px] text-on-surface">{billingPeriod === 'weekly' ? 'Rp 1.1M' : 'Rp 4M'}</span>
              <span className="text-abu-netral text-sm ml-2">/{billingPeriod === 'weekly' ? t('promo.perWeek') : t('promo.perMonth')}</span>
              <ul className="mt-md space-y-2 text-sm font-body-md text-on-surface-variant">
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-sm">check</span> {t('promo.bonus4')}</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-sm">check</span> {t('promo.bonus3')}</li>
              </ul>
            </div>
            <a href="/contact#contact-form" className="w-full bg-[#b6452c] text-white-pure font-label-md py-sm rounded hover:opacity-90 transition-opacity mt-auto text-center inline-block">{t('promo.choosePackage')}</a>
          </div>
        </div>
      </section>

      {/* Section 6: FAQ */}
      <section className="py-xl md:py-xxl px-margin-mobile md:px-margin-desktop bg-surface-container-low">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-xl items-start">
          <div className="relative h-64 lg:h-full min-h-[400px] rounded-xl overflow-hidden lg:sticky lg:top-32">
            <ParallaxImage alt="Professional culinary catering setup" className="absolute inset-0 w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXqmGT4P2BUayo-wng65_8Hk22MgeyqrTv4OklaT7kVlIiANlFvBTrnCcQoJczXfBvXwjvbUmtYtnyMICLm_hLTcx84Hy_FNS1UIA8i0xbPDuhsAqc23VLD7YBvv-wLeu-5Nl-20xOIwlPq-FMTwHfya-Pqppze1Bm-tqLJL329682Cyu-BQD--mA3-7hdNbSGdlROOdb0fA7sO7wg7Wzt_m8xCOX_WQmB6rZ4s6GAwt-0Ku2fKW7A" />
          </div>
          
          <div>
            <div className="mb-8">
              <span className="inline-block bg-primary-container text-on-primary-container font-label-md px-3 py-1 rounded-full text-xs uppercase tracking-wider mb-4" style={{ backgroundColor: '#b6452c', color: 'white' }}>FAQ</span>
              <h2 className="font-headline-md text-headline-md text-primary mb-4">{t('promo.faqTitle')}</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">{t('promo.faqDesc')}</p>
            </div>
            <div className="space-y-4">
              {[
                {q: t('faq.q1'), a: t('faq.a1')},
                {q: t('faq.q2'), a: t('faq.a2')},
                {q: t('faq.q3'), a: t('faq.a3')},
                {q: t('faq.q4'), a: t('faq.a4')},
                {q: t('faq.q5'), a: t('faq.a5')},
                {q: t('faq.q6'), a: t('faq.a6')},
                {q: t('faq.q7'), a: t('faq.a7')},
                {q: t('faq.q8'), a: t('faq.a8')},
              ].map((faq, i) => (
                <div key={i} className="bg-surface-container-lowest rounded-lg border border-surface-variant overflow-hidden">
                  <button onClick={toggleFaq} className="flex justify-between items-center w-full text-left p-4 font-label-md text-on-surface hover:bg-surface-container-highest transition-colors focus:outline-none">
                    <span className="font-body-md font-semibold">{faq.q}</span>
                    <span className="material-symbols-outlined text-primary transition-transform duration-300">expand_more</span>
                  </button>
                  <div className="p-4 pt-0 text-on-surface-variant font-body-md hidden">
                    {faq.a}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}