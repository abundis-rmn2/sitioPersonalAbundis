import { Poppins, Prata } from "next/font/google";
import "./globals.css";
import CustomCursor from "../components/CustomCursor";

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
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-8B3KW2PJZ8" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-8B3KW2PJZ8');
            `,
          }}
        />
      </head>
      <body>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
