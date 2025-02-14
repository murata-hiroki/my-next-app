import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css"; // Tailwind を適用

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
