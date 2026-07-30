import type { Metadata } from "next";
import { SitePage } from "@/components/site-page";
import { spanishContent } from "@/content/site-content";
import { siteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "Estrategia musical, Growth y Tecnología",
  description:
    "Estrategia musical privada y personalizada para artistas, sellos y proyectos musicales ambiciosos.",
  alternates: {
    canonical: "/es",
    languages: {
      en: "/",
      es: "/es",
      "x-default": "/",
    },
  },
  openGraph: {
    locale: "es_ES",
    alternateLocale: "en_US",
    url: "/es",
    title: "Tu música necesita la estrategia correcta.",
    description:
      "Una boutique de Music Strategy, Growth & Technology construida para la música.",
  },
};

export default function SpanishPage() {
  return <SitePage content={spanishContent} locale="es" siteUrl={siteUrl} />;
}
