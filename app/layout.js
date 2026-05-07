import './globals.css';
import { LangProvider } from './LangContext';
import Navbar from './Navbar';
import NeuralBackground from './NeuralBackground';

export const metadata = {
  title: 'Portfolio | Djoudad Yazid',
  description: 'Portfolio de Yazid Djoudad — Product Owner & Développeur Full-Stack',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <LangProvider>
          <NeuralBackground accent="#818cf8" count={120} />
          <Navbar />
          {children}
        </LangProvider>
      </body>
    </html>
  );
}
