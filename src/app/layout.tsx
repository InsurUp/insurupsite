import type { Metadata } from "next";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import Header from "@/components/common/layout/Header";
import Footer from "@/components/common/layout/Footer";
import AOSInit from "@/components/common/AOSInit";
import HashNavigation from "@/components/common/HashNavigation";
export const metadata: Metadata = {
  title: {
    default: "InsurUp - Sigorta Acenteleri İçin CRM ve Dijital Çözümler",
    template: "%s | InsurUp",
  },
  description: "InsurUp CRM ile sigorta acentenizi dijitalleştirin. Hızlı teklif, poliçe yönetimi ve 30+ sigorta şirketinin ürünlerine erişin.",
  icons: {
    icon: "/InsurUp Icon.svg",
    shortcut: "/InsurUp Icon.svg",
    apple: "/InsurUp Icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <link rel="preload" href="/Fonts/InterVariable.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/Fonts/InterVariable-Italic.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/Fonts/Inter-Thin.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/Fonts/Inter-ThinItalic.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/Fonts/Inter-ExtraLight.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/Fonts/Inter-ExtraLightItalic.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/Fonts/Inter-Light.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/Fonts/Inter-LightItalic.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/Fonts/Inter-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/Fonts/Inter-Italic.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/Fonts/Inter-Medium.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/Fonts/Inter-MediumItalic.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/Fonts/Inter-SemiBold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/Fonts/Inter-SemiBoldItalic.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/Fonts/Inter-Bold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/Fonts/Inter-BoldItalic.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/Fonts/Inter-ExtraBold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/Fonts/Inter-ExtraBoldItalic.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/Fonts/Inter-Black.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/Fonts/Inter-BlackItalic.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/Fonts/InterDisplay-Thin.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/Fonts/InterDisplay-ThinItalic.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/Fonts/InterDisplay-ExtraLight.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/Fonts/InterDisplay-Light.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/Fonts/InterDisplay-LightItalic.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/Fonts/InterDisplay-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/Fonts/InterDisplay-Italic.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/Fonts/InterDisplay-Medium.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/Fonts/InterDisplay-MediumItalic.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/Fonts/InterDisplay-SemiBold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/Fonts/InterDisplay-SemiBoldItalic.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/Fonts/InterDisplay-Bold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/Fonts/InterDisplay-BoldItalic.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/Fonts/InterDisplay-ExtraBold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/Fonts/InterDisplay-ExtraBoldItalic.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/Fonts/InterDisplay-Black.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/Fonts/InterDisplay-BlackItalic.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>


      <body
        className={`antialiased`}
      >
        <AOSInit />
        <HashNavigation />
        <Header />
        {children}
        <Footer />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossOrigin="anonymous"></script>
      </body>
    </html>
  );
}
