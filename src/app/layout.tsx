import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/sections/Header";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Clima",
  description: "Página de clima feita com Next.js",
  icons: {
    icon: "/assets/favicon.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${poppins.variable}`}>
      <body
        className={`h-screen w-screen md:bg-[url('/assets/bg.svg')] bg-[url('/assets/bg-mobile.png')] bg-cover bg-center`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
