import { useState, type ReactNode } from "react";

type Lang = "en" | "th";

const GITHUB_URL = "https://github.com/PoomITD65";
const CONTACT_EMAIL = "pumipath.muangthong@gmail.com";

const T = {
  en: {
    nav: { about: "About", skills: "Skills", projects: "Projects", experience: "Experience", education: "Education", sports: "Sports", contact: "Contact" },
    contactBtn: "Contact",
    available: "Available for projects",
    heroTitle: "Junior Programmer",
    heroBio: "As a Junior Programmer, I focus on building web applications and gaining hands-on experience in real projects while strengthening skills such as teamwork, adaptability, and time management. For my graduation project, I applied machine learning to predict air-quality, demonstrating how academic research can be transformed into practical solutions.",
    seeProjects: "See Projects",
    getInTouch: "Get In Touch",
    downloadResume: "Download Résumé",
    heroLocation: "Nakhon Si Thammarat, Thailand",
    aboutTitle: "Profile Snapshot",
    aboutBio: "My professional interests cover web application development, software engineering, and the use of data and machine learning to create practical solutions. I also value soft skills such as teamwork, adaptability, curiosity, and time management, which help me grow as a Junior Programmer and contribute effectively to diverse projects.",
    factLanguages: "Languages",
    factLangItems: ["Thai (Native)", "English (Intermediate)"],
    factProgramming: "Programming",
    factProgItems: ["Python", "JavaScript", "Dart", "PHP"],
    factTechnical: "Technical",
    factTechItems: ["Machine Learning", "Web Development", "Vital Sign Analysis", "Signal Processing"],
    factSoftSkills: "Soft Skills",
    factSoftItems: ["Teamwork", "Time Management", "Adaptability", "Curiosity"],
    skillsTitle: "Skills",
    frontend: "Frontend",
    backend: "Backend",
    mobileIot: "Mobile & IoT",
    dataML: "Data & ML",
    projectsTitle: "Selected Projects & Research",
    published: "Published",
    proj1Title: "Ultrafine Particles (PM0.1) Prediction",
    proj1Time: "2024 – 2025",
    proj1Pub: { journal: "Journal of Building Engineering (Scopus Q1, 99th Percentile)", badge: "Scopus Q1" },
    proj1Bullets: [
      "Co-authored: \"Ultrafine particle concentration modeling from incense burning: An interpretable machine learning approach using ambient indoor conditions\"",
      "Built ML models to predict PM0.1 from meteorological features",
      "Simulated shrines: collected dust, temperature, wind speed, humidity",
      "Designed a realtime web dashboard",
    ],
    proj2Title: "SpendLog – Cost Management App",
    proj2Time: "2024",
    proj2Bullets: [
      "Flutter app with full Firebase stack — Auth, Firestore, and Storage",
      "Tracks income, expenses, and savings with a real-time pie chart dashboard",
      "Cloud Pocket system: set savings goals, track progress, and transfer between pockets",
      "12 screens with full CRUD, profile photo upload, and cross-platform support (Android, iOS, Web)",
    ],
    proj3Title: "Panic Disorder Risk Prediction",
    proj3Time: "2023",
    proj3Bullets: [
      "Explored ML approaches to estimate panic-disorder risk",
      "Prepared datasets and evaluation pipeline",
    ],
    proj4Title: "Lottery Result Management (NoSQL Web App)",
    proj4Time: "2023",
    proj4Bullets: [
      "HTML/CSS/JS frontend with NoSQL backend",
      "CRUD flows for tickets and results",
    ],
    expTitle: "Work Experience",
    exp1Role: "Programmer",
    exp1Time: "Dec 2025 – Present",
    exp1Bullets: ["Developed and maintained mobile apps for corporate clients", "Collaborated with design and backend teams to integrate APIs", "Tested and improved user experience across various devices"],
    exp2Role: "Co-operative Student",
    exp2Time: "Apr 2025 – Nov 2025",
    exp2Bullets: ["Developed and maintained mobile apps for corporate clients", "Collaborated with design and backend teams to integrate APIs", "Tested and improved user experience across various devices"],
    exp3Company: "S.P.A Computer Co., Ltd.",
    exp3Role: "Internship",
    exp3Time: "Nov 2021 – Mar 2022",
    exp3Bullets: ["Customer service & sales", "Computer repair & assembly", "Inventory management"],
    eduTitle: "Education",
    edu1School: "Walailak University",
    edu1Program: "B.Sc., Information Technology & Digital Innovation",
    edu1Years: "2022 – 2025",
    edu2School: "Nakhon Si Thammarat Vocational College",
    edu2Program: "Cert. Voc. Ed., Information Technology",
    edu2Years: "2020 – 2022",
    sportsTitle: "Go ⚫️⚪️",
    highlights: "Highlights",
    highlightItems: ["Thailand National Games #49 — Trang Games", "Chanthaburi Games (National Games #49)", "Thailand National Youth Games #38 — Nakhon Sawan"],
    medals: "Medals",
    medalItems: ["🥈 Silver — Team (Men)", "🥉 Bronze — Pair Mixed"],
    achievements: "Achievements",
    achievementItems: [
      "Thailand National Youth Games #36 (Surat Thani Games) — Men's Team",
      "Thailand National Youth Games #37 (Phatthalung Games) — Men's Team (Competed after Southern Regional qualification)",
      "Thailand National Youth Games #38 (Nakhon Sawan Games) — Men's Team (Competed after Southern Regional qualification)",
      "Thailand National Games #48 (Phuket Games) — Men's Team (Not qualified Southern Regional Tournament)",
      "Thailand National Games #49 (Trang Games) — Mixed Pair (Not qualified via Southern Regional Tournament)",
      "Thailand National Games #49 (Trang Games) — Men's Team (Qualified via Southern Regional Tournament)",
      "Thailand National Games #49 (Chanthaburi Games) — Men's Team (Competed after Southern Regional qualification)",
    ],
    refTitle: "References",
    ref1Dept: "Department of Digital Technology in Medicine, Walailak University",
    ref2Dept: "Department of Digital Technology in Medicine, Walailak University",
    contactTitle: "Contact",
    contactEmail: "Email",
    contactPhone: "Phone",
    contactGitHub: "GitHub",
    contactLocation: "Location",
    contactLocationValue: "Mueang, Nakhon Si Thammarat, Thailand",
    footerCopy: `© ${new Date().getFullYear()} Pumipath Muangthong. All rights reserved.`,
    backToTop: "Back to top ↑",
  },
  th: {
    nav: { about: "เกี่ยวกับ", skills: "ทักษะ", projects: "ผลงาน", experience: "ประสบการณ์", education: "การศึกษา", sports: "กีฬา", contact: "ติดต่อ" },
    contactBtn: "ติดต่อ",
    available: "พร้อมรับงาน",
    heroTitle: "Junior Programmer",
    heroBio: "มุ่งมั่นพัฒนาเว็บแอปพลิเคชันและสั่งสมประสบการณ์จากโครงการจริง ควบคู่กับการเสริมสร้างทักษะการทำงานเป็นทีม การปรับตัว และการบริหารเวลา โครงการจบการศึกษาได้ประยุกต์ใช้ Machine Learning ในการพยากรณ์คุณภาพอากาศ ซึ่งสะท้อนให้เห็นว่างานวิจัยทางวิชาการสามารถต่อยอดสู่การใช้งานจริงได้อย่างเป็นรูปธรรม",
    seeProjects: "ดูผลงาน",
    getInTouch: "ติดต่อ",
    downloadResume: "ดาวน์โหลดประวัติย่อ",
    heroLocation: "นครศรีธรรมราช, ประเทศไทย",
    aboutTitle: "ภาพรวมโปรไฟล์",
    aboutBio: "ความสนใจในสายวิชาชีพครอบคลุมการพัฒนาเว็บแอปพลิเคชัน วิศวกรรมซอฟต์แวร์ และการนำข้อมูลรวมถึง Machine Learning มาสร้างผลลัพธ์ที่ใช้งานได้จริง นอกจากนี้ยังให้ความสำคัญกับทักษะด้านการทำงานเป็นทีม การปรับตัว ความใฝ่รู้ และการบริหารเวลา ซึ่งช่วยเสริมศักยภาพในการทำงานและสร้างคุณค่าให้กับโครงการที่หลากหลาย",
    factLanguages: "ภาษา",
    factLangItems: ["ไทย (ภาษาแม่)", "อังกฤษ (ระดับกลาง)"],
    factProgramming: "การเขียนโปรแกรม",
    factProgItems: ["Python", "JavaScript", "Dart", "PHP"],
    factTechnical: "ทักษะเทคนิค",
    factTechItems: ["Machine Learning", "การพัฒนาเว็บ", "การวิเคราะห์สัญญาณชีพ", "การประมวลผลสัญญาณ"],
    factSoftSkills: "ทักษะทั่วไป",
    factSoftItems: ["การทำงานเป็นทีม", "การบริหารเวลา", "การปรับตัว", "ความใฝ่รู้"],
    skillsTitle: "ทักษะ",
    frontend: "Frontend",
    backend: "Backend",
    mobileIot: "Mobile & IoT",
    dataML: "Data & ML",
    projectsTitle: "โปรเจกต์และงานวิจัยที่คัดสรร",
    published: "ตีพิมพ์แล้ว",
    proj1Title: "การพยากรณ์อนุภาคขนาดเล็กมาก (PM0.1)",
    proj1Time: "2567 – 2568",
    proj1Pub: { journal: "Journal of Building Engineering (Scopus Q1, 99th Percentile)", badge: "Scopus Q1" },
    proj1Bullets: [
      "ร่วมเขียนบทความวิจัย: \"การสร้างแบบจำลองความเข้มข้นของอนุภาคขนาดเล็กมากจากการเผาธูป โดยใช้แนวทาง Machine Learning ที่ตีความได้ภายใต้สภาวะอากาศภายในอาคาร\"",
      "พัฒนาโมเดล ML สำหรับพยากรณ์ PM0.1 จากข้อมูลอุตุนิยมวิทยา",
      "จำลองสภาพแวดล้อมศาลเจ้า พร้อมเก็บข้อมูลฝุ่น อุณหภูมิ ความเร็วลม และความชื้น",
      "ออกแบบและพัฒนา Dashboard แสดงผลข้อมูลแบบเรียลไทม์",
    ],
    proj2Title: "SpendLog – แอปพลิเคชันจัดการค่าใช้จ่าย",
    proj2Time: "2567",
    proj2Bullets: [
      "แอปพลิเคชัน Flutter เชื่อมต่อ Firebase ครบชุด — Auth, Firestore และ Storage",
      "บันทึกรายรับ รายจ่าย และการออม พร้อม Dashboard แผนภูมิวงกลมแบบเรียลไทม์",
      "ระบบ Cloud Pocket — ตั้งเป้าหมายการออม ติดตามความคืบหน้า และโอนเงินระหว่าง Pocket",
      "12 หน้าจอ ครอบคลุม CRUD เต็มรูปแบบ อัปโหลดรูปโปรไฟล์ รองรับ Android, iOS และ Web",
    ],
    proj3Title: "การพยากรณ์ความเสี่ยงโรคตื่นตระหนก (Panic Disorder)",
    proj3Time: "2566",
    proj3Bullets: [
      "ศึกษาและทดสอบแนวทาง ML ในการประเมินความเสี่ยงโรคตื่นตระหนก",
      "จัดเตรียมชุดข้อมูลและกระบวนการประเมินผลโมเดล",
    ],
    proj4Title: "ระบบจัดการผลสลากกินแบ่ง (NoSQL Web App)",
    proj4Time: "2566",
    proj4Bullets: [
      "พัฒนา Frontend ด้วย HTML/CSS/JS เชื่อมต่อกับ NoSQL",
      "ระบบ CRUD สำหรับจัดการสลากและผลรางวัล",
    ],
    expTitle: "ประสบการณ์การทำงาน",
    exp1Role: "โปรแกรมเมอร์",
    exp1Time: "ธ.ค. 2568 – ปัจจุบัน",
    exp1Bullets: [
      "พัฒนาและดูแลรักษาแอปพลิเคชันมือถือสำหรับลูกค้าองค์กร",
      "ประสานงานกับทีมออกแบบและทีม Backend ในการเชื่อมต่อ API",
      "ทดสอบและปรับปรุงประสบการณ์ผู้ใช้บนอุปกรณ์หลากหลายประเภท",
    ],
    exp2Role: "นักศึกษาสหกิจศึกษา",
    exp2Time: "เม.ย. 2568 – พ.ย. 2568",
    exp2Bullets: [
      "พัฒนาและดูแลรักษาแอปพลิเคชันมือถือสำหรับลูกค้าองค์กร",
      "ประสานงานกับทีมออกแบบและทีม Backend ในการเชื่อมต่อ API",
      "ทดสอบและปรับปรุงประสบการณ์ผู้ใช้บนอุปกรณ์หลากหลายประเภท",
    ],
    exp3Company: "บริษัท ส.พ.อ. คอมพิวเตอร์ จำกัด",
    exp3Role: "นักศึกษาฝึกงาน",
    exp3Time: "พ.ย. 2564 – มี.ค. 2565",
    exp3Bullets: ["ให้บริการลูกค้าและงานขาย", "ซ่อมแซมและประกอบคอมพิวเตอร์", "จัดการคลังสินค้า"],
    eduTitle: "การศึกษา",
    edu1School: "มหาวิทยาลัยวลัยลักษณ์",
    edu1Program: "วท.บ. เทคโนโลยีสารสนเทศและนวัตกรรมดิจิทัล",
    edu1Years: "2565 – 2568",
    edu2School: "วิทยาลัยเทคนิคนครศรีธรรมราช",
    edu2Program: "ปวส. เทคโนโลยีสารสนเทศ",
    edu2Years: "2563 – 2565",
    sportsTitle: "โกะ ⚫️⚪️",
    highlights: "รายการแข่งขันเด่น",
    highlightItems: ["กีฬาแห่งชาติ ครั้งที่ 49 — ตรังเกมส์", "กีฬาแห่งชาติ ครั้งที่ 49 — จันทบุรีเกมส์", "กีฬาเยาวชนแห่งชาติ ครั้งที่ 38 — นครสวรรค์"],
    medals: "เหรียญรางวัล",
    medalItems: ["🥈 เหรียญเงิน — ทีมชาย", "🥉 เหรียญทองแดง — คู่ผสม"],
    achievements: "ประวัติการแข่งขัน",
    achievementItems: [
      "กีฬาเยาวชนแห่งชาติ ครั้งที่ 36 (สุราษฎร์ธานีเกมส์) — ทีมชาย",
      "กีฬาเยาวชนแห่งชาติ ครั้งที่ 37 (พัทลุงเกมส์) — ทีมชาย (ผ่านการคัดเลือกภาคใต้)",
      "กีฬาเยาวชนแห่งชาติ ครั้งที่ 38 (นครสวรรค์เกมส์) — ทีมชาย (ผ่านการคัดเลือกภาคใต้)",
      "กีฬาแห่งชาติ ครั้งที่ 48 (ภูเก็ตเกมส์) — ทีมชาย (ไม่ผ่านการคัดเลือกภาคใต้)",
      "กีฬาแห่งชาติ ครั้งที่ 49 (ตรังเกมส์) — คู่ผสม (ไม่ผ่านการคัดเลือกภาคใต้)",
      "กีฬาแห่งชาติ ครั้งที่ 49 (ตรังเกมส์) — ทีมชาย (ผ่านการคัดเลือกภาคใต้)",
      "กีฬาแห่งชาติ ครั้งที่ 49 (จันทบุรีเกมส์) — ทีมชาย (ผ่านการคัดเลือกภาคใต้)",
    ],
    refTitle: "ผู้ให้การรับรอง",
    ref1Dept: "ภาควิชาเทคโนโลยีดิจิทัลทางการแพทย์ มหาวิทยาลัยวลัยลักษณ์",
    ref2Dept: "ภาควิชาเทคโนโลยีดิจิทัลทางการแพทย์ มหาวิทยาลัยวลัยลักษณ์",
    contactTitle: "ติดต่อ",
    contactEmail: "อีเมล",
    contactPhone: "โทรศัพท์",
    contactGitHub: "GitHub",
    contactLocation: "ที่อยู่",
    contactLocationValue: "อำเภอเมือง จังหวัดนครศรีธรรมราช",
    footerCopy: `© ${new Date().getFullYear()} ภูมิพัทม์ น้วงกอง · สงวนลิขสิทธิ์`,
    backToTop: "กลับสู่ด้านบน ↑",
  },
} as const;

