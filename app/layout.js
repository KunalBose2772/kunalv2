import { Bricolage_Grotesque, Jost, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "../components/Navbar";
import CursorGlow from "../components/CursorGlow";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata = {
  title: "Kunal Bose | Full-Stack Developer",
  description: "Engineering Scalable Digital Systems. Portfolio of Kunal Bose.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${bricolage.variable} ${jost.variable} ${playfair.variable}`}
    >
      <body className="font-sans antialiased selection:bg-blue-500/30">
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark" enableSystem={false}>
          <CursorGlow />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
