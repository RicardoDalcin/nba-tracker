import Image from 'next/image';

import logo from '../../public/logo.svg';

import '../styles/globals.css';

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
      </head>
      <body>
        <header className="fixed top-0 left-0 w-full h-16 bg-gradient-to-b from-black/50 to-black/0">
          <div className="w-full h-full max-w-[1440px] flex items-center mx-auto">
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
