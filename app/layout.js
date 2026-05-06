import './globals.css';
import { LangProvider } from './LangContext';
import Navbar from './Navbar';

export const metadata = {
  title: 'Portfolio | Djoudad Yazid',
  description: 'Portfolio de Yazid Djoudad — Product Owner & Développeur Full-Stack',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <LangProvider>
          <div className="bg-orbs" aria-hidden="true">
            <div className="orb orb-1" />
            <div className="orb orb-2" />
            <div className="orb orb-3" />
            <div className="orb orb-4" />
          </div>
          <Navbar />
          {children}
        </LangProvider>
      </body>
    </html>
  );
}
