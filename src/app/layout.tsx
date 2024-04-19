import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer"
import { webData } from "@/data/website";

const josefinSans = Josefin_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: webData.title,
  description: webData.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={josefinSans.className}>
        <Navbar/>
          <div className='mt-[48px] md:mt-[84px] text-black'>
            {children}
          </div>
        <Footer/>
      </body>
    </html>
  );
}
