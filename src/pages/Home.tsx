import React, { useEffect, useRef } from 'react';

import ParallaxImage from '../components/ParallaxImage';
import FadeIn from '../components/FadeIn';
import Parallax from '../components/Parallax';
import { useLanguage } from '../i18n/LanguageContext';

export default function Home() {
  const { t } = useLanguage();
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    sectionRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  const scrollMenu = (amount: number) => {
    const carousel = document.getElementById('menu-carousel');
    if (carousel) {
      carousel.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-merah-bata">
        <div className="absolute top-12 left-12 opacity-10 pointer-events-none z-0">
          <span className="material-symbols-outlined text-white-pure text-6xl">eco</span>
        </div>
        <div className="absolute bottom-24 right-12 opacity-10 pointer-events-none z-0 rotate-180">
          <span className="material-symbols-outlined text-white-pure text-6xl">potted_plant</span>
        </div>
        
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-center">
            {/* Left Column: 60% */}
            <div className="md:col-span-7 flex flex-col gap-10">
              <Parallax offset={30}>
              <div className="flex flex-col gap-8">
                <FadeIn delay={0.1}><h1 className="font-display-lg text-display-lg-mobile md:text-display-lg leading-[1.1] text-white-pure">
                  <span dangerouslySetInnerHTML={{ __html: t('home.heroTitleHTML') }} />
                </h1></FadeIn>
                <FadeIn delay={0.2}><p className="font-body-lg text-body-lg text-white-pure/90 text-justify leading-relaxed max-w-2xl">
                  {t('home.heroDesc2')}
                </p></FadeIn>
              </div>
              <div className="flex flex-col items-start gap-4 mt-4">
                <FadeIn delay={0.3}><a href="/contact#contact-form" className="px-8 py-4 rounded-full hover:opacity-90 hover:scale-[1.02] transition-all duration-300 font-label-md text-label-md inline-flex items-center gap-2 shadow-[0_0_0_4px_rgba(182,69,44,0.2)] bg-kertas-nasi text-merah-bata">
                  {t('nav.orderNow')}
                  <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </a></FadeIn>
                <FadeIn delay={0.4}>
                  <p className="font-body-md text-sm text-white-pure/80 flex items-center gap-2 mt-2">
                    <span className="material-symbols-outlined text-[16px]">verified</span>
                    {t('home.heroBtnHint')}
                  </p>
                </FadeIn>
              </div>
              {/* Feature Icons at Bottom */}
              <FadeIn delay={0.4} className="grid grid-cols-3 gap-4 pt-8 border-t border-white-pure/20">
                <div className="flex flex-col gap-2">
                  <span className="material-symbols-outlined text-white-pure">nutrition</span>
                  <span className="font-label-md text-xs uppercase tracking-widest text-white-pure/60">{t('home.tag1')}</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="material-symbols-outlined text-white-pure">eco</span>
                  <span className="font-label-md text-xs uppercase tracking-widest text-white-pure/60">{t('home.tag2')}</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="material-symbols-outlined text-white-pure">local_shipping</span>
                  <span className="font-label-md text-xs uppercase tracking-widest text-white-pure/60">{t('home.tag3')}</span>
                </div>
              </FadeIn>
              </Parallax>
            </div>
            {/* Right Column: 40% */}
            <div className="md:col-span-5 relative">
              <FadeIn delay={0.2} direction="left"><div className="relative rounded-[32px] overflow-hidden aspect-[4/5] shadow-2xl border-4 border-white-pure/10">
                <ParallaxImage alt="Modern Indonesian Meal Prep" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWtWuaSI3X7gPBpxrPkhQSc5ONuZMP5EsFWvXWEhA4IODPVAs0UqxMOgstrgegwRpWF6CmuviQZHJeesPKasv6mFhtuPHoBcZw7g0rV_cTYBGotxhpF7aiCtHR7aOdY2qrumMOpv0kf6qWAGhrGN6wNipHs-YNHufq6B86QjNhOx__EVuteqRTcIQPxxdfow2w4ftMq-kZQVQi4X0-pNtTjE_gQU3nsJCLxCGuDUcHd7o75YyLsFq7" />
                {/* Circular Trust Badge */}
                <div className="absolute bottom-6 right-6 w-24 h-24 bg-kertas-nasi/90 backdrop-blur-sm rounded-full flex items-center justify-center text-center p-2 shadow-lg border border-merah-bata/20">
                  <span className="font-label-md text-[10px] leading-tight text-merah-bata uppercase tracking-tighter">{t('home.tag4')}</span>
                </div>
              </div></FadeIn>
              {/* Organic Blob Decoration */}
              <div className="absolute -z-10 -top-12 -right-12 w-64 h-64 bg-white-pure/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
        
        {/* Organic Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
          <svg className="relative block w-[calc(100%+1.3px)] h-[60px]" data-name="Layer 1" preserveAspectRatio="none" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
            <path className="fill-kertas-nasi" d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>

      {/* Trust Bar */}
      <section ref={addToRefs} className="bg-kertas-nasi py-12  relative z-10">
        <Parallax offset={15}><div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop mb-6">
          <p className="text-center font-label-md text-label-md text-merah-bata/60 uppercase tracking-wider text-xs">{t('home.trustedBy')}</p>
        </div></Parallax>
        <Parallax offset={-15}><div className="overflow-hidden flex w-full relative max-w-7xl mx-auto bg-white-pure/50 rounded-full p-4 border border-merah-bata/10 backdrop-blur-sm">
          <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-kertas-nasi to-transparent z-10 pointer-events-none rounded-l-full"></div>
          <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-kertas-nasi to-transparent z-10 pointer-events-none rounded-r-full"></div>
          
          <div className="flex animate-marquee min-w-full shrink-0 items-center justify-around gap-12 md:gap-24 py-4 px-6 md:px-12">
            <img alt="TechCorp" className="h-8 md:h-10 w-auto object-contain grayscale opacity-60 mix-blend-multiply" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB41J2nyHkA82r0f4ofFL1Xwqz2QAJmyKoxdcU0MYAYUxaqEcntlcRhuSJHaXQpiLUxGs5biyDWMVzLttBWJBvko--9y0Vua5sEUvqytHlFs4Enh5XbipkPZEyoRb1OgLRtuETReI4skDv4SuxWK-CvYeZOi2FovXaNg5CTgbPIuTohu56eDWmRdTJxOSc6q9stNJoh0J-uKxyM1sVcs-Y0K05DyFUrsT2MsxD_O7I7LpqN3oszN0KA" />
            <img alt="StartupX" className="h-8 md:h-10 w-auto object-contain grayscale opacity-60 mix-blend-multiply" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCQNebPcNxVcUJpfLuwUend_DsyCzrjeLesEOHD05Vd1VLDHmtkurotkUelXaUUwe9j5Mrr6aon4evB7nuQ68rnpWUTDpvBLZJ1ukvzVxvqdYQp_83pTUZYAgDx5NToI8uDW2CjddFRGmk_6D_5OSsoERFf29V5VfbHZSFKT0bLkqo4N6qUH14wnAS-Oes1M866vH6aigl1sDrJ4uJp3iGrKN3SxyetOgUDkWzT2u_Ue6zJp44TSGN" />
            <img alt="CreativeCo" className="h-8 md:h-10 w-auto object-contain grayscale opacity-60 mix-blend-multiply" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOK3Zi3B1sQ4ayIbJDccWK9ZCdPrGwUGPu4EVhYgYYpDsCqmpTxBGos34lZ_TdVLNydYkes94WLGRhz6At-2Bijwi6OpHLjYZOoVkAWU2l_63m5fVJCQCJKs9nR7joVLNZs4lvXiRArTy7NT2ysr174Houu37Y1EG_BtUdSgJe7NtMAi47FIg9laFz4GNUMpt5K9Pwd-ImgCLb7VO-zkk8lEJo9tCaHj2PjKN4xBZt6_BC2jpkssGJ" />
            <img alt="InnoHub" className="h-8 md:h-10 w-auto object-contain grayscale opacity-60 mix-blend-multiply" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzUVvgZs8J6ydtwVJH_S8FNIxdKHQ8Oi8BaV-71P5HdVOA4aE_NyAh8Dt1Vgu233xkJNyE5ua8HGzZhJ2EBYIbcPhx-3tLhREi0ON_HrXu2jtexfU3lfWr4ZDw0pWXuciwC23gdRA4RkxZPsBJcvw9_DqCTtLLU0JIUzQ9IZTJdSVrI46AldzCoJ7DL0hKu46p8XfOkjvtGzrE9SWMA4iWTvy3dlirD7Xw29NNxRV3XoKur6CUxYGe" />
            <img alt="UrbanStack" className="h-8 md:h-10 w-auto object-contain grayscale opacity-60 mix-blend-multiply" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWTb-TTOkusnBPiSPm8MdovrMu5BOn6N2JsjaYaLZD8FiJxyULQ3JRPJQTrfl2muPYUGbr1hFjsy1u3ce9FrtnQO8OuJnAVz6XTrn01wFCa9PbtljkIR6h9noONYy0udx9aJrB7qAyXUnHaisUM-KlC5zXSVasGWFsmNmv_VlFhPWq1jINhAbDDdqEaDca_m1Zd7DJ_ioS-GsmMDuwhL7CECmAU-70uBjBbFo1NbibdDJdS-7mn2io" />
          </div>
          <div aria-hidden="true" className="flex animate-marquee min-w-full shrink-0 items-center justify-around gap-12 md:gap-24 py-4 px-6 md:px-12">
            <img alt="TechCorp" className="h-8 md:h-10 w-auto object-contain grayscale opacity-60 mix-blend-multiply" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB41J2nyHkA82r0f4ofFL1Xwqz2QAJmyKoxdcU0MYAYUxaqEcntlcRhuSJHaXQpiLUxGs5biyDWMVzLttBWJBvko--9y0Vua5sEUvqytHlFs4Enh5XbipkPZEyoRb1OgLRtuETReI4skDv4SuxWK-CvYeZOi2FovXaNg5CTgbPIuTohu56eDWmRdTJxOSc6q9stNJoh0J-uKxyM1sVcs-Y0K05DyFUrsT2MsxD_O7I7LpqN3oszN0KA" />
            <img alt="StartupX" className="h-8 md:h-10 w-auto object-contain grayscale opacity-60 mix-blend-multiply" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCQNebPcNxVcUJpfLuwUend_DsyCzrjeLesEOHD05Vd1VLDHmtkurotkUelXaUUwe9j5Mrr6aon4evB7nuQ68rnpWUTDpvBLZJ1ukvzVxvqdYQp_83pTUZYAgDx5NToI8uDW2CjddFRGmk_6D_5OSsoERFf29V5VfbHZSFKT0bLkqo4N6qUH14wnAS-Oes1M866vH6aigl1sDrJ4uJp3iGrKN3SxyetOgUDkWzT2u_Ue6zJp44TSGN" />
            <img alt="CreativeCo" className="h-8 md:h-10 w-auto object-contain grayscale opacity-60 mix-blend-multiply" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOK3Zi3B1sQ4ayIbJDccWK9ZCdPrGwUGPu4EVhYgYYpDsCqmpTxBGos34lZ_TdVLNydYkes94WLGRhz6At-2Bijwi6OpHLjYZOoVkAWU2l_63m5fVJCQCJKs9nR7joVLNZs4lvXiRArTy7NT2ysr174Houu37Y1EG_BtUdSgJe7NtMAi47FIg9laFz4GNUMpt5K9Pwd-ImgCLb7VO-zkk8lEJo9tCaHj2PjKN4xBZt6_BC2jpkssGJ" />
            <img alt="InnoHub" className="h-8 md:h-10 w-auto object-contain grayscale opacity-60 mix-blend-multiply" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzUVvgZs8J6ydtwVJH_S8FNIxdKHQ8Oi8BaV-71P5HdVOA4aE_NyAh8Dt1Vgu233xkJNyE5ua8HGzZhJ2EBYIbcPhx-3tLhREi0ON_HrXu2jtexfU3lfWr4ZDw0pWXuciwC23gdRA4RkxZPsBJcvw9_DqCTtLLU0JIUzQ9IZTJdSVrI46AldzCoJ7DL0hKu46p8XfOkjvtGzrE9SWMA4iWTvy3dlirD7Xw29NNxRV3XoKur6CUxYGe" />
            <img alt="UrbanStack" className="h-8 md:h-10 w-auto object-contain grayscale opacity-60 mix-blend-multiply" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWTb-TTOkusnBPiSPm8MdovrMu5BOn6N2JsjaYaLZD8FiJxyULQ3JRPJQTrfl2muPYUGbr1hFjsy1u3ce9FrtnQO8OuJnAVz6XTrn01wFCa9PbtljkIR6h9noONYy0udx9aJrB7qAyXUnHaisUM-KlC5zXSVasGWFsmNmv_VlFhPWq1jINhAbDDdqEaDca_m1Zd7DJ_ioS-GsmMDuwhL7CECmAU-70uBjBbFo1NbibdDJdS-7mn2io" />
          </div>
        </div></Parallax>
      </section>

      {/* Bento Features */}
      <section ref={addToRefs} className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop  py-24 md:py-32 bg-kertas-nasi relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5 flex justify-around items-center z-0">
          <span className="material-symbols-outlined text-merah-bata text-9xl">grain</span>
          <span className="material-symbols-outlined text-merah-bata text-9xl">grid_view</span>
        </div>
        <Parallax offset={25}><div className="text-center max-w-2xl mx-auto mb-16 relative z-10">
          <FadeIn><h2 className="font-headline-md-mobile text-headline-md-mobile md:font-headline-md md:text-headline-md text-tinta-daun mb-4">{t('home.whyChooseUs')}</h2></FadeIn>
          <p className="font-body-md text-body-md text-tinta-daun/80">{t('home.whyDesc')}</p>
        </div></Parallax>
        
        <Parallax offset={40}><div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          <div className="bg-white-pure rounded-32 p-10 bento-border flex flex-col gap-6 shadow-sm">
            <div className="w-12 h-12 rounded-full bg-merah-bata/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-merah-bata">monitor_weight</span>
            </div>
            <h3 className="font-label-md text-label-md text-tinta-daun">{t('home.bento2Title')}</h3>
            <p className="font-body-md text-body-md text-tinta-daun/80 text-sm">{t('home.heroSubtitle')}</p>
          </div>
          <div className="bg-white-pure rounded-32 p-10 bento-border flex flex-col gap-6 shadow-sm">
            <div className="w-12 h-12 rounded-full bg-merah-bata/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-merah-bata">eco</span>
            </div>
            <h3 className="font-label-md text-label-md text-tinta-daun">{t('home.bento3Title')}</h3>
            <p className="font-body-md text-body-md text-tinta-daun/80 text-sm">{t('home.bento3Desc')}</p>
          </div>
          <div className="bg-white-pure rounded-32 p-10 bento-border flex flex-col gap-6 shadow-sm">
            <div className="w-12 h-12 rounded-full bg-merah-bata/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-merah-bata">restaurant</span>
            </div>
            <h3 className="font-label-md text-label-md text-tinta-daun">{t('home.bento1Title')}</h3>
            <p className="font-body-md text-body-md text-tinta-daun/80 text-sm">{t('home.bento1Desc')}</p>
          </div>
        </div></Parallax>
      </section>

      {/* Menu Showcase */}
      <section ref={addToRefs} className="bg-[#9a3520] relative py-24 md:py-32 overflow-hidden ">
        <div className="absolute top-1/2 -left-12 -translate-y-1/2 opacity-10 pointer-events-none">
          <span className="material-symbols-outlined text-white-pure text-[120px]">herb</span>
        </div>
        <div className="absolute top-1/2 -right-12 -translate-y-1/2 opacity-10 pointer-events-none rotate-90">
          <span className="material-symbols-outlined text-white-pure text-[120px]">spa</span>
        </div>
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
          <svg className="relative block w-[calc(100%+1.3px)] h-[60px]" data-name="Layer 1" preserveAspectRatio="none" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
            <path className="fill-kertas-nasi" d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop relative z-10 pt-12">
          <div className="flex justify-between items-end mb-12">
            <div>
              <FadeIn><h2 className="font-headline-md-mobile text-headline-md-mobile md:font-headline-md md:text-headline-md text-white-pure mb-2">{t('home.menuTitle')}</h2></FadeIn>
              <p className="font-body-md text-body-md text-white-pure/80">{t('home.menuDesc')}</p>
            </div>
            <a className="hidden md:inline-flex items-center gap-1 font-label-md text-label-md text-white-pure hover:text-white-pure/80 transition-colors" href="#">
              {t('home.seeAll')} <span className="material-symbols-outlined text-[18px]">chevron_right</span>
            </a>
          </div>
          
          <div className="relative group/carousel">
            <FadeIn delay={0.3}><div className="flex overflow-x-auto gap-6 pb-8 no-scrollbar snap-x snap-mandatory scroll-smooth" id="menu-carousel">
            {[
                { title: 'Nasi Kuning Nusantara', type: 'Tradisional', rating: 4.9, reviews: 128, price: 'Rp 45.000', tag: 'Best Seller', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDYAdZdEWdYUlctfhTxl-PORpJ00I4_01-RzSxrLVBB0T_WflEGuXphQJR0JBqBTuEak7-zXdCCw3e45_YlMC1JWqXjKeCW6y6VMBXjMYmErv1Udy-2tB0Z_DkBjAHLbYQeqz6esyPAng8UcUUYcaFjVGTBaaKqHLKGDNrX4SMvzOef-NE8rnXWjbI55yvNABksGH6m2uceqEZPcNKNXl9MGVl-hiZOaAn_LieDHWLOTbCNOdMWB2kQ' },
                { title: 'Rawon Daging Premium', type: 'Jawa Timur', rating: 4.8, reviews: 86, price: 'Rp 65.000', tag: 'High Protein', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkUx4f5-XNd9-9gdvwvNIWkfFSnqsR9RSC1tBkC5HDcOme2qWXRztcSe8PzIgHyA2ixnunsncHvtqs5JO6BeCJWIQJRACCAQgDU7LfFORx9hQdYMs5RzpUa09G7uDc9gvb1MXMRgzDs7WG1oXHfB7FL5J3Lza_9z3Mvx44psFgFjiompEkQ2hQQVfb0hsGp0Mvf_DWcgyn4NO20bLmSAdfgUrqz3XsvP9WBXBIRkcIwe7Ct2Tl6xTm' },
                { title: 'Gado-Gado Siram', type: 'Betawi', rating: 4.7, reviews: 254, price: 'Rp 35.000', tag: 'Plant-Based', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdKpMdT5rlsDzTmL3hTYoil-DJyfDDdJ9MnGpdVatXtIRJunx9-IWtKhauYz4yvz5XOAwkkJijXlqITSp-wXqfGhi_TEw4vRB9o6c50NvYFRlbgmwRbOjXZqpRppaXrgkhnZBipQWMMEVzT3PF-s7QUJe6YRRCxp4ut0NQkgobPctsvrRR-G_UeKguOyGVAdnY4u_vApIFkdr4M7pZz2ME7-kVitntHdhSHImiUFTeBPba5hk7eM26' },
                { title: 'Ikan Bakar Jimbaran', type: 'Bali', rating: 4.9, reviews: 112, price: 'Rp 55.000', tag: 'Fresh Catch', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA0Ls-lVe6VjBvIYHmuR4rChuWdGt25DNrn-VDWvawWA1FvpCTsWfloPncQZ0Gky7jyg8khcxj_T6PauQMiCKe2t9AhSmc7l2Ngha2Wk7WBJ-VSIquKPd0ADUm5kRSOYiAoNelIPARJRn3KiF01eMMLU2reaSiwuSm8oAoL3YrrOivGcatO33QYoWQ7gsnf74xuPx22Pz7zm5AuRL39Sru01F6RwgEZsu3ygOvltVkP78ZUkhFZ9pna' },
                { title: 'Sate Ayam Madura', type: 'Madura', rating: 4.9, reviews: 178, price: 'Rp 48.000', tag: 'Signature', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCn_fXs4h-0yZ_YxExcTzqIDEa_eJbGFw5Ae9mY34X1hQI62qyBF8KlHMoffQoBdLM3g--yjMFFs9ZeSOWQiODZjoUhK3VXs53GBS5hMmO15guTrbN7mef08ZXoQsnwqUQfMVPmfuLYTyFcjZmhAMJtfjKhKHG7_ogL1umNsSANw7T7Xsq8VQ2aP52AXXAdSSEUxkc28qRZgR84MUdR3hSFP5yQ7nTHoRTArrS4H7h-bnBVwZcdKc6Y' },
                { title: 'Pecel Madiun Sehat', type: 'Jawa Timur', rating: 4.8, reviews: 92, price: 'Rp 32.000', tag: 'Low Calorie', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDRDih9_g0nH1LKhTQjnH3yXfq5yqIE1HKdEHyoD6Q1SmhewIUgxibR_cjLombczMtR1IDWFfr_9MZZsVpZaY98HHVrc-biJyVnCbQfOMpeqqElI7xmG691uFtMa10EpFuzAqWDavEhmPaWZH-cRX2zx_SpBAnjrwvXqPSPBW-nHtCX7vFUFrCiUxZJpEjrFKpezx8yFaGskmVekB6IZliMwySz2kCEUSuSagoP-T14yRO1Y4pBUNZY' },
              ].map((item, idx) => (
                <div key={idx} className="flex-none w-[260px] md:w-[280px] h-[360px] snap-start">
                  <div className="h-full w-full bg-white-pure rounded-32 overflow-hidden flex flex-col border border-merah-bata/20 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300">
                    <div className="relative h-48 shrink-0 p-3">
                      <img alt={item.title} className="w-full h-full object-cover rounded-2xl" src={item.img} />
                      <span className="absolute top-6 left-6 bg-merah-bata text-white-pure text-[10px] font-label-md px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm">{item.tag}</span>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <h4 className="font-headline-md-mobile text-[18px] text-tinta-daun leading-tight mb-1">{item.title}</h4>
                      <p className="text-xs text-tinta-daun/60 font-body-md mb-auto">{item.type}</p>
                      <div className="flex items-center gap-1 mb-4">
                        <span className="material-symbols-outlined text-merah-bata text-sm">star</span>
                        <span className="text-xs font-data-mono text-tinta-daun">{item.rating}</span>
                        <span className="text-[10px] text-tinta-daun/40">({item.reviews})</span>
                      </div>
                      <div className="flex items-center justify-between mt-auto">
                        <span className="font-data-mono text-sm font-semibold text-tinta-daun">{item.price}</span>
                        <button className="w-10 h-10 rounded-full bg-merah-bata/10 hover:bg-merah-bata hover:text-white-pure text-merah-bata flex items-center justify-center transition-colors">
                          <span className="material-symbols-outlined text-sm">add</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div></FadeIn>
            
            <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-6 z-10 opacity-0 group-hover/carousel:opacity-100 transition-opacity">
              <button className="w-12 h-12 rounded-full bg-white-pure border border-merah-bata/20 flex items-center justify-center shadow-lg hover:text-merah-bata transition-all" onClick={() => scrollMenu(-300)}>
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-6 z-10 opacity-0 group-hover/carousel:opacity-100 transition-opacity">
              <button className="w-12 h-12 rounded-full bg-white-pure border border-merah-bata/20 flex items-center justify-center shadow-lg hover:text-merah-bata transition-all" onClick={() => scrollMenu(300)}>
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Organic Wave Divider Bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180 z-20">
          <svg className="relative block w-[calc(100%+1.3px)] h-[60px]" data-name="Layer 1" preserveAspectRatio="none" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
            <path className="fill-kertas-nasi" d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>

      {/* B2B Section */}
      <section ref={addToRefs} className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop  py-24 md:py-32 bg-kertas-nasi relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5 flex justify-around items-center z-0">
          <span className="material-symbols-outlined text-merah-bata text-9xl">grain</span>
          <span className="material-symbols-outlined text-merah-bata text-9xl">grid_view</span>
        </div>
        <div className="bg-white-pure rounded-32 overflow-hidden flex flex-col md:flex-row border border-merah-bata/20 shadow-sm relative z-10">
          <div className="md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
            <Parallax offset={30}>
            <span className="font-label-md text-label-md text-merah-bata tracking-widest uppercase mb-4">{t('home.b2bLabel')}</span>
            <FadeIn><h2 className="font-headline-md-mobile text-headline-md-mobile md:font-headline-md md:text-headline-md text-tinta-daun mb-6">{t('home.heroTitle')}</h2></FadeIn>
            <p className="font-body-md text-body-md text-tinta-daun/80 mb-8">
              {t('home.b2bDesc2')}
            </p>
            <div>
              <button className="bg-merah-bata text-white-pure px-8 py-4 rounded-full hover:bg-tinta-daun transition-colors duration-200 font-label-md text-label-md">
                {t('home.contactSales')}
              </button>
            </div>
            </Parallax>
          </div>
          <div className="md:w-1/2 relative h-[400px] md:h-auto">
            <div className="absolute inset-0 bg-merah-bata/5 rounded-l-[100px] md:rounded-l-[150px] overflow-hidden">
              <ParallaxImage alt="Corporate catering with Nusantara Meal Prep" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjVYSqprDWkkjQNAWte-AtoL2ZIafePjO2KZI6poQZfXk9wwa-7dln_14Jn0QkyluW2RG_MXyPtuexN90-FeDeJwQ3c97JvLXuntQkbhPDiZnSfskzrAoOdnHDQNHsOz7XaKZXikClqTQ012wOiMfF2BTUXjCtzD_HzSy9PLn1bE1cvusqWyd_5kd0_W20geZrpeyCLyL7AY5RmrJ6B5Ue6e_KzXABVM-EyzVSZJP_ew6fsQAI5qlH" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section ref={addToRefs} className="bg-merah-bata overflow-hidden  relative py-24 md:py-32">
        <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none z-0">
          <span className="material-symbols-outlined text-white-pure text-[400px]">filter_vintage</span>
        </div>
        <div className="absolute top-12 left-12 opacity-10 pointer-events-none z-0">
          <span className="material-symbols-outlined text-white-pure text-6xl">eco</span>
        </div>
        <div className="absolute bottom-24 right-12 opacity-10 pointer-events-none z-0 rotate-180">
          <span className="material-symbols-outlined text-white-pure text-6xl">potted_plant</span>
        </div>
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
          <svg className="relative block w-[calc(100%+1.3px)] h-[60px]" data-name="Layer 1" preserveAspectRatio="none" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
            <path className="fill-kertas-nasi" d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>
        
        <Parallax offset={40}><div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop mb-16 text-center relative z-20 pt-12">
          <FadeIn><h2 className="font-headline-md-mobile text-headline-md-mobile md:font-headline-md md:text-headline-md text-white-pure mb-4">{t('home.testimonialsTitle')}</h2></FadeIn>
          <p className="font-body-lg text-body-lg max-w-2xl mx-auto text-white-pure/90">{t('home.testimonialsDesc')}</p>
        </div></Parallax>

        <div className="relative h-[600px] max-w-[1400px] mx-auto px-4" style={{ maskImage: 'linear-gradient(transparent, black 15%, black 85%, transparent)' }}>
          <div className="flex gap-6 h-full group pt-12">
            
            {/* Column 1 (Scroll Down) */}
            <Parallax offset={50} className="flex-1 flex flex-col"><div className="flex-1 flex flex-col gap-6 animate-scroll-down pause-on-hover" style={{ animationDuration: '40s' }}>
              {[1, 2].map((_, i) => (
                <React.Fragment key={i}>
                  <div className="testimonial-card bg-white-pure/10 backdrop-blur-md p-8 rounded-32 border border-white-pure/20 relative z-0">
                    <div className="flex items-center gap-4 mb-6">
                      <img alt={t('testimonials.t1.name')} className="w-12 h-12 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuANIPsy3ti1WPNnOTy4vvDW8xMGj58sPeVCzVSSAAamGxenYcQVlQ5it_jYp0ksYeLTVlG1i2SXQy2XLlEPr-Y6bc98jDFJq-uGxDPByvM8TGiwcYCVxy1BRkLg7nJjZMAK9PYlQUyNylfhkJy5dwUSno9JpjItBF2FhLADFKIzWIuYP84jZ7LXNv7zUqVDm4j_wQZNpK4RCC5w0zJuP0lJkGAQsppGiapNrgNYeA04DjdV0iR-RDvj" />
                      <div>
                        <h4 className="font-label-md text-label-md text-white-pure">{t('testimonials.t1.name')}</h4>
                        <p className="text-sm text-white-pure/70">{t('testimonials.t1.role')}</p>
                      </div>
                    </div>
                    <p className="font-body-md text-body-md text-white-pure/90">{t('testimonials.t1.review')}</p>
                    <div className="flex gap-1 mt-4 text-white-pure/50">
                      {[1,2,3,4,5].map(star => <span key={star} className="material-symbols-outlined text-[18px]">star</span>)}
                    </div>
                  </div>
                  <div className="testimonial-card bg-white-pure/10 backdrop-blur-md p-8 rounded-32 border border-white-pure/20 relative z-0">
                    <div className="flex items-center gap-4 mb-6">
                      <img alt={t('testimonials.t2.name')} className="w-12 h-12 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuYdAnmqPR8o1HnNm1D6S0aZbgXU0JNvSWsz7bsnZ9WdRbYV7VtHP01t-hnJlEgLLTGHzocYE2h-cH9DDasfdDpF-7ySfAOlMtB8OOOLFsggvWQjsa2QJluOqpidgGQCiKNg6aT55wjsbKh8qnI1h1F42vwy18DEBWNJtDfi7gxioswa_q-TUz1AdTgz50ny6Wae6gDFmQugMLfLVI61Yc1dsycuM72fJwsUQ4nie7wIbWspD9erA5" />
                      <div>
                        <h4 className="font-label-md text-label-md text-white-pure">{t('testimonials.t2.name')}</h4>
                        <p className="text-sm text-white-pure/70">{t('testimonials.t2.role')}</p>
                      </div>
                    </div>
                    <p className="font-body-md text-body-md text-white-pure/90">{t('testimonials.t2.review')}</p>
                    <div className="flex gap-1 mt-4 text-white-pure/50">
                      {[1,2,3,4,5].map(star => <span key={star} className="material-symbols-outlined text-[18px]">star</span>)}
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </div></Parallax>

            {/* Column 2 (Scroll Up - Hidden Mobile) */}
            <Parallax offset={-30} className="hidden md:flex flex-1 flex-col"><div className="flex-1 flex flex-col gap-6 animate-scroll-up pause-on-hover" style={{ animationDuration: '35s' }}>
               {[1, 2].map((_, i) => (
                <React.Fragment key={i}>
                  <div className="testimonial-card bg-white-pure/10 backdrop-blur-md p-8 rounded-32 border border-white-pure/20 relative z-0">
                    <div className="flex items-center gap-4 mb-6">
                      <img alt={t('testimonials.t3.name')} className="w-12 h-12 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBs-JHn-fbKWPL0LdLy9EUaUli4U73oyceKa8taMblTuepqgAwMx5AO0lBnYvED8_MydgLXYVZ7OhHKN0EqB_DvXw-UbN4EanjKv2fdh_5vM6hVyAKRvDc4gsuffJohZYchXIzQwzSAAleXQnDvL6HRXkKU2On5DWuDmJJ0mYjAC5AEes441YO9lEGRwk8a2uVKBvK9Uaq52PYrHqdEcjByONhGwWWW9I1rgsptk_hZaU-Q8-v1qjn1" />
                      <div>
                        <h4 className="font-label-md text-label-md text-white-pure">{t('testimonials.t3.name')}</h4>
                        <p className="text-sm text-white-pure/70">{t('testimonials.t3.role')}</p>
                      </div>
                    </div>
                    <p className="font-body-md text-body-md text-white-pure/90">{t('testimonials.t3.review')}</p>
                    <div className="flex gap-1 mt-4 text-white-pure/50">
                      {[1,2,3,4,5].map(star => <span key={star} className="material-symbols-outlined text-[18px]">star</span>)}
                    </div>
                  </div>
                  <div className="testimonial-card bg-white-pure/10 backdrop-blur-md p-8 rounded-32 border border-white-pure/20 relative z-0">
                    <div className="flex items-center gap-4 mb-6">
                      <img alt={t('testimonials.t4.name')} className="w-12 h-12 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjMHZ_1ei4qn67PtCQtqQ5XUzcXIrWnvda01NK8c6svxzxmL4avXjZs7ZUUO0FLvqCYiowq9WftIqhDqiw-PWxoSfptceG8CCV2Qj1FP6TSwrF1N09UA7IhpFH_-IA4o5IMipxUmjJHEBcxdPRZszy0cciIIxcg_R0LADKRMQZMMeTP6sEob8LCSswWxG3WU6K6X29IS2S7YScZv_XxGnEQvsdWcFsP0aPz_24QhuXSDKTCA5mam0u" />
                      <div>
                        <h4 className="font-label-md text-label-md text-white-pure">{t('testimonials.t4.name')}</h4>
                        <p className="text-sm text-white-pure/70">{t('testimonials.t4.role')}</p>
                      </div>
                    </div>
                    <p className="font-body-md text-body-md text-white-pure/90">{t('testimonials.t4.review')}</p>
                    <div className="flex gap-1 mt-4 text-white-pure/50">
                      {[1,2,3,4,5].map(star => <span key={star} className="material-symbols-outlined text-[18px]">star</span>)}
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </div></Parallax>

            {/* Column 3 (Scroll Down - Hidden Mobile & Tablet) */}
            <Parallax offset={70} className="hidden lg:flex flex-1 flex-col"><div className="flex-1 flex flex-col gap-6 animate-scroll-down pause-on-hover" style={{ animationDuration: '45s' }}>
               {[1, 2].map((_, i) => (
                <React.Fragment key={i}>
                  <div className="testimonial-card bg-white-pure/10 backdrop-blur-md p-8 rounded-32 border border-white-pure/20 relative z-0">
                    <div className="flex items-center gap-4 mb-6">
                      <img alt={t('testimonials.t5.name')} className="w-12 h-12 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD68bU7wrRlTp3zerkhkvyRctNGXIDYfHJ5DFtRhGH9vylU9JN5zzaXIUqn9zkxVdlSq4LCN5rEPNfuPdGnGe5A3EiWzLezueM3d0M4XRAQFcWqBYqnqzzE5J4CTpSvcbS7UOrlsIJavZuC-8Musvnhhk3UX6DrQUt0yurCk9YExUr4iwomeXSJZR1EuEA48amHW0ybM7SD6hrrDW7YGJVDCzHEnzgNBUonU-UIFbT2GGS4IhJXQyeV" />
                      <div>
                        <h4 className="font-label-md text-label-md text-white-pure">{t('testimonials.t5.name')}</h4>
                        <p className="text-sm text-white-pure/70">{t('testimonials.t5.role')}</p>
                      </div>
                    </div>
                    <p className="font-body-md text-body-md text-white-pure/90">{t('testimonials.t5.review')}</p>
                    <div className="flex gap-1 mt-4 text-white-pure/50">
                      {[1,2,3,4,5].map(star => <span key={star} className="material-symbols-outlined text-[18px]">star</span>)}
                    </div>
                  </div>
                  <div className="testimonial-card bg-white-pure/10 backdrop-blur-md p-8 rounded-32 border border-white-pure/20 relative z-0">
                    <div className="flex items-center gap-4 mb-6">
                      <img alt={t('testimonials.t6.name')} className="w-12 h-12 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0INsG-4Ne0NfP-wZvQE01d7Dea8Wc4n5SSYD9qxQFrtqHFMT2MMONncQeyoMJukLGW1cWo-2jH_UghlAToRteDeS13hisb0zOBOyjmGPMT2RqTEsVQuBR6qfaGnM_aDq7dCUso44b0p31iN6_ojiblvDnq_6nGVhfnmuCjtes5gb90wMEaNP83HJa_d8oETnGMJXm60e2UlnwerHnEoN2kY1fLf91pW3CApmsNhyBBozYS_1DW_yz" />
                      <div>
                        <h4 className="font-label-md text-label-md text-white-pure">{t('testimonials.t6.name')}</h4>
                        <p className="text-sm text-white-pure/70">{t('testimonials.t6.role')}</p>
                      </div>
                    </div>
                    <p className="font-body-md text-body-md text-white-pure/90">{t('testimonials.t6.review')}</p>
                    <div className="flex gap-1 mt-4 text-white-pure/50">
                      {[1,2,3,4,5].map(star => <span key={star} className="material-symbols-outlined text-[18px]">star</span>)}
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </div></Parallax>
            
          </div>
        </div>
        
        {/* Organic Wave Divider Bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180 z-20">
          <svg className="relative block w-[calc(100%+1.3px)] h-[60px]" data-name="Layer 1" preserveAspectRatio="none" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
            <path className="fill-kertas-nasi" d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>

      {/* Final CTA */}
      <section ref={addToRefs} className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop  py-24 md:py-32 bg-kertas-nasi relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5 flex justify-around items-center z-0">
          <span className="material-symbols-outlined text-merah-bata text-9xl">grain</span>
          <span className="material-symbols-outlined text-merah-bata text-9xl">grid_view</span>
        </div>
        <div className="relative rounded-[48px] overflow-hidden min-h-[400px] flex items-center justify-center border border-on-surface/5 shadow-xl bg-surface-container-low">
          <ParallaxImage alt="Order via WhatsApp" className="opacity-30 mix-blend-luminosity" src="https://lh3.googleusercontent.com/aida/AP1WRLt0EXExFYL26musBstlWDMJeZoPKhlUL790hTEpnTG5ftBYyp2B6KJ4wDtHLkiO5QF7KflmwdJgfs4T3sEkBHX-Gug9w8EryWiwhf2KnfTynLtOY6IN0mHqea5_KIO8GvK2URyaSDFSsgVi6XwaUDHa5Vki-FBmT91MfiVeeCgbzqKx_SO1AzWO3haF_dmfwwoJOzQRm4NpsXwSYXY6q7sV3M6eAfi3cu8vj9jdmiBavrTro4UMw6OVnvc" onError={(e) => { (e.target as HTMLElement).style.display = 'none'; (e.target as HTMLElement).parentElement!.style.backgroundColor = '#e0e4d6'; }} />
          <Parallax offset={20}><div className="relative z-10 text-center px-8 py-16 text-on-surface max-w-2xl">
            <FadeIn><h2 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg mb-4 text-on-surface">{t('home.ctaTitle')}</h2></FadeIn>
            <FadeIn delay={0.1}><p className="font-body-lg text-body-lg mb-8 opacity-90 text-on-surface/80">{t('home.ctaDesc')}</p></FadeIn>
            <a href="/contact#contact-form" className="px-8 py-4 rounded-full hover:opacity-90 hover:scale-[1.02] transition-all duration-300 font-label-md text-label-md inline-flex items-center gap-2 shadow-xl bg-[#25D366] text-white-pure font-bold ring-4 ring-[#25D366]/30">
              <span className="material-symbols-outlined text-[20px]">chat</span>
              {t('home.ctaBtn')}
            </a>
          </div></Parallax>
        </div>
      </section>
    </>
  );
}