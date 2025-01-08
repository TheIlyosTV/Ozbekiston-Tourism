import "./globals.css";
import { Montserrat } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";

const montserrat = Montserrat({ subsets: ["latin", "cyrillic"] });

export const metadata = {
  title: "O'zbekiston Sayyohlik Salohiyati",
  description: "O'zbekistonning 12 ta viloyati bo'yicha sayyohlik ma'lumotlari",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uz">
      <body className={montserrat.className}>
        <Header />
        <main className="min-h-screen bg-background">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
