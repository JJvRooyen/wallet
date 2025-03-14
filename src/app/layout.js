import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Wallet",
  description: "Kepp your cash safe.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className={`${poppins.variable} antialiased bg-[#2B2B2B]`}>
    <Navbar />
    {children}
    <Footer />
    </body>
    </html>
  );
}

