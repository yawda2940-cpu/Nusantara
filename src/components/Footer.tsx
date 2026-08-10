import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-kertas-nasi w-full transition-all duration-200 mt-auto relative pt-12">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-24 relative z-10">
        <div className="md:col-span-4 flex flex-col gap-6 items-start">
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRfizNP7K2MLca7aqa5k35L-AutlinYsCg2ID4b5sp2bGqRyen9tux9BoLtCZVQj1C2BWmtZb5yC7bAYtnCjd_VmUn6qbPTW6nAvQKuXxa7PyxYEv-ShndhGJUgGAgA9J4JXH5N7xado1iQxR5wntVvYTpn5iNk4mSAKhsI00S9e6qvg8evXzyx_r4UuqGXiYY90SV4TS_R7DYM486S5D_HjSbklVObepfi71En3fY7q1qo5Y-VAIq" alt="Nusantara Meal Prep Logo" className="h-12 w-auto object-contain mb-2" />
          <p className="font-body-md text-body-md text-on-background/90 w-full text-justify">
            {t('footer.desc')}
          </p>
        </div>
        <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
          <div className="flex flex-col gap-4">
            <span className="font-label-md text-label-md text-on-background/60 mb-2">{t('footer.nav')}</span>
            <Link className="font-body-md text-body-md text-on-background hover:text-primary transition-colors duration-200" to="/">{t('nav.home')}</Link>
            <Link className="font-body-md text-body-md text-on-background hover:text-primary transition-colors duration-200" to="/about">{t('nav.about')}</Link>
            <Link className="font-body-md text-body-md text-on-background hover:text-primary transition-colors duration-200" to="/menu">{t('nav.menu')}</Link>
            <Link className="font-body-md text-body-md text-on-background hover:text-primary transition-colors duration-200" to="/promo">{t('nav.promo')}</Link>
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-label-md text-label-md text-on-background/60 mb-2">{t('footer.support')}</span>
            <Link className="font-body-md text-body-md text-on-background hover:text-primary transition-colors duration-200" to="/contact">{t('nav.contact')}</Link>
            <a className="font-body-md text-body-md text-on-background hover:text-primary transition-colors duration-200" href="#">{t('footer.privacy')}</a>
            <a className="font-body-md text-body-md text-on-background hover:text-primary transition-colors duration-200" href="#">{t('footer.terms')}</a>
          </div>
          <div className="flex flex-col gap-4 col-span-2 md:col-span-1">
            <span className="font-label-md text-label-md text-on-background/60 mb-2">{t('footer.contact')}</span>
            <a href="mailto:yawda2940@gmail.com" className="font-body-md text-body-md text-on-background flex items-center gap-2 hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-[18px]">mail</span> yawda2940@gmail.com
            </a>
            <a href="https://wa.me/6287881485375" target="_blank" rel="noopener noreferrer" className="font-body-md text-body-md text-on-background flex items-center gap-2 hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-[18px]">call</span> 087881485375
            </a>
            <a href="https://instagram.com/yawdasaja" target="_blank" rel="noopener noreferrer" className="font-body-md text-body-md text-on-background flex items-center gap-2 hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-[18px]">alternate_email</span> @yawdasaja
            </a>
            <p className="font-body-md text-body-md text-on-background flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">location_on</span> Kota Madiun
            </p>
          </div>
        </div>
        <div className="md:col-span-12 mt-12 pt-8 border-t border-on-background/10 text-center md:text-left">
          <p className="font-data-mono text-data-mono text-on-background/60 text-xs">{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
