import '../styles/globals.css';

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>Next.js</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>

      <body>
        <aside>Navigation</aside>

        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
