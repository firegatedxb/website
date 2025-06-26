import type { Metadata } from "next";
import { Host_Grotesk } from "next/font/google";
import "../../app/globals.css";
import Navbar from "../components/common/NavBars/Navbar";
export const dynamic = 'force-dynamic'
const hostGrostek = Host_Grotesk({
  variable: "--font-host-grotesk",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Fire Gate Safety & Security Systems",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${hostGrostek.variable} antialiased  `}>
        <div className="absolute w-full">
           <Navbar />
        </div>
        {children}

      </body>
    </html>
  );
}