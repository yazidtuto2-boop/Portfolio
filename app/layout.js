import './globals.css';

export const metadata = {
  title: 'Portfolio | Djoudad Yazid',
  description: 'Portfolio moderne en Next.js basé sur votre CV',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <div className="floating-elements">
          {/* Bureaux */}
          <div className="floating-element">
            <svg className="desk-icon" viewBox="0 0 24 24">
              <path d="M4 5h16a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zM4 10h16a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1zM6 12v4h2v-4H6zm4 0v4h2v-4h-2zm4 0v4h2v-4h-2z"/>
            </svg>
          </div>
          <div className="floating-element">
            <svg className="robot-icon" viewBox="0 0 24 24">
              <path d="M12 2C13.1 2 14 2.9 14 4V5H16C17.1 5 18 5.9 18 7V21C18 22.1 17.1 23 16 23H8C6.9 23 6 22.1 6 21V7C6 5.9 6.9 5 8 5H10V4C10 2.9 10.9 2 12 2M12 4C11.4 4 11 4.4 11 5V6H13V5C13 4.4 12.6 4 12 4M8 7V9H10V7H8M14 7V9H16V7H14M8 10V12H10V10H8M14 10V12H16V10H14M8 13V15H10V13H8M14 13V15H16V13H14M8 16V18H10V16H8M14 16V18H16V16H14Z"/>
            </svg>
          </div>
          <div className="floating-element">
            <svg className="football-icon" viewBox="0 0 24 24">
              <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2M21 9V7L19 6.6C18.8 6 18.5 5.4 18.1 4.9L19 3L17 1L15.4 1.9C14.9 1.5 14.3 1.2 13.7 1L13.3 3H11V5H13.3L13.7 7C14.3 7.2 14.9 7.5 15.4 7.9L17 7L19 9H21M21 11V15H19V13.6C18.8 14.2 18.5 14.8 18.1 15.3L19 17L17 19L15.4 18.1C14.9 18.5 14.3 18.8 13.7 19L13.3 21H11V19H13.3L13.7 17C14.3 16.8 14.9 16.5 15.4 16.1L17 17L19 15V11H21M3 9V7L5 6.6C5.2 6 5.5 5.4 5.9 4.9L5 3L7 1L8.6 1.9C9.1 1.5 9.7 1.2 10.3 1L10.7 3H13V5H10.7L10.3 7C9.7 7.2 9.1 7.5 8.6 7.9L7 7L5 9H3M3 11V15H5V13.6C5.2 14.2 5.5 14.8 5.9 15.3L5 17L7 19L8.6 18.1C9.1 18.5 9.7 18.8 10.3 19L10.7 21H13V19H10.7L10.3 17C9.7 16.8 9.1 16.5 8.6 16.1L7 17L5 15V11H3Z"/>
            </svg>
          </div>
          <div className="floating-element">
            <svg className="desk-icon" viewBox="0 0 24 24">
              <path d="M4 5h16a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zM4 10h16a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1zM6 12v4h2v-4H6zm4 0v4h2v-4h-2zm4 0v4h2v-4h-2z"/>
            </svg>
          </div>
          <div className="floating-element">
            <svg className="robot-icon" viewBox="0 0 24 24">
              <path d="M12 2C13.1 2 14 2.9 14 4V5H16C17.1 5 18 5.9 18 7V21C18 22.1 17.1 23 16 23H8C6.9 23 6 22.1 6 21V7C6 5.9 6.9 5 8 5H10V4C10 2.9 10.9 2 12 2M12 4C11.4 4 11 4.4 11 5V6H13V5C13 4.4 12.6 4 12 4M8 7V9H10V7H8M14 7V9H16V7H14M8 10V12H10V10H8M14 10V12H16V10H14M8 13V15H10V13H8M14 13V15H16V13H14M8 16V18H10V16H8M14 16V18H16V16H14Z"/>
            </svg>
          </div>
          <div className="floating-element">
            <svg className="football-icon" viewBox="0 0 24 24">
              <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2M21 9V7L19 6.6C18.8 6 18.5 5.4 18.1 4.9L19 3L17 1L15.4 1.9C14.9 1.5 14.3 1.2 13.7 1L13.3 3H11V5H13.3L13.7 7C14.3 7.2 14.9 7.5 15.4 7.9L17 7L19 9H21M21 11V15H19V13.6C18.8 14.2 18.5 14.8 18.1 15.3L19 17L17 19L15.4 18.1C14.9 18.5 14.3 18.8 13.7 19L13.3 21H11V19H13.3L13.7 17C14.3 16.8 14.9 16.5 15.4 16.1L17 17L19 15V11H21M3 9V7L5 6.6C5.2 6 5.5 5.4 5.9 4.9L5 3L7 1L8.6 1.9C9.1 1.5 9.7 1.2 10.3 1L10.7 3H13V5H10.7L10.3 7C9.7 7.2 9.1 7.5 8.6 7.9L7 7L5 9H3M3 11V15H5V13.6C5.2 14.2 5.5 14.8 5.9 15.3L5 17L7 19L8.6 18.1C9.1 18.5 9.7 18.8 10.3 19L10.7 21H13V19H10.7L10.3 17C9.7 16.8 9.1 16.5 8.6 16.1L7 17L5 15V11H3Z"/>
            </svg>
          </div>
          <div className="floating-element">
            <svg className="desk-icon" viewBox="0 0 24 24">
              <path d="M4 5h16a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zM4 10h16a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1zM6 12v4h2v-4H6zm4 0v4h2v-4h-2zm4 0v4h2v-4h-2z"/>
            </svg>
          </div>
          <div className="floating-element">
            <svg className="robot-icon" viewBox="0 0 24 24">
              <path d="M12 2C13.1 2 14 2.9 14 4V5H16C17.1 5 18 5.9 18 7V21C18 22.1 17.1 23 16 23H8C6.9 23 6 22.1 6 21V7C6 5.9 6.9 5 8 5H10V4C10 2.9 10.9 2 12 2M12 4C11.4 4 11 4.4 11 5V6H13V5C13 4.4 12.6 4 12 4M8 7V9H10V7H8M14 7V9H16V7H14M8 10V12H10V10H8M14 10V12H16V10H14M8 13V15H10V13H8M14 13V15H16V13H14M8 16V18H10V16H8M14 16V18H16V16H14Z"/>
            </svg>
          </div>
          <div className="floating-element">
            <svg className="desk-icon" viewBox="0 0 24 24">
              <path d="M4 5h16a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zM4 10h16a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1zM6 12v4h2v-4H6zm4 0v4h2v-4h-2zm4 0v4h2v-4h-2z"/>
            </svg>
          </div>
          <div className="floating-element">
            <svg className="football-icon" viewBox="0 0 24 24">
              <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2M21 9V7L19 6.6C18.8 6 18.5 5.4 18.1 4.9L19 3L17 1L15.4 1.9C14.9 1.5 14.3 1.2 13.7 1L13.3 3H11V5H13.3L13.7 7C14.3 7.2 14.9 7.5 15.4 7.9L17 7L19 9H21M21 11V15H19V13.6C18.8 14.2 18.5 14.8 18.1 15.3L19 17L17 19L15.4 18.1C14.9 18.5 14.3 18.8 13.7 19L13.3 21H11V19H13.3L13.7 17C14.3 16.8 14.9 16.5 15.4 16.1L17 17L19 15V11H21M3 9V7L5 6.6C5.2 6 5.5 5.4 5.9 4.9L5 3L7 1L8.6 1.9C9.1 1.5 9.7 1.2 10.3 1L10.7 3H13V5H10.7L10.3 7C9.7 7.2 9.1 7.5 8.6 7.9L7 7L5 9H3M3 11V15H5V13.6C5.2 14.2 5.5 14.8 5.9 15.3L5 17L7 19L8.6 18.1C9.1 18.5 9.7 18.8 10.3 19L10.7 21H13V19H10.7L10.3 17C9.7 16.8 9.1 16.5 8.6 16.1L7 17L5 15V11H3Z"/>
            </svg>
          </div>
          <div className="floating-element">
            <svg className="book-icon" viewBox="0 0 24 24">
              <path d="M5 4a2 2 0 0 0-2 2v12a1 1 0 0 0 1.44.9L12 16.7l7.56 2.2A1 1 0 0 0 21 18V6a2 2 0 0 0-2-2H5zm1 2h12v10.18l-6-1.75-6 1.75V6zm0 2v1.5l6-1.75 6 1.75V8H6zm0 3.8L12 11l6 .8V16l-6-1.75L6 16v-6.2z"/>
            </svg>
          </div>
          <div className="floating-element">
            <svg className="football-icon" viewBox="0 0 24 24">
              <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2M21 9V7L19 6.6C18.8 6 18.5 5.4 18.1 4.9L19 3L17 1L15.4 1.9C14.9 1.5 14.3 1.2 13.7 1L13.3 3H11V5H13.3L13.7 7C14.3 7.2 14.9 7.5 15.4 7.9L17 7L19 9H21M21 11V15H19V13.6C18.8 14.2 18.5 14.8 18.1 15.3L19 17L17 19L15.4 18.1C14.9 18.5 14.3 18.8 13.7 19L13.3 21H11V19H13.3L13.7 17C14.3 16.8 14.9 16.5 15.4 16.1L17 17L19 15V11H21M3 9V7L5 6.6C5.2 6 5.5 5.4 5.9 4.9L5 3L7 1L8.6 1.9C9.1 1.5 9.7 1.2 10.3 1L10.7 3H13V5H10.7L10.3 7C9.7 7.2 9.1 7.5 8.6 7.9L7 7L5 9H3M3 11V15H5V13.6C5.2 14.2 5.5 14.8 5.9 15.3L5 17L7 19L8.6 18.1C9.1 18.5 9.7 18.8 10.3 19L10.7 21H13V19H10.7L10.3 17C9.7 16.8 9.1 16.5 8.6 16.1L7 17L5 15V11H3Z"/>
            </svg>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
