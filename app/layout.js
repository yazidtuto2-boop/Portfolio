import './globals.css';

export const metadata = {
  title: 'Portfolio | Djoudad Yazid',
  description: 'Portfolio de Yazid Djoudad — Product Owner & Développeur Full-Stack',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <div className="bg-orbs" aria-hidden="true">
          <div className="orb orb-1" />
          <div className="orb orb-2" />
          <div className="orb orb-3" />
          <div className="orb orb-4" />
        </div>
        <nav className="navbar">
          <div className="nav-inner">
            <a href="#" className="nav-brand">YD</a>
            <div className="nav-links">
              <a href="#expertise" className="nav-link">Profil</a>
              <a href="#experience" className="nav-link">Expérience</a>
              <a href="#formation" className="nav-link">Formation</a>
              <a href="#passions" className="nav-link">Passions</a>
              <a href="mailto:yazid.djoudad@hotmail.com" className="nav-cta">Contact</a>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
