import Link from "next/link";
import type { ReactNode } from "react";

export function InformationPage({
  title,
  introduction,
  children,
}: {
  title: string;
  introduction: string;
  children: ReactNode;
}) {
  return (
    <div lang="es" className="shell py-8 md:py-14">
      <a className="skip-link" href="#information-content">Ir al contenido</a>
      <header className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--line)] pb-6">
        <Link href="/es" className="inline-flex min-h-11 items-center text-2xl font-semibold tracking-tight">NewTalentt</Link>
        <Link href="/control-moviles" className="inline-flex min-h-11 items-center underline decoration-[var(--line-strong)] underline-offset-4 hover:text-[var(--coral)]">Control de móviles</Link>
      </header>
      <main id="information-content" className="mx-auto max-w-3xl py-14 md:py-24">
        <p className="section-label">NewTalentt · Tecnología</p>
        <h1 className="mt-5 text-4xl leading-tight font-medium tracking-tight md:text-6xl">{title}</h1>
        <p className="mt-6 text-lg text-[var(--paper-muted)]">{introduction}</p>
        <div className="mt-12 space-y-10 [&_h2]:mb-3 [&_h2]:text-2xl [&_h2]:font-medium [&_p]:mb-4 [&_p]:text-[var(--paper-muted)] [&_a]:underline [&_a]:underline-offset-4 [&_a]:break-words [&_a:hover]:text-[var(--coral)] [&_li]:mb-3 [&_li]:text-[var(--paper-muted)] [&_ul]:list-disc [&_ul]:pl-6">
          {children}
        </div>
      </main>
      <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-[var(--line)] py-6 text-sm text-[var(--paper-muted)]">
        <span>NEWTALENTT, LLC</span>
        <Link href="/control-moviles/privacidad" className="inline-flex min-h-11 items-center underline underline-offset-4 hover:text-[var(--coral)]">Privacidad de la herramienta</Link>
      </footer>
    </div>
  );
}
