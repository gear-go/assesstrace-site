import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";
import { SiteFooter, SiteHeader } from "./components/SiteChrome";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "localhost:3000";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.startsWith("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;
  const title = "AssessTrace — Evidence by Design";
  const description =
    "AssessTrace ayuda a rediseñar la evaluación para que el proceso de aprendizaje deje evidencia. GPT-5.6 propone, el docente decide y el motor determinista verifica.";

  return {
    metadataBase: new URL(origin),
    title: {
      default: title,
      template: "%s · AssessTrace",
    },
    description,
    openGraph: {
      title,
      description,
      type: "website",
      locale: "es_CL",
      images: [
        {
          url: `${origin}/og.png`,
          width: 1536,
          height: 1024,
          alt: "AssessTrace — Evidence by Design",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${origin}/og.png`],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <a className="skip-link" href="#contenido-principal">
          Saltar al contenido
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
