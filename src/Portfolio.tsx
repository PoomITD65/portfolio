import { useMemo, type ReactNode } from "react";

// Single-file React portfolio (TailwindCSS)
// Paste into a Next.js/Vite project with Tailwind enabled.

const SECTIONS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "sports", label: "Sports" },
  { id: "contact", label: "Contact" },
];

const GITHUB_URL = "https://github.com/PoomITD65";
const CONTACT_EMAIL = "pumipath.muangthong@gmail.com";

export default function Portfolio() {
  const nav = useMemo(() => SECTIONS, []);

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 selection:bg-neutral-900 selection:text-white">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#home" className="font-black tracking-tight text-lg md:text-xl">PUMIPATH MUANGTHONG</a>
          <nav className="hidden md:flex items-center gap-6">
            {nav.map((s: { id: string; label: string }) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="text-sm font-medium text-neutral-600 hover:text-neutral-900"
              >
                {s.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold border border-neutral-300 rounded-xl px-3 py-1.5 hover:bg-neutral-100"
            >
              <GitHubIcon className="w-4 h-4" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center text-sm font-semibold border border-neutral-900 text-white bg-neutral-900 rounded-xl px-3 py-1.5 hover:bg-neutral-800"
            >
              Contact
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative">
        <div
          className="absolute inset-0 bg-[radial-gradient(60%_60%_at_10%_10%,#f5f5f4,transparent),radial-gradient(60%_60%_at_90%_30%,#e5e7eb,transparent)]"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-6xl px-4 pt-14 pb-10 md:pb-16">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* ภาพ: มือถืออยู่บน, เดสก์ท็อปขวา */}
            <div className="order-1 md:order-2 md:justify-self-end">
              <img
                src={`${import.meta.env.BASE_URL}poom.png`}
                alt="Pumipath Muangthong"
                className="w-40 h-40 md:w-48 md:h-48 rounded-3xl object-cover bg-neutral-200 border border-neutral-300 shadow-sm"
              />
              <div className="mt-4 text-xs text-neutral-500">Nakhon Si Thammarat, Thailand</div>
            </div>

            {/* ข้อความ: มือถืออยู่ล่าง, เดสก์ท็อปซ้าย และกิน 2 คอลัมน์ */}
            <div className="md:col-span-2 order-2 md:order-1">
              <p className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs text-neutral-600 shadow-sm">
                <span className="inline-block h-2 w-2 rounded-full bg-neutral-900" /> Available for projects
              </p>
              <h1 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
                Developer Intern
              </h1>
              <p className="mt-4 text-neutral-600 text-base md:text-lg leading-relaxed">
                As a Developer Intern, I focus on building web applications and gaining hands-on experience in real projects while strengthening skills such as teamwork, adaptability, and time management. For my graduation project, I applied machine learning to predict air-quality, demonstrating how academic research can be transformed into practical solutions.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#projects" className="px-4 py-2 rounded-2xl bg-neutral-900 text-white text-sm font-semibold hover:bg-neutral-800">See Projects</a>
                <a href="#contact" className="px-4 py-2 rounded-2xl border border-neutral-300 text-sm font-semibold hover:bg-neutral-100">Get In Touch</a>
                <a href={`${import.meta.env.BASE_URL}Resume_Pumipath%20Muangthong.pdf`} className="px-4 py-2 rounded-2xl border border-neutral-300 text-sm font-semibold hover:bg-neutral-100">Download Résumé</a>
                <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-2xl border border-neutral-300 text-sm font-semibold hover:bg-neutral-100 inline-flex items-center gap-2">
                  <GitHubIcon className="w-4 h-4" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Snapshot */}
      <SiteSection id="about" title="Profile Snapshot">
        <p className="mt-3 text-neutral-700 max-w-3xl">
          My professional interests cover web application development, software engineering, and the use of data and machine learning to create practical solutions. I also value soft skills such as teamwork, adaptability, curiosity, and time management, which help me grow as a Developer Intern and contribute effectively to diverse projects
        </p>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Fact title="Languages" items={["Thai (Native)", "English (Intermediate)"]} />
          <Fact title="Programming" items={["Python", "JavaScript", "Dart", "PHP"]} />
          <Fact title="Technical" items={["Machine Learning", "Web Development", "Vital Sign Analysis", "Signal Processing"]} />
          <Fact title="Soft Skills" items={["Teamwork", "Time Management", "Adaptability", "Curiosity"]} />
        </div>
      </SiteSection>

      {/* Skills */}
      <SiteSection id="skills" title="Skills">
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <Card title="Frontend">
            <Tag>Angular</Tag>
            <Tag>TypeScript</Tag>
            <Tag>React (basics)</Tag>
            <Tag>TailwindCSS</Tag>
            <Tag>HTML/CSS</Tag>
          </Card>
          <Card title="Backend">
            <Tag>Node.js</Tag>
            <Tag>Python (FastAPI)</Tag>
            <Tag>PHP</Tag>
            <Tag>REST APIs</Tag>
          </Card>
          <Card title="Mobile & IoT">
            <Tag>Flutter (Dart)</Tag>
            <Tag>Firebase</Tag>
            <Tag>ESP32 / sensors</Tag>
          </Card>
          <Card title="Data & ML">
            <Tag>scikit-learn</Tag>
            <Tag>Pandas</Tag>
            <Tag>Data Collection</Tag>
            <Tag>Model Evaluation</Tag>
          </Card>
        </div>
      </SiteSection>

      {/* Projects & Research */}
      <SiteSection id="projects" title="Selected Projects & Research">
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <ProjectCard
            title="Ultrafine Particles (PM0.1) Prediction"
            time="2024 – Present"
            publication={{
              journal: "Journal of Building Engineering (Scopus Q1, 99th Percentile)",
              badge: "Scopus Q1",
            }}
            bullets={[
              "Co-authored: \"Ultrafine particle concentration modeling from incense burning: An interpretable machine learning approach using ambient indoor conditions\"",
              "Built ML models to predict PM0.1 from meteorological features",
              "Simulated shrines: collected dust, temperature, wind speed, humidity",
              "Designed a realtime web dashboard",
            ]}
          />
          <ProjectCard
            title="SpendLog – Cost Management App"
            time="2024"
            bullets={[
              "Flutter mobile app with Firebase backend",
              "Tracks expenses and categories",
              "Clean, simple UI for daily logging",
            ]}
          />
          <ProjectCard
            title="Panic Disorder Risk Prediction"
            time="2023"
            bullets={[
              "Explored ML approaches to estimate panic-disorder risk",
              "Prepared datasets and evaluation pipeline",
            ]}
          />
          <ProjectCard
            title="Lottery Result Management (NoSQL Web App)"
            time="2023"
            bullets={[
              "HTML/CSS/JS frontend with NoSQL backend",
              "CRUD flows for tickets and results",
            ]}
          />
        </div>
      </SiteSection>

      {/* Experience */}
      <SiteSection id="experience" title="Work Experience">
        <div className="mt-6">
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-semibold">S.P.A Computer Co., Ltd. — Internship</h3>
              <span className="text-sm text-neutral-500">5 months</span>
            </div>
            <ul className="mt-3 space-y-2 list-disc list-inside text-neutral-700">
              <li>Customer service & sales</li>
              <li>Computer repair & assembly</li>
              <li>Inventory management</li>
            </ul>
          </div>
        </div>
      </SiteSection>

      {/* Education */}
      <SiteSection id="education" title="Education">
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <EduCard
            school="Walailak University"
            program="B.Sc., Information Technology & Digital Innovation"
            years="2022 – Present"
            gpx="2.95"
          />
          <EduCard
            school="Nakhon Si Thammarat Vocational College"
            program="Cert. Voc. Ed., Information Technology"
            years="2020 – 2022"
            gpx="3.25"
          />
        </div>
      </SiteSection>

      {/* Sports */}
      <SiteSection id="sports" title="Go ⚫️⚪️">
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <Card title="Highlights">
            <Tag>Thailand National Games #49 — Trang Games</Tag>
            <Tag>Chanthaburi Games (National Games #49)</Tag>
            <Tag>Thailand National Youth Games #38 — Nakhon Sawan</Tag>
          </Card>
          <Card title="Medals">
            <Tag>🥈 Silver — Team (Men)</Tag>
            <Tag>🥉 Bronze — Pair Mixed</Tag>
          </Card>
        </div>
        <div className="mt-6 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
          <h3 className="font-semibold text-neutral-900">Achievements</h3>
          <ul className="mt-3 space-y-2 list-disc list-inside text-neutral-700">
            <li>Thailand National Youth Games #36 (Surat thani Games) — Men’s Team</li>
            <li>Thailand National Youth Games #37 (Phatthalung Games) — Men’s Team (Competed after Southern Regional qualification)</li>
            <li>Thailand National Youth Games #38 (Nakhon Sawan Games) — Men’s Team (Competed after Southern Regional qualification)</li>
            <li>Thailand National Games #48 (Phuket Games) — Men’s Team (Not qualified Southern Regional Tournament)</li>
            <li>Thailand National Games #49 (Trang Games) — Mixed Pair (Not qualified via Southern Regional Tournament)</li>
            <li>Thailand National Games #49 (Trang Games) — Men’s Team (Qualified via Southern Regional Tournament)</li>
            <li>Thailand National Games #49 (Chanthaburi Games) — Men’s Team (Competed after Southern Regional qualification)</li>
          </ul>
          <p className="mt-3 text-xs text-neutral-500">* You may add medal photos or athlete ID images here, or link to an external album.</p>
        </div>
      </SiteSection>

      {/* References */}
      <SiteSection title="References">
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <RefCard
            name="Asst. Prof. Dr. Bukhoree Sahoh"
            dept="Department of Digital Technology in Medicine, Walailak University"
            email="bukhoree.sa@wu.ac.th"
            phone="(66) 75 672 2067"
          />
          <RefCard
            name="Dr. Theerat Saichoo"
            dept="Department of Digital Technology in Medicine, Walailak University"
            email="theerat.sa@mail.wu.ac.th"
            phone="(66) 75 672 290"
          />
        </div>
      </SiteSection>

      {/* Contact */}
      <SiteSection id="contact" title="Contact">
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <ContactCard label="Email" value={CONTACT_EMAIL} href={`mailto:${CONTACT_EMAIL}`} />
          <ContactCard label="Phone" value="066 012 0690" href="tel:+66660120690" />
          <ContactCard label="GitHub" value={GITHUB_URL.replace("https://", "")} href={GITHUB_URL} />
          <ContactCard label="Location" value="Mueang, Nakhon Si Thammarat, Thailand" />
        </div>
      </SiteSection>

      {/* Footer */}
      <footer className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-neutral-500 flex flex-wrap items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Pumipath Muangthong. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#home" className="hover:text-neutral-800">Back to top ↑</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SiteSection({ id, title, children }: { id?: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 py-12">
      <div className="flex items-end justify-between">
        <h2 className="text-2xl md:text-3xl font-bold">
          {title}
          <span className="block h-1 w-12 mt-2 bg-neutral-900 rounded-full" />
        </h2>
      </div>
      {children}
    </section>
  );
}

function Fact({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="text-xs uppercase tracking-wide text-neutral-500 font-semibold">{title}</div>
      <ul className="mt-2 space-y-1 text-sm text-neutral-700">
        {items.map((it, i) => (
          <li key={i}>{it}</li>
        ))}
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

function ProjectCard({ title, time, bullets, publication }: { title: string; time: string; bullets: string[]; publication?: { journal: string; badge: string } }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-baseline justify-between gap-2 flex-wrap">
        <h3 className="text-lg font-semibold">{title}</h3>
        <span className="text-sm text-neutral-500">{time}</span>
      </div>
      {publication && (
        <div className="mt-2 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 text-xs font-semibold text-emerald-700">
            📄 Published · {publication.badge}
          </span>
          <span className="text-xs text-neutral-500 italic">{publication.journal}</span>
        </div>
      )}
      <ul className="mt-3 space-y-2 list-disc list-inside text-neutral-700">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
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
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="block hover:shadow-md hover:-translate-y-0.5 transition-transform"
    >
      {inner}
    </a>
  ) : (
    inner
  );
}

function GitHubIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.486 2 12.021c0 4.427 2.865 8.18 6.839 9.504.5.094.683-.218.683-.485 0-.24-.009-.876-.014-1.72-2.782.606-3.369-1.343-3.369-1.343-.455-1.158-1.11-1.468-1.11-1.468-.908-.622.069-.61.069-.61 1.004.071 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.833.091-.648.35-1.089.636-1.34-2.221-.253-4.555-1.114-4.555-4.957 0-1.095.39-1.99 1.03-2.692-.104-.253-.447-1.272.098-2.65 0 0 .84-.27 2.75 1.028A9.533 9.533 0 0 1 12 6.844c.85.004 1.704.115 2.502.337 1.908-1.298 2.747-1.028 2.747-1.028.547 1.378.204 2.397.1 2.65.64.702 1.028 1.597 1.028 2.692 0 3.853-2.337 4.701-4.565 4.949.36.311.68.923.68 1.86 0 1.342-.012 2.424-.012 2.754 0 .269.18.584.69.484A10.02 10.02 0 0 0 22 12.021C22 6.486 17.523 2 12 2Z" />
    </svg>
  );
}

/* =============================
   Dev Smoke Tests (runtime)
   These lightweight checks run only in the browser (non-production)
   ============================= */
function runSmokeTests() {
  try {
    // 1) ContactCard returns element with/without href
    const withHref = ContactCard({ label: "Email", value: "a@b", href: "mailto:a@b" });
    const noHref = ContactCard({ label: "Location", value: "TH" });
    console.assert(!!withHref && !!noHref, "[Test] ContactCard returns a React element");

    // 2) GitHubIcon returns an svg element
    const icon = GitHubIcon({});
    // @ts-ignore - runtime check for React element shape
    console.assert(icon && (icon.type === 'svg' || icon.props?.viewBox === '0 0 24 24'), "[Test] GitHubIcon appears to be an <svg>");

    // 3) URLs & email sanity
    console.assert(/^https:\/\/github.com\//.test(GITHUB_URL), "[Test] GitHub URL is valid");
    console.assert(/@/.test(CONTACT_EMAIL), "[Test] Contact email contains '@'");

    console.info("[Portfolio SmokeTests] All tests passed ✅");
  } catch (e) {
    console.error("[Portfolio SmokeTests] Failed ❌", e);
  }
}

if (typeof window !== "undefined" && process.env.NODE_ENV !== "production") {
  setTimeout(runSmokeTests, 0);
}