export default function Portfolio() {
  const [lang, setLang] = useState<Lang>("en");
  const tr = T[lang];

  const nav = [
    { id: "about", label: tr.nav.about },
    { id: "skills", label: tr.nav.skills },
    { id: "projects", label: tr.nav.projects },
    { id: "experience", label: tr.nav.experience },
    { id: "education", label: tr.nav.education },
    { id: "sports", label: tr.nav.sports },
    { id: "contact", label: tr.nav.contact },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 selection:bg-neutral-900 selection:text-white">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#home" className="font-black tracking-tight text-lg md:text-xl">PUMIPATH MUANGTHONG</a>
          <nav className="hidden md:flex items-center gap-6">
            {nav.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="text-sm font-medium text-neutral-600 hover:text-neutral-900">
                {s.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setLang(lang === "en" ? "th" : "en")}
              className="flex items-center bg-neutral-100 border border-neutral-200 rounded-full p-0.5"
              aria-label="Toggle language"
            >
              <span className={`px-3 py-1 text-xs font-bold rounded-full transition-all duration-200 ${lang === "en" ? "bg-neutral-900 text-white shadow-sm" : "text-neutral-400"}`}>EN</span>
              <span className={`px-3 py-1 text-xs font-bold rounded-full transition-all duration-200 ${lang === "th" ? "bg-neutral-900 text-white shadow-sm" : "text-neutral-400"}`}>TH</span>
            </button>
            <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold border border-neutral-300 rounded-xl px-3 py-1.5 hover:bg-neutral-100">
              <GitHubIcon className="w-4 h-4" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <a href="#contact" className="inline-flex items-center text-sm font-semibold border border-neutral-900 text-white bg-neutral-900 rounded-xl px-3 py-1.5 hover:bg-neutral-800">
              {tr.contactBtn}
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_10%_10%,#f5f5f4,transparent),radial-gradient(60%_60%_at_90%_30%,#e5e7eb,transparent)]" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-4 pt-14 pb-10 md:pb-16">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="order-1 md:order-2 md:justify-self-end">
              <img src={`${import.meta.env.BASE_URL}poom.png`} alt="Pumipath Muangthong" className="w-40 h-40 md:w-48 md:h-48 rounded-3xl object-cover bg-neutral-200 border border-neutral-300 shadow-sm" />
              <div className="mt-4 text-xs text-neutral-500 text-center">{tr.heroLocation}</div>
            </div>
            <div className="md:col-span-2 order-2 md:order-1">
              <p className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs text-neutral-600 shadow-sm">
                <span className="inline-block h-2 w-2 rounded-full bg-neutral-900" /> {tr.available}
              </p>
              <h1 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">{tr.heroTitle}</h1>
              <p className="mt-4 text-neutral-600 text-base md:text-lg leading-relaxed">{tr.heroBio}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#projects" className="px-4 py-2 rounded-2xl bg-neutral-900 text-white text-sm font-semibold hover:bg-neutral-800">{tr.seeProjects}</a>
                <a href="#contact" className="px-4 py-2 rounded-2xl border border-neutral-300 text-sm font-semibold hover:bg-neutral-100">{tr.getInTouch}</a>
                <a href={`${import.meta.env.BASE_URL}Resume_Pumipath%20Muangthong.pdf`} className="px-4 py-2 rounded-2xl border border-neutral-300 text-sm font-semibold hover:bg-neutral-100">{tr.downloadResume}</a>
                <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-2xl border border-neutral-300 text-sm font-semibold hover:bg-neutral-100 inline-flex items-center gap-2">
                  <GitHubIcon className="w-4 h-4" /> GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <SiteSection id="about" title={tr.aboutTitle}>
        <p className="mt-3 text-neutral-700 max-w-3xl">{tr.aboutBio}</p>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Fact title={tr.factLanguages} items={[...tr.factLangItems]} />
          <Fact title={tr.factProgramming} items={[...tr.factProgItems]} />
          <Fact title={tr.factTechnical} items={[...tr.factTechItems]} />
          <Fact title={tr.factSoftSkills} items={[...tr.factSoftItems]} />
        </div>
      </SiteSection>

      {/* Skills */}
      <SiteSection id="skills" title={tr.skillsTitle}>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <Card title={tr.frontend}>
            <Tag>Angular</Tag><Tag>TypeScript</Tag><Tag>React (basics)</Tag><Tag>TailwindCSS</Tag><Tag>HTML/CSS</Tag>
          </Card>
          <Card title={tr.backend}>
            <Tag>Node.js</Tag><Tag>Python (FastAPI)</Tag><Tag>PHP</Tag><Tag>REST APIs</Tag>
          </Card>
          <Card title={tr.mobileIot}>
            <Tag>Flutter (Dart)</Tag><Tag>Firebase</Tag><Tag>ESP32 / sensors</Tag>
          </Card>
          <Card title={tr.dataML}>
            <Tag>scikit-learn</Tag><Tag>Pandas</Tag><Tag>Data Collection</Tag><Tag>Model Evaluation</Tag>
          </Card>
        </div>
      </SiteSection>

      {/* Projects */}
      <SiteSection id="projects" title={tr.projectsTitle}>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <ProjectCard
            title={tr.proj1Title}
            time={tr.proj1Time}
            publication={{ ...tr.proj1Pub, publishedLabel: tr.published }}
            image={`${import.meta.env.BASE_URL}publication-pm01.jpg`}
            bullets={[...tr.proj1Bullets]}
          />
          <ProjectCard title={tr.proj2Title} time={tr.proj2Time} image={`${import.meta.env.BASE_URL}spendlog.png`} bullets={[...tr.proj2Bullets]} />
          <ProjectCard title={tr.proj3Title} time={tr.proj3Time} bullets={[...tr.proj3Bullets]} />
          <ProjectCard title={tr.proj4Title} time={tr.proj4Time} bullets={[...tr.proj4Bullets]} />
        </div>
      </SiteSection>

      {/* Experience */}
      <SiteSection id="experience" title={tr.expTitle}>
        <div className="mt-6 space-y-4">
          <ExperienceCard company="Progressive Network Consult Co., Ltd." role={tr.exp1Role} time={tr.exp1Time} bullets={[...tr.exp1Bullets]} />
          <ExperienceCard company="Progressive Network Consult Co., Ltd." role={tr.exp2Role} time={tr.exp2Time} bullets={[...tr.exp2Bullets]} />
          <ExperienceCard company={tr.exp3Company} role={tr.exp3Role} time={tr.exp3Time} bullets={[...tr.exp3Bullets]} />
        </div>
      </SiteSection>

      {/* Education */}
      <SiteSection id="education" title={tr.eduTitle}>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <EduCard school={tr.edu1School} program={tr.edu1Program} years={tr.edu1Years} gpx="2.94" />
          <EduCard school={tr.edu2School} program={tr.edu2Program} years={tr.edu2Years} gpx="3.25" />
        </div>
      </SiteSection>

      {/* Sports */}
      <SiteSection id="sports" title={tr.sportsTitle}>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <Card title={tr.highlights}>
            {tr.highlightItems.map((item, i) => <Tag key={i}>{item}</Tag>)}
          </Card>
          <Card title={tr.medals}>
            {tr.medalItems.map((item, i) => <Tag key={i}>{item}</Tag>)}
          </Card>
        </div>
        <div className="mt-6 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
          <h3 className="font-semibold text-neutral-900">{tr.achievements}</h3>
          <ul className="mt-3 space-y-2 list-disc list-inside text-neutral-700">
            {tr.achievementItems.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>
      </SiteSection>

      {/* References */}
      <SiteSection title={tr.refTitle}>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <RefCard name="Asst. Prof. Dr. Bukhoree Sahoh" dept={tr.ref1Dept} email="bukhoree.sa@wu.ac.th" phone="(66) 75 672 2067" />
          <RefCard name="Dr. Theerat Saichoo" dept={tr.ref2Dept} email="theerat.sa@mail.wu.ac.th" phone="(66) 75 672 290" />
        </div>
      </SiteSection>

      {/* Contact */}
      <SiteSection id="contact" title={tr.contactTitle}>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <ContactCard label={tr.contactEmail} value={CONTACT_EMAIL} href={`mailto:${CONTACT_EMAIL}`} />
          <ContactCard label={tr.contactPhone} value="066 012 0690" href="tel:+66660120690" />
          <ContactCard label={tr.contactGitHub} value={GITHUB_URL.replace("https://", "")} href={GITHUB_URL} />
          <ContactCard label={tr.contactLocation} value={tr.contactLocationValue} />
        </div>
      </SiteSection>

      {/* Footer */}
      <footer className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-neutral-500 flex flex-wrap items-center justify-between gap-2">
          <p>{tr.footerCopy}</p>
          <a href="#home" className="hover:text-neutral-800">{tr.backToTop}</a>
        </div>
      </footer>
    </div>
  );
}

function SiteSection({ id, title, children }: { id?: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-bold">
        {title}
        <span className="block h-1 w-12 mt-2 bg-neutral-900 rounded-full" />
      </h2>
      {children}
    </section>
  );
}

function Fact({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="text-xs uppercase tracking-wide text-neutral-500 font-semibold">{title}</div>
      <ul className="mt-2 space-y-1 text-sm text-neutral-700">
        {items.map((it, i) => <li key={i}>{it}</li>)}
      </ul>
    </div>
  );
}

function Card({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="font-semibold text-neutral-900">{title}</h3>
      <div className="mt-3 flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-xl border border-neutral-300 bg-white px-3 py-1 text-xs font-medium text-neutral-700 shadow-sm">
      {children}
    </span>
  );
}

function ProjectCard({ title, time, bullets, publication, image }: {
  title: string;
  time: string;
  bullets: string[];
  publication?: { journal: string; badge: string; publishedLabel: string };
  image?: string;
}) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-baseline justify-between gap-2 flex-wrap">
        <h3 className="text-lg font-semibold">{title}</h3>
        <span className="text-sm text-neutral-500">{time}</span>
      </div>
      {publication && (
        <div className="mt-2 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 text-xs font-semibold text-emerald-700">
            📄 {publication.publishedLabel} · {publication.badge}
          </span>
          <span className="text-xs text-neutral-500 italic">{publication.journal}</span>
        </div>
      )}
      {image && <img src={image} alt={title} className="mt-4 w-full rounded-xl object-cover border border-neutral-100" />}
      <ul className="mt-3 space-y-2 list-disc list-inside text-neutral-700">
        {bullets.map((b, i) => <li key={i}>{b}</li>)}
      </ul>
    </div>
  );
}

function ExperienceCard({ company, role, time, bullets }: { company: string; role: string; time: string; bullets: string[] }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <div>
          <h3 className="text-lg font-semibold">{company}</h3>
          <p className="text-sm font-medium text-neutral-600 mt-0.5">{role}</p>
        </div>
        <span className="text-sm text-neutral-500">{time}</span>
      </div>
      <ul className="mt-3 space-y-2 list-disc list-inside text-neutral-700">
        {bullets.map((b, i) => <li key={i}>{b}</li>)}
      </ul>
    </div>
  );
}

function EduCard({ school, program, years, gpx }: { school: string; program: string; years: string; gpx?: string }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-baseline justify-between gap-2 flex-wrap">
        <h3 className="text-lg font-semibold">{school}</h3>
        <span className="text-sm text-neutral-500">{years}</span>
      </div>
      <p className="mt-1 text-sm text-neutral-700">{program}</p>
      {gpx && <p className="mt-1 text-xs text-neutral-500">GPX: {gpx}</p>}
    </div>
  );
}

function RefCard({ name, dept, email, phone }: { name: string; dept: string; email: string; phone: string }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-base font-semibold">{name}</h3>
      <p className="mt-1 text-sm text-neutral-700">{dept}</p>
      <div className="mt-3 text-sm">
        <a className="block text-neutral-700 hover:underline" href={`mailto:${email}`}>{email}</a>
        <a className="block text-neutral-700 hover:underline" href={`tel:${phone.replace(/[^+0-9]/g, "")}`}>{phone}</a>
      </div>
    </div>
  );
}

