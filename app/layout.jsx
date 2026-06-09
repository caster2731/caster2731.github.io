import './globals.css';

export const metadata = {
  title: "Caster's Portfolio",
  description: 'Portfolio of Caster - AI radio, automation, and dashboards.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
