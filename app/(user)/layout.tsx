import type { Metadata } from "next";
import { Host_Grotesk } from "next/font/google";
import "../../app/globals.css";
import Navbar from "../components/common/NavBars/Navbar";
import Footer from "../components/common/Footer";
import parse from 'html-react-parser'
export const dynamic = 'force-dynamic'
const hostGrostek = Host_Grotesk({
  variable: "--font-host-grotesk",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Fire Gate Safety & Security Systems",
  description: "",
  icons:{
    icon:"/flogo.png"
  }
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const tagResponse = await fetch(`${process.env.BASE_URL}/api/admin/tags`);
  const tagData = await tagResponse.json();


  return (
    <html lang="en">
      {tagData?.tag && <head>{parse(tagData?.tag?.headerScript || "")}</head>}
      <body className={`${hostGrostek.variable} antialiased`}>
      {tagData?.tag && <>{parse(tagData?.tag?.bodyScript || "")}</>}
     <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}