import type { Metadata } from "next";
import { Host_Grotesk } from "next/font/google";
import "../../app/globals.css";
import Navbar from "../components/common/NavBars/Navbar";
import Footer from "../components/common/Footer";

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
      <body className={`${hostGrostek.variable} antialiased`}>
     <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}