"use client";

import { usePathname } from 'next/navigation';
import Script from 'next/script';

export default function GoogleAnalytics() {
  const pathname = usePathname();

  // No renderizar Google Analytics en la lista privada ni en los CVs adaptados (tailored)
  // Ejemplos a bloquear: /es/cv/lista, /es/cv/intagono
  // Ejemplos a PERMITIR: /es/cv, /en/cv (el currículum general)
  if (pathname) {
    const segments = pathname.split('/').filter(Boolean);
    if (segments[1] === 'cv' && segments.length > 2) {
      return null;
    }
  }

  return (
    <>
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-8B3KW2PJZ8" />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8B3KW2PJZ8');
          `,
        }}
      />
    </>
  );
}
