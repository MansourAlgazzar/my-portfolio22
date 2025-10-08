import React, { useEffect, useState } from 'react'
import { ArrowRight, Mail, MapPin, Download, Globe } from 'lucide-react'

const HERO_LOGO = "https://medicineway.b-cdn.net/%D9%85%D9%86%D8%B5%D9%88%D8%B1/photo_2023-08-30_12-49-03.jpg"
const CV_URL = "#"

const texts = {
  en: {
    name: "Dr. Mansour Elgazaar",
    subtitle: "Founder of Medicine Way | Researcher",
    introTitle: "Founder of Medicine Way",
    introDesc: "Medical Researcher and Pathology/Internal Medicine Lecturer.",
    explore: "Explore Research",
    contact: "Contact Me",
    aboutTitle: "About Me",
    about1: "I am a fresh graduate physician (MBBCh, Al-Azhar University of Assiut, 2024 — Very Good), medical researcher, and founder of Medicine Way. I started in January 2021 creating accessible medical content, then expanded into teaching and leading research groups.",
    about2: "Since 2023, I have focused on research methodology and evidence synthesis, contributing to 20+ studies across ophthalmology, cardiology, neurology, and public health.",
    researchTitle: "Research Highlights",
    skillsTitle: "Skills Overview",
    contactTitle: "Contact",
    footer: "© {year} Dr. Mansour Elgazaar — Medicine Way",
  },
  ar: {
    name: "د. منصور الجزار",
    subtitle: "مؤسس Medicine Way | باحث طبي",
    introTitle: "مؤسس Medicine Way",
    introDesc: "باحث طبي ومحاضر في الباثولوجي والباطنة.",
    explore: "استعرض الأبحاث",
    contact: "تواصل معي",
    aboutTitle: "عنّي",
    about1: "أنا خريج طب حديث (MBBCh، جامعة الأزهر - أسيوط، 2024 — جيد جداً)، باحث طبي ومؤسس Medicine Way. بدأت في يناير 2021 بإنشاء محتوى طبي سهل الوصول، ثم توسعت في التدريس وقيادة مجموعات البحث.",
    about2: "منذ 2023، ركزت على منهجيات البحث وتجميع الأدلة، وساهمت في أكثر من 20 دراسة في طب العيون، القلب، الأعصاب والصحة العامة.",
    researchTitle: "أبرز الأبحاث",
    skillsTitle: "لمحة عن المهارات",
    contactTitle: "تواصل",
    footer: "© {year} د. منصور الجزار — طريق الطب",
  }
}

