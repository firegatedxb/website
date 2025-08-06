import type { Metadata } from "next";
/* import { Geist, Geist_Mono } from "next/font/google"; */
import "@/app/globals.css";

/* const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
 */
export const metadata: Metadata = {
    title: "Fire Gate Safety & Security Systems",
    description: "",
    icons:{
      icon:"/flogo.png"
    }
  };

export const dynamic = 'force-dynamic';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`} >
        {children}
      </body>
    </html>
  );
}