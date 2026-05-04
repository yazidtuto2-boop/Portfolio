export default function HomePage() {
  return (
    <main className="page-shell">
      <section className="hero">
        <div>
          <p className="eyebrow">Product Owner & Développeur Technique</p>
          <h1>Yazid Djouad</h1>
          <p className="tagline">
            Ingénieur logiciel expert en pilotage produit, modernisation d’applications et développement fullstack.
          </p>
          <div className="cta-row">
            <a href="mailto:yazid.djoudad@hotmail.com" className="button primary">Contactez-moi</a>
            <a href="#expertise" className="button secondary">Voir mon profil</a>
          </div>
        </div>
        <div className="hero-card">
          <p className="card-title">À propos de moi</p>
          <p>
            Expert hybride qui allie l'exigence industrielle d'Airbus à la vision produit d'un CEO en SaaS. Je bâtis des solutions techniques robustes et des produits centrés utilisateur, avec une passion particulière pour l'IA.
          </p>

          <div className="contact-grid">
            <div>
              <p className="label">Email</p>
              <p>yazid.djoudad@hotmail.com</p>
            </div>
            <div>
              <p className="label">Téléphone</p>
              <p>+33 6 67 61 19 05</p>
            </div>
            <div>
              <p className="label">Localisation</p>
              <p>Castelginest, France</p>
            </div>
            <div>
              <p className="label">Langues</p>
              <p>Français, Anglais</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="expertise">
        <div className="section-heading">
          <p className="eyebrow">À propos</p>
          <h2>Profil Product Owner & Développement</h2>
        </div>
        <p className="section-copy">
          Je suis un ingénieur logiciel et Product Owner avec une expérience concrète dans la transformation digitale, la modernisation de systèmes complexes, et la création d’expériences utilisateurs performantes. Je conçois des produits alignés aux besoins métiers tout en garantissant une architecture technique solide.
        </p>
      </section>


      <section className="grid-two">
        <div className="section-card">
          <p className="card-title">Expériences clés</p>
          <article>
            <h3>CEO / Product Owner — <a href="https://www.suportify.ai/" target="_blank" rel="noopener noreferrer" className="company-link">Suportify</a></h3>
            <p className="meta">2025 - aujourd'hui</p>
            <p className="company-description">Fondateur et CEO de Suportify, solution SaaS d'Intelligence Artificielle pour l'optimisation du service après-vente.</p>
            <ul>
              <li>Conception du produit et rédaction du cahier des charges fonctionnel et technique.</li>
              <li>Pilotage de la feuille de route produit IA et priorisation des fonctionnalités.</li>
              <li>Développement front-end React/TypeScript pour une UI performante.</li>
              <li>Analyse des besoins métiers et optimisation du parcours SAV.</li>
            </ul>
          </article>
          <article>
            <h3>Ingénieur Logiciel — Airbus</h3>
            <p className="meta">03/2022 - 07/2024</p>
            <ul>
              <li>Modernisation fullstack d’applications industrielles avec ReactJS et Node.js.</li>
              <li>Maintenance et évolution sur des environnements Big Data Slate / Palantir.</li>
              <li>Développement mobile Kotlin pour des solutions métier embarquées.</li>
              <li>Collaboration entre équipes techniques et parties prenantes métier.</li>
            </ul>
          </article>
        </div>

        <div className="section-card">
          <p className="card-title">Compétences</p>
          <div className="skill-grid">
            <div>
              <h4>Product</h4>
              <p>Agilité, Scrum, cadrage, rédaction de CDC, recueil des besoins métier, vision produit SaaS, gestion IA.</p>
            </div>
            <div>
              <h4>Technique</h4>
              <p>JavaScript, TypeScript, React, Angular, Node.js, Python, Kotlin, Android Studio, C/C++.</p>
            </div>
            <div>
              <h4>Outils</h4>
              <p>Git, Docker, Linux, Windows, Jira, Linear, Trello, Notion.</p>
            </div>
            <div>
              <h4>Soft skills</h4>
              <p>Autonomie, esprit d’analyse, communication hybride, rigueur industrielle.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Formation</p>
          <h2>Parcours académique</h2>
        </div>
        <div className="timeline">
          <div className="timeline-item">
            <p className="timeline-date">2016-2022</p>
            <h3>Master Expert en Technologie de l'information — Epitech</h3>
            <p>Expertise technique, architecture logicielle, algorithmie, gestion de projet et pilotage.</p>
          </div>
          <div className="timeline-item">
            <p className="timeline-date">2015</p>
            <h3>Baccalauréat Scientifique — Lycée Paul Sabatier</h3>
            <p>Spécialisation Physique.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Mes intérêts</p>
          <h2>Passions & Inspirations</h2>
        </div>
        <div className="passions-grid">
          <article className="passion-article">
            <div className="passion-icon">🤖</div>
            <h3>Intelligence Artificielle</h3>
            <p>
              Passionné par les technologies IA et leurs applications réelles. Avec Suportify, je développe des solutions d'IA pour transformer le service client. Je m'intéresse particulièrement aux modèles de langage, aux recommandations et à l'automatisation intelligente.
            </p>
          </article>
          <article className="passion-article">
            <div className="passion-icon">⚽</div>
            <h3>Football</h3>
            <p>
              Joueur et passionné de football, je pratique ce sport régulièrement. C'est mon exutoire créatif et un excellent moyen de déstresser. Le football m'a enseigné l'importance du travail en équipe et de la stratégie.
            </p>
          </article>
          <article className="passion-article">
            <div className="passion-icon">📚</div>
            <h3>Mangas</h3>
            <p>
              Lecteur de mangas passionné, j'apprécie la narration visuelle unique du medium. Des classics incontournables aux seinen contemplatifs, les mangas m'inspirent créativement et culturellement dans mes approches de design et storytelling produit.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
