import { useState, useEffect, useRef } from "react";

// SVG Icons
const Icons = {
  backend: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
    </svg>
  ),
  frontend: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
    </svg>
  ),
  mobile: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2"/><circle cx="12" cy="17" r="1"/>
    </svg>
  ),
  cake: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"/><path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"/><path d="M2 21h20"/><path d="M7 8v2"/><path d="M12 8v2"/><path d="M17 8v2"/><path d="M7 4h.01"/><path d="M12 4h.01"/><path d="M17 4h.01"/>
    </svg>
  ),
  globe: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  ),
  mail: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  ),
  phone: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.05 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 17z"/>
    </svg>
  ),
  pin: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
    </svg>
  ),
  shop: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>
    </svg>
  ),
  code: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
    </svg>
  ),
  api: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
    </svg>
  ),
  android: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2"/><circle cx="12" cy="17" r="1"/>
    </svg>
  ),
  linkedin: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
    </svg>
  ),
  github: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>
    </svg>
  ),
};

const data = {
  name: "S. Eniya Gunalan",
  role: "Full Stack Developer",
  company: "Foresight Technologies",
  email: "gunaeniyan1@gmail.com",
  phone: "+91 7339323675",
  dob: "11 October 2002",
  languages: "Tamil, English",
  summary:
    "Passionate Full Stack Developer with 2.5 years of professional experience and 6 months of internship building dynamic web applications and enterprise systems. Specializing in PHP (Core & CodeIgniter 3/4), VB.NET, and secure backend solutions. Experienced in logistics truckload planning, IMPS payment workflows, Aadhaar KYC authorization, billing and finance software, RESTful API integration, MySQL, and responsive React websites.",
  education: [
    {
      degree: "Bachelor of Science (B.Sc. IT)",
      institute: "Erode Arts and Science College",
      year: "2023",
      score: "69%",
    },
    {
      degree: "Higher Secondary (HSC)",
      institute: "M.P.D Govt Hr. Sec School, Thingalur",
      year: "2020",
      score: "62%",
    },
    {
      degree: "SSLC",
      institute: "M.P.D Govt Hr. Sec School, Thingalur",
      year: "2018",
      score: "80.4%",
    },
  ],
  skills: [
    {
      category: "Backend",
      icon: "backend",
      items: ["PHP Core", "VB.NET", "CodeIgniter 3", "CodeIgniter 4", "RESTful APIs", "MySQL", "JSON", "JWT", "OAuth 2.0", "IMPS"],
    },
    {
      category: "Frontend",
      icon: "frontend",
      items: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "React (Basic)", "Responsive Design"],
    },
    {
      category: "Mobile & Other",
      icon: "mobile",
      items: ["Android Hybrid App", "Mobile-Responsive Pages", "Git", "XAMPP", "Postman"],
    },
  ],
  experience: [
    {
      role: "Full Stack Developer",
      company: "Foresight Technologies",
      duration: "Jan 2024 – Present · 2 Years 5 Months",
      points: [
        "Developing and maintaining web applications using PHP CodeIgniter 3 & 4 and VB.NET.",
        "Delivering logistics truckload planning and payment-style software with IMPS and mobile payment workflows.",
        "Building and integrating RESTful APIs including Money Transfer APIs, IMPS transaction handling, JWT authentication, and OAuth 2.0 authorization.",
        "Developing Aadhaar KYC authorization flows and secure user onboarding for authenticated access.",
        "Creating mobile-responsive React applications and hybrid-ready web pages using HTML, CSS, Tailwind, and JavaScript.",
        "Wrapping mobile-responsive pages into hybrid Android apps using a single Java file.",
        "Managing MySQL databases, writing optimized queries, reports, and stored procedures.",
      ],
      tags: ["VB.NET", "PHP", "CodeIgniter 3/4", "IMPS", "Aadhaar KYC", "Billing", "Finance", "React JS", "MySQL"],
    },
    {
      role: "React JS Intern",
      company: "NSchool Academy",
      duration: "Mid 2023 – End 2023 · ~6 Months",
      points: [
        "Completed a hands-on React JS internship focused on component-based UI development.",
        "Built basic React projects using functional components, hooks, and state management.",
        "Worked with REST APIs to fetch and display dynamic data in React applications.",
        "Gained experience in JSX, props, useState, useEffect, and basic routing.",
      ],
      tags: ["React JS", "JavaScript", "HTML", "CSS", "REST API", "Hooks"],
    },
  ],
  projects: [
    {
      icon: "shop",
      title: "Online Traditional Shopper",
      desc: "An e-commerce platform for selling traditional products (clothing, handicrafts, home décor) worldwide. Built with PHP, MySQL, and JavaScript with a clean product showcase UI.",
      stack: ["HTML", "CSS", "PHP 5.4", "MySQL 5.6", "JavaScript"],
      type: "College Project",
    },
    {
      icon: "code",
      title: "Logistics & Payment Software",
      desc: "Built truckload planning and payment-style logistics software with VB.NET and CodeIgniter, including IMPS workflows and finance/billing automation.",
      stack: ["VB.NET", "PHP CI3", "PHP CI4", "IMPS", "MySQL", "JavaScript"],
      type: "Professional",
    },
    {
      icon: "api",
      title: "Aadhaar KYC & Secure APIs",
      desc: "Developed Aadhaar KYC authorization flows and secure RESTful APIs with JWT and OAuth 2.0 for authenticated user onboarding and data protection.",
      stack: ["PHP", "REST API", "JSON", "JWT", "OAuth 2.0", "Aadhaar KYC"],
      type: "Professional",
    },
    {
      icon: "android",
      title: "Hybrid Android App",
      desc: "Converted a mobile-responsive web page into an Android application using a single Java file with WebView — enabling app-like experience on Android devices.",
      stack: ["Android", "Java(Basic)", "WebView", "HTML", "CSS"],
      type: "Professional",
    },
    {
      icon: "code",
      title: "React Application Development",
      desc: "Created responsive React applications and client-facing dashboards for modern business workflows and improved UX.",
      stack: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
      type: "Professional",
    },
  ],
};

