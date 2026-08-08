import { Poppins, Luxurious_Script, Gruppo } from "next/font/google";
import Navbar from "@/component/Navbar";
import "./globals.css";
import Footer from "@/component/Footer";

const luxurious = Luxurious_Script({ subsets: ["latin"], weight: ["400"], variable: "--font-body" });
const poppins = Poppins({ subsets: ["latin"], weight: ["200"], variable: "--font-text" });
const gruppo = Gruppo({ subsets: ["latin"], weight: ["400"], variable: "--font-alt" });

export const metadata = {
  title: "fernLeigh",
  description: "The pride of fittings",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${luxurious.variable} ${poppins.variable} ${gruppo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
