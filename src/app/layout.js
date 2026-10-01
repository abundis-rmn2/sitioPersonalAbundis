import { Poppins, Prata } from "next/font/google";
import "./globals.css";
import CustomCursor from "../components/CustomCursor";
import GoogleAnalytics from "../components/GoogleAnalytics";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"]
});

const prata = Prata({
  variable: "--font-prata",
  subsets: ["latin"],
  weight: ["400"]
});

export const metadata = {
  metadataBase: new URL("https://abundis.com.mx"),
  title: {
    template: "%s | Ángel Javier Ramírez Abundis",
    default: "Ángel Javier Ramírez Abundis - Portfolio",
  },
  description: "Portafolio y Currículum de Ángel Javier Ramírez Abundis, Sociólogo e Investigador Computacional.",
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${poppins.variable} ${prata.variable}`}>
      <body>
        <GoogleAnalytics />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
