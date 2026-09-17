import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cristian Forero | Software Developer",
  description:
    "Interactive portfolio showcasing my projects and skills as a full-stack developer",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><defs><linearGradient id='gold' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stop-color='%23f5e7b5'/><stop offset='50%' stop-color='%23d4af37'/><stop offset='100%' stop-color='%23b88a2b'/></linearGradient></defs><rect width='100' height='100' fill='transparent'/><text x='50' y='70' text-anchor='middle' font-size='52' font-weight='700' font-family='Georgia, Times New Roman, serif' fill='url(%23gold)' letter-spacing='-2'>CF</text></svg>",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-white text-gray-900 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
