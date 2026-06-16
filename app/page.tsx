"use client";

import Image from "next/image";
import type { CSSProperties, FormEvent } from "react";
import { useState } from "react";

type IconName =
  | "design"
  | "install"
  | "service"
  | "building"
  | "phone"
  | "mail"
  | "pin"
  | "arrow"
  | "check";

const productGroups = {
  residential: {
    label: "Residential & Light Commercial",
    description:
      "Efficient, dependable cooling solutions for homes, offices, retail and hospitality spaces.",
    products: [
      {
        name: "Split Air Conditioner",
        shortName: "Split AC",
        image: "/images/split-ac.png",
        note: "Quiet comfort for everyday spaces",
      },
      {
        name: "Window Air Conditioner",
        shortName: "Window AC",
        image: "/images/window-ac.png",
        note: "Compact and dependable cooling",
      },
      {
        name: "Cassette Air Conditioner",
        shortName: "Cassette AC",
        image: "/images/cassette-ac.png",
        note: "Four-way airflow for open spaces",
      },
      {
        name: "Ductable Air Conditioner",
        shortName: "Ductable AC",
        image: "/images/ductable-ac.png",
        note: "Discreet, even air distribution",
      },
      {
        name: "Chiller Air Conditioner",
        shortName: "Chiller AC",
        image: "/images/chiller-ac.png",
        note: "High-capacity commercial cooling",
      },
      {
        name: "VRV Air Conditioner",
        shortName: "VRV AC",
        image: "/images/vrv-ac.png",
        note: "Flexible multi-zone climate control",
      },
    ],
  },
  building: {
    label: "Building Systems & Services",
    description:
      "Engineered systems for complex facilities, with end-to-end design, installation and lifecycle support.",
    products: [
      {
        name: "Water Cooled Chiller Plant",
        shortName: "Water Cooled Chiller",
        image: "/images/water-cooled-chiller.png",
        note: "Efficient central plant solutions",
      },
      {
        name: "Air Cooled Chiller Plant",
        shortName: "Air Cooled Chiller",
        image: "/images/air-cooled-chiller.png",
        note: "Reliable cooling without cooling towers",
      },
      {
        name: "VRF Systems",
        shortName: "VRF Systems",
        image: "/images/vrv-ac.png",
        note: "Variable refrigerant flow systems",
      },
      {
        name: "Air Side AHUs",
        shortName: "Air Side AHUs",
        image: "/images/air-side-ahu.png",
        note: "Precision air handling and distribution",
      },
    ],
  },
};

const clients = [
  "Delhi Metro",
  "Reliance",
  "FDDI",
  "GAIL",
  "ITC",
  "Dabur",
  "Haldiram's",
  "ICICI Bank",
  "Yes Bank",
  "Pantaloons",
  "Naukri.com",
  "Anytime Fitness",
];

const otherClients = [
  "Tezu Airport",
  "cure.fit",
  "GAIL (India) Limited",
  "Essel Infra",
  "Essel Energy",
  "Gas Authority of India",
  "Yes Bank",
  "ICICI Bank",
  "Theos",
  "Glued",
  "Albert David",
  "ITC Limited",
  "Dabur",
  "Raymonds",
  "Suncity Projects",
  "Mahagun",
  "Lions Eye Hospital",
  "Pantaloons",
  "Haldiram",
  "Gurukul",
  "Naukri.com",
  "Anytime Fitness",
  "BSNL",
];

const awards = [
  {
    year: "2018",
    program: "Willis Carrier Club Awards",
    title: "Highest Non-Metro Overall Sales Revenue",
    detail: "North Zone",
    issuer: "Carrier",
    image: "/images/awards/wccd-2018.png",
    landscape: true,
  },
  {
    year: "2017",
    program: "Willis Carrier Club Awards",
    title: "Highest Light Commercial Sales Revenue",
    detail: "Ghaziabad",
    issuer: "Carrier",
    image: "/images/awards/wccd-2017.png",
  },
  {
    year: "2016",
    program: "Willis Carrier Club Awards",
    title: "Highest Light Commercial Sales Revenue",
    detail: "UP · Lucknow & Ghaziabad Branch",
    issuer: "Carrier",
    image: "/images/awards/wccd-2016.png",
  },
  {
    year: "2015",
    program: "Willis Carrier Club Awards",
    title: "Highest Light Commercial Sales Revenue",
    detail: "UP · Lucknow & Ghaziabad Branch",
    issuer: "Carrier",
    image: "/images/awards/wccd-2015.png",
  },
  {
    year: "2015",
    program: "Partnership Meet",
    title: "Highest Sales — Carrier Brand",
    detail: "Residential Business · Dealer",
    issuer: "Carrier Midea India",
    image: "/images/awards/partnership-meet-2015.png",
  },
  {
    program: "Carrier Midea India",
    title: "Superstar Achiever — Service",
    detail: "Service excellence · Ghaziabad",
    issuer: "Carrier Midea India",
    image: "/images/awards/superstar-service.png",
  },
  {
    year: "2014",
    program: "Willis Carrier Club Awards",
    title: "Highest Light Commercial Sales Revenue",
    detail: "UP · Lucknow & Ghaziabad Branch",
    issuer: "Carrier",
    image: "/images/awards/wccd-2014.png",
  },
  {
    year: "2012",
    program: "Residential Dealer Meet — North",
    title: "Highest Dealer Sales Performance",
    detail: "Residential Business 2011 · Ghaziabad",
    issuer: "Carrier Midea India",
    image: "/images/awards/residential-dealer-2012.png",
    landscape: true,
  },
];

