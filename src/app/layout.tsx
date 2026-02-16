import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/sections/Header";

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
    <html lang="en">
      <body className={`h-screen w-screen md:bg-[url('/assets/bg.svg')] bg-[url('/assets/bg-mobile.png')] bg-cover bg-center`}>
        <Header />
        {children}
        </body>
    </html>
  );
}
