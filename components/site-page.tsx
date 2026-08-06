"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import type { Locale, SiteContent } from "@/content/site-content";

type SitePageProps = {
  content: SiteContent;
  locale: Locale;
  siteUrl: string;
};

const instagramUrl = "https://www.instagram.com/newtalent.t/";
const projectIntakeUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSeFQmmgQnE1i_dSNYCvs4il3blay5u0TDO0d_ic8KJ8q5OaPA/viewform";
const companyLegalName = "NEWTALENTT, LLC";
const companyAddress = {
  streetAddress: "7345 W Sand Lake Rd, Ste 210, Office 3744",
  addressLocality: "Orlando",
  addressRegion: "FL",
  postalCode: "32819",
  addressCountry: "US",
};

function Arrow() {
  return (
    <span className="arrow" aria-hidden="true">
      ↗
    </span>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="section-label">{children}</p>;
}

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }
      }
    >
      {children}
    </motion.div>
  );
}

function Header({
  content,
  locale,
}: {
  content: SiteContent;
  locale: Locale;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [showProjectShortcut, setShowProjectShortcut] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const alternateHref = locale === "en" ? "/es" : "/";
  const alternateLabel = locale === "en" ? "ES" : "EN";

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isOpen]);

  useEffect(() => {
    const updateProjectShortcut = () => {
      const revealPoint = Math.max(560, window.innerHeight * 0.85);
      const contactSection = document.getElementById("contact");
      const hasReachedContact = contactSection
        ? window.scrollY + window.innerHeight >= contactSection.offsetTop + 80
        : false;

      setShowProjectShortcut(
        window.scrollY >= revealPoint && !hasReachedContact,
      );
    };

    updateProjectShortcut();
    window.addEventListener("scroll", updateProjectShortcut, { passive: true });

    return () => window.removeEventListener("scroll", updateProjectShortcut);
  }, []);

  const navItems = [
    { href: "#approach", label: content.nav.approach },
    { href: "#work", label: content.nav.work },
    { href: "#capabilities", label: content.nav.capabilities },
    { href: "#insights", label: content.nav.insights },
  ];

  return (
    <header className="site-header">
      <div className="header-inner shell">
        <Link className="brand" href={locale === "en" ? "/" : "/es"}>
          <Image
            src="/brand/symbol-light.webp"
            alt=""
            width={36}
            height={39}
            priority
          />
          <span>NewTalentt</span>
        </Link>

        <nav
          className="desktop-nav"
          aria-label={locale === "en" ? "Primary navigation" : "Navegación principal"}
        >
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <Link
            className="language-link"
            href={alternateHref}
            hrefLang={locale === "en" ? "es" : "en"}
            aria-label={
              locale === "en" ? "Cambiar a español" : "Switch to English"
            }
          >
            {alternateLabel}
          </Link>
          <a
            className="header-cta"
            href="#contact"
          >
            {content.nav.contact}
          </a>
          <button
            className="menu-button"
            type="button"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? content.nav.close : content.nav.menu}
            onClick={() => setIsOpen((current) => !current)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.nav
            id="mobile-navigation"
            className="mobile-nav"
            aria-label={locale === "en" ? "Mobile navigation" : "Navegación móvil"}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <div className="shell">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setIsOpen(false)}>
                {content.nav.contact}
              </a>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {showProjectShortcut ? (
          <motion.a
            className="project-shortcut"
            href={projectIntakeUrl}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : { duration: 0.22, ease: [0.22, 1, 0.36, 1] }
            }
          >
            {content.contact.cta}
            <Arrow />
          </motion.a>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

export function SitePage({ content, locale, siteUrl }: SitePageProps) {
  const year = new Date().getFullYear();
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "NewTalentt",
    legalName: companyLegalName,
    description:
      "Boutique Music Strategy, Growth & Technology for artists, labels and music projects.",
    url: siteUrl,
    address: {
      "@type": "PostalAddress",
      ...companyAddress,
    },
    sameAs: [instagramUrl, "https://www.youtube.com/@befocusmusic"],
    areaServed: "Worldwide",
    knowsAbout: [
      "Music strategy",
      "Release strategy",
      "Artist growth",
      "YouTube SEO",
      "Music technology",
    ],
  };

  return (
    <>
      <a className="skip-link" href="#main-content">
        {content.skip}
      </a>
      <Header content={content} locale={locale} />

      <main id="main-content">
        <section className="hero shell" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="hero-eyebrow">{content.hero.eyebrow}</p>
            <h1 id="hero-title">
              <span>{content.hero.titleLead}</span>{" "}
              <em>{content.hero.titleAccent}</em>
              {content.hero.titleEnd}
            </h1>
            <div className="hero-lower">
              <p>{content.hero.body}</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#contact">
                  {content.hero.primaryCta}
                  <Arrow />
                </a>
                <a className="button button-secondary" href="#work">
                  {content.hero.secondaryCta}
                </a>
              </div>
            </div>
          </div>

          <div className="hero-meta" aria-hidden="true">
            <span>{content.hero.availability}</span>
            <span className="hero-line" />
            <span>NT — 001</span>
          </div>
          <Image
            className="hero-symbol"
            src="/brand/symbol-light.webp"
            alt=""
            width={560}
            height={600}
            priority
          />
        </section>

        <section className="proof section-rule" aria-labelledby="proof-title">
          <div className="shell">
            <SectionLabel>{content.proof.eyebrow}</SectionLabel>
            <h2 id="proof-title" className="sr-only">
              {content.proof.eyebrow}
            </h2>
            <div className="proof-grid">
              {content.proof.items.map((item, index) => (
                <Reveal
                  className="proof-item"
                  delay={index * 0.06}
                  key={item.label}
                >
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                  <small>{item.note}</small>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section
          id="approach"
          className="philosophy light-section"
          aria-labelledby="philosophy-title"
        >
          <div className="shell philosophy-grid">
            <Reveal>
              <SectionLabel>{content.philosophy.eyebrow}</SectionLabel>
              <p className="philosophy-statement">
                {content.philosophy.statement}
              </p>
            </Reveal>
            <Reveal className="philosophy-copy" delay={0.08}>
              <h2 id="philosophy-title">{content.philosophy.title}</h2>
              <p>{content.philosophy.body}</p>
            </Reveal>
          </div>
        </section>

        <section className="process section-space" aria-labelledby="process-title">
          <div className="shell">
            <div className="section-heading">
              <SectionLabel>{content.process.eyebrow}</SectionLabel>
              <Reveal>
                <h2 id="process-title">{content.process.title}</h2>
              </Reveal>
            </div>
            <div className="process-list">
              {content.process.steps.map((step, index) => (
                <Reveal
                  className="process-row"
                  delay={index * 0.04}
                  key={step.number}
                >
                  <span className="process-number">{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section
          id="work"
          className="case-studies light-section"
          aria-labelledby="cases-title"
        >
          <div className="shell">
            <div className="section-heading case-heading">
              <SectionLabel>{content.cases.eyebrow}</SectionLabel>
              <Reveal>
                <h2 id="cases-title">{content.cases.title}</h2>
              </Reveal>
            </div>

            <div className="cases">
              {content.cases.items.map((item) => (
                <article className="case" key={item.client}>
                  <div className="case-meta">
                    <span>{item.index}</span>
                    <div>
                      <strong>{item.client}</strong>
                      <small>{item.type}</small>
                    </div>
                  </div>

                  <Reveal className="case-main">
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                    <ul
                      className="tag-list"
                      aria-label={locale === "en" ? "Services" : "Servicios"}
                    >
                      {item.services.map((service) => (
                        <li key={service}>{service}</li>
                      ))}
                    </ul>
                    {item.href ? (
                      <a
                        className="text-link"
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {item.linkLabel}
                        <Arrow />
                      </a>
                    ) : null}
                    {item.note ? <p className="case-note">{item.note}</p> : null}
                  </Reveal>

                  <div className="case-facts">
                    {item.facts.map((fact) => (
                      <div key={fact.label}>
                        <strong>{fact.value}</strong>
                        <span>{fact.label}</span>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="selected section-space" aria-labelledby="selected-title">
          <div className="shell">
            <div className="section-heading selected-heading">
              <SectionLabel>{content.selected.eyebrow}</SectionLabel>
              <Reveal>
                <h2 id="selected-title">{content.selected.title}</h2>
              </Reveal>
            </div>
            <div className="project-list">
              {content.selected.projects.map((project, index) => (
                <Reveal
                  className="project-row"
                  delay={index * 0.035}
                  key={project.name}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{project.name}</strong>
                  <small>{project.type}</small>
                </Reveal>
              ))}
              <Reveal className="project-row project-private">
                <span>06</span>
                <strong>{content.selected.privateLabel}</strong>
                <small>{content.selected.privateType}</small>
              </Reveal>
            </div>
          </div>
        </section>

        <section
          id="capabilities"
          className="capabilities section-rule"
          aria-labelledby="capabilities-title"
        >
          <div className="shell capabilities-grid">
            <div className="capabilities-intro">
              <SectionLabel>{content.capabilities.eyebrow}</SectionLabel>
              <Reveal>
                <h2 id="capabilities-title">{content.capabilities.title}</h2>
                <p>{content.capabilities.body}</p>
              </Reveal>
            </div>
            <div className="capabilities-list">
              {content.capabilities.items.map((item, index) => (
                <Reveal className="capability" key={item.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="inside light-section" aria-labelledby="inside-title">
          <div className="shell inside-grid">
            <div className="inside-visual" aria-hidden="true">
              <Image
                src="/brand/symbol-light.webp"
                alt=""
                width={620}
                height={664}
              />
              <span>Inside the industry</span>
            </div>
            <Reveal className="inside-copy">
              <SectionLabel>{content.inside.eyebrow}</SectionLabel>
              <h2 id="inside-title">{content.inside.title}</h2>
              <p>{content.inside.body}</p>
              <ul>
                {content.inside.credentials.map((credential) => (
                  <li key={credential}>{credential}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        <section
          id="insights"
          className="insights section-space"
          aria-labelledby="insights-title"
        >
          <div className="shell insights-grid">
            <div className="insights-handle" aria-hidden="true">
              <span className="insights-platform">Instagram / Insights</span>
              <strong>
                <span>@</span>
                newtalent.t
              </strong>
            </div>
            <Reveal className="insights-copy">
              <SectionLabel>{content.insights.eyebrow}</SectionLabel>
              <h2 id="insights-title">{content.insights.title}</h2>
              <p>{content.insights.body}</p>
              <a
                className="button button-secondary"
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
              >
                {content.insights.cta}
                <Arrow />
              </a>
            </Reveal>
          </div>
        </section>

        <section
          id="contact"
          className="contact"
          aria-labelledby="contact-title"
        >
          <div className="shell contact-inner">
            <div className="contact-intro">
              <SectionLabel>{content.contact.eyebrow}</SectionLabel>
              <Reveal>
                <h2 id="contact-title">{content.contact.title}</h2>
                <p>{content.contact.body}</p>
              </Reveal>
            </div>

            <div className="contact-criteria">
              {content.contact.criteria.map((criterion, index) => (
                <Reveal
                  className="contact-criterion"
                  delay={index * 0.04}
                  key={criterion.index}
                >
                  <span>{criterion.index}</span>
                  <div>
                    <h3>{criterion.title}</h3>
                    <p>{criterion.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal className="contact-action">
              <div className="contact-investment">
                <span>{content.contact.investmentLabel}</span>
                <strong>{content.contact.investmentValue}</strong>
                <p>{content.contact.investmentNote}</p>
              </div>
              <div className="contact-apply">
                <a
                  className="contact-link"
                  href={projectIntakeUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  {content.contact.cta}
                  <Arrow />
                </a>
                <small>{content.contact.note}</small>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell footer-top">
          <Link className="footer-brand" href={locale === "en" ? "/" : "/es"}>
            NewTalentt
          </Link>
          <p>{content.footer.positioning}</p>
        </div>
        <div className="shell footer-legal">
          <div className="footer-legal-item">
            <span>{content.footer.legalEntity}</span>
            <strong>{companyLegalName}</strong>
          </div>
          <address className="footer-legal-item">
            <span>{content.footer.mailingAddress}</span>
            <p>
              {companyAddress.streetAddress}
              <br />
              {companyAddress.addressLocality}, {companyAddress.addressRegion}{" "}
              {companyAddress.postalCode}, United States
            </p>
          </address>
        </div>
        <div className="shell footer-bottom">
          <span>
            © {year} {content.footer.rights}
          </span>
          <span>{content.footer.privacy}</span>
          <a href={instagramUrl} target="_blank" rel="noreferrer">
            Instagram
            <Arrow />
          </a>
        </div>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