function ContactCard({ label, value, href }: { label: string; value: string; href?: string }) {
  const inner = (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm h-full">
      <div className="text-xs uppercase tracking-wide text-neutral-500 font-semibold">{label}</div>
      <div className="mt-1 text-neutral-800 font-medium break-words">{value}</div>
    </div>
  );
  return href ? (
    <a href={href} target="_blank" rel="noreferrer" className="block hover:shadow-md hover:-translate-y-0.5 transition-transform">{inner}</a>
  ) : inner;
}

function GitHubIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.486 2 12.021c0 4.427 2.865 8.18 6.839 9.504.5.094.683-.218.683-.485 0-.24-.009-.876-.014-1.72-2.782.606-3.369-1.343-3.369-1.343-.455-1.158-1.11-1.468-1.11-1.468-.908-.622.069-.61.069-.61 1.004.071 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.833.091-.648.35-1.089.636-1.34-2.221-.253-4.555-1.114-4.555-4.957 0-1.095.39-1.99 1.03-2.692-.104-.253-.447-1.272.098-2.65 0 0 .84-.27 2.75 1.028A9.533 9.533 0 0 1 12 6.844c.85.004 1.704.115 2.502.337 1.908-1.298 2.747-1.028 2.747-1.028.547 1.378.204 2.397.1 2.65.64.702 1.028 1.597 1.028 2.692 0 3.853-2.337 4.701-4.565 4.949.36.311.68.923.68 1.86 0 1.342-.012 2.424-.012 2.754 0 .269.18.584.69.484A10.02 10.02 0 0 0 22 12.021C22 6.486 17.523 2 12 2Z" />
    </svg>
  );
}
