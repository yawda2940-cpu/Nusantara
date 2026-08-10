import React from 'react';
import ParallaxImage from '../components/ParallaxImage';
import FadeIn from '../components/FadeIn';
import { useLanguage } from '../i18n/LanguageContext';

export default function Menu() {
  const { t } = useLanguage();
  const scrollMenu = (e: React.MouseEvent<HTMLButtonElement>, amount: number) => {
    const container = (e.target as HTMLElement).closest('.space-y-4')?.querySelector('.carousel-scroll');
    if (container) {
      container.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  const utama = [
    { title: 'Nasi Kuning Nusantara', cal: '420 kcal · 28g Protein', tag: 'Best Seller', tagBg: 'bg-primary', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDTiTMKaPZNsmUY39_GUlQKVbSEDsKSYVVL-AN9c-P9UYGPQHEoqbf1XhdhMwKrJYOHeVA8w1k7KWrejGNZJ9C5wam9POpc3kHBShAhSFTcHCyAaDMsMnJS3FamDgrjf1dqTSJAiT3AGSvKSBM5MajGW6x8ag-9_H8aWlFTdKKu1xhbvqj5rqMMiP0NgHuHF41MyB2-ywqU_bWgGkPtgBjOIETVeZ6iQDew-wCMb-wQT8C-uInv2Gaj' },
    { title: 'Ayam Betutu Gianyar', cal: '380 kcal · 42g Protein', tag: 'High Protein', tagBg: 'bg-primary-container', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCoGzTj69xO6SyhfZN5jC74SMAJhLTJUNRHERUvYIXkjvZ9Mblu7WGR2zcCHa2Qy928YiMV137iWZHNfsG0eVfRJxtaxq2M8Z0gB98-i60o8J1QDhtsUDMgLHNPyn9EqC1kav76fvUBNkk4OMqqheAajXkQaRvC4LJTwOP8NP-WSWKcwuqj0o9AKM_fO6wSF6AAEkCjSvKYBvYPSYcEChExLz3_dqLkKi5KfdRGtSW167VblCHAMjPD' },
    { title: 'Rendang Daging Padang', cal: '520 kcal · 45g Protein', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCDGsVp4sq0a1EOlMC223YpPkxLtglrHZENLJccMi9eBok_FWWVMtGDMZkcJycdPefE-DxrSt9auE8gf-abVadbC0hE8o99-chiQ6LtcQzzMYb4okviDBLPgNIqSefHxAEKy0XLMqZWZJ396AAAWYDskFJDT0KWBAncgQbrUys5U0uQ8Sc8DbPUhOmz4zMXQdbkwe63bGh1P3TY5snBSLvbnTkISQHstqN_MencUUbx2rRD0h2r_zuv' },
    { title: 'Sate Lilit Ikan', cal: '310 kcal · 32g Protein', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzPyP3EHM4wh8uH9iRRzLbyG-7tAsxXN4QLPKzZZr-Jzruf0sOxTKK0I5yfORetPb3nTYTvOe38iwWRKnN2-NwSAoZ61WvCWl-T9XeoKDbRADxX1tgz8lTP_7mqRFJtyu8iqdyjTDCww8H3BBoWFSQfdcwBoXGYrWvGkywnFhsREPv5rbUy-1TtZyA7pSGImIBYYn_G0AK8QcRkTzLwlprLfxzRFQ1ymh6RpF4dlKfY6AekGZ7qqkX' },
    { title: 'Pecel Madiun', cal: '340 kcal · 18g Protein', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA54b6AgLtU5zUMciJl91FvrEwAyPHxaFLDj9eLXqyZ8EfXGE-e-2YUcHhHRtzVY_j-9Fubu-5KhQ_IIiYDmLcUXDTtffHPri11glKiJGZ1fvh-34pFfPq8MFm1nBL9HbP5r8VN9knWmVfUeWOo5PUTJUouWNB-cK8FWScY5Ioxxhvarf1mmqcsK6GjGEvGFdzomSi79eOY1HJCYhqZ8kRfrjy6OwP46uk9yMf8zxwK-hcbAW3eTVRB' },
    { title: 'Gado-Gado Premium', cal: '410 kcal · 22g Protein', tag: 'Plant-Based', tagBg: 'bg-secondary', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD0fVUqoZWouQLf1deGVxamrPyHGZ8efcQaMw44Imjx6h7BEUZhAnZ12Q-wt287FMvlH33EQKFUJJecspJESwuhbKRAh3FFvIPfN5Qfp425KZvfEHmZ3TWjAPgSBKtkwsmx4riP7VExDJhDmxTKVn7t6of5ZEX6gX6Wk8SeAFLPhenar-lTWyK-Go-AN0vnk4HBOU05p-5XlCHedXvTK3RcS8K2ljrzJUnKFT8FDzB5s-hvc1zal-hh' },
    { title: 'Nasi Bakar Ayam Suwir', cal: '450 kcal · 35g Protein', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDsxQNfoW_WATf_h1_pM828MQXAHKzP7PxSDzwyJQiqXos7Q3SLt3Wbplcu74iaEOVvMYwVDRJPwI9f1vZfu4jMtDq4fPy3_Y6fWAhgH17lEhBneQPnGvraBFyZRt93E216W6Ni4odgrzGbiF6gKyKu9Cuu9QWq2I9IZaEAFh1BCDJcEXEqkQesrydXKT5mwjcxc9yFjoATKl_2EpI054aXAU5V1q3Ub-E8owoCRwe4BKFgJSRmOXOF' },
    { title: 'Rawon Daging Rendah Lemak', cal: '280 kcal · 35g Protein', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIELY1b4fhNPHTvnOGNzEwoAkdX02hnirulDwHpf89mfLXL9h50EWDpVKNkBBAuZQ_XuWYaewBeV1Nf_aXZa_4SQE2ENKZOwbKeaBgZXz1KnsQwOHG3pI3kg4E09NlMIkmbkzKf_HG19QgDQ0NWH7bw5ra_V37dI9EJCYlt2HrtATv-DhkYVns4hAqCK98Q1y-VZiaZWvDha5WzDjbWwy58mIznf_u6stcgBEh0fWFHpjRgJ1dUtj0' },
    { title: 'Ikan Bakar Jimbaran', cal: '320 kcal · 38g Protein', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC9-8qW6HJuUzU7BR_0roWchv8VeBeVoL9x6otIbAzLgDrnF0POIv2ikaPReBMg1SF8O8gx3wh2EGFgweRQv3-6exMomIWOTKD9hWkYbrnSTGRmi5sGXStLsFsd-EkID9HdZ8eSk2r90-ji0KhgSZg4r-e9eAKmwGMwO2mxGUuvIBW9Vcvm30rqeF3xHNi5dGjoGcWKCWCMo0wL8TKcnRBcb1xgzY13GOrju7p8dgIPaI7eEUZxmnf6' },
    { title: 'Sop Buntut Clear', cal: '480 kcal · 40g Protein', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBaStk3miVjXFwL4WH5kOWoOlK5-4r29COZ8tFBCQDLxdswUQxzCh4PaSnUyLKDfE0xEVv0obOJ6LOyQUEp0tvvmWp_lhKvWYY7qjQD471yZpJGs7sM-LnhisFQJkwu6OWiDo6AY3a3ywGyNkWWeyNaUuWc7PuH_kteAdieKJffV3XxUau-G_CF99b4Oiv0bFmH4SK0n_67kb3udQSQVlmOfVGcZXxAaioCXbRG3BNScOuBW4F8Ak7Y' },
    { title: 'Dendeng Balado', cal: '440 kcal · 36g Protein', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCuMnGgiTtRqJLhquThUR9TqhCSXg3qn2sWCmvw7vAFKxaw0LMYojsH0TDVxUk3AAWtMzVhAqTnQ6TG6s3ANs6g5f2fhJcoD4i-w2BgC00k-culXadlPM8uwA7r7TXPT69n0pqEG0GCsh4ipmwYzTFP6IYT-8KbBq_4E5EedW7ChG9ZLSwrVbOE4CxHZr65-il7jKoELQ7B1ZYc9SgXyLOxgoVzpRDrit4UEFWMmQwhNA88e8HLa3BQ' },
    { title: 'Pepes Ikan Kakap', cal: '290 kcal · 34g Protein', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJX9EQregDk5Lsxd9JkQySpFNEgQMOYUG2EHCANCBgYlQiLqZXGrAAt7ffjsC85XZCHDUzn6ZLIkNz7o_UVH9pEOVhJCVQDvIBjShcWApPJ_ohvKALTYqvtFsg__tLS4ltD8_EccuJUVz2aeeSTSigBO7_Y1LOlJUbBkWEkbADx8HHcGKnZs_ZubvON_0CbJjeXtsshh9TXz5Vct8NjyGjFVaUU_ppwcxflLWVR1meiVVSKVVCpMS2' },
  ];

  const minuman = [
    { title: 'Es Kunyit Asam', cal: 'Detox & Anti-Inflammatory', tag: 'New', tagBg: 'bg-primary', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCMSKQpvdsRXnoCc7O3fHITa_DnUDSSCfd8wV2Q-C94JB-gcl1-10slmOdnA5_Pm1NaD03neXVe5LdAzoCssLagTROLfCY5rmCmQU1RFE4otDUfT6mTsa_sh4BPG2gK69DlK1CpYgVJL3UAiGP8HTgMzNNgLDqjHftY5t11lw30T_NM0FHVUX7QhAK29ZyL-I8qTf95ys5TObO5TlQI2TXPmS8OY1V_W9XZ6xJdcsYAWuYKX8la58WO' },
    { title: 'Jus Alpukat Pure', cal: 'Rich in Omega-3', tag: 'Healthy Fat', tagBg: 'bg-secondary', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2sL7K76D8vnKZKg-LG_jKIl0rfE9o6MFLRnw6eWqeo487BfIDX9P0CD-afa_8YobRgY8XUuinL3h4x_1cDvqV9ES9G_VWvvkWMe5rh22M62BLz6Wivj515N3hBGNcMWKdiX_YzrD1aeJ8bauAsyQj1Wj8SI25ZtfR5PY_EmoQAq46i_pMKw8sVUzUfyluzMoJtB2hYKPkL4ge6CSvPGQQOokHjXvxU2oJvTjfXZmVulnYB2dpQT68' },
    { title: 'Es Kelapa Muda', cal: 'Natural Electrolytes', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD1vck0LBkh0uMinFLNLPlfZo_bLIWle1cYQHCRv4AXJGD0jphVLKI6nk-sebmwxSzUh690MH4jyufGYasiKawZEY20H24qQ7v1rtWOfD9LeFJmuyy2s-vqRfxQfeJ-m8hskH1-0pQ4YOumoREJm-vIFsixzGiOdRAK0C7XK3LaOIWCJnistFPxL7dLZeEUK99c42JpPUSa5rcMxRs_9wtW7wQmE2Qy3-ZXAqOWBQGAdPCFnKRM2YdD' },
    { title: 'Jamu Beras Kencur', cal: 'Energy Booster', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCGh7tgiqkLzUqMmDHuCgtBldptldRpJ3w_9X9iC-xEAL-FUgSD_X5u8Uol-hTbVSYgq5oGJgIbqE8ZAD3eySswr57HmejmbUdqQr0Yu19LTfCw8-51VLhu13bEwD9c7Pt2jRSpN4zSXIcL-XYEp7jl5ZwaPVdzdYqp26__TEQKV6nl2ev_f3oRnQGV28RWh6B9wSrduXW9bHi2CNqNwgvs-HunN89fbBfRFAdJ8RPs8s7xfdtoxuik' },
    { title: 'Wedang Jahe', cal: 'Immune Support', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDPvTdAe7v4Ko5vyZRJvzel9UvSJ3h6P8pBLAaX40pHQXVGZgpKqwBVBc9oD_XtvHnKF77xFW1QSNQSyjTsbk9w6wShkuAedcQNmLQAWLTbZG3rTSkcipmZH3cuPiif2TVngp1OF9NmMvvvF15cGNT4cUwqyd2ZZ0zPpydfsEIQfoW5Xedb2IytEsl5DwuGbuyYZ4RGM6o8L4hKDxieHBFmbfRNW4zLLuQ8kpU0WMkcF6q2Cg7w8Lgy' },
    { title: 'Jus Sirsak Fresh', cal: 'Vitamin C Rich', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVoO8cSCteuHfJKEfK8-Y02cnxsmH-4m9ItDwoJ4ffGlarsymQl8dm2pRrMH1K38yIofnIjDUPcg-P1d0JF_A8fQ4XJRV1Ud_-V6ve3p0UEqV9TvrqHcO8JE_NgNdxH5eSyGHF_pX7fFKSXC5gGtl6oyEhjHhcimRalGDVthK4uq8Sn0GVwYQTVRn1HqiSmsg_3Ty0cGjmFQwppeXjFQL7vPA198t3M9qt9S8QvMHEaM6Utjn8oV4g' },
  ];

  const dessert = [
    { title: 'Bubur Sumsum Modern', tag: 'Classic', tagBg: 'bg-primary', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUkpvr1h-F6VZwFvYv29KcoHzEdkDYnAULtNe5QgB8Y-2ePa3GZr68mamKQXoHe_tpbvl7l3c3ovBWMSCgCskFhzL6sj_3RkKgKDievMC3Yt88wAAO_Qpa03Q6iZiIsml8BdtKKcVq8SCfXCKOGnpq27d98OJVf381FIMeBv9vSLpt-xC_2S9n6-wj49Bfmx3vWaUVSzGIJIcuy8Ga82UnULZfnSjashv7HdETUiSDwPRh36GpxEW5' },
    { title: 'Klepon Cake', tag: 'Signature', tagBg: 'bg-primary', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB5J0hj0Zv8wm-DwEzjv-SZWer8L0WUG4GqKo47oOkxjkrDnOGyZOMspDeTrB6FBT16iShnHAgGsN9W8uZD1y9i0Iu3RX-Qjmwkdwhu75SWCtynMzMxOp8y2t73Kvmc8R9ntzHUVF_-TFG-9As3XJCQe-MH0fQT5hKI_FNf1-YcR3tp_49eKN72HIRVkZFL1gWgab9HumFvehdR-DxI9C08DOrEE-2O6roK48f9Xa7X6iXC_ya9W5ml' },
    { title: 'Dadar Gulung Artisanal', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBP6YZnP0iDVGHMSH1U2zqvYxJzgko0dynyjqmRhA1k9dXGrR3zHKtevC1yG7CQOVdp_Edhm1Y2y3nLYw7OSUi8Bg9ruw5Elopb1Y2aAntNlI89URcEz3-gfZ7ezDKnaUtTE-iOQjsJc7ABABTaEhI2hGcdIY5SZqeceeFmQs6i70rDcIjipyk_u-o-wauaAo-VGBQfGiKhzicD2vN0CGFO7LadtrQfM2MwBn9J9opHyXq5XQbD42XN' },
    { title: 'Lapis Legit Premium', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCpbDbXnXPnrmFGR9i82kFPt50t8g23OZEvkWxVU9RTu6vmZA-CF46zLhsnm_UPaEW9O5zxprWpEDhddKO-Cvkaamzo5twXnyoQ0e4mIALYxrM52Qhwv9_fQxTGOflNgKM42pX5UWy4bvE8bjicHKh9-c8jzOsjNHWVy7JqYYftFqR4rHEfiLa1H2JywAUrSCac3XwHPYNSt82qozN4CE3V-Y9GSFW08vX9jB9OJm-GcBqFioTs34iB' },
    { title: 'Es Pisang Ijo', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCurCwE6JcplOQg0XKxnEoF6CO9GcKHA8SdEzDFtj4fAPZ2dw4hpa-gDdghjsAzD7LDuCyt55ecenbvDg1ZRu3KVPACLQ5FWxPvlaXdkeoQIh9wh77-ww8AAm3swoXoCAQ7mwGO9JRnMhBs73B9j5ZNEO8eznn4WCN-Bm0B2tsfDsZYKKhiEyb4oCVzGRLaM302NOC5VcAhBGmsbaQXmybbzUqI7xU6Hv2wUKjckea3sYeTIDRsjxrW' },
    { title: 'Bika Ambon Modern', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMSCrAcJn0dnyWJ0aIkVAs5NpWrx6tFJshiEErWT2H-2iBKO1iWK99TW3Ux4AEj1VraLPT2U8q_e3EXnAACeF1Rq2YuZ0pfxevRjiLs6Kx7hzsyoJGEmJwLKx8QtbruGba5REj9t_pBceyzNlhgpG3cElxwGuTRiPDQHf9WI-nqYQfYtTjbdbP8WgCQfgzLepVA-eC8hQFw-5G_jBbMvWkRAeMPAFqrb2BwO5fwT3f637F-Ntn0p4H' },
    { title: 'Puding Kelapa Muda', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQkoG5phqaBjUYJ01DpSrrqCnQz6N_RxDt-o0w-i2627hy9LlwVaElXnWMLk5T02nMv7cIdj4mT2MwjITrqxATXmf9a0BCY7-Kxx5obL6GpUVMAcYSmQJ1QtgPTUfE4zUum63KaG3xy8Jl-0MXOwxLCcA3rx6kGrVSA6NeAu0hxAA7_B11uC4h9k0EdSkq9eTR9XcG3aVQ8DCQpUe90cZsqLzT9jEjfVmwxEmk9jxoHwkJqAdEQ6LM' },
    { title: 'Serabi Solo', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCYm7MIz1lEYqImQd1UEkbs2Hrn65kY4i-Up62duMVtj9LaWxvoW2i1taK4CKtgSzyjzyCiAEww-fYEBIWv8YL9X0Cu4ohIlS8DIPl87OA3zSgwEqSs0Mmmv_brOkfswMyf7zMHyE7dZ3fmyPnk9IjY-MQophhNYgqOLekWF2c3RkcgGB9z-ZvU5DAZjuOxVotXdR-8IebkG38F4UsJUV3qx-ytfUSgWjopK_L_ojNogI2FmKHHBcEC' },
    { title: 'Kue Lumpur', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9SqGYyutf7CXLHv3OVqGHIBEYzh1SpNq5Mii0tcGujXi49hVKzEx5X03PndQaxLNyTfI6lFdEdnu9y7IKOiWGuQFoKzAHiry96VPGtp_3FTgTHF_9kOvJbbhCt-CqHErqTRlzj-EyzllOHokoRjUhw3YbPD4M1W5za4S1OiFs03HOwYEW81hMuIiD46dTItsKgq7pJZu6Um0KiOu17C-z56maRCgorgukYgUYjF6fbdE0ECq5TI43' },
  ];

  return (
    <>
      {/* 1. Hero: Vibrant display of menu categories */}
      <section className="relative max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-xl md:py-xxl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <div className="md:col-span-5 space-y-6 z-10">
            <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary" dangerouslySetInnerHTML={{ __html: t('menu.heroTitle') }} />
            <p className="font-body-lg text-body-lg text-on-surface-variant text-justify">
              {t('menu.heroDesc')}
            </p>
            <div className="flex gap-4 pt-4">
              <a href="/promo" className="bg-primary text-white-pure font-label-md text-label-md px-8 py-3 rounded hover:bg-primary-container transition-colors inline-block">
                {t('menu.viewPackages')}
              </a>
              <a href="https://wa.me/6287881485375" target="_blank" rel="noopener noreferrer" className="border border-tinta-daun text-secondary font-label-md text-label-md px-8 py-3 rounded hover:bg-surface-container transition-colors inline-block">
                {t('menu.nutritionConsult')}
              </a>
            </div>
          </div>
          
          <div className="md:col-span-7 relative mt-xl md:mt-0">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="relative rounded-xl overflow-hidden group h-[250px]">
                  <ParallaxImage alt="High Protein Menu" className="transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4XQvAc0PYZpQHY5uvBuFPZlwFAqGAatyQF_shrLZLJDUJmi36S45ghunYRpBvyejTDobwd9YGSCoTaThbsjXFY_0w70vnb-ii-zKQgHrSzhr5o446G7tngLRFrjRW3z3ZzxD6RUd_GesZZ9ykNoD24lYKCnZRSe31JfTd40dEXSqC27dyOaBXVIDUgBgCsmwoPd4nhKKhQGM4eaeMAdevl9YERXbxN8Jys38HJGkFxP4qFTCY-wuF" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-white-pure text-primary font-label-md text-[11px] px-2 py-1 rounded mb-2 inline-block">{t('menu.highProtein')}</span>
                    <h3 className="font-headline-md-mobile text-headline-md-mobile text-white-pure">{t('menu.strongMuscle')}</h3>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="relative rounded-xl overflow-hidden group h-[200px]">
                  <ParallaxImage alt="Plant-Based Menu" className="transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_5-9ooiwoIjB76M3Y8xTDakmAUJB0TsJB3zBgA1bdW8K-KzVkbiv3xK8yTS2GSoAy_OIpDR9NWicBU2mcK89HDgFXfyB-_tGkKgaVRIzEsI6OsW2a4L39un6TsrmszeZTmOZmeVcO79tMDq9WJBOLUxNrzA9plY9Urdf4VpW9l9Hs75v_xtznvoldFqach0qufAd0v4Ttmf7mDN41eWLPKzKIb4ABSD2nN-C2A6ooaDHk5ZAmZgMY" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-secondary text-white-pure font-label-md text-[11px] px-2 py-1 rounded mb-2 inline-block">{t('menu.plantBased')}</span>
                    <h3 className="font-headline-md-mobile text-headline-md-mobile text-white-pure">{t('menu.naturalFiber')}</h3>
                  </div>
                </div>
                <div className="relative rounded-xl overflow-hidden group h-[200px]">
                  <ParallaxImage alt="Low Carb Menu" className="transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWawn3B-6neLi9MTnFnjIrdTYF8LAqer2m-X0TDYb5cDfogZzgvH-GMHkmgjfnf0sb-j_-I4nw8_tIHWPt7RVZGgVkr2ZSk7MEzHV8bHNUAfrlEP87G73bUIObzMYjjqr6DAH7wSFJYH8x4nLdEI3YS9DlEFImo8k19Do-DEXdNooet9_Z5nFrxuVMpsJHkT1gdGiA1mz4MWeUXc0Q88U2sBbsMNm2T8pJkWlNYKQqfdnsDSEsZodG" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-surface-tint text-white-pure font-label-md text-[11px] px-2 py-1 rounded mb-2 inline-block">{t('menu.lowCarb')}</span>
                    <h3 className="font-headline-md-mobile text-headline-md-mobile text-white-pure">{t('menu.lightDiet')}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Signature Dishes */}
      <section className="bg-surface-container-lowest py-xxl batik-pattern">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex flex-col md:flex-row justify-between items-end mb-xl">
            <div className="max-w-2xl">
              <FadeIn><h2 className="font-headline-md-mobile md:font-headline-md text-headline-md-mobile md:text-headline-md text-primary mb-4">{t('menu.title')}</h2></FadeIn>
              <FadeIn delay={0.1}><p className="font-body-md text-body-md text-on-surface-variant">{t('menu.desc')}</p></FadeIn>
            </div>
          </div>
          
          <div className="space-y-12 mt-12">
            
            {/* {t('menu.mainCourse')} */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <FadeIn><h3 className="font-headline-md-mobile md:font-headline-md text-primary">{t('menu.mainCourse')}</h3></FadeIn>
                <div className="flex gap-2">
                  <button className="w-10 h-10 rounded-full border border-abu-netral flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors" onClick={(e) => scrollMenu(e, -300)}>
                    <span className="material-symbols-outlined">chevron_left</span>
                  </button>
                  <button className="w-10 h-10 rounded-full border border-abu-netral flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors" onClick={(e) => scrollMenu(e, 300)}>
                    <span className="material-symbols-outlined">chevron_right</span>
                  </button>
                </div>
              </div>
              <div className="carousel-scroll flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                {utama.map((item, idx) => (
                  <div key={idx} className="flex-none w-[280px] snap-start group">
                    <div className="relative h-[350px] rounded-xl overflow-hidden mb-4">
                      <img alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src={item.img} />
                      {item.tag && (
                        <div className="absolute top-4 left-4">
                          <span className={`${item.tagBg} text-white-pure text-[10px] font-label-md px-2 py-1 rounded uppercase tracking-wider`}>{item.tag}</span>
                        </div>
                      )}
                      <button className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white-pure/20 backdrop-blur-md flex items-center justify-center text-white-pure hover:bg-primary transition-colors">
                        <span className="material-symbols-outlined text-[20px]">favorite</span>
                      </button>
                    </div>
                    <h4 className="font-label-md text-on-surface text-lg mb-1">{item.title}</h4>
                    <p className="font-data-mono text-xs text-abu-netral">{item.cal}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* {t('menu.healthyDrinks')} */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <FadeIn><h3 className="font-headline-md-mobile md:font-headline-md text-primary">{t('menu.healthyDrinks')}</h3></FadeIn>
                <div className="flex gap-2">
                  <button className="w-10 h-10 rounded-full border border-abu-netral flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors" onClick={(e) => scrollMenu(e, -300)}>
                    <span className="material-symbols-outlined">chevron_left</span>
                  </button>
                  <button className="w-10 h-10 rounded-full border border-abu-netral flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors" onClick={(e) => scrollMenu(e, 300)}>
                    <span className="material-symbols-outlined">chevron_right</span>
                  </button>
                </div>
              </div>
              <div className="carousel-scroll flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                {minuman.map((item, idx) => (
                  <div key={idx} className="flex-none w-[280px] snap-start group">
                    <div className="relative h-[350px] rounded-xl overflow-hidden mb-4">
                      <img alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src={item.img} />
                      {item.tag && (
                        <div className="absolute top-4 left-4">
                          <span className={`${item.tagBg} text-white-pure text-[10px] font-label-md px-2 py-1 rounded uppercase tracking-wider`}>{item.tag}</span>
                        </div>
                      )}
                      <button className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white-pure/20 backdrop-blur-md flex items-center justify-center text-white-pure hover:bg-primary transition-colors">
                        <span className="material-symbols-outlined text-[20px]">favorite</span>
                      </button>
                    </div>
                    <h4 className="font-label-md text-on-surface text-lg mb-1">{item.title}</h4>
                    <p className="font-data-mono text-xs text-abu-netral">{item.cal}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* {t('menu.dessert')} */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="font-headline-md-mobile md:font-headline-md text-primary">{t('menu.dessert')}</h3>
                <div className="flex gap-2">
                  <button className="w-10 h-10 rounded-full border border-abu-netral flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors" onClick={(e) => scrollMenu(e, -300)}>
                    <span className="material-symbols-outlined">chevron_left</span>
                  </button>
                  <button className="w-10 h-10 rounded-full border border-abu-netral flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors" onClick={(e) => scrollMenu(e, 300)}>
                    <span className="material-symbols-outlined">chevron_right</span>
                  </button>
                </div>
              </div>
              <div className="carousel-scroll flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                {dessert.map((item, idx) => (
                  <div key={idx} className="flex-none w-[280px] snap-start group">
                    <div className="relative h-[350px] rounded-xl overflow-hidden mb-4">
                      <img alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src={item.img} />
                      {item.tag && (
                        <div className="absolute top-4 left-4">
                          <span className={`${item.tagBg} text-white-pure text-[10px] font-label-md px-2 py-1 rounded uppercase tracking-wider`}>{item.tag}</span>
                        </div>
                      )}
                      <button className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white-pure/20 backdrop-blur-md flex items-center justify-center text-white-pure hover:bg-primary transition-colors">
                        <span className="material-symbols-outlined text-[20px]">favorite</span>
                      </button>
                    </div>
                    <h4 className="font-label-md text-on-surface text-lg mb-1">{item.title}</h4>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}