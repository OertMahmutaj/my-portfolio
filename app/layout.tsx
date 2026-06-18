import './globals.css';
import { GeistMono } from 'geist/font/mono'; 

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={GeistMono.variable}>
      {/* Apply the font via the font-mono class */}
      <body className="font-mono antialiased">{children}</body>
    </html>
  );
}