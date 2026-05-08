import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustStrip from "./components/TrustStrip";
import Services from "./components/Services";
import OmniServe from "./components/OmniServe";
import WhatSetsUsApart from "./components/WhatSetsUsApart";
import CaseStudies from "./components/CaseStudies";
import MidCTA from "./components/MidCTA";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import {
  nav,
  hero,
  trust,
  services,
  omniServe,
  whatSetsUsApart,
  pricing,
  discounts,
  certifications,
  testimonials,
  caseStudies,
  contact,
  contactServiceOptions,
  social,
  footerLinks,
  company,
} from "./data/content";

export default function App() {
  return (
    <>
      <Navbar links={nav.links} cta="Book a call" />
      <main>
        {/* 1. Hero — dark — value prop, compliance badges, product visual */}
        <Hero {...hero} certifications={certifications} />

        {/* 2. Trust strip — light slim — clients + partners (validation right after hero) */}
        <TrustStrip {...trust} />

        {/* 3. Services — light — what we offer (single home for service stats) */}
        <Services items={services} />

        {/* 4. OmniServe — dark spotlight — proprietary product */}
        <OmniServe {...omniServe} />

        {/* 5. What Sets Us Apart — light — capabilities (no overlapping numbers) */}
        <WhatSetsUsApart {...whatSetsUsApart} />

        {/* 6. Case Studies — dark — proof */}
        <CaseStudies items={caseStudies} />

        {/* 7. Mid CTA — light slim — capture interest at persuasion peak */}
        <MidCTA />

        {/* 8. Testimonials — light muted — social proof */}
        <Testimonials items={testimonials} />

        {/* 9. Pricing — light — transparent rates */}
        <Pricing rows={pricing} discounts={discounts} />

        {/* 10. Contact — dark — convert */}
        <Contact
          website={contact.website}
          websiteUrl={contact.websiteUrl}
          email={contact.email}
          offices={contact.offices}
          serviceOptions={contactServiceOptions}
        />
      </main>
      <Footer
        contact={contact}
        footerLinks={footerLinks}
        social={social}
        certifications={certifications}
        company={company}
      />
      <ScrollToTop />
    </>
  );
}
