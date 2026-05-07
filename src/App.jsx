import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
import OmniServe from "./components/OmniServe";
import Features from "./components/Features";
import CaseStudies from "./components/CaseStudies";
import Testimonials from "./components/Testimonials";
import WhyChooseUs from "./components/WhyChooseUs";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import {
  nav,
  hero,
  stats,
  features,
  services,
  omniServe,
  pricing,
  discounts,
  certifications,
  testimonials,
  caseStudies,
  whyChoose,
  contact,
  contactServiceOptions,
  social,
  footerLinks,
} from "./data/content";

export default function App() {
  return (
    <>
      <Navbar links={nav.links} cta={hero.cta} />
      <main>
        {/* 1. Hero — what we do, who we are */}
        <Hero {...hero} stats={stats} certifications={certifications} />

        {/* 2. Stats band — instant trust numbers */}
        <Stats items={stats} />

        {/* 3. Services — what we offer */}
        <Services items={services} />

        {/* 4. OmniServe — product spotlight */}
        <OmniServe {...omniServe} />

        {/* 5. Delivery Advantage — how we're different */}
        <Features items={features} />

        {/* 6. Case Studies — proof it works */}
        <CaseStudies items={caseStudies} />

        {/* 7. Testimonials — social proof */}
        <Testimonials items={testimonials} certifications={certifications} />

        {/* 8. Why Choose Us — by the numbers */}
        <WhyChooseUs items={whyChoose} />

        {/* 9. Pricing — now you trust us, here's cost */}
        <Pricing rows={pricing} discounts={discounts} />

        {/* 10. Contact — convert */}
        <Contact
          website={contact.website}
          websiteUrl={contact.websiteUrl}
          email={contact.email}
          phones={contact.phones}
          offices={contact.offices}
          serviceOptions={contactServiceOptions}
        />
      </main>
      <Footer contact={contact} footerLinks={footerLinks} social={social} />
      <ScrollToTop />
    </>
  );
}
