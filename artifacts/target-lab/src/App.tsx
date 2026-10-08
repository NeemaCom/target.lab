import { useState } from 'react';

const navigation = [
  { label: 'What We Build', href: '#what-we-build' },
  { label: 'Ventures', href: '#ventures' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const capabilities = [
  {
    number: '01',
    title: 'AI-Native Development',
    description:
      'AI applications, agents, intelligent automation and AI-powered business systems.',
    icon: (
      <svg viewBox="0 0 44 44" aria-hidden="true">
        <circle cx="22" cy="22" r="15" />
        <circle cx="22" cy="22" r="7" />
        <path d="M22 1v9M22 34v9M1 22h9M34 22h9M7.2 7.2l6.4 6.4m16.8 16.8 6.4 6.4m0-29.6-6.4 6.4M13.6 30.4l-6.4 6.4" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Digital Products',
    description: 'Web applications, platforms, APIs and software products.',
    icon: (
      <svg viewBox="0 0 44 44" aria-hidden="true">
        <rect x="6" y="7" width="32" height="27" rx="2" />
        <path d="M6 14h32M13 10.5h.1M17 10.5h.1M21 10.5h.1M17 39h10M22 34v5" />
        <path d="m16 22 4 4-4 4m8 0h5" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Data & Intelligence',
    description:
      'Data systems, analytics, business intelligence and decision-support tools.',
    icon: (
      <svg viewBox="0 0 44 44" aria-hidden="true">
        <path d="M5 37h34M9 33V22h7v11m6 0V13h7v20m6 0V7h5v26" />
        <path d="m8 17 9-7 8 4 11-9" />
        <circle cx="8" cy="17" r="2" /><circle cx="17" cy="10" r="2" />
        <circle cx="25" cy="14" r="2" /><circle cx="36" cy="5" r="2" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Technology Ventures',
    description:
      'We identify important problems and build technology companies and products around them.',
    icon: (
      <svg viewBox="0 0 44 44" aria-hidden="true">
        <path d="M22 5v34M5 22h34M10 10l24 24M34 10 10 34" />
        <circle cx="22" cy="22" r="13" />
        <circle cx="22" cy="22" r="4" />
      </svg>
    ),
  },
];

function SystemGraphic() {
  return (
    <div className="system-graphic" role="img" aria-label="Abstract network of connected systems">
      <svg viewBox="0 0 520 520" aria-hidden="true">
        <circle className="orbit" cx="260" cy="260" r="224" />
        <circle className="orbit" cx="260" cy="260" r="173" />
        <circle className="orbit" cx="260" cy="260" r="116" />
        <path className="network" d="M65 197 146 140 222 184 301 104 395 149 456 232 393 322 316 390 223 345 136 390 69 311 65 197Z" />
        <path className="network" d="m146 140 18 100 58-56 52 85 27-165m94 45-24 94 85-11m-148 58-92 60 9-101-94-9m177 50-61-36 91-22" />
        <path className="network-bright" d="m164 240 110 29 93-22m-51-143-52 165 52 121m-94-45-94-9" />
        <circle className="node-hot" cx="301" cy="104" r="5" />
        <circle className="node" cx="146" cy="140" r="4" />
        <circle className="node" cx="164" cy="240" r="4" />
        <circle className="node-hot" cx="274" cy="269" r="5" />
        <circle className="node" cx="367" cy="247" r="4" />
        <circle className="node" cx="393" cy="322" r="4" />
        <circle className="node-hot" cx="316" cy="390" r="4" />
        <circle className="node" cx="223" cy="345" r="4" />
        <circle className="node" cx="136" cy="390" r="4" />
        <circle className="node" cx="65" cy="197" r="4" />
        <circle className="node" cx="456" cy="232" r="4" />
        <circle className="node" cx="395" cy="149" r="4" />
      </svg>
      <span className="graphic-label top">Systems / 01—04</span>
      <span className="graphic-label bottom">Problem → possibility<br />Signal / 001</span>
      <span className="graphic-core">TARGET<br />/ LAB</span>
    </div>
  );
}

function CushGraphic() {
  return (
    <div className="cush-visual" role="img" aria-label="Abstract routes connecting identities across borders">
      <svg viewBox="0 0 460 330" aria-hidden="true">
        <circle className="ring" cx="230" cy="165" r="128" />
        <circle className="ring" cx="230" cy="165" r="91" />
        <circle className="ring" cx="230" cy="165" r="53" />
        <path className="route" d="M42 231C100 213 103 111 173 105s93 73 147 63 60-48 99-66" />
        <path className="route" d="M56 93c53 34 88 30 119 66s38 99 97 91 78-59 123-34" />
        <path className="route" d="M103 287c17-54 74-58 108-94s39-91 96-111 91 5 112 38" />
        <path className="route-strong" d="M42 231c58-18 61-120 131-126s93 73 147 63 60-48 99-66" />
        <circle className="dot" cx="42" cy="231" r="4" />
        <circle className="dot" cx="173" cy="105" r="4" />
        <circle className="dot" cx="320" cy="168" r="4" />
        <circle className="dot" cx="419" cy="102" r="4" />
        <circle className="dot" cx="230" cy="165" r="7" />
        <path className="ring" d="M230 158v14m-7-7h14" />
      </svg>
      <span className="cush-caption">Portable identity / connected lives</span>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="wrap header-inner">
          <a className="wordmark" href="#home" aria-label="Target Lab home" onClick={closeMenu} data-testid="link-home">
            <span className="mark" aria-hidden="true" />
            <span>TARGET LAB</span>
          </a>
          <button
            className="menu-button"
            type="button"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((open) => !open)}
            data-testid="button-toggle-navigation"
          >
            {menuOpen ? 'CLOSE' : 'MENU'}
          </button>
          <nav
            className={`nav${menuOpen ? ' is-open' : ''}`}
            id="primary-navigation"
            aria-label="Primary navigation"
          >
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                data-testid={`link-primary-${item.href.slice(1)}`}
              >
                {item.label}
              </a>
            ))}
            <a className="nav-contact" href="#contact" onClick={closeMenu} data-testid="link-primary-contact">
              Start a conversation <span aria-hidden="true">↗</span>
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="home" aria-labelledby="hero-title">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <div className="eyebrow reveal">Independent technology company</div>
              <h1 id="hero-title" className="reveal reveal-delay" data-testid="heading-hero">TARGET<br />LAB</h1>
              <p className="hero-tagline reveal reveal-delay" data-testid="text-hero-tagline">
                Building the <span>Next Generation</span> Solutions.
              </p>
              <p className="hero-intro" data-testid="text-hero-intro">
                Target Lab is an AI-native technology company building intelligent digital
                solutions and technology ventures for the next generation.
              </p>
              <div className="actions">
                <a className="button button-primary" href="#contact" data-testid="link-build-with-us">
                  Build With Us <span className="arrow" aria-hidden="true">↗</span>
                </a>
                <a className="button button-quiet" href="#ventures" data-testid="link-explore-cush">
                  Explore Cush <span className="arrow" aria-hidden="true">↘</span>
                </a>
              </div>
            </div>
            <div className="hero-art">
              <SystemGraphic />
            </div>
          </div>
        </section>

        <section className="section" id="what-we-build" aria-labelledby="build-title">
          <div className="wrap">
            <div className="section-heading">
              <div className="eyebrow">What we build</div>
              <h2 id="build-title">We build what<br />comes next.</h2>
              <p>
                From AI-native applications to intelligent business systems, we turn important
                problems into practical digital solutions.
              </p>
            </div>
            <div className="capability-grid">
              {capabilities.map((capability) => (
                <article className="capability" key={capability.number} data-testid={`card-capability-${capability.number}`}>
                  <span className="capability-number">{capability.number} / 04</span>
                  <div className="capability-mark">{capability.icon}</div>
                  <h3>{capability.title}</h3>
                  <p>{capability.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="venture" id="ventures" aria-labelledby="venture-title">
          <div className="wrap venture-inner">
            <div className="venture-copy">
              <div className="eyebrow">Built by Target Lab</div>
              <h2 id="venture-title" data-testid="heading-cush">CUSH</h2>
              <p className="venture-line">
                Cross-border financial identity infrastructure for economically invisible migrants.
              </p>
              <p className="venture-desc">
                Cush is building infrastructure that helps people whose economic lives cross
                borders establish a more portable financial and economic identity.
              </p>
              <a
                className="button"
                href="mailto:targetlabhq@gmail.com?subject=Learn%20more%20about%20Cush"
                data-testid="link-cush-inquiry"
              >
                Explore Cush <span className="arrow" aria-hidden="true">↗</span>
              </a>
            </div>
            <CushGraphic />
          </div>
        </section>

        <section className="approach" aria-labelledby="approach-title">
          <div className="wrap">
            <div className="approach-top">
              <div>
                <div className="eyebrow">Our approach</div>
                <h2 id="approach-title">Start with<br />the problem.</h2>
              </div>
              <p className="approach-copy">
                We don't build technology because it is new. We build it because a problem is
                worth solving.
              </p>
            </div>
            <div className="steps" aria-label="Understand, Design, Build, Launch">
              {['Understand', 'Design', 'Build', 'Launch'].map((step, index) => (
                <div className="step" key={step} data-testid={`text-approach-${step.toLowerCase()}`}>
                  <span className="step-index">0{index + 1}</span>
                  <span className="step-label">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="about" id="about" aria-labelledby="about-title">
          <div className="wrap about-layout">
            <div className="eyebrow">About Target Lab</div>
            <div className="about-content">
              <h2 id="about-title" data-testid="heading-about">A technology company built to build.</h2>
              <div className="about-copy">
                <p>
                  Target Lab combines artificial intelligence, software engineering, product
                  thinking and data to create solutions for organisations and markets changing
                  rapidly around us.
                </p>
                <p>
                  We work with organisations that have a problem worth solving and build
                  technology around the opportunity.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="contact" id="contact" aria-labelledby="contact-title">
          <div className="wrap contact-inner">
            <div>
              <div className="eyebrow">Contact</div>
              <h2 id="contact-title" data-testid="heading-contact">Have something worth building?</h2>
              <p>Tell us what you're trying to solve. Let's explore what we can build together.</p>
            </div>
            <a
              className="button button-primary"
              href="mailto:targetlabhq@gmail.com"
              data-testid="link-contact-email"
            >
              Start a Conversation <span className="arrow" aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap">
          <div className="footer-main">
            <div>
              <a className="wordmark" href="#home" aria-label="Target Lab home" data-testid="link-footer-home">
                <span className="mark" aria-hidden="true" />
                <span>TARGET LAB</span>
              </a>
              <p className="footer-tagline">Building the Next Generation Solutions.</p>
            </div>
            <nav className="footer-links" aria-label="Footer navigation">
              {navigation.map((item) => (
                <a key={item.href} href={item.href} data-testid={`link-footer-${item.href.slice(1)}`}>{item.label}</a>
              ))}
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
