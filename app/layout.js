import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import YoutubeButton from "./components/YoutubeButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

 export const metadata = {
  metadataBase: new URL("https://sangchaajin.com"),
  title: "Sangcha Ajin Foundation",
  description:
    "Donate to Sangcha Ajin Foundation and support meaningful social initiatives.",
  keywords: [
    "Sangcha Ajin Foundation",
    "donation",
    "charity",
    "NGO",
    "social welfare",
    
    "support foundation",
    
    "community support",
  ],
  
  
};
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning={true}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen bg-[#d4f3d2] flex flex-col">
        {/* 🔥 Context Provider added here */}
      
           
              <Navbar />

              <main className="flex-1 bg-[#d4f3d2] mt-16 ">{children}</main>
              <YoutubeButton />
              <Toaster position="top-right" />
              <Footer />
            
         
      </body>
    </html>
  );
}
