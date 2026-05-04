export default function HomePage() {
  return (
    <main className="page-shell">

      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">Product Owner &amp; Développeur Technique</p>
          <h1><span className="gradient-text">Yazid</span> Djoudad</h1>
          <p className="tagline">
            Ingénieur logiciel expert en pilotage produit, modernisation d&apos;applications et développement fullstack.
          </p>
          <div className="cta-row">
            <a href="tel:+33667611905" className="button primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{marginRight: '0.5rem', flexShrink: 0}}>
                <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24 11.47 11.47 0 0 0 3.58.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2z"/>
              </svg>
              06 67 61 19 05
            </a>
            <a href="#expertise" className="button secondary">Voir mon profil</a>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">3+</span>
              <span className="stat-label">Années d&apos;exp.</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-number">2</span>
              <span className="stat-label">Entreprises clés</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-number">10+</span>
              <span className="stat-label">Technologies</span>
            </div>
          </div>
        </div>

        <div className="hero-card glass-card">
          <p className="card-label">À propos de moi</p>
          <p className="hero-about">
            Expert hybride qui allie l&apos;exigence industrielle d&apos;Airbus à la vision produit d&apos;un CEO en SaaS. Je bâtis des solutions techniques robustes et des produits centrés utilisateur, avec une passion particulière pour l&apos;IA.
          </p>
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
                <p className="ci-label">Téléphone</p>
                <p className="ci-value">+33 6 67 61 19 05</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="ci-icon">📍</span>
              <div>
                <p className="ci-label">Localisation</p>
                <p className="ci-value">Castelginest, France</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="ci-icon">🌐</span>
              <div>
                <p className="ci-label">Langues</p>
                <p className="ci-value">Français, Anglais</p>
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

      {/* About */}
      <section className="section" id="expertise">
        <div className="section-head">
          <span className="section-tag">À propos</span>
          <h2>Profil Product Owner &amp; Développement</h2>
          <p className="section-copy">
            Je suis un ingénieur logiciel et Product Owner avec une expérience concrète dans la transformation digitale, la modernisation de systèmes complexes, et la création d&apos;expériences utilisateurs performantes. Je conçois des produits alignés aux besoins métiers tout en garantissant une architecture technique solide.
          </p>
        </div>
      </section>

      {/* Experience */}
      <section className="section" id="experience">
        <div className="section-head">
          <span className="section-tag">Carrière</span>
          <h2>Expériences clés</h2>
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
              <span className="exp-date">2025 — auj.</span>
            </div>
            <p className="exp-desc">Fondateur et CEO de Suportify, solution SaaS d&apos;Intelligence Artificielle pour l&apos;optimisation du service après-vente.</p>
            <ul className="exp-bullets">
              <li>Conception du produit et rédaction du cahier des charges fonctionnel et technique.</li>
              <li>Pilotage de la feuille de route produit IA et priorisation des fonctionnalités.</li>
              <li>Développement front-end React/TypeScript pour une UI performante.</li>
              <li>Analyse des besoins métiers et optimisation du parcours SAV.</li>
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
                <h3>Ingénieur Logiciel</h3>
                <p className="exp-company">Airbus</p>
              </div>
              <span className="exp-date">03/2022 — 07/2024</span>
            </div>
            <ul className="exp-bullets">
              <li>Modernisation fullstack d&apos;applications industrielles avec ReactJS et Node.js.</li>
              <li>Maintenance et évolution sur des environnements Big Data Slate / Palantir.</li>
              <li>Développement mobile Kotlin pour des solutions métier embarquées.</li>
              <li>Collaboration entre équipes techniques et parties prenantes métier.</li>
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

      {/* Skills */}
      <section className="section">
        <div className="section-head">
          <span className="section-tag">Compétences</span>
          <h2>Stack technique &amp; savoir-faire</h2>
        </div>
        <div className="skills-grid">
          <div className="skill-cat glass-card">
            <h4 className="skill-cat-title">Product</h4>
            <div className="tag-row">
              <span className="tag">Agilité</span>
              <span className="tag">Scrum</span>
              <span className="tag">Cadrage</span>
              <span className="tag">Rédaction CDC</span>
              <span className="tag">Vision SaaS</span>
              <span className="tag">Gestion IA</span>
            </div>
          </div>
          <div className="skill-cat glass-card">
            <h4 className="skill-cat-title">Technique</h4>
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
            <h4 className="skill-cat-title">Outils</h4>
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
            <h4 className="skill-cat-title">Soft Skills</h4>
            <div className="tag-row">
              <span className="tag">Autonomie</span>
              <span className="tag">Esprit d&apos;analyse</span>
              <span className="tag">Communication</span>
              <span className="tag">Rigueur industrielle</span>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="section" id="formation">
        <div className="section-head">
          <span className="section-tag">Formation</span>
          <h2>Parcours académique</h2>
        </div>
        <div className="timeline">
          <div className="tl-item">
            <div className="tl-marker" />
            <div className="tl-card glass-card">
              <span className="tl-date">2016 — 2022</span>
              <h3>Master Expert en Technologie de l&apos;information</h3>
              <p className="tl-org">Epitech</p>
              <p>Expertise technique, architecture logicielle, algorithmie, gestion de projet et pilotage.</p>
            </div>
          </div>
          <div className="tl-item">
            <div className="tl-marker" />
            <div className="tl-card glass-card">
              <span className="tl-date">2015</span>
              <h3>Baccalauréat Scientifique</h3>
              <p className="tl-org">Lycée Paul Sabatier</p>
              <p>Spécialisation Physique.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Passions */}
      <section className="section" id="passions">
        <div className="section-head">
          <span className="section-tag">Mes intérêts</span>
          <h2>Passions &amp; Inspirations</h2>
        </div>
        <div className="passions-grid">
          <article className="passion-card glass-card">
            <span className="passion-icon">🤖</span>
            <h3>Intelligence Artificielle</h3>
            <p>Passionné par les technologies IA et leurs applications réelles. Avec Suportify, je développe des solutions d&apos;IA pour transformer le service client.</p>
          </article>
          <article className="passion-card glass-card">
            <span className="passion-icon">⚽</span>
            <h3>Football</h3>
            <p>Joueur et passionné de football, je pratique ce sport régulièrement. Le football m&apos;a enseigné l&apos;importance du travail en équipe et de la stratégie.</p>
          </article>
          <article className="passion-card glass-card">
            <span className="passion-icon">📚</span>
            <h3>Mangas</h3>
            <p>Lecteur de mangas passionné, j&apos;apprécie la narration visuelle unique du medium. Les mangas m&apos;inspirent créativement dans mes approches de design produit.</p>
          </article>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <p>© 2025 Yazid Djoudad. Tous droits réservés.</p>
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