export default function App() {
  const [dark, setDark] = useState(false)
  const [lang, setLang] = useState('en')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  useEffect(() => {
    // set direction and font for Arabic
    if (lang === 'ar') {
      document.documentElement.dir = 'rtl'
      document.documentElement.style.fontFamily = 'arabic'
    } else {
      document.documentElement.dir = 'ltr'
      document.documentElement.style.fontFamily = 'Cairo, system-ui, sans-serif'
    }
  }, [lang])

  const t = texts[lang]
  const year = new Date().getFullYear()

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-cyan-50 to-white text-slate-800 dark:from-[#020617] dark:via-[#0f172a] dark:to-[#1e293b] dark:text-slate-100 font-sans">
      <header className="sticky top-0 z-40 backdrop-blur-md bg-white/70 dark:bg-slate-900/60 border-b border-cyan-200 dark:border-cyan-800 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={HERO_LOGO} alt="Logo" className="h-12 w-12 rounded-full object-cover shadow-md" />
            <div>
              <h1 className="font-bold text-cyan-700 dark:text-cyan-400">{t.name}</h1>
              <p className="text-xs text-slate-500 dark:text-slate-400">{t.subtitle}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button onClick={() => setLang(prev => prev === 'en' ? 'ar' : 'en')} className="rounded-lg border border-cyan-200 dark:border-cyan-700 bg-white/60 dark:bg-slate-800/60 px-3 py-1 text-sm shadow">
              {lang === 'en' ? 'عربي' : 'EN'}
            </button>
            <button onClick={() => setDark(d => !d)} className="rounded-lg border border-cyan-200 dark:border-cyan-700 bg-gradient-to-r from-cyan-500 to-sky-500 px-3 py-1 text-white text-sm shadow hover:opacity-90 transition">
              {dark ? (lang === 'ar' ? 'فاتح' : 'Light') : (lang === 'ar' ? 'داكن' : 'Dark')}
            </button>
          </div>
        </div>
      </header>

      <main>
        <section id="home" className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-700 to-sky-500 bg-clip-text text-transparent">{t.name}</h2>
            <p className="mt-3 text-lg text-slate-700 dark:text-slate-300"><span className="font-semibold">{t.introTitle}</span>. {t.introDesc}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#research" className="bg-gradient-to-r from-cyan-600 to-sky-600 text-white px-6 py-3 rounded-2xl shadow hover:scale-[1.02] transition flex items-center gap-2">{t.explore} <ArrowRight size={16}/></a>
              <a href="#contact" className="border border-cyan-300 dark:border-cyan-700 text-cyan-700 dark:text-cyan-300 px-6 py-3 rounded-2xl hover:bg-cyan-50 dark:hover:bg-slate-800 transition">{t.contact}</a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-300/40 to-sky-300/40 rounded-full blur-2xl" />
              <img src={HERO_LOGO} className="relative h-64 w-64 rounded-full object-cover border-4 border-cyan-200 dark:border-cyan-800 shadow-xl" />
            </div>
          </div>
        </section>

        <section id="about" className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-cyan-700 dark:text-cyan-400">{t.aboutTitle}</h2>
          <p className="mt-4 leading-relaxed text-slate-700 dark:text-slate-300">{t.about1}</p>
          <p className="mt-2 text-slate-600 dark:text-slate-400">{t.about2}</p>
        </section>

        <section id="research" className="max-w-6xl mx-auto px-4 py-16 bg-gradient-to-br from-sky-50 to-cyan-50 dark:from-slate-900 dark:to-slate-950 rounded-3xl">
          <h2 className="text-3xl font-bold text-cyan-700 dark:text-cyan-400">{t.researchTitle}</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            {["BMC Medical Education","Journal of Research in Clinical Medicine"].map((j,i)=>(
              <div key={i} className="border border-cyan-100 dark:border-cyan-800 bg-white/80 dark:bg-slate-900/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
                <h3 className="font-semibold text-lg text-slate-800 dark:text-slate-100">{lang === 'ar' ? `ورقة بحثية ${i+1}` : `Research Paper ${i+1}`}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{lang === 'ar' ? `نُشرت في ${j}` : `Published in ${j}`} — Role: Co-author</p>
              </div>
            ))}
          </div>
        </section>

        <section id="skills" className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-cyan-700 dark:text-cyan-400">{t.skillsTitle}</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            {["Clinical Skills","Research & Statistics","Design & Media","Digital Marketing"].map((s)=>(
              <div key={s} className="p-5 rounded-2xl border border-cyan-100 dark:border-cyan-800 bg-white/80 dark:bg-slate-900/50">
                <h3 className="font-semibold text-lg text-slate-800 dark:text-slate-100">{lang === 'ar' ? translateSkill(s) : s}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{lang === 'ar' ? 'خبرة عملية مع بيانات طبية حقيقية، تحليلات، وتواصل إبداعي.' : 'Practical experience with real-world medical data, analytics, and creative communication.'}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="max-w-6xl mx-auto px-4 py-16 bg-gradient-to-br from-cyan-100/60 via-sky-100/40 to-white dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 rounded-3xl">
          <h2 className="text-3xl font-bold text-cyan-700 dark:text-cyan-400">{t.contactTitle}</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <a href="mailto:mansour.a.algazar@gmail.com" className="flex items-center gap-3 bg-white/80 dark:bg-slate-900/60 border border-cyan-100 dark:border-cyan-800 p-4 rounded-2xl hover:shadow-md transition"><Mail size={18}/> <span>mansour.a.algazar@gmail.com</span></a>
            <div className="flex items-center gap-3 bg-white/80 dark:bg-slate-900/60 border border-cyan-100 dark:border-cyan-800 p-4 rounded-2xl"><MapPin size={18}/> <span>Cairo, Egypt</span></div>
            <a href={CV_URL} className="flex items-center gap-3 bg-white/80 dark:bg-slate-900/60 border border-cyan-100 dark:border-cyan-800 p-4 rounded-2xl hover:shadow-md transition"><Download size={18}/> <span>{lang === 'ar' ? 'تحميل السيرة الذاتية' : 'Download CV'}</span></a>
          </div>
        </section>
      </main>

      <footer className="py-8 text-center text-sm text-slate-500 dark:text-slate-400">{(lang === 'ar' ? t.footer.replace('{year}', year) : t.footer.replace('{year}', year))}</footer>
    </div>
  )
}

function translateSkill(s) {
  const map = {
    "Clinical Skills": "المهارات السريرية",
    "Research & Statistics": "البحث والإحصاء",
    "Design & Media": "التصميم والوسائط",
    "Digital Marketing": "التسويق الرقمي"
  }
  return map[s] || s
}