const style = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@500;700;800&family=Outfit:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;700&display=swap');
  
  * { box-sizing: border-box; margin: 0; padding: 0; }
  
  :root {
    --bg: #f8fafc; /* Subtle bright background */
    --surface: rgba(255, 255, 255, 0.75); /* White glass surface */
    --surface-solid: #ffffff;
    --surface2: rgba(241, 245, 249, 0.8);
    --accent: #0ea5e9; /* Soft bright sky blue */
    --accent2: #f97316; /* Coral orange */
    --accent3: #8b5cf6; /* Soft violet */
    --text: #0f172a; /* Slate 900 for heading text */
    --muted: #475569; /* Slate 600 for description text */
    --border: rgba(15, 23, 42, 0.06); /* Subtle borders */
    --glow: rgba(14, 165, 233, 0.1);
  }
  
  body {
    background: var(--bg);
    color: var(--text);
    font-family: 'Outfit', sans-serif;
    overflow-x: hidden;
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-thumb { background: linear-gradient(var(--accent), var(--accent3)); border-radius: 999px; }
  
  .portfolio-root { 
    min-height: 100vh; 
    position: relative;
    will-change: scroll-position;
  }

  /* SCROLL PROGRESS BAR */
  .scroll-progress {
    position: fixed; top: 0; left: 0; height: 3px;
    background: linear-gradient(90deg, var(--accent), var(--accent3), var(--accent2));
    z-index: 999; width: 0%;
    transition: width 0.1s ease-out;
    box-shadow: 0 0 20px rgba(14, 165, 233, 0.25);
    will-change: width;
    transform: translate3d(0, 0, 0);
  }
  .scroll-progress::after {
    content: '';
    position: absolute;
    top: 0; right: 0; bottom: 0;
    width: 6px;
    background: rgba(255,255,255,0.6);
    filter: blur(7px);
  }

  /* SUBTLE BRIGHT BACKGROUND GLOW ORBS */
  .ambient-glows {
    position: fixed; top: 0; left: 0; right: 0; bottom: 0;
    pointer-events: none; z-index: -1; overflow: hidden;
    will-change: transform;
    transform: translate3d(0, 0, 0);
  }
  .glow-orb {
    position: absolute; border-radius: 50%;
    filter: blur(140px); opacity: 0.55;
    animation: drift 25s infinite alternate ease-in-out;
  }
  .orb-1 { width: 600px; height: 600px; background: #e0f2fe; top: -10%; left: -10%; }
  .orb-2 { width: 500px; height: 500px; background: #f3e8ff; bottom: -10%; right: -10%; animation-delay: -5s; }
  .orb-3 { width: 400px; height: 400px; background: #ffedd5; top: 50%; left: 40%; animation-delay: -10s; }

  @keyframes drift {
    0% { transform: translate(0, 0) rotate(0deg) scale(1); }
    100% { transform: translate(120px, 80px) rotate(360deg) scale(1.15); }
  }
  @keyframes fadeInUp {
    0% { opacity: 0; transform: translateY(30px); }
    100% { opacity: 1; transform: translateY(0); }
  }
  @keyframes badgePulse {
    0%, 100% { transform: translateY(0) scale(1); }
    50% { transform: translateY(-2px) scale(1.01); }
  }
  @keyframes panelFloat {
    0% { opacity: 0; transform: translateY(24px); }
    100% { opacity: 1; transform: translateY(0); }
  }

  /* HERO STAGGERED ENTRANCE */
  @keyframes heroRise {
    0% { opacity: 0; transform: translateY(26px); }
    100% { opacity: 1; transform: translateY(0); }
  }
  @keyframes heroSlideIn {
    0% { opacity: 0; transform: translateX(36px) scale(0.97); }
    100% { opacity: 1; transform: translateX(0) scale(1); }
  }
  .hero-rise {
    opacity: 0;
    animation: heroRise 0.85s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }
  .hero-slide {
    opacity: 0;
    animation: heroSlideIn 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }

  /* GENERIC CASCADING REVEAL FOR GRID ITEMS (skills, projects, experience, education) */
  .stagger-item {
    opacity: 0;
    transform: translateY(18px);
    transition: opacity 0.65s cubic-bezier(0.22, 1, 0.36, 1), transform 0.65s cubic-bezier(0.22, 1, 0.36, 1);
    transition-delay: var(--stagger-delay, 0ms);
  }
  .stagger-item.stagger-vis { opacity: 1; transform: translateY(0); }

  /* FLOATING NAV */
  .nav-wrapper {
    position: fixed; top: 1.5rem; left: 50%; transform: translateX(-50%);
    z-index: 500; width: fit-content; max-width: 90%;
  }
  .nav {
    display: flex; align-items: center; gap: 1rem;
    padding: 0.5rem 1rem;
    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(25px);
    border: 1px solid var(--border);
    border-radius: 999px;
    box-shadow: 0 14px 40px -16px rgba(15, 23, 42, 0.18);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .nav:hover { transform: translateY(-1px); }
  .nav-logo {
    font-family: 'Syne', sans-serif;
    font-weight: 800; font-size: 1.1rem;
    color: var(--text);
    padding: 0.4rem 0.8rem;
    border-right: 1px solid var(--border);
    margin-right: 0.5rem;
  }
  .nav-links { display: flex; gap: 0.5rem; list-style: none; align-items: center; position: relative; }
  .nav-links li { position: relative; z-index: 1; }
  .nav-indicator {
    position: absolute; top: 0; bottom: 0; left: 0;
    border-radius: 999px;
    background: rgba(14, 165, 233, 0.08);
    border: 1px solid rgba(14, 165, 233, 0.18);
    transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), width 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.25s ease;
    z-index: 0; pointer-events: none;
  }
  .nav-links button {
    position: relative;
    background: none; border: 1px solid transparent; cursor: pointer;
    color: var(--muted); font-family: 'Outfit', sans-serif;
    font-size: 0.85rem; font-weight: 500; padding: 0.5rem 1rem;
    border-radius: 999px; transition: color 0.25s ease;
  }
  .nav-links button:hover { color: var(--accent); }
  .nav-links button.active { color: var(--accent); }
  .hamburger {
    display: none; flex-direction: column; gap: 5px;
    cursor: pointer; background: none; border: none; padding: 0.5rem;
  }
  .hamburger span {
    display: block; width: 20px; height: 2px;
    background: var(--text); border-radius: 2px; transition: all 0.3s;
  }
  
  .mobile-nav {
    position: fixed; top: 5.5rem; left: 1rem; right: 1rem; z-index: 499;
    background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(25px);
    border: 1px solid var(--border); border-radius: 20px;
    padding: 1.5rem;
    display: flex; flex-direction: column; gap: 0.75rem;
    transform: scale(0.95) translateY(-20px); opacity: 0; pointer-events: none;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .mobile-nav.open { transform: scale(1) translateY(0); opacity: 1; pointer-events: auto; }
  .mobile-nav button {
    background: none; border: none; color: var(--text);
    font-family: 'Outfit', sans-serif; font-size: 1rem; font-weight: 500;
    cursor: pointer; text-align: left; padding: 0.8rem 1rem;
    border-radius: 10px; transition: background 0.2s;
  }
  .mobile-nav button:hover { background: rgba(15, 23, 42, 0.05); color: var(--accent); }

  /* SPOTLIGHT GLOW CARDS */
  .spotlight-card {
    position: relative;
    background: var(--surface);
    backdrop-filter: blur(16px);
    border: 1px solid var(--border);
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 8px 30px rgba(15, 23, 42, 0.02);
    transition: transform 0.3s cubic-bezier(0.25, 1, 0.5, 1), border-color 0.3s ease, box-shadow 0.3s ease, background 0.4s ease;
    animation: panelFloat 1.1s ease-out both;
    will-change: transform, box-shadow;
    transform: translate3d(0, 0, 0);
  }
  .spotlight-card:hover {
    transform: translateY(-8px) scale(1.02);
    border-color: rgba(14, 165, 233, 0.25);
    box-shadow: 0 18px 45px rgba(15, 23, 42, 0.12);
    background: rgba(255, 255, 255, 0.92);
  }
  .spotlight-card::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; bottom: 0;
    border-radius: inherit; pointer-events: none; opacity: 0;
    background: radial-gradient(400px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(14, 165, 233, 0.08), transparent 80%);
    transition: opacity 0.4s ease; z-index: 1;
  }
  .spotlight-card:hover::before { opacity: 1; }
  .spotlight-card::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: linear-gradient(180deg, rgba(255,255,255,0.12), transparent 70%);
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  .spotlight-card:hover::after { opacity: 1; }


  /* SECTIONS */
  .section { padding: 8rem 2rem; max-width: 1120px; margin: 0 auto; position: relative; }
  .section-label {
    font-size: 0.75rem; font-weight: 700; letter-spacing: 0.18em;
    text-transform: uppercase; color: var(--accent); margin-bottom: 0.8rem;
    display: flex; align-items: center; gap: 0.5rem;
  }
  .section-label::after {
    content: ''; width: 40px; height: 1px; background: var(--accent);
  }
  .section-title {
    font-family: 'Syne', sans-serif;
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 800; letter-spacing: -0.03em;
    color: var(--text); margin-bottom: 1rem;
    line-height: 1.1;
  }
  .section-sub {
    color: var(--muted); font-size: 1.05rem; font-weight: 300; max-width: 600px;
  }
  .section-header {
    margin-bottom: 4rem;
    position: relative;
    z-index: 1;
  }
  .section-header::after {
    content: '';
    position: absolute;
    left: 50%; bottom: -18px;
    transform: translateX(-50%);
    width: min(620px, calc(100% - 2rem));
    height: 4px;
    border-radius: 999px;
    background: linear-gradient(90deg, rgba(56, 189, 248, 0.18), rgba(14, 165, 233, 0.35), rgba(56, 189, 248, 0.18));
  }
  .section-sub { color: var(--muted); font-size: 1.05rem; font-weight: 300; max-width: 600px; }
  .divider { height: 1px; background: linear-gradient(90deg, transparent, var(--border), transparent); max-width: 1120px; margin: 0 auto; }

  /* HERO SECTION (Split Grid) */
  .hero-grid {
    display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 4rem; align-items: center;
    min-height: 100vh; padding: 8rem 2rem 4rem; max-width: 1120px; margin: 0 auto;
  }
  .hero-info { display: flex; flex-direction: column; justify-content: center; }
  .hero-badge {
    display: inline-flex; align-items: center; gap: 0.6rem;
    background: rgba(14, 165, 233, 0.08); border: 1px solid rgba(14, 165, 233, 0.18);
    border-radius: 999px; padding: 0.5rem 1.1rem;
    font-size: 0.75rem; color: var(--accent); font-weight: 600;
    letter-spacing: 0.08em; text-transform: uppercase;
    margin-bottom: 2rem; width: fit-content;
    animation: badgePulse 3.6s ease-in-out infinite;
  }
  .hero h1 .highlight {
    position: relative;
  }
  .hero h1 .highlight::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0.16rem;
    width: 100%;
    height: 0.9rem;
    background: radial-gradient(circle, rgba(14,165,233,0.22), transparent 70%);
    border-radius: 999px;
    z-index: -1;
    transform: scaleX(0.95);
  }
  .hero-cta .btn {
    position: relative;
    overflow: hidden;
  }
  .hero-cta .btn::after {
    content: '';
    position: absolute;
    width: 180%;
    height: 180%;
    background: radial-gradient(circle at center, rgba(255,255,255,0.3), transparent 55%);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.6);
    opacity: 0;
    transition: transform 0.4s ease, opacity 0.4s ease;
  }
  .hero-cta .btn:hover::after {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
  .badge-dot {
    width: 8px; height: 8px; background: var(--accent); border-radius: 50%;
    box-shadow: 0 0 10px rgba(14, 165, 233, 0.3); animation: blink 2s infinite;
  }
  /* CUSTOM CURSOR */
  .portfolio-root { cursor: none; }
  .cursor-dot, .cursor-ring { position: fixed; pointer-events: none; z-index: 2000; transform: translate(-50%, -50%); will-change: transform, opacity; }
  .cursor-dot {
    width: 10px; height: 10px; border-radius: 50%; background: var(--accent); box-shadow: 0 6px 18px rgba(14,165,233,0.35); opacity: 0.95; transition: width 0.18s ease, height 0.18s ease, background 0.18s ease, transform 0.08s linear;
  }
  .cursor-ring {
    width: 46px; height: 46px; border-radius: 50%; border: 2px solid rgba(14,165,233,0.22); background: transparent; transition: transform 0.18s cubic-bezier(.2,.8,.2,1), border-color 0.18s ease, opacity 0.2s ease; opacity: 0.95;
  }
  .cursor-hover.cursor-dot { width: 14px; height: 14px; background: var(--accent3); box-shadow: 0 10px 26px rgba(139,92,246,0.25); }
  .cursor-hover.cursor-ring { transform: scale(1.25); border-color: rgba(139,92,246,0.32); }
  .cursor-click { transform: scale(0.85) !important; opacity: 0.9 !important; }

  .cursor-trail {
    position: fixed; width: 8px; height: 8px; border-radius: 50%; background: rgba(14,165,233,0.9);
    transform: translate(-50%, -50%) scale(1);
    pointer-events: none; z-index: 1999; box-shadow: 0 6px 14px rgba(14,165,233,0.22);
    transition: transform 0.18s ease, opacity 0.18s ease;
  }

  /* Touch devices never fire mousemove, so the custom cursor would otherwise
     sit frozen at its initial position and look like a stray UI glitch. */
  @media (hover: none) and (pointer: coarse) {
    .cursor-dot, .cursor-ring, .cursor-trail { display: none !important; }
    .portfolio-root { cursor: auto !important; }
  }

  @keyframes blink {
    0%,100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.3; transform: scale(1.4); }
  }
  @keyframes shimmer {
    0% { background-position: 0% 50%; }
    100% { background-position: 100% 50%; }
  }
  .hero h1 {
    font-family: 'Syne', sans-serif;
    font-size: clamp(2.8rem, 7vw, 5rem);
    font-weight: 800; line-height: 1.0; letter-spacing: -0.04em;
    margin-bottom: 1.5rem;
  }
  .hero h1 .highlight {
    background: linear-gradient(120deg, var(--accent), var(--accent3), var(--accent2));
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .hero-sub {
    font-size: clamp(1rem, 2vw, 1.15rem);
    color: var(--muted); max-width: 580px; line-height: 1.8; font-weight: 300;
    margin-bottom: 2rem;
  }
  .hero-chips { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 2.5rem; }
  .chip {
    background: rgba(15, 23, 42, 0.02); border: 1px solid var(--border);
    border-radius: 8px; padding: 0.4rem 0.9rem;
    font-size: 0.8rem; color: var(--muted); font-weight: 500;
    transition: all 0.25s ease; cursor: default;
  }
  .chip:hover { border-color: var(--accent); color: var(--accent); background: rgba(14, 165, 233, 0.05); transform: translateY(-2px); }
  .hero-cta { display: flex; gap: 1rem; flex-wrap: wrap; }
  
  .btn {
    display: inline-flex; align-items: center; gap: 0.6rem;
    padding: 0.8rem 1.8rem; border-radius: 12px;
    font-family: 'Outfit', sans-serif; font-size: 0.92rem; font-weight: 600;
    cursor: pointer; border: none; text-decoration: none; transition: transform 0.18s cubic-bezier(0.22,1,0.36,1), box-shadow 0.25s ease, border-color 0.25s ease, color 0.25s ease, background 0.25s ease;
  }
  .btn-primary { 
    background: linear-gradient(135deg, var(--accent), var(--accent3)); 
    color: #ffffff; 
    box-shadow: 0 10px 30px -10px rgba(14, 165, 233, 0.35);
  }
  .btn-primary:hover { 
    box-shadow: 0 18px 45px -14px rgba(14, 165, 233, 0.55);
  }
  .btn-outline { background: transparent; color: var(--text); border: 1px solid var(--border); }
  .btn-outline:hover { border-color: var(--accent); color: var(--accent); background: rgba(15, 23, 42, 0.02); }

  /* BUTTON RIPPLE */
  .ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255,255,255,0.55);
    transform: scale(0);
    animation: rippleAnim 0.6s ease-out;
    pointer-events: none;
  }
  @keyframes rippleAnim {
    to { transform: scale(2.6); opacity: 0; }
  }

  /* MOCK EDITOR / TERMINAL (Sleek Slate Contrast Window) */
  .editor-wrapper {
    position: relative;
    width: 100%;
    background: #0f172a;
    border: 1px solid var(--border);
    border-radius: 16px;
    box-shadow: 0 25px 50px -12px rgba(15, 23, 42, 0.15);
    overflow: hidden;
  }
  .editor-header {
    background: #1e293b;
    padding: 0.75rem 1rem;
    display: flex; align-items: center; justify-content: space-between;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }
  .editor-dots { display: flex; gap: 6px; }
  .editor-dot { width: 12px; height: 12px; border-radius: 50%; }
  .dot-red { background: #ff5f56; }
  .dot-yellow { background: #ffbd2e; }
  .dot-green { background: #27c93f; }
  .editor-title { color: #94a3b8; font-size: 0.75rem; font-family: 'JetBrains Mono', monospace; }
  .editor-body {
    padding: 1.5rem;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.8rem;
    line-height: 1.6;
    color: #93c5fd;
    overflow-x: auto;
  }
  .code-line { display: flex; gap: 1rem; }
  .line-num { color: #3b82f6; opacity: 0.4; width: 20px; text-align: right; user-select: none; }
  .line-content { white-space: pre; color: #e2e8f0; }
  .keyword { color: #f472b6; }
  .class-name { color: #a78bfa; }
  .string { color: #34d399; }
  .comment { color: #64748b; font-style: italic; }
  .term-cursor {
    display: inline-block; width: 7px; height: 1em;
    background: #93c5fd; margin-left: 2px; vertical-align: text-bottom;
    animation: blinkCursor 1s steps(1) infinite;
  }
  @keyframes blinkCursor { 50% { opacity: 0; } }

  /* ABOUT SECTION & INFO ROW ALIGNMENT */
  .about-grid { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 5rem; align-items: start; }
  .about-text p { color: var(--muted); font-size: 1.05rem; font-weight: 300; line-height: 1.8; margin-bottom: 1.5rem; }
  .about-text strong { color: var(--text); font-weight: 600; }
  
  .personal-info { margin-top: 2rem; display: flex; flex-direction: column; gap: 1rem; }
  .info-row {
    display: flex; align-items: center; gap: 1.5rem;
    padding: 0.8rem 0; border-bottom: 1px solid var(--border);
    font-size: 0.95rem;
    transition: padding-left 0.3s ease, border-color 0.3s ease;
  }
  .info-row:hover { padding-left: 0.4rem; border-color: rgba(14, 165, 233, 0.3); }
  .info-icon { 
    width: 36px; height: 36px;
    border-radius: 8px; background: rgba(15,23,42,0.02);
    border: 1px solid var(--border);
    color: var(--accent);
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
    transition: transform 0.3s cubic-bezier(0.22,1,0.36,1), background 0.3s ease;
  }
  .info-row:hover .info-icon { transform: rotate(-8deg) scale(1.08); background: rgba(14, 165, 233, 0.08); }
  .info-label { 
    color: var(--muted); font-size: 0.78rem; width: 130px; flex-shrink: 0; 
    text-transform: uppercase; letter-spacing: 0.05em; font-weight: 600;
  }
  .info-val { color: var(--text); font-weight: 500; }
  
  .stats-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }
  .stat-card {
    padding: 2rem 1.5rem;
    text-align: center;
  }
  .stat-num {
    font-family: 'Syne', sans-serif; font-size: 2.8rem; font-weight: 800;
    background: linear-gradient(135deg, var(--accent), var(--accent3));
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    line-height: 1; margin-bottom: 0.5rem;
    font-variant-numeric: tabular-nums;
  }
  .stat-label { font-size: 0.88rem; color: var(--muted); font-weight: 500; text-transform: uppercase; letter-spacing: 0.05em; }

  /* EDUCATION */
  .edu-list { display: flex; flex-direction: column; gap: 1.5rem; }
  .edu-card {
    padding: 2rem;
    display: flex; justify-content: space-between; align-items: center;
    flex-wrap: wrap; gap: 1.5rem;
  }
  .edu-degree { font-family: 'Syne', sans-serif; font-size: 1.2rem; font-weight: 700; color: var(--text); margin-bottom: 0.4rem; }
  .edu-inst { font-size: 0.95rem; color: var(--accent); font-weight: 500; }
  .edu-right { text-align: right; }
  .edu-year { font-family: 'Syne', sans-serif; font-size: 1.6rem; font-weight: 800; color: var(--accent2); }
  .edu-score {
    display: inline-block; margin-top: 0.5rem;
    background: rgba(249, 115, 22, 0.05); border: 1px solid rgba(249, 115, 22, 0.15);
    border-radius: 999px; padding: 0.3rem 0.9rem;
    font-size: 0.78rem; color: var(--accent2); font-weight: 600;
  }

  /* SKILLS */
  .skills-grid {
    display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.5rem;
    position: relative;
  }
  .skills-grid::before {
    content: '';
    position: absolute; inset: 0;
    pointer-events: none;
    background: radial-gradient(circle at 16% 20%, rgba(56, 189, 248, 0.14), transparent 18%),
                radial-gradient(circle at 84% 62%, rgba(59, 130, 246, 0.1), transparent 16%);
    filter: blur(1px);
  }
  .skill-card {
    position: relative;
    padding: 2rem;
    border-radius: 28px;
    background: rgba(255, 255, 255, 0.82);
    border: 1px solid rgba(255, 255, 255, 0.65);
    box-shadow: 0 24px 65px rgba(15, 23, 42, 0.09);
    backdrop-filter: blur(18px);
    overflow: hidden;
    transition: transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s ease, border-color 0.35s ease;
  }
  .skill-card:hover {
    transform: translateY(-6px);
    border-color: rgba(14, 165, 233, 0.25);
    box-shadow: 0 30px 80px rgba(15, 23, 42, 0.14);
  }
  .skill-card::before {
    content: '';
    position: absolute;
    inset: -25% -15% auto auto;
    width: 210px;
    height: 210px;
    background: radial-gradient(circle, rgba(56, 189, 248, 0.14) 0%, transparent 60%);
    pointer-events: none;
    filter: blur(2px);
    transform: translate(-18%, -22%);
  }
  .skill-card::after {
    content: '';
    position: absolute;
    inset: auto auto -10% -10%;
    width: 130px;
    height: 130px;
    background: radial-gradient(circle, rgba(59, 130, 246, 0.09) 0%, transparent 58%);
    pointer-events: none;
    filter: blur(2px);
    transform: translate(18%, 16%);
  }
  .skill-cat {
    font-family: 'Syne', sans-serif; font-size: 0.95rem; font-weight: 800;
    letter-spacing: 0.14em; text-transform: uppercase; color: var(--accent);
    margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.75rem;
    position: relative; z-index: 1;
  }
  .skill-svg-icon {
    display: inline-flex; width: 2.2rem; height: 2.2rem;
    align-items: center; justify-content: center;
    background: rgba(14, 165, 233, 0.12);
    border-radius: 14px; color: var(--accent);
    box-shadow: inset 0 0 0 1px rgba(14, 165, 233, 0.14);
  }
  .pills { display: flex; flex-wrap: wrap; gap: 0.75rem; position: relative; z-index: 1; }
  .pill {
    background: rgba(255,255,255,0.92);
    border: 1px solid rgba(15, 23, 42, 0.08);
    border-radius: 999px; padding: 0.55rem 1rem;
    font-size: 0.88rem; color: var(--text); font-weight: 600;
    transition: transform 0.25s ease, background 0.25s ease, border-color 0.25s ease, color 0.25s ease;
    cursor: default;
    opacity: 0; transform: translateY(12px) scale(0.96);
    animation: pillIn 0.55s cubic-bezier(0.22,1,0.36,1) forwards;
    animation-delay: var(--pill-delay, 0ms);
  }
  @keyframes pillIn {
    to { opacity: 1; transform: translateY(0) scale(1); }
  }
  .pill:hover {
    background: rgba(14, 165, 233, 0.12);
    border-color: rgba(14, 165, 233, 0.3);
    color: rgb(15, 118, 255);
    transform: translateY(-1px) scale(1.03);
  }

  /* EXPERIENCE */
  .exp-timeline { position: relative; padding-left: 2.5rem; }
  .exp-track {
    position: absolute; left: 0; top: 12px; bottom: 12px;
    width: 2px; background: rgba(15, 23, 42, 0.08); border-radius: 2px;
  }
  .exp-track-fill {
    position: absolute; left: 0; top: 12px; width: 2px;
    background: linear-gradient(180deg, var(--accent), var(--accent3));
    border-radius: 2px; box-shadow: 0 0 10px rgba(14, 165, 233, 0.3);
    transition: height 0.12s linear;
  }
  .exp-item { position: relative; margin-bottom: 4rem; }
  .exp-item:last-child { margin-bottom: 0; }
  .exp-dot {
    position: absolute; left: -2.9rem; top: 8px;
    width: 14px; height: 14px; background: var(--bg);
    border: 3px solid var(--accent); border-radius: 50%;
    box-shadow: 0 0 10px rgba(14, 165, 233, 0.2);
    transition: transform 0.3s cubic-bezier(0.22,1,0.36,1), box-shadow 0.3s ease;
  }
  .exp-item:hover .exp-dot { transform: scale(1.3); box-shadow: 0 0 18px rgba(14, 165, 233, 0.45); }
  .exp-card { padding: 2rem; }
  .exp-head {
    display: flex; justify-content: space-between; align-items: flex-start;
    flex-wrap: wrap; gap: 1rem; margin-bottom: 1.2rem;
  }
  .exp-role { font-family: 'Syne', sans-serif; font-size: 1.3rem; font-weight: 700; color: var(--text); }
  .exp-company { color: var(--accent3); font-size: 0.98rem; font-weight: 600; margin-top: 0.2rem; }
  .exp-dur {
    background: rgba(14, 165, 233, 0.06); border: 1px solid rgba(14, 165, 233, 0.15);
    border-radius: 999px; padding: 0.3rem 1rem;
    font-size: 0.78rem; color: var(--accent); font-weight: 600; white-space: nowrap;
  }
  .exp-points { list-style: none; display: flex; flex-direction: column; gap: 0.75rem; }
  .exp-points li {
    color: var(--muted); font-size: 0.96rem; font-weight: 300; line-height: 1.7;
    padding-left: 1.2rem; position: relative;
  }
  .exp-points li::before {
    content: '⚡'; position: absolute; left: 0; color: var(--accent3); font-size: 0.8rem;
  }
  .exp-tags { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 1.5rem; }
  .exp-tag {
    background: rgba(15, 23, 42, 0.02); border: 1px solid var(--border);
    border-radius: 6px; padding: 0.25rem 0.75rem;
    font-size: 0.75rem; color: var(--muted); font-weight: 500;
    transition: all 0.25s ease;
  }
  .exp-tag:hover { border-color: var(--accent); color: var(--accent); background: rgba(14,165,233,0.05); }

  /* PROJECTS */
  .proj-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 2rem; }
  .proj-card {
    padding: 2.2rem;
    display: flex; flex-direction: column;
    justify-content: space-between; min-height: 320px;
    transition: transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s ease, border-color 0.35s ease;
    transform-style: preserve-3d;
    will-change: transform;
  }
  .proj-card:hover {
    box-shadow: 0 25px 65px rgba(15, 23, 42, 0.14);
  }
  .proj-badge {
    display: inline-block; margin-bottom: 1rem;
    background: rgba(168, 85, 247, 0.08); border: 1px solid rgba(168, 85, 247, 0.18);
    border-radius: 6px; padding: 0.25rem 0.75rem;
    font-size: 0.7rem; color: var(--accent3); font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase;
    width: fit-content;
  }
  .proj-icon {
    width: 46px; height: 46px; background: rgba(15, 23, 42, 0.01);
    border: 1px solid var(--border); border-radius: 12px;
    display: flex; align-items: center; justify-content: center;
    color: var(--accent); margin-bottom: 1.5rem;
    transition: all 0.4s cubic-bezier(0.22,1,0.36,1);
  }
  .proj-card:hover .proj-icon {
    background: rgba(14, 165, 233, 0.08);
    color: var(--accent); border-color: var(--accent);
    box-shadow: 0 0 15px rgba(14, 165, 233, 0.15);
    transform: rotate(-8deg) scale(1.08);
  }
  .proj-title { font-family: 'Syne', sans-serif; font-size: 1.2rem; font-weight: 700; color: var(--text); margin-bottom: 0.75rem; }
  .proj-desc { color: var(--muted); font-size: 0.92rem; font-weight: 300; line-height: 1.7; margin-bottom: 1.5rem; }
  .proj-stack { display: flex; flex-wrap: wrap; gap: 0.5rem; }
  .stack-tag {
    background: rgba(14, 165, 233, 0.05); border: 1px solid rgba(14, 165, 233, 0.1);
    border-radius: 6px; padding: 0.25rem 0.75rem;
    font-size: 0.75rem; color: var(--accent); font-weight: 600;
  }

  /* CONTACT (Centered Card with Copy Clipboards) */
  .contact-box {
    background: var(--surface); border: 1px solid var(--border);
    border-radius: 24px; padding: 4rem 3rem;
    max-width: 680px; margin: 0 auto;
    text-align: center;
    box-shadow: 0 20px 40px -20px rgba(15, 23, 42, 0.05);
    backdrop-filter: blur(20px);
  }
  .contact-title { font-family: 'Syne', sans-serif; font-size: 2.2rem; font-weight: 800; margin-bottom: 1rem; }
  .contact-p { color: var(--muted); font-size: 1.05rem; font-weight: 300; line-height: 1.8; margin-bottom: 3rem; }
  .contact-links { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; max-width: 520px; margin: 0 auto; }
  
  .c-link {
    display: flex; align-items: center; gap: 1rem;
    padding: 1rem 1.2rem; background: rgba(15,23,42,0.01);
    border: 1px solid var(--border); border-radius: 14px;
    color: var(--text); text-decoration: none; font-size: 0.9rem;
    transition: all 0.25s ease; cursor: pointer;
    position: relative; overflow: hidden;
  }
  .c-link:hover { 
    background: rgba(14, 165, 233, 0.04); 
    border-color: rgba(14, 165, 233, 0.25); 
    transform: scale(1.02);
  }
  .c-icon {
    width: 36px; height: 36px; background: rgba(15,23,42,0.02);
    border: 1px solid var(--border); border-radius: 10px;
    display: flex; align-items: center; justify-content: center;
    color: var(--accent); flex-shrink: 0;
    transition: transform 0.3s cubic-bezier(0.22,1,0.36,1), background 0.25s ease, color 0.25s ease, border-color 0.25s ease;
  }
  .c-link:hover .c-icon { color: #fff; background: var(--accent); border-color: var(--accent); transform: scale(1.1) rotate(-6deg); }
  
  .c-info { display: flex; flex-direction: column; align-items: flex-start; text-align: left; }
  .c-info-label { font-size: 0.7rem; text-transform: uppercase; color: var(--muted); letter-spacing: 0.05em; font-weight: 600; margin-bottom: 0.2rem;}
  .c-info-val { font-weight: 600; font-size: 0.88rem; word-break: break-all; }

  /* FLOATING TOAST */
  .toast {
    position: fixed; bottom: 2rem; right: 2rem;
    background: #0f172a; border: 1px solid var(--accent);
    color: #fff; padding: 0.8rem 1.5rem; border-radius: 12px;
    box-shadow: 0 10px 30px rgba(14, 165, 233, 0.15);
    font-size: 0.88rem; font-weight: 600; z-index: 1000;
    transform: translateY(100px); opacity: 0;
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  .toast.show { transform: translateY(0); opacity: 1; }

  /* FOOTER */
  .footer {
    border-top: 1px solid var(--border); padding: 3rem 2rem;
    text-align: center; color: var(--muted); font-size: 0.88rem;
    position: relative; z-index: 10;
  }
  .footer span { color: var(--accent); font-weight: 600; }

  /* FADE UP WITH INTERSECTIONOBSERVER */
  .fu { opacity: 0; transform: translateY(30px); transition: opacity 0.8s cubic-bezier(0.25, 1, 0.5, 1), transform 0.8s cubic-bezier(0.25, 1, 0.5, 1); }
  .fu.vis { opacity: 1; transform: translateY(0); }
  .fu { transition-delay: var(--reveal-delay, 0ms); }

  /* CURTAIN-STYLE REVEAL FOR SECTION HEADERS — a bit more dramatic than a plain fade */
  .reveal-mask {
    clip-path: inset(0 0 100% 0);
    transition: clip-path 0.9s cubic-bezier(0.22, 1, 0.36, 1);
  }
  .reveal-mask.vis { clip-path: inset(0 0 0% 0); }

  /* SCROLL-TO-TOP BUTTON WITH PROGRESS RING */
  .scroll-top {
    position: fixed; bottom: 2rem; left: 2rem; z-index: 900;
    width: 52px; height: 52px; border-radius: 50%;
    background: rgba(255, 255, 255, 0.9); backdrop-filter: blur(15px);
    border: 1px solid var(--border); cursor: pointer; padding: 0;
    display: flex; align-items: center; justify-content: center;
    opacity: 0; transform: translateY(16px) scale(0.85); pointer-events: none;
    transition: opacity 0.3s ease, transform 0.3s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.3s ease;
    box-shadow: 0 10px 30px -10px rgba(15, 23, 42, 0.18);
  }
  .scroll-top.show { opacity: 1; transform: translateY(0) scale(1); pointer-events: auto; }
  .scroll-top:hover { box-shadow: 0 14px 36px -10px rgba(14, 165, 233, 0.4); }
  .scroll-top svg { position: absolute; inset: 0; width: 100%; height: 100%; transform: rotate(-90deg); }
  .scroll-top .ring-bg { fill: none; stroke: rgba(15, 23, 42, 0.08); stroke-width: 3; }
  .scroll-top .ring-fill { fill: none; stroke: var(--accent); stroke-width: 3; stroke-linecap: round; transition: stroke-dashoffset 0.1s linear; }
  .scroll-top .arrow { position: relative; z-index: 1; color: var(--accent); font-size: 1.1rem; font-weight: 700; transition: transform 0.25s cubic-bezier(0.22,1,0.36,1); line-height: 1; }
  .scroll-top:hover .arrow { transform: translateY(-3px); }

  /* Per-section entrance animations */
  .section.enter-left { transform: translateX(-30px); opacity: 0; transition: transform 0.9s cubic-bezier(.2,.9,.2,1), opacity 0.9s ease; }
  .section.enter-left.vis, .section.enter-left.entered { transform: translateX(0); opacity: 1; }
  .section.enter-right { transform: translateX(30px); opacity: 0; transition: transform 0.9s cubic-bezier(.2,.9,.2,1), opacity 0.9s ease; }
  .section.enter-right.vis, .section.enter-right.entered { transform: translateX(0); opacity: 1; }
  .section.enter-zoom { transform: scale(0.98); opacity: 0; transition: transform 0.9s cubic-bezier(.2,.9,.2,1), opacity 0.9s ease; }
  .section.enter-zoom.vis, .section.enter-zoom.entered { transform: scale(1); opacity: 1; }

  /* Section-specific variants */
  #about.enter-left { transform: translateX(-40px) translateY(8px) rotate(-1deg); }
  #about.enter-left.entered { transform: translateX(0) translateY(0) rotate(0); transition: transform 0.9s cubic-bezier(.2,.9,.2,1), opacity 0.9s ease; }

  #education.enter-right { transform: translateX(40px) translateY(6px) skewY(-0.6deg); }
  #education.enter-right.entered { transform: translateX(0) translateY(0) skewY(0); transition: transform 0.9s cubic-bezier(.2,.9,.2,1), opacity 0.9s ease; }

  #skills.enter-zoom { transform: scale(0.94) rotate(-1deg); }
  #skills.enter-zoom.entered { transform: scale(1) rotate(0); transition: transform 0.85s cubic-bezier(.2,.9,.2,1), opacity 0.9s ease; }

  #experience.enter-right { transform: translateX(36px) translateY(10px); }
  #experience.enter-right.entered { transform: translateX(0) translateY(0); transition: transform 0.95s cubic-bezier(.2,.9,.2,1), opacity 0.9s ease; }

  #projects.enter-zoom { transform: scale(0.9) rotate(-2deg) translateY(6px); box-shadow: none; }
  #projects.enter-zoom.entered { transform: scale(1) rotate(0) translateY(0); box-shadow: 0 10px 30px rgba(14,165,233,0.06); transition: transform 0.95s cubic-bezier(.2,.9,.2,1), box-shadow 0.6s ease; }

  #contact.enter-left { transform: translateX(-28px) translateY(18px); }
  #contact.enter-left.entered { transform: translateX(0) translateY(0); transition: transform 0.85s cubic-bezier(.2,.9,.2,1), opacity 0.9s ease; }

  /* RESPONSIVE */
  @media(max-width: 992px) {
    .hero-grid { grid-template-columns: 1fr; gap: 4rem; text-align: center; }
    .hero-info { align-items: center; }
    .hero-badge { margin-bottom: 1.5rem; }
    .hero-chips { justify-content: center; }
    .about-grid { grid-template-columns: 1fr; gap: 4rem; }
  }
  @media(max-width: 768px) {
    .nav-links { display: none; }
    .hamburger { display: flex; }
    .section { padding: 5rem 1.5rem; }
    .contact-title { font-size: 1.5rem; margin-bottom: 0; }
    .contact-links { grid-template-columns: 1fr; }
    .stats-grid { grid-template-columns: 1fr; }
    .edu-card { flex-direction: column; text-align: center; }
    .edu-right { text-align: center; }

    .scroll-progress,
    .ambient-glows,
    .cursor-dot,
    .cursor-ring,
    .cursor-trail,
    .section-header::after,
    .nav-indicator,
    .hero-cta .btn::after {
      display: none !important;
    }

    .spotlight-card,
    .proj-card,
    .exp-card,
    .skill-card,
    .hero-cta .btn,
    .info-row,
    .c-link,
    .chip {
      transition: none !important;
      animation: none !important;
    }

    .spotlight-card:hover,
    .proj-card:hover,
    .c-link:hover {
      transform: none !important;
      box-shadow: none !important;
    }

    .pills .pill {
      animation: none !important;
      opacity: 1 !important;
      transform: none !important;
    }

    body {
      scroll-behavior: auto !important;
      overscroll-behavior: contain;
    }
  }

  /* RESPECT REDUCED MOTION */
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
    .cursor-dot, .cursor-ring, .cursor-trail { display: none; }
    .portfolio-root { cursor: auto; }
    .proj-card:hover, .exp-item:hover .exp-dot, .info-row:hover .info-icon { transform: none !important; }
  }
`;

const sections = ["About", "Education", "Skills", "Experience", "Projects", "Contact"];

// Animated count-up number used in the stats grid
function StatCounter({ raw, trigger }) {
  const [display, setDisplay] = useState(raw.match(/^[\d.]+/) ? "0" : raw);

  useEffect(() => {
    if (!trigger) return;
    const match = raw.match(/^([\d.]+)(.*)$/);
    if (!match) return;
    const target = parseFloat(match[1]);
    const suffix = match[2] || "";
    const isFloat = match[1].includes(".");
    const duration = 1400;
    const start = performance.now();

    let frame;
    const tick = (now) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      const value = target * eased;
      setDisplay(`${isFloat ? value.toFixed(1) : Math.round(value)}${suffix}`);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [trigger, raw]);

  return <>{display}</>;
}

// Wraps any "N%"-style badge so it counts up the moment it scrolls into view —
// used for stat numbers and, just the same way, education score badges.
function CountUpOnView({ raw, className }) {
  const ref = useRef(null);
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || trigger) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTrigger(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [trigger]);

  return (
    <span ref={ref} className={className}>
      <StatCounter raw={raw} trigger={trigger} />
    </span>
  );
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [typedCode, setTypedCode] = useState("");
  const [statsVisible, setStatsVisible] = useState(false);
  const [timelineProgress, setTimelineProgress] = useState(0);
  const [navIndicator, setNavIndicator] = useState({ left: 0, width: 0, opacity: 0 });
  const [bgOffset, setBgOffset] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const navLinksRef = useRef(null);
  const statsRef = useRef(null);
  const timelineRef = useRef(null);
  const rafIdRef = useRef(null);

  const codeSnippet = `<?php
namespace App\\Controllers;
use CodeIgniter\\RESTful\\ResourceController;

class Auth extends ResourceController {
    
    // JWT Authentication Endpoint
    public function login() {
        $email = $this->request->getVar('email');
        $token = JWT::generateToken($email);
        
        return $this->respond([
            'status' => 'success',
            'token'  => $token
        ]);
    }
}`;

  // Typewriter effect inside the mock terminal
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedCode((prev) => prev + codeSnippet.charAt(index));
      index++;
      if (index >= codeSnippet.length) {
        clearInterval(interval);
      }
    }, 15);
    return () => clearInterval(interval);
  }, [codeSnippet]);

  useEffect(() => {
    const updateMobile = () => {
      const isTouch = window.matchMedia && window.matchMedia('(hover: none) and (pointer: coarse)').matches;
      setIsMobile(isTouch || window.innerWidth <= 768);
    };
    updateMobile();
    window.addEventListener('resize', updateMobile);
    return () => window.removeEventListener('resize', updateMobile);
  }, []);

  // Update scroll progress bar (and a subtle ambient-background parallax) — throttled with RAF
  useEffect(() => {
    if (isMobile) return;
    
    const onScroll = () => {
      if (rafIdRef.current) return; // Already scheduled
      rafIdRef.current = requestAnimationFrame(() => {
        const scrollY = window.pageYOffset;
        const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
        if (totalScroll > 0) {
          setScrollProgress((scrollY / totalScroll) * 100);
        }
        setBgOffset(Math.max(scrollY * -0.05, -240));
        rafIdRef.current = null;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, [isMobile]);

  // Reveal elements on scroll (section bodies fade up, headers get a curtain wipe)
  useEffect(() => {
    if (isMobile) {
      document.querySelectorAll('.fu, .reveal-mask').forEach((el) => el.classList.add('vis'));
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("vis");
          }
        });
      },
      { threshold: 0.15 }
    );
    const els = Array.from(document.querySelectorAll('.fu, .reveal-mask'));
    let fuIndex = 0;
    els.forEach((el) => {
      if (el.classList.contains('fu')) {
        el.style.setProperty('--reveal-delay', `${fuIndex * 120}ms`);
        fuIndex++;
      }
      obs.observe(el);
    });
    return () => obs.disconnect();
  }, [isMobile]);

  // Cascading reveal for grid items (skills, education, experience, projects)
  useEffect(() => {
    const items = Array.from(document.querySelectorAll('.stagger-item'));
    if (isMobile) {
      items.forEach((el) => el.classList.add('stagger-vis'));
      return;
    }
    // delay computed relative to position among its own siblings, so each
    // section cascades independently instead of compounding page-wide
    const groups = new Map();
    items.forEach((el) => {
      const parent = el.parentElement;
      const idx = groups.has(parent) ? groups.get(parent) : 0;
      groups.set(parent, idx + 1);
      el.style.setProperty('--stagger-delay', `${idx * 90}ms`);
    });
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('stagger-vis');
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    items.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [isMobile]);

  // Trigger the stat counters once when scrolled into view
  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setStatsVisible(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Scroll-linked fill for the experience timeline — throttled with RAF
  useEffect(() => {
    if (isMobile) {
      setTimelineProgress(0.75);
      return;
    }
    
    let rafTimelineId = null;
    
    const handle = () => {
      if (rafTimelineId) return;
      rafTimelineId = requestAnimationFrame(() => {
        const el = timelineRef.current;
        if (!el) {
          rafTimelineId = null;
          return;
        }
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight;
        const total = rect.height + vh * 0.5;
        const traveled = vh * 0.8 - rect.top;
        const pct = Math.min(1, Math.max(0, traveled / total));
        setTimelineProgress(pct);
        rafTimelineId = null;
      });
    };
    
    window.addEventListener('scroll', handle, { passive: true });
    window.addEventListener('resize', handle);
    handle();
    return () => {
      window.removeEventListener('scroll', handle);
      window.removeEventListener('resize', handle);
      if (rafTimelineId) cancelAnimationFrame(rafTimelineId);
    };
  }, [isMobile]);

  // Sliding nav indicator that tracks the active section button
  useEffect(() => {
    const updateIndicator = () => {
      const container = navLinksRef.current;
      if (!container) return;
      const activeBtn = container.querySelector('button.active');
      if (activeBtn) {
        const cRect = container.getBoundingClientRect();
        const bRect = activeBtn.getBoundingClientRect();
        setNavIndicator({ left: bRect.left - cRect.left, width: bRect.width, opacity: 1 });
      }
    };
    updateIndicator();
    window.addEventListener('resize', updateIndicator);
    return () => window.removeEventListener('resize', updateIndicator);
  }, [activeSection]);

  // Track active section on scroll
  useEffect(() => {
    const secObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setActiveSection(e.target.id);
            // Add per-section entrance animation based on index
            const id = e.target.id;
            const idx = sections.findIndex((s) => s.toLowerCase() === id);
            const cls = idx % 3 === 0 ? 'enter-left' : idx % 3 === 1 ? 'enter-right' : 'enter-zoom';
            e.target.classList.remove('enter-left', 'enter-right', 'enter-zoom', 'entered');
            e.target.classList.add(cls);
            // ensure transition to final state
            window.requestAnimationFrame(() => {
              e.target.classList.add('entered');
            });
            // cleanup the animation classes after animation ends so it can replay if needed
            setTimeout(() => {
              e.target.classList.remove(cls);
              e.target.classList.remove('entered');
            }, 1100);
          }
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.toLowerCase());
      if (el) secObs.observe(el);
    });
    return () => secObs.disconnect();
  }, []);

  // Custom cursor: dot + trailing ring + trailing dots with hover/click interactions
  useEffect(() => {
    if (isMobile) return;
    // No real pointer on touch devices — skip entirely rather than leaving
    // the dot/ring frozen at their initial position on screen.
    if (window.matchMedia && window.matchMedia('(hover: none) and (pointer: coarse)').matches) return;
    const dot = document.querySelector('.cursor-dot');
    const ring = document.querySelector('.cursor-ring');
    if (!dot || !ring) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let rafId = null;

    // create small trailing dots
    const trailCount = 6;
    const trails = [];
    const trailPos = [];
    for (let i = 0; i < trailCount; i++) {
      const t = document.createElement('div');
      t.className = 'cursor-trail';
      t.style.left = mouseX + 'px';
      t.style.top = mouseY + 'px';
      t.style.opacity = String(0.6 - i * 0.07);
      t.style.transform = `translate(-50%,-50%) scale(${1 - i * 0.06})`;
      document.body.appendChild(t);
      trails.push(t);
      trailPos.push({ x: mouseX, y: mouseY });
    }

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = mouseX + 'px';
      dot.style.top = mouseY + 'px';
    };

    const animate = () => {
      // ring smoother follow
      ringX += (mouseX - ringX) * 0.14;
      ringY += (mouseY - ringY) * 0.14;
      ring.style.left = ringX + 'px';
      ring.style.top = ringY + 'px';

      // trails follow with increasing lag
      for (let i = 0; i < trailCount; i++) {
        const targetX = i === 0 ? mouseX : trailPos[i - 1].x;
        const targetY = i === 0 ? mouseY : trailPos[i - 1].y;
        const speed = 0.12 + i * 0.02;
        trailPos[i].x += (targetX - trailPos[i].x) * speed;
        trailPos[i].y += (targetY - trailPos[i].y) * speed;
        trails[i].style.left = trailPos[i].x + 'px';
        trails[i].style.top = trailPos[i].y + 'px';
        trails[i].style.transform = `translate(-50%, -50%) scale(${1 - i * 0.06})`;
      }

      rafId = requestAnimationFrame(animate);
    };

    const addHoverListeners = (el) => {
      const enter = () => {
        dot.classList.add('cursor-hover');
        ring.classList.add('cursor-hover');
      };
      const leave = () => {
        dot.classList.remove('cursor-hover');
        ring.classList.remove('cursor-hover');
      };
      el.__cursorEnter = enter;
      el.__cursorLeave = leave;
      el.addEventListener('mouseenter', enter);
      el.addEventListener('mouseleave', leave);
    };

    // Elements that should trigger hover state
    const hoverSelectors = 'a, button, .chip, .c-link, .proj-card, .spotlight-card';
    const hoverEls = Array.from(document.querySelectorAll(hoverSelectors));
    hoverEls.forEach(addHoverListeners);

    const onDown = () => { dot.classList.add('cursor-click'); ring.classList.add('cursor-click'); };
    const onUp = () => { dot.classList.remove('cursor-click'); ring.classList.remove('cursor-click'); };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mousedown', onDown);
    document.addEventListener('mouseup', onUp);
    rafId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('mouseup', onUp);
      hoverEls.forEach((el) => {
        if (el.__cursorEnter) el.removeEventListener('mouseenter', el.__cursorEnter);
        if (el.__cursorLeave) el.removeEventListener('mouseleave', el.__cursorLeave);
        delete el.__cursorEnter;
        delete el.__cursorLeave;
      });
      trails.forEach((t) => t.remove());
      cancelAnimationFrame(rafId);
    };
  }, []);

  // Spotlight card mouse tracking — throttled
  const lastCardMoveRef = useRef({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    if (isMobile) return;
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Only update if moved significantly to reduce reflows
    if (Math.abs(x - lastCardMoveRef.current.x) > 2 || Math.abs(y - lastCardMoveRef.current.y) > 2) {
      lastCardMoveRef.current = { x, y };
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    }
  };

  // Project cards get a subtle 3D tilt in addition to the spotlight glow
  const handleProjectTilt = (e) => {
    if (isMobile) return;
    handleMouseMove(e);
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y / rect.height) - 0.5) * -7;
    const rotateY = ((x / rect.width) - 0.5) * 7;
    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
  };
  const resetProjectTilt = (e) => {
    if (isMobile) return;
    e.currentTarget.style.transform = "";
  };

  // Magnetic pull for the hero CTAs
  const handleMagnetic = (e) => {
    if (isMobile) return;
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
  };
  const resetMagnetic = (e) => {
    if (isMobile) return;
    e.currentTarget.style.transform = "translate(0,0)";
  };

  // Small click ripple for buttons / links
  const createRipple = (e) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const circle = document.createElement('span');
    circle.className = 'ripple';
    circle.style.width = circle.style.height = `${size}px`;
    circle.style.left = `${e.clientX - rect.left - size / 2}px`;
    circle.style.top = `${e.clientY - rect.top - size / 2}px`;
    target.appendChild(circle);
    setTimeout(() => circle.remove(), 600);
  };

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    setToastMessage(`Copied ${label} to clipboard!`);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <>
      <style>{style}</style>
      <div className="portfolio-root">
        {/* Scroll Progress */}
        <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />

        {/* Ambient background glows */}
        <div className="ambient-glows" style={{ transform: `translateY(${bgOffset}px)` }}>
          <div className="glow-orb orb-1" />
          <div className="glow-orb orb-2" />
          <div className="glow-orb orb-3" />
        </div>
        {/* Custom cursor elements */}
        <div className="cursor-dot" />
        <div className="cursor-ring" />

        {/* NAV */}
        <div className="nav-wrapper">
          <nav className="nav">
            <div className="nav-logo">&lt;Web Stack /&gt;</div>
            <ul className="nav-links" ref={navLinksRef}>
              <span
                className="nav-indicator"
                style={{
                  transform: `translateX(${navIndicator.left}px)`,
                  width: navIndicator.width,
                  opacity: navIndicator.opacity,
                }}
              />
              {sections.map((s) => (
                <li key={s}>
                  <button className={activeSection === s.toLowerCase() ? "active" : ""} onClick={() => scrollTo(s)}>
                    {s}
                  </button>
                </li>
              ))}
            </ul>
            <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
              <span /><span /><span />
            </button>
          </nav>
        </div>

        {/* Mobile Navigation Dropdown */}
        <div className={`mobile-nav ${menuOpen ? "open" : ""}`}>
          {sections.map((s) => (
            <button key={s} onClick={() => scrollTo(s)}>{s}</button>
          ))}
        </div>

        {/* HERO */}
        <div className="hero-grid">
          <div className="hero-info">
            <div className="hero-badge hero-rise" style={{ animationDelay: "0.05s" }}><span className="badge-dot" />Open to Opportunities</div>
            <h1 className="hero-rise" style={{ animationDelay: "0.18s" }}>
              <span style={{ fontSize: "clamp(1.2rem,3vw,1.8rem)", fontWeight: 600, color: "var(--muted)", display: "block", marginBottom: "0.5rem" }}>Hi, I'm</span>
              Eniya Gunalan<br />
              <span className="highlight">Full Stack Developer</span>
            </h1>
            <p className="hero-sub hero-rise" style={{ animationDelay: "0.32s" }}>
              2.5 years of professional experience & 6 months of internship building high-performing backend systems using <strong style={{ color: "var(--text)" }}>PHP, CodeIgniter & MySQL</strong>. Wrapping mobile-ready applications as hybrid Android apps at Foresight Technologies.
            </p>
            <div className="hero-chips hero-rise" style={{ animationDelay: "0.46s" }}>
              {["PHP Core", "VB.NET", "CodeIgniter 3/4", "IMPS", "Aadhaar KYC", "React Web", "Android Hybrid"].map(t => (
                <span key={t} className="chip">{t}</span>
              ))}
            </div>
            <div className="hero-cta hero-rise" style={{ animationDelay: "0.6s" }}>
              <button
                className="btn btn-primary"
                onMouseMove={handleMagnetic}
                onMouseLeave={resetMagnetic}
                onClick={(e) => { createRipple(e); scrollTo("Contact"); }}
              >✉ Get In Touch</button>
              <button
                className="btn btn-outline"
                onMouseMove={handleMagnetic}
                onMouseLeave={resetMagnetic}
                onClick={(e) => { createRipple(e); scrollTo("Projects"); }}
              >↓ View Projects</button>
            </div>
          </div>

          {/* Realistic Code Editor Window Mock */}
          <div className="editor-wrapper hero-slide" style={{ animationDelay: "0.25s" }}>
            <div className="editor-header">
              <div className="editor-dots">
                <span className="editor-dot dot-red" />
                <span className="editor-dot dot-yellow" />
                <span className="editor-dot dot-green" />
              </div>
              <div className="editor-title">Auth.php — CodeIgniter Controller</div>
            </div>
            <div className="editor-body">
              <div className="code-line">
                <span className="line-num">1</span>
                <span className="line-content">
                  {typedCode.split('\n').map((line, i) => {
                    // Simple syntax coloring mock
                    if (line.includes('class ') || line.includes('function ') || line.includes('return ') || line.includes('use ') || line.includes('namespace ')) {
                      return <span key={i}><span className="keyword">{line.split(' ')[0]}</span> {line.slice(line.indexOf(' ') + 1)}<br /></span>;
                    }
                    if (line.includes('//')) {
                      return <span key={i} className="comment">{line}<br /></span>;
                    }
                    return <span key={i}>{line}<br /></span>;
                  })}
                  <span className="term-cursor" />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="divider" />

        {/* ABOUT */}
        <section className="section" id="about">
          <div className="fu">
            <div className="section-header reveal-mask">
              <div className="section-label">About Me</div>
              <h2 className="section-title">Who I Am</h2>
            </div>
            <div className="about-grid">
              <div>
                <div className="about-text">
                  <p>{data.summary}</p>
                  <p>I focus on constructing clean, secure backends. Whether designing robust **CodeIgniter REST APIs**, configuring JWT/OAuth authorization, writing optimized MySQL queries, or deploying hybrid web view wrappers, I aim for high-speed delivery and perfect responsiveness.</p>
                </div>
                <div className="personal-info">
                  {[
                    { icon: Icons.cake, label: "Date of Birth", val: data.dob },
                    { icon: Icons.globe, label: "Languages", val: data.languages },
                    { icon: Icons.pin, label: "Location", val: "Tamil Nadu, India" },
                  ].map((i) => (
                    <div key={i.label} className="info-row">
                      <span className="info-icon svg-icon">{i.icon}</span>
                      <span className="info-label">{i.label}</span>
                      <span className="info-val">{i.val}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="stats-grid" ref={statsRef}>
                {[
                  { num: "2.5", label: "Years Professional" },
                  { num: "6M", label: "Internship" },
                  { num: "10+", label: "Projects Shipped" },
                  { num: "6+", label: "Main Tech Stacks" },
                ].map((s) => (
                  <div key={s.label} className="spotlight-card stat-card" onMouseMove={handleMouseMove}>
                    <div className="stat-num"><StatCounter raw={s.num} trigger={statsVisible} /></div>
                    <div className="stat-label">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* EDUCATION */}
        <section className="section" id="education">
          <div className="fu">
            <div className="section-header reveal-mask">
              <div className="section-label">Education</div>
              <h2 className="section-title">Academic History</h2>
            </div>
            <div className="edu-list">
              {data.education.map((e) => (
                <div key={e.degree} className="spotlight-card edu-card stagger-item" onMouseMove={handleMouseMove}>
                  <div>
                    <div className="edu-degree">{e.degree}</div>
                    <div className="edu-inst">{e.institute}</div>
                  </div>
                  <div className="edu-right">
                    <div className="edu-year">{e.year}</div>
                    <CountUpOnView raw={e.score} className="edu-score" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* SKILLS */}
        <section className="section" id="skills">
          <div className="fu">
            <div className="section-header reveal-mask">
              <div className="section-label">Technical Skills</div>
              <h2 className="section-title">My Tech Stack</h2>
              <p className="section-sub">Experienced across database management, core backend architectures, frontend templates, and app integrations.</p>
            </div>
            <div className="skills-grid">
              {data.skills.map((g) => (
                <div key={g.category} className="spotlight-card skill-card stagger-item" onMouseMove={handleMouseMove}>
                  <div className="skill-cat"><span className="skill-svg-icon">{Icons[g.icon]}</span>{g.category}</div>
                  <div className="pills">
                    {g.items.map((i, idx) => (
                      <span key={i} className="pill" style={{ '--pill-delay': `${idx * 45}ms` }}>{i}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* EXPERIENCE */}
        <section className="section" id="experience">
          <div className="fu">
            <div className="section-header reveal-mask">
              <div className="section-label">Work History</div>
              <h2 className="section-title">Experience</h2>
            </div>
            <div className="exp-timeline" ref={timelineRef}>
              <div className="exp-track" />
              <div className="exp-track-fill" style={{ height: `${timelineProgress * 100}%` }} />
              {data.experience.map((exp) => (
                <div key={exp.role} className="exp-item stagger-item">
                  <div className="exp-dot" />
                  <div className="spotlight-card exp-card" onMouseMove={handleMouseMove}>
                    <div className="exp-head">
                      <div>
                        <div className="exp-role">{exp.role}</div>
                        <div className="exp-company">{exp.company}</div>
                      </div>
                      <div className="exp-dur">{exp.duration}</div>
                    </div>
                    <ul className="exp-points">
                      {exp.points.map((p) => <li key={p}>{p}</li>)}
                    </ul>
                    <div className="exp-tags">
                      {exp.tags.map((t) => <span key={t} className="exp-tag">{t}</span>)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* PROJECTS */}
        <section className="section" id="projects">
          <div className="fu">
            <div className="section-header reveal-mask">
              <div className="section-label">Projects</div>
              <h2 className="section-title">Recent Work</h2>
              <p className="section-sub">A select showcase of commercial platforms, custom API integrations, and hybrid apps.</p>
            </div>
            <div className="proj-grid">
              {data.projects.map((p) => (
                <div
                  key={p.title}
                  className="spotlight-card proj-card stagger-item"
                  onMouseMove={handleProjectTilt}
                  onMouseLeave={resetProjectTilt}
                >
                  <div>
                    <span className="proj-badge">{p.type}</span>
                    <div className="proj-icon">{Icons[p.icon]}</div>
                    <div className="proj-title">{p.title}</div>
                    <p className="proj-desc">{p.desc}</p>
                  </div>
                  <div className="proj-stack">
                    {p.stack.map((s) => <span key={s} className="stack-tag">{s}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* CONTACT */}
        <section className="section" id="contact">
          <div className="fu">
            <div className="section-header reveal-mask">
              <div className="section-label">Contact</div>
              <h2 className="section-title">Let's Connect</h2>
            </div>
            
            <div className="contact-box">
              <div className="contact-title">Start a Conversation</div>
              <p className="contact-p">
                I'm currently open to freelance opportunities, professional Full Stack Developer positions, and team collaborations. 
                Click below to copy my contact information.
              </p>
              
              <div className="contact-links">
                <div className="c-link" onClick={(e) => { createRipple(e); copyToClipboard(data.email, "Email Address"); }}>
                  <span className="c-icon">{Icons.mail}</span>
                  <div className="c-info">
                    <span className="c-info-label">Email Me</span>
                    <span className="c-info-val">{data.email}</span>
                  </div>
                </div>
                
                <div className="c-link" onClick={(e) => { createRipple(e); copyToClipboard(data.phone, "Phone Number"); }}>
                  <span className="c-icon">{Icons.phone}</span>
                  <div className="c-info">
                    <span className="c-info-label">Call / Text</span>
                    <span className="c-info-val">{data.phone}</span>
                  </div>
                </div>
                
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="c-link" onClick={createRipple}>
                  <span className="c-icon">{Icons.linkedin}</span>
                  <div className="c-info">
                    <span className="c-info-label">LinkedIn</span>
                    <span className="c-info-val">linkedin.com/in/eniya</span>
                  </div>
                </a>
                
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="c-link" onClick={createRipple}>
                  <span className="c-icon">{Icons.github}</span>
                  <div className="c-info">
                    <span className="c-info-label">GitHub</span>
                    <span className="c-info-val">github.com/eniya</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SCROLL TO TOP */}
        <button
          className={`scroll-top ${scrollProgress > 3 ? "show" : ""}`}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
        >
          <svg viewBox="0 0 52 52">
            <circle className="ring-bg" cx="26" cy="26" r="22" />
            <circle
              className="ring-fill"
              cx="26" cy="26" r="22"
              style={{
                strokeDasharray: 138.2,
                strokeDashoffset: 138.2 * (1 - scrollProgress / 100),
              }}
            />
          </svg>
          <span className="arrow">↑</span>
        </button>

        {/* TOAST NOTIFICATION */}
        <div className={`toast ${showToast ? 'show' : ''}`}>
          {toastMessage}
        </div>

        {/* FOOTER */}
        <footer className="footer">
          <p>Designed & Crafted with ♥ by <span>S. Eniya Gunalan</span></p>
          <p style={{ marginTop: "0.6rem", fontSize: "0.75rem", opacity: 0.5 }}>© {new Date().getFullYear()} All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}