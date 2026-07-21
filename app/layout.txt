import "./globals.css";

export const metadata = {
  title: "Dashboard ENEMDU Cotopaxi 2025",
  description: "Política pública para reducir desempleo y subempleo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}