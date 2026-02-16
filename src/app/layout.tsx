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
      <body>
        <Header />
        {children}
        </body>
    </html>
  );
}
