import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';

export default function Navbar() {
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-7xl bg-kertas-nasi/90 backdrop-blur-md border border-on-background/10 rounded-full shadow-xl px-8 h-[88px] flex items-center justify-between">
      <Link className="flex items-center gap-2 hover:opacity-80 transition-opacity" to="/">
        <div className="flex items-center gap-2">
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRfizNP7K2MLca7aqa5k35L-AutlinYsCg2ID4b5sp2bGqRyen9tux9BoLtCZVQj1C2BWmtZb5yC7bAYtnCjd_VmUn6qbPTW6nAvQKuXxa7PyxYEv-ShndhGJUgGAgA9J4JXH5N7xado1iQxR5wntVvYTpn5iNk4mSAKhsI00S9e6qvg8evXzyx_r4UuqGXiYY90SV4TS_R7DYM486S5D_HjSbklVObepfi71En3fY7q1qo5Y-VAIq" alt="Nusantara Meal Prep Logo" className="h-12 w-auto object-contain" />
        </div>
      </Link>
      <div className="hidden md:flex items-center gap-8">
        <Link className={`font-label-md text-sm transition-colors ${location.pathname === '/' ? 'text-primary-container font-bold border-b-2 border-primary-container pb-1' : 'text-on-background/70 hover:text-primary'}`} to="/">{t('nav.home')}</Link>
        <Link className={`font-label-md text-sm transition-colors ${location.pathname === '/about' ? 'text-primary-container font-bold border-b-2 border-primary-container pb-1' : 'text-on-background/70 hover:text-primary'}`} to="/about">{t('nav.about')}</Link>
        <Link className={`font-label-md text-sm transition-colors ${location.pathname === '/menu' ? 'text-primary-container font-bold border-b-2 border-primary-container pb-1' : 'text-on-background/70 hover:text-primary'}`} to="/menu">{t('nav.menu')}</Link>
        <Link className={`font-label-md text-sm transition-colors ${location.pathname === '/promo' ? 'text-primary-container font-bold border-b-2 border-primary-container pb-1' : 'text-on-background/70 hover:text-primary'}`} to="/promo">{t('nav.promo')}</Link>
        <Link className={`font-label-md text-sm transition-colors ${location.pathname === '/contact' ? 'text-primary-container font-bold border-b-2 border-primary-container pb-1' : 'text-on-background/70 hover:text-primary'}`} to="/contact">{t('nav.contact')}</Link>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 bg-surface-container-low rounded-full p-1 border border-on-background/10">
          <button 
            onClick={() => setLanguage('id')}
            className={`px-3 py-1.5 rounded-full font-label-md text-xs transition-colors ${language === 'id' ? 'bg-primary text-on-primary' : 'text-on-background/60 hover:text-primary'}`}
          >
            ID
          </button>
          <button 
            onClick={() => setLanguage('en')}
            className={`px-3 py-1.5 rounded-full font-label-md text-xs transition-colors ${language === 'en' ? 'bg-primary text-on-primary' : 'text-on-background/60 hover:text-primary'}`}
          >
            EN
          </button>
        </div>
        <a href="/contact#contact-form" className="bg-primary text-on-primary font-label-md text-sm px-6 py-3 rounded-full hover:opacity-90 transition-all shadow-md">
        {t('nav.orderNow')}
      </a>
      </div>
    </nav>
  );
}