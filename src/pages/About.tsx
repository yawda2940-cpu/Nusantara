import ParallaxImage from '../components/ParallaxImage';
import FadeIn from '../components/FadeIn';
import { useLanguage } from '../i18n/LanguageContext';

export default function About() {
  const { t } = useLanguage();
  return (
    <>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-xxl mb-xxl text-center">
        <FadeIn><h1 className="font-display-lg text-display-lg md:text-display-lg text-primary mb-md">{t('about.heroTitle1')}<br />{t('about.heroTitle2')}</h1></FadeIn>
        <FadeIn delay={0.1}><p className="font-body-lg text-body-lg max-w-3xl mx-auto text-on-surface-variant">
          Kami percaya bahwa makan sehat tidak harus mengorbankan kenikmatan rempah warisan leluhur. Nusantara Meal Prep hadir untuk memadukan kearifan kuliner Indonesia dengan ilmu gizi modern, memberikan energi terbaik untuk hari Anda.
        </p></FadeIn>
      </section>

      {/* Our Story */}
      <section className="max-w-7xl mx-auto px-margin-desktop mb-xxl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-xxl items-center">
          <div className="h-96 bg-white-pure p-sm border border-abu-netral/20 relative overflow-hidden">
            <ParallaxImage className="w-full h-full object-cover" alt="Authentic Indonesian home kitchen" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGc3XTDW0P98Lj1Mkc0gk34_46Brtt4_MgLOMH81hc14r97Z82ligvGTJPZ8rKqWct5OPzgtt3XzodyFUyjjyjU8ugpWKtIf_rxs1mSd4bXL39ytYQgsATpANVtWSUUTvuUTd1OGVihz_1tUnP967kSN1ObhhsU5WK3w_Yz1zzE9axyl5vZVhxwWJwxH8vMYFa667Izx-Il7OZVKzN1Hok5mhOJOL6PZUPDWFzjQqdaKEqkj2G-EYM" />
          </div>
          <div>
            <FadeIn><h2 className="font-headline-md text-headline-md text-primary mb-md">{t('about.heroDesc')}</h2></FadeIn>
            <p className="font-body-md text-body-md mb-sm text-on-surface-variant">
              Berawal dari kecintaan kami pada masakan rumahan dan tantangan menjaga pola makan seimbang di tengah kesibukan kota. Kami menyadari bahwa 'makanan sehat' seringkali identik dengan rasa yang hambar dan asing bagi lidah orang Indonesia.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Dengan tekad membawa perubahan, kami mulai meracik ulang resep-resep tradisional—menurunkan natrium, mengganti jenis minyak, dan menghitung makronutrisi dengan presisi—tanpa menghilangkan jiwa dari hidangan tersebut. Kini, dari dapur keluarga yang sederhana, kami melayani ratusan porsi setiap harinya.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values (Bento Grid) */}
      <section className="max-w-7xl mx-auto px-margin-desktop mb-xxl">
        <FadeIn><h2 className="font-headline-md text-headline-md text-center text-primary mb-xl">{t('about.valuesTitle')}</h2></FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <FadeIn delay={0.1}><div className="bg-white-pure border border-abu-netral/20 p-lg hover:shadow-sm transition-shadow">
            <span className="material-symbols-outlined text-secondary text-4xl mb-sm" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
            <h3 className="font-label-md text-label-md text-primary mb-xs">{t('about.val3Title')}</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">{t('about.val3Desc')}</p>
          </div></FadeIn>
          <FadeIn delay={0.2} className="md:col-span-2">
            <div className="bg-primary text-on-primary p-lg h-full relative overflow-hidden flex flex-col justify-center">
              <div className="relative z-10">
                <span className="material-symbols-outlined text-on-primary text-4xl mb-sm">balance</span>
                <h3 className="font-headline-md text-headline-md mb-xs">{t('about.val1Title')}</h3>
                <p className="font-body-lg text-body-lg text-justify text-white-pure/90">
                  Setiap menu yang kami hidangkan telah dirancang dan dihitung secara presisi oleh ahli gizi profesional. Kami memastikan bahwa keseimbangan makronutrisi—yang mencakup protein berkualitas, karbohidrat kompleks, serta lemak sehat—selalu menjadi prioritas utama dalam setiap resep kami, sehingga Anda mendapatkan asupan energi yang optimal untuk menunjang produktivitas sehari-hari.
                </p>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.3} className="md:col-span-3">
            <div className="bg-surface-container-high p-lg h-full flex flex-col md:flex-row items-center gap-lg">
              <div className="md:w-1/2">
                <h3 className="font-headline-md text-headline-md text-primary mb-sm">{t('about.val2Title')}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">{t('about.val2Desc')}</p>
              </div>
              <div className="md:w-1/2 h-48 w-full bg-white-pure relative overflow-hidden">
                <ParallaxImage className="w-full h-full object-cover" alt="Indonesian spices and herbs" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBWFcNHzoVkTExvZGHGICiHxbQM47RUYc9XXB_c6aGMmYABNaEX8o0tnGWrYjNcIxwHVN89DARBOqbKD49Zq-uWGKdhpMsCY8nkJe6ZUPi2tgnB046EXEtDI3oBGd5e_ji77TI2fOZMrRuyOMwfrDIbUQQCyTzp6zk7KjuNK1uOBdi4cx0G_tOmwPHy3gZjOk4tmssFScaa_2ItNtvbaLyhge_DLR2u6CSKWqFCP6bHyusyeRCpHxq" />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Behind the Kitchen */}
      <section className="max-w-7xl mx-auto px-margin-desktop mb-xxl">
        <h2 className="font-headline-md text-headline-md text-primary mb-lg text-center">{t('about.teamTitle')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-xxl">
          <div>
            <h3 className="font-label-md text-label-md text-secondary mb-xs">{t('about.teamSubtitle')}</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-md">{t('about.val1Desc')}</p>
            <div className="flex flex-col gap-sm">
              <div className="flex items-center gap-md bg-white-pure p-sm border border-abu-netral/20">
                <div className="w-16 h-16 bg-surface-dim rounded-full flex-shrink-0">
                  <img className="w-full h-full object-cover rounded-full" alt="Nutritionist" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBKG_VVT7ynvksKYsKLKWWyjWfyBNq_tX_tSGC6EBhxe4PTs5GOFpnL6lgevcgnr8Z6cdU7ZL9FUvetZhN_Mjyf_I-ZgxgIl4B0O3PFBqY8ReKMUj3-2zM_95J2qORtPGPVY_ozOwKB0ssn_bVaWhmscaADeSRQEuZKyOWeIQI-NG2Rde2zaNHhLIDQ3nTE3iVU08Gr6lIBO7ZINkIaTneYYkO03dfE1bNiriK5t0BlKQ4mEk8iRNi" />
                </div>
                <div>
                  <p className="font-label-md text-label-md text-primary">Dr. Maya Lestari</p>
                  <p className="font-data-mono text-data-mono text-abu-netral">{t('roles.chiefNutritionist')}</p>
                </div>
              </div>
              <div className="flex items-center gap-md bg-white-pure p-sm border border-abu-netral/20">
                <div className="w-16 h-16 bg-surface-dim rounded-full flex-shrink-0">
                  <img className="w-full h-full object-cover rounded-full" alt="{t('roles.executiveChef')}" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1-dIsfnUKIIGbcUKkWIyqeoNpjIFGnj6p2xYDnpVVFK34T66raK80I9kqxgEpsqvTIoOUzMVBISkcE863rYuEkPvmBK1YdKA_iDkFiITOroIBtREwtLav10W0yUz-YQjFAOF_ru8xuH_TukgLOiex_yTXouf22NH6XA3DuKiQG30h0CSczPN3HcrWI4QjnwsHnm-FrwPrbCryT8c1xX-LOftzTyXRAcf141YCN-aOHNGdkHkj1etR" />
                </div>
                <div>
                  <p className="font-label-md text-label-md text-primary">Chef Budi Santoso</p>
                  <p className="font-data-mono text-data-mono text-abu-netral">{t('roles.executiveChef')}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-full min-h-[300px] relative overflow-hidden">
            <ParallaxImage className="w-full h-full object-cover" alt="Chef and nutritionist working together" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnP_jOLbHtTQcbtyRau3Wdgbup_BPmP99QVoPJottYXlm1Z3R4F5DXLmnBjih3yuO04UGWWV3ij2ACXQr5bhgutqCXIuikL2oWqUE6TI8HCB0ZZ3XdQb13tZW7j2uxDB0GBPUMuWeale3i_s5k3aj4YofJffYL_MS8QF6Z-Ybgm_9CrK7R0f2s4HudH6k2p6nyl8Sl8kL7OJi0zgqXerEqDEjG-3YWKuT-akxIRl2oT71Ivm0jofrm" />
          </div>
        </div>
      </section>
    </>
  );
}