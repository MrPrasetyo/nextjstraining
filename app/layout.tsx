import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NEXT JS Training App",
  description: "This Application is Project that help me (Dwi Prasetyo) learning Next JS to the next Level",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="w-full sticky py-6 top-0 flex justify-center items-center">
          <div className="gap-8 flex w-[90%] justify-center font-medium text-xl">
            <Link className="navlist" href={"/"}>Home</Link>
            <Link className="navlist" href={"/about"}>About</Link>
            <Link className="navlist" href={"/contact"}>Contact</Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
