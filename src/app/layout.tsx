import '../styles/globals.css';
import '../styles/Calendar.css';
import '../styles/DatePicker.css';

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      {/* eslint-disable-next-line @next/next/no-head-element */}
      <head>
        <title>NBA Tracker</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <header className="fixed top-0 left-0 h-16 w-full bg-gradient-to-b from-black/50 to-black/0">
          <div className="mx-auto flex h-full w-[90%] max-w-[1440px] items-center">
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.svg" alt="NBA Tracker" width={150} />
            </div>
          </div>
        </header>

        <main className="mt-16">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
