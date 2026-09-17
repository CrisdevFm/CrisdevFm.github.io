import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cristian Forero | Software Developer",
  description:
    "Interactive portfolio showcasing my projects and skills as a full-stack developer",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text x='50' y='70' text-anchor='middle' font-size='52' font-weight='700' font-family='Georgia, Times New Roman, serif' fill='%23d4af37' letter-spacing='-2'>CF</text></svg>",
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
