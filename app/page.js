"use client";
import { useState } from "react";
import { useLang } from "./LangContext";

const VIDEOS = ["/app-mobile1.mp4", "/app-mobile2.mp4", "/app-mobile3.mp4"];
const SUPORTIFY = ["/suportify.png", "/suportify1.jpg", "/suportify2.jpg"];

const T = {
  fr: {
    eyebrow: "Product Owner & Développeur Technique",
    tagline: "Ingénieur logiciel expert en pilotage produit, modernisation d'applications et développement fullstack.",
    seeProfile: "Voir mon profil",
    yearsExp: "Années d'exp.",
    keyCompanies: "Entreprises clés",
    technologies: "Technologies",
    aboutLabel: "À propos de moi",
    aboutText: "Expert hybride qui allie l'exigence industrielle d'Airbus à la vision produit d'un CEO en SaaS. Je bâtis des solutions techniques robustes et des produits centrés utilisateur, avec une passion particulière pour l'IA.",
    phoneLabel: "Téléphone",
    locationLabel: "Localisation",
    locationVal: "Castelginest, France",
    languagesLabel: "Langues",
    languagesVal: "Français, Anglais",
    aboutTag: "À propos",
    aboutTitle: "Profil Product Owner & Développement",
    aboutDesc: "Je suis un ingénieur logiciel et Product Owner avec une expérience concrète dans la transformation digitale, la modernisation de systèmes complexes, et la création d'expériences utilisateurs performantes. Je conçois des produits alignés aux besoins métiers tout en garantissant une architecture technique solide.",
    careerTag: "Carrière",
    careerTitle: "Expériences clés",
    ceoDate: "2025 — auj.",
    ceoDesc: "Fondateur et CEO de Suportify, solution SaaS d'Intelligence Artificielle pour l'optimisation du service après-vente.",
    ceoBullets: [
      "Conception du produit et rédaction du cahier des charges fonctionnel et technique.",
      "Pilotage de la feuille de route produit IA et priorisation des fonctionnalités.",
      "Développement front-end React/TypeScript pour une UI performante.",
      "Analyse des besoins métiers et optimisation du parcours SAV.",
    ],
    airbusTitle: "Ingénieur Logiciel",
    airbusBullets: [
      "Modernisation fullstack d'applications industrielles avec ReactJS et Node.js.",
      "Maintenance et évolution sur des environnements Big Data Slate / Palantir.",
      "Développement mobile Kotlin pour des solutions métier embarquées.",
      "Collaboration entre équipes techniques et parties prenantes métier.",
    ],
    portfolioTag: "Portfolio",
    portfolioTitle: "Sites web & applications réalisés",
    suportifyDesc: "Plateforme SaaS IA pour l'optimisation du service après-vente client.",
    seeProject: "Voir le projet",
    aiStylistDesc: "Application mobile dotée d'un agent IA styliste qui conseille l'utilisateur sur ses tenues et génère une projection visuelle personnalisée.",
    blancheDesc: "Ingénieur logiciel indépendant au sein de l'agence, j'interviens sur une multitude de projets web et applicatifs variés.",
    skillsTag: "Compétences",
    skillsTitle: "Stack technique & savoir-faire",
    skillProduct: "Product",
    skillTech: "Technique",
    skillTools: "Outils",
    skillSoft: "Soft Skills",
    productSkills: ["Agilité", "Scrum", "Cadrage", "Rédaction CDC", "Vision SaaS", "Gestion IA"],
    softSkills: ["Autonomie", "Esprit d'analyse", "Communication", "Rigueur industrielle"],
    skillLangs: "Langues",
    langSkills: ["Français — Bilingue", "Anglais — B2", "Espagnol — B1", "Arabe — Courant", "Berbère — Langue maternelle"],
    eduTag: "Formation",
    eduTitle: "Parcours académique",
    epitechTitle: "Master Expert en Technologie de l'information",
    epitechDesc: "Expertise technique, architecture logicielle, algorithmie, gestion de projet et pilotage.",
    bacTitle: "Baccalauréat Scientifique",
    bacDesc: "Spécialisation Physique.",
    passionsTag: "Mes intérêts",
    passionsTitle: "Passions & Inspirations",
    aiPassionTitle: "Intelligence Artificielle",
    aiPassionDesc: "Passionné par les technologies IA et leurs applications réelles. Avec Suportify, je développe des solutions d'IA pour transformer le service client.",
    footballTitle: "Football",
    footballDesc: "Joueur et passionné de football, je pratique ce sport régulièrement. Le football m'a enseigné l'importance du travail en équipe et de la stratégie.",
    mangaTitle: "Lecture",
    mangaDesc: "Lecteur passionné, j'apprécie aussi bien les mangas que la littérature au sens large. La lecture nourrit ma créativité et ma capacité d'analyse au quotidien.",
    footerRights: "© 2025 Yazid Djoudad. Tous droits réservés.",
    prev: "Précédent",
    next: "Suivant",
  },
  en: {
    eyebrow: "Product Owner & Technical Developer",
    tagline: "Software engineer expert in product management, application modernization and fullstack development.",
    seeProfile: "View my profile",
    yearsExp: "Years of exp.",
    keyCompanies: "Key companies",
    technologies: "Technologies",
    aboutLabel: "About me",
    aboutText: "Hybrid expert combining Airbus's industrial standards with the product vision of a SaaS CEO. I build robust technical solutions and user-centric products, with a particular passion for AI.",
    phoneLabel: "Phone",
    locationLabel: "Location",
    locationVal: "Castelginest, France",
    languagesLabel: "Languages",
    languagesVal: "French, English",
    aboutTag: "About",
    aboutTitle: "Product Owner & Development Profile",
    aboutDesc: "I am a software engineer and Product Owner with hands-on experience in digital transformation, modernization of complex systems, and creating high-performance user experiences. I design products aligned with business needs while ensuring a solid technical architecture.",
    careerTag: "Career",
    careerTitle: "Key experiences",
    ceoDate: "2025 — now",
    ceoDesc: "Founder and CEO of Suportify, an AI SaaS solution for optimizing after-sales customer service.",
    ceoBullets: [
      "Product conception and writing of functional and technical specifications.",
      "Steering the AI product roadmap and prioritizing features.",
      "Front-end development with React/TypeScript for a high-performance UI.",
      "Business needs analysis and after-sales journey optimization.",
    ],
    airbusTitle: "Software Engineer",
    airbusBullets: [
      "Fullstack modernization of industrial applications with ReactJS and Node.js.",
      "Maintenance and evolution on Big Data Slate / Palantir environments.",
      "Kotlin mobile development for embedded business solutions.",
      "Collaboration between technical teams and business stakeholders.",
    ],
    portfolioTag: "Portfolio",
    portfolioTitle: "Websites & applications built",
    suportifyDesc: "AI SaaS platform for optimizing customer after-sales service.",
    seeProject: "View project",
    aiStylistDesc: "Mobile application with an AI stylist agent that advises users on outfits and generates a personalized visual result.",
    blancheDesc: "Independent software engineer within the agency, working on a wide variety of web and application projects.",
    skillsTag: "Skills",
    skillsTitle: "Technical stack & expertise",
    skillProduct: "Product",
    skillTech: "Technical",
    skillTools: "Tools",
    skillSoft: "Soft Skills",
    productSkills: ["Agility", "Scrum", "Scoping", "Spec writing", "SaaS vision", "AI management"],
    softSkills: ["Autonomy", "Analytical thinking", "Communication", "Industrial rigor"],
    skillLangs: "Languages",
    langSkills: ["French — Bilingual", "English — B2", "Spanish — B1", "Arabic — Fluent", "Berber — Native language"],
    eduTag: "Education",
    eduTitle: "Academic background",
    epitechTitle: "Master's Expert in Information Technology",
    epitechDesc: "Technical expertise, software architecture, algorithms, project management and steering.",
    bacTitle: "Scientific Baccalaureate",
    bacDesc: "Physics specialization.",
    passionsTag: "My interests",
    passionsTitle: "Passions & Inspirations",
    aiPassionTitle: "Artificial Intelligence",
    aiPassionDesc: "Passionate about AI technologies and their real-world applications. With Suportify, I develop AI solutions to transform customer service.",
    footballTitle: "Football",
    footballDesc: "A football player and enthusiast, I practice the sport regularly. Football has taught me the importance of teamwork and strategy.",
    mangaTitle: "Reading",
    mangaDesc: "An avid reader, I enjoy manga as well as literature in a broader sense. Reading fuels my creativity and analytical thinking on a daily basis.",
    footerRights: "© 2025 Yazid Djoudad. All rights reserved.",
    prev: "Previous",
    next: "Next",
  },
};

export default function HomePage() {
  const { lang } = useLang();
  const [videoIndex, setVideoIndex] = useState(0);
  const nextVideo = () => setVideoIndex((i) => (i + 1) % VIDEOS.length);
  const [supSlide, setSupSlide] = useState(0);
  const prevSup = () => setSupSlide((i) => (i - 1 + SUPORTIFY.length) % SUPORTIFY.length);
  const nextSup = () => setSupSlide((i) => (i + 1) % SUPORTIFY.length);
  const t = T[lang];

  return (
    <main className="page-shell">


      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">{t.eyebrow}</p>
          <h1><span className="gradient-text">Yazid</span> Djoudad</h1>
          <p className="tagline">{t.tagline}</p>
          <div className="cta-row">
            <a href="tel:+33667611905" className="button primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{marginRight: '0.5rem', flexShrink: 0}}>
                <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24 11.47 11.47 0 0 0 3.58.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2z"/>
              </svg>
              06 67 61 19 05
            </a>
            <a href="#expertise" className="button secondary">{t.seeProfile}</a>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">3+</span>
              <span className="stat-label">{t.yearsExp}</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-number">2</span>
              <span className="stat-label">{t.keyCompanies}</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-number">10+</span>
              <span className="stat-label">{t.technologies}</span>
            </div>
          </div>
          <p className="hero-about-desc" id="expertise">{t.aboutDesc}</p>
        </div>

        <div className="hero-card glass-card">
          <p className="card-label">{t.aboutLabel}</p>
          <p className="hero-about">{t.aboutText}</p>
          <div className="contact-list">
            <div className="contact-item">
              <span className="ci-icon">✉</span>
              <div>
                <p className="ci-label">Email</p>
                <p className="ci-value">yazid.djoudad@hotmail.com</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="ci-icon">📞</span>
              <div>
                <p className="ci-label">{t.phoneLabel}</p>
                <p className="ci-value">+33 6 67 61 19 05</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="ci-icon">📍</span>
              <div>
                <p className="ci-label">{t.locationLabel}</p>
                <p className="ci-value">{t.locationVal}</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="ci-icon">🌐</span>
              <div>
                <p className="ci-label">{t.languagesLabel}</p>
                <p className="ci-value">{t.languagesVal}</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="ci-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#818cf8">
                  <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57A1.46 1.46 0 0 1 14.38 12.11A1.46 1.46 0 0 1 15.84 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z"/>
                </svg>
              </span>
              <div>
                <p className="ci-label">LinkedIn</p>
                <a href="https://www.linkedin.com/in/yazid-djoudad-424312142/" target="_blank" rel="noopener noreferrer" className="ci-link">Yazid Djoudad</a>
              </div>
            </div>
            <div className="contact-item">
              <span className="ci-icon">💼</span>
              <div>
                <p className="ci-label">Malt</p>
                <a href="https://www.malt.fr/profile/yaziddjoudad" target="_blank" rel="noopener noreferrer" className="ci-link">yaziddjoudad</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="section" id="experience">
        <div className="section-head">
          <span className="section-tag">{t.careerTag}</span>
          <h2>{t.careerTitle}</h2>
        </div>
        <div className="exp-list">
          <div className="exp-card glass-card">
            <div className="exp-header">
              <div>
                <h3>CEO / Product Owner</h3>
                <p className="exp-company">
                  <a href="https://www.suportify.ai/" target="_blank" rel="noopener noreferrer">Suportify</a>
                </p>
              </div>
              <span className="exp-date">{t.ceoDate}</span>
            </div>
            <p className="exp-desc">{t.ceoDesc}</p>
            <ul className="exp-bullets">
              {t.ceoBullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
            <div className="tag-row">
              <span className="tag accent">React</span>
              <span className="tag accent">TypeScript</span>
              <span className="tag accent">Node.js</span>
              <span className="tag">IA / LLM</span>
              <span className="tag">Product</span>
              <span className="tag">SaaS</span>
            </div>
          </div>

          <div className="exp-card glass-card">
            <div className="exp-header">
              <div>
                <h3>{t.airbusTitle}</h3>
                <p className="exp-company">Airbus</p>
              </div>
              <span className="exp-date">03/2022 — 07/2024</span>
            </div>
            <ul className="exp-bullets">
              {t.airbusBullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
            <div className="tag-row">
              <span className="tag accent">React</span>
              <span className="tag accent">Node.js</span>
              <span className="tag accent">Kotlin</span>
              <span className="tag">Big Data</span>
              <span className="tag">Palantir</span>
              <span className="tag">Fullstack</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="section" id="realisations">
        <div className="section-head">
          <span className="section-tag">{t.portfolioTag}</span>
          <h2>{t.portfolioTitle}</h2>
        </div>
        <div className="projects-grid">

          <article className="project-card glass-card">
            <div className="laptop-mockup-wrapper">
              <div className="laptop-lid">
                <div className="laptop-camera-dot" />
                <div className="laptop-display carousel-display">
                  <img key={supSlide} src={SUPORTIFY[supSlide]} alt={`Suportify ${supSlide + 1}`} className="carousel-img" />
                  <button className="carousel-btn carousel-btn--prev" onClick={prevSup} aria-label={t.prev}>&#8249;</button>
                  <button className="carousel-btn carousel-btn--next" onClick={nextSup} aria-label={t.next}>&#8250;</button>
                  <div className="carousel-dots">
                    {SUPORTIFY.map((_, i) => (
                      <span key={i} className={`carousel-dot${i === supSlide ? " active" : ""}`} onClick={() => setSupSlide(i)} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="laptop-body" />
            </div>
            <div className="project-body">
              <h3>Suportify</h3>
              <p>{t.suportifyDesc}</p>
              <div className="tag-row">
                <span className="tag accent">React</span>
                <span className="tag accent">TypeScript</span>
                <span className="tag">IA / LLM</span>
                <span className="tag">SaaS</span>
              </div>
              <a href="https://www.suportify.ai/" target="_blank" rel="noopener noreferrer" className="project-link">
                {t.seeProject}
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              </a>
            </div>
          </article>

          <article className="project-card glass-card">
            <div className="phone-mockup-wrapper">
              <div className="phone-frame">
                <div className="phone-notch" />
                <div className="phone-screen">
                  <video
                    key={videoIndex}
                    src={VIDEOS[videoIndex]}
                    autoPlay
                    muted
                    playsInline
                    onEnded={nextVideo}
                  />
                </div>
                <div className="phone-home-bar" />
              </div>
            </div>
            <div className="project-body">
              <h3>AI Stylist</h3>
              <p>{t.aiStylistDesc}</p>
              <div className="tag-row">
                <span className="tag accent">React Native</span>
                <span className="tag">IA / LLM</span>
                <span className="tag">{lang === "fr" ? "Génération d'images" : "Image generation"}</span>
              </div>
            </div>
          </article>

          <article className="project-card glass-card">
            <div className="laptop-mockup-wrapper">
              <div className="laptop-lid">
                <div className="laptop-camera-dot" />
                <div className="laptop-display">
                  <video
                    src="/project3.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                </div>
              </div>
              <div className="laptop-body" />
            </div>
            <div className="project-body">
              <h3>Blanche.agency</h3>
              <p>{t.blancheDesc}</p>
              <div className="tag-row">
                <span className="tag accent">React</span>
                <span className="tag accent">Node.js</span>
                <span className="tag">Fullstack</span>
                <span className="tag">Freelance</span>
              </div>
            </div>
          </article>

        </div>
      </section>

      {/* Skills */}
      <section className="section">
        <div className="section-head">
          <span className="section-tag">{t.skillsTag}</span>
          <h2>{t.skillsTitle}</h2>
        </div>
        <div className="skills-grid">
          <div className="skill-cat glass-card">
            <h4 className="skill-cat-title">{t.skillProduct}</h4>
            <div className="tag-row">
              {t.productSkills.map((s) => <span key={s} className="tag">{s}</span>)}
            </div>
          </div>
          <div className="skill-cat glass-card">
            <h4 className="skill-cat-title">{t.skillTech}</h4>
            <div className="tag-row">
              <span className="tag accent">JavaScript</span>
              <span className="tag accent">TypeScript</span>
              <span className="tag accent">React</span>
              <span className="tag accent">Angular</span>
              <span className="tag accent">Node.js</span>
              <span className="tag accent">Python</span>
              <span className="tag accent">Kotlin</span>
              <span className="tag accent">C/C++</span>
            </div>
          </div>
          <div className="skill-cat glass-card">
            <h4 className="skill-cat-title">{t.skillTools}</h4>
            <div className="tag-row">
              <span className="tag">Git</span>
              <span className="tag">Docker</span>
              <span className="tag">Linux</span>
              <span className="tag">Jira</span>
              <span className="tag">Linear</span>
              <span className="tag">Notion</span>
            </div>
          </div>
          <div className="skill-cat glass-card">
            <h4 className="skill-cat-title">{t.skillSoft}</h4>
            <div className="tag-row">
              {t.softSkills.map((s) => <span key={s} className="tag">{s}</span>)}
            </div>
          </div>
          <div className="skill-cat glass-card">
            <h4 className="skill-cat-title">{t.skillLangs}</h4>
            <div className="tag-row">
              {t.langSkills.map((s) => <span key={s} className="tag">{s}</span>)}
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="section" id="formation">
        <div className="section-head">
          <span className="section-tag">{t.eduTag}</span>
          <h2>{t.eduTitle}</h2>
        </div>
        <div className="timeline">
          <div className="tl-item">
            <div className="tl-marker" />
            <div className="tl-card glass-card">
              <span className="tl-date">2016 — 2022</span>
              <h3>{t.epitechTitle}</h3>
              <p className="tl-org">Epitech</p>
              <p>{t.epitechDesc}</p>
            </div>
          </div>
          <div className="tl-item">
            <div className="tl-marker" />
            <div className="tl-card glass-card">
              <span className="tl-date">2015</span>
              <h3>{t.bacTitle}</h3>
              <p className="tl-org">Lycée Paul Sabatier</p>
              <p>{t.bacDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Passions */}
      <section className="section" id="passions">
        <div className="section-head">
          <span className="section-tag">{t.passionsTag}</span>
          <h2>{t.passionsTitle}</h2>
        </div>
        <div className="passions-grid">
          <article className="passion-card glass-card">
            <span className="passion-icon">🤖</span>
            <h3>{t.aiPassionTitle}</h3>
            <p>{t.aiPassionDesc}</p>
          </article>
          <article className="passion-card glass-card">
            <span className="passion-icon">⚽</span>
            <h3>{t.footballTitle}</h3>
            <p>{t.footballDesc}</p>
          </article>
          <article className="passion-card glass-card">
            <span className="passion-icon">📚</span>
            <h3>{t.mangaTitle}</h3>
            <p>{t.mangaDesc}</p>
          </article>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <p>{t.footerRights}</p>
          <div className="footer-links">
            <a href="https://www.linkedin.com/in/yazid-djoudad-424312142/" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
            <a href="https://www.malt.fr/profile/yaziddjoudad" target="_blank" rel="noopener noreferrer" className="footer-link">Malt</a>
            <a href="mailto:yazid.djoudad@hotmail.com" className="footer-link">yazid.djoudad@hotmail.com</a>
          </div>
        </div>
      </footer>

    </main>
  );
}