function Icon({ name }: { name: IconName }) {
  const paths: Record<IconName, React.ReactNode> = {
    design: (
      <>
        <path d="M4 20h16M7 17l7-12 3 2-7 12H7v-2Z" />
        <path d="m13 7 3 2M6 12H3v8h4" />
      </>
    ),
    install: (
      <>
        <path d="M14.7 6.3a4 4 0 0 0-5-5L12 3.6 8.6 7 6.3 4.7a4 4 0 0 0 5 5L19 17.4a2.1 2.1 0 0 1-3 3l-7.7-7.7" />
        <path d="m5 14-3 3 5 5 3-3" />
      </>
    ),
    service: (
      <>
        <path d="M12 22a10 10 0 1 0-10-10" />
        <path d="M2 7v5h5M12 6v6l4 2" />
      </>
    ),
    building: (
      <>
        <path d="M4 21V5l8-3v19M12 8h8v13M2 21h20" />
        <path d="M7 7h2M7 11h2M7 15h2M15 11h2M15 15h2" />
      </>
    ),
    phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />,
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    pin: (
      <>
        <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    arrow: <path d="M5 12h14M14 7l5 5-5 5" />,
    check: <path d="m5 12 4 4L19 6" />,
  };

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeGroup, setActiveGroup] =
    useState<keyof typeof productGroups>("residential");
  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [formMessage, setFormMessage] = useState("");
  const group = productGroups[activeGroup];

  async function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setFormStatus("submitting");
    setFormMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.get("firstName"),
          lastName: formData.get("lastName"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          message: formData.get("message"),
          companyWebsite: formData.get("companyWebsite"),
        }),
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || "Unable to send your inquiry.");
      }

      setFormStatus("success");
      setFormMessage(result.message || "Thanks. We will get back to you shortly.");
      form.reset();
    } catch (error) {
      setFormStatus("error");
      setFormMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please call or email us directly.",
      );
    }
  }

  return (
    <main>
      <div className="topbar">
        <div className="container topbar-inner">
          <span>Serving residential, commercial and industrial clients since 1990</span>
          <div>
            <a href="tel:+919311885464">+91 93118 85464</a>
            <a href="mailto:noida@seaircon.com">noida@seaircon.com</a>
          </div>
        </div>
      </div>

      <header className="header">
        <div className="container header-inner">
          <a className="brand" href="#home" aria-label="SE Aircon home">
            <Image
              src="/images/logo.jpg"
              alt="Shubh Engineers logo"
              width={58}
              height={58}
              priority
            />
            <span>
              <strong>SE AIRCON</strong>
              <small>PRIVATE LIMITED</small>
            </span>
          </a>

          <nav className={menuOpen ? "nav nav-open" : "nav"} aria-label="Main navigation">
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#products" onClick={() => setMenuOpen(false)}>Products</a>
            <a href="#clients" onClick={() => setMenuOpen(false)}>Clients</a>
            <a className="header-cta" href="#contact" onClick={() => setMenuOpen(false)}>
              Get a quote <Icon name="arrow" />
            </a>
          </nav>

          <button
            className="menu-button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-pattern" />
        <div className="container hero-inner">
          <div className="hero-content">
            <div className="pill">
              <span />
              Trusted HVAC expertise for 35+ years
            </div>
            <h1>
              Better air.<br />
              <span>Better spaces.</span>
            </h1>
            <p>
              We bring comfort to life with HVAC solutions designed around your
              space, your operations and your long-term comfort.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">
                Plan your project <Icon name="arrow" />
              </a>
              <a className="button button-ghost" href="#products">
                View our solutions
              </a>
            </div>
            <div className="hero-benefits" aria-label="Service highlights">
              <div>
                <Icon name="check" />
                <span><strong>Turnkey delivery</strong>Design to maintenance</span>
              </div>
              <div>
                <Icon name="service" />
                <span><strong>Responsive support</strong>Service you can depend on</span>
              </div>
            </div>
            <div className="hero-trust">
              <span>Authorized dealers of</span>
              <Image src="/images/carrier.png" alt="Carrier" width={130} height={53} />
              <Image src="/images/toshiba.png" alt="Toshiba" width={130} height={35} />
            </div>
          </div>

          <div className="hero-showcase">
            <div className="showcase-glow" />
            <div className="showcase-card">
              <span className="showcase-label">Residential comfort</span>
              <Image
                src="/images/split-ac.png"
                alt="Split air conditioning system"
                width={700}
                height={500}
                loading="eager"
                priority
              />
              <div className="showcase-info">
                <div><strong>35+</strong><span>Years</span></div>
                <div><strong>1000s</strong><span>Projects</span></div>
                <div><strong>360°</strong><span>Support</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="client-strip" aria-label="Selected clients">
        <div className="container client-strip-inner">
          <p>Trusted by leading organizations</p>
          <div className="client-ticker">
            <div className="client-ticker-track">
              {[...clients, ...clients].map((client, index) => (
                <span key={`${client}-${index}`}>{client}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section about" id="about">
        <div className="container">
          <div className="section-intro">
            <div>
              <span className="section-label">About SE Aircon</span>
              <h2>Comfort backed by<br />real engineering.</h2>
            </div>
            <div className="intro-copy">
              <p>
                Established in 1990 as Shubh Engineers, SE Aircon Pvt. Ltd.
                delivers sales, service and central air-conditioning projects
                across residential, commercial and industrial environments.
              </p>
              <a className="inline-link" href="#services">
                How we work <Icon name="arrow" />
              </a>
            </div>
          </div>

          <div className="about-layout">
            <div className="about-panel">
              <span>Our promise</span>
              <h3>Right-sized solutions.<br />Reliable execution.<br />Lasting support.</h3>
              <p>
                We focus only on air-conditioning solutions through sales,
                servicing of air conditioners and central air-conditioning
                projects.
              </p>
              <div className="about-numbers">
                <div><strong>1990</strong><span>Established</span></div>
                <div><strong>₹200M+</strong><span>Group turnover</span></div>
                <div><strong>₹250M</strong><span>2023-24 target</span></div>
              </div>
            </div>
            <div className="about-visual">
              <div className="airflow-lines" />
              <Image
                src="/images/cassette-ac.png"
                alt="Commercial cassette air conditioner"
                width={700}
                height={500}
              />
              <div className="about-visual-caption">
                <span>Built for your environment</span>
                <strong>From one room to an entire facility.</strong>
              </div>
            </div>
          </div>

          <div className="company-story">
            <article className="story-card story-card-large">
              <span className="section-label">Company story</span>
              <h3>Innovation in refrigeration and air-conditioning systems.</h3>
              <p>
                SE Aircon is a rapidly expanding company dedicated to offering
                innovative solutions in refrigeration and air conditioning
                systems. As a group with a turnover of 200 million, we
                anticipate reaching a turnover of 250 million in the fiscal year
                2023-24.
              </p>
              <p>
                With cutting-edge technology and an expanding business scope,
                the company operates under the leadership of a second-generation
                technocrat.
              </p>
            </article>

            <article className="story-card partner-card">
              <span>Strategic partnership</span>
              <h3>Rasair Engineers Pvt. Ltd.</h3>
              <p>
                Our operations are carried out in collaboration with our sister
                concern, Rasair Engineers Pvt Ltd, the Exclusive Channel Partner
                for Daikin Air Conditioning Pvt Ltd. This partnership helps us
                provide top-quality products and services with excellence in
                every project.
              </p>
              <div className="partner-highlights" aria-label="Partnership highlights">
                <div>
                  <strong>Daikin</strong>
                  <span>Channel partner</span>
                </div>
                <div>
                  <strong>Rasair</strong>
                  <span>Sister concern</span>
                </div>
                <div>
                  <strong>HVAC</strong>
                  <span>Product + service</span>
                </div>
              </div>
            </article>
          </div>

          <div className="vision-mission">
            <article>
              <span>Our Vision</span>
              <h3>Creative, practical and customer-focused HVAC solutions.</h3>
              <p>
                SE Aircon Pvt. Ltd. aims to design, install, service and
                maintain cost-effective, customised modern refrigeration and air
                conditioning services. Our long-term vision is to be more
                creative, understanding and customer focused, developing long
                and healthy working relationships.
              </p>
            </article>
            <article>
              <span>Our Mission</span>
              <h3>Long-term relationships built through dependable service.</h3>
              <p>
                The company’s mission is to stay creative, understanding and
                customer focused while delivering dependable solutions that help
                clients maintain comfortable, efficient and reliable spaces.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section services" id="services">
        <div className="container">
          <div className="section-heading centered">
            <span className="section-label">Complete HVAC capabilities</span>
            <h2>One team. Every stage.</h2>
            <p>Clear accountability from the first survey to ongoing system care.</p>
          </div>
          <div className="service-grid">
            <article>
              <div className="service-icon"><Icon name="design" /></div>
              <span>01</span>
              <h3>Design & Consulting</h3>
              <p>Site assessment, heat-load planning, equipment selection and system design.</p>
              <ul>
                <li><Icon name="check" /> Tailored system planning</li>
                <li><Icon name="check" /> Energy-conscious selection</li>
              </ul>
            </article>
            <article>
              <div className="service-icon"><Icon name="install" /></div>
              <span>02</span>
              <h3>Supply & Installation</h3>
              <p>Coordinated procurement and disciplined installation for projects of every scale.</p>
              <ul>
                <li><Icon name="check" /> Authorized products</li>
                <li><Icon name="check" /> Turnkey project execution</li>
              </ul>
            </article>
            <article>
              <div className="service-icon"><Icon name="service" /></div>
              <span>03</span>
              <h3>Service & Maintenance</h3>
              <p>Responsive repairs and preventive care that protect performance and equipment life.</p>
              <ul>
                <li><Icon name="check" /> Routine maintenance</li>
                <li><Icon name="check" /> Fast service response</li>
              </ul>
            </article>
            <article>
              <div className="service-icon"><Icon name="building" /></div>
              <span>04</span>
              <h3>Building Systems</h3>
              <p>Central plants, VRF, AHUs and integrated solutions for complex facilities.</p>
              <ul>
                <li><Icon name="check" /> Large-scale engineering</li>
                <li><Icon name="check" /> Lifecycle support</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="section products" id="products">
        <div className="container">
          <div className="products-header">
            <div>
              <span className="section-label">Our product portfolio</span>
              <h2>Solutions for every space.</h2>
            </div>
            <p>
              Explore our complete range of room air-conditioning and engineered
              building systems.
            </p>
          </div>

          <div className="category-tabs" role="tablist" aria-label="Product categories">
            {(Object.keys(productGroups) as Array<keyof typeof productGroups>).map((key) => (
              <button
                key={key}
                role="tab"
                aria-selected={activeGroup === key}
                className={activeGroup === key ? "active" : ""}
                onClick={() => setActiveGroup(key)}
              >
                <span>{key === "residential" ? "01" : "02"}</span>
                {productGroups[key].label}
              </button>
            ))}
          </div>

          <div className="category-description">
            <p>{group.description}</p>
            <span>{group.products.length} solutions</span>
          </div>

          <div className="product-grid" role="tabpanel" key={activeGroup}>
            {group.products.map((product, index) => (
              <article className="product-card" key={product.name}>
                <div className="product-image">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={700}
                    height={500}
                  />
                </div>
                <div className="product-card-copy">
                  <div>
                    <h3>{product.shortName}</h3>
                    <p>{product.note}</p>
                  </div>
                  <a href="#contact" aria-label={`Enquire about ${product.name}`}>
                    <Icon name="arrow" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section proof" id="clients">
        <div className="container proof-layout">
          <div className="proof-content">
            <span className="section-label light">Proven experience</span>
            <h2>Trusted where performance matters.</h2>
            <p>
              Our clients span infrastructure, energy, banking, retail,
              hospitality, healthcare, fitness, education and public-sector
              environments.
            </p>
            <div className="client-pills">
              {otherClients.map((client) => <span key={client}>{client}</span>)}
            </div>
          </div>
          <div className="proof-cards">
            <article>
              <Image src="/images/reliance.png" alt="Reliance Industries" width={350} height={250} />
              <div><strong>Reliance Industries</strong><span>Industrial</span></div>
            </article>
            <article>
              <Image src="/images/fddi.png" alt="FDDI" width={350} height={250} />
              <div><strong>FDDI</strong><span>Institutional</span></div>
            </article>
          </div>
        </div>
      </section>

      <section className="section recognition">
        <div className="container">
          <div className="recognition-heading">
            <div>
              <span className="section-label">A legacy of excellence</span>
              <h2>Awards earned through consistency.</h2>
            </div>
            <div className="recognition-intro">
              <p>
                A record of sales performance, service excellence and trusted
                partnership recognized by Carrier and Carrier Midea India.
                These honors are milestones in our journey toward becoming an
                industry leader.
              </p>
              <blockquote>
                “Top-notch customer service. The management and technicians
                were fantastic and did a great job.”
                <span>SE Aircon customer</span>
              </blockquote>
            </div>
          </div>

          <div className="awards-grid">
            {awards.map((award, index) => (
              <article
                className={award.landscape ? "award-card award-landscape" : "award-card"}
                style={{ "--award-delay": `${index * 70}ms` } as CSSProperties}
                key={`${award.year}-${award.title}-${index}`}
              >
                <div className="award-image">
                  <span className="award-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <Image
                    src={award.image}
                    alt={`${award.year ? `${award.year} ` : ""}${award.title} award`}
                    width={award.landscape ? 808 : 551}
                    height={award.landscape ? 628 : 1086}
                  />
                </div>
                <div className="award-copy">
                  <div className={award.year ? "award-meta" : "award-meta award-meta-no-year"}>
                    {award.year ? <span className="award-year">{award.year}</span> : null}
                    <span>{award.issuer}</span>
                  </div>
                  <p>{award.program}</p>
                  <h3>{award.title}</h3>
                  <small>{award.detail}</small>
                </div>
              </article>
            ))}
          </div>

          <div className="recognition-note">
            <span className="section-label">A legacy of excellence</span>
            <p>
              Every recognition reflects the same standard: hard work,
              dependable execution, attentive service and long-term customer
              relationships.
            </p>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="container contact-layout">
          <div className="contact-content">
            <span className="section-label light">Let’s talk</span>
            <h2>Planning a new project or need service?</h2>
            <p>
              Share your requirement with our team. We’ll help you identify the
              right next step for your space.
            </p>
            <div className="contact-list">
              <a href="tel:+919311885464">
                <Icon name="phone" />
                <span><small>Call us</small>+91 93118 85464</span>
              </a>
              <a href="mailto:noida@seaircon.com">
                <Icon name="mail" />
                <span><small>Email us</small>noida@seaircon.com</span>
              </a>
              <div>
                <Icon name="pin" />
                <span><small>Visit us</small>G-313, Sector 63, Noida, UP 201301</span>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleContactSubmit}>
            <div className="form-heading">
              <h3>Tell us about your requirement</h3>
              <p>Our team will get back to you shortly.</p>
            </div>
            <label className="hidden-field" aria-hidden="true">
              <span>Company website</span>
              <input
                type="text"
                name="companyWebsite"
                tabIndex={-1}
                autoComplete="off"
              />
            </label>
            <div className="form-row">
              <label>
                <span>First name</span>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  required
                />
              </label>
              <label>
                <span>Last name</span>
                <input type="text" name="lastName" placeholder="Last name" />
              </label>
            </div>
            <label>
              <span>Email address</span>
              <input
                type="email"
                name="email"
                placeholder="you@company.com"
                required
              />
            </label>
            <label>
              <span>Phone number</span>
              <input type="tel" name="phone" placeholder="+91" required />
            </label>
            <label>
              <span>Message</span>
              <textarea
                rows={4}
                name="message"
                placeholder="How can we help?"
                required
              />
            </label>
            <button
              className="button button-primary"
              type="submit"
              disabled={formStatus === "submitting"}
            >
              {formStatus === "submitting" ? "Sending..." : "Send inquiry"}
              <Icon name="arrow" />
            </button>
            {formMessage ? (
              <p className={`form-status ${formStatus}`} role="status">
                {formMessage}
              </p>
            ) : null}
          </form>
        </div>
      </section>

      <footer>
        <div className="container footer-inner">
          <a className="brand footer-brand" href="#home">
            <Image src="/images/logo.jpg" alt="" width={52} height={52} />
            <span><strong>SE AIRCON</strong><small>PRIVATE LIMITED</small></span>
          </a>
          <p>Design · Supply · Install · Service · Maintain</p>
          <div>
            <span>© {new Date().getFullYear()} SE Aircon Pvt. Ltd.</span>
            <a href="#home">Back to top ↑</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
