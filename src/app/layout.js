import { Poppins, Prata } from "next/font/google";
import "./globals.css";

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
  title: "Ángel Javier Ramírez Abundis - Portfolio",
  description: "Portafolio y Currículum de Ángel Javier Ramírez Abundis, Sociólogo e Investigador Computacional.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${poppins.variable} ${prata.variable}`}>
      <body>{children}</body>
    </html>
  );
}
