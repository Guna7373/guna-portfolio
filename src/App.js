import { useState, useEffect } from "react";

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
  role: "Fullstock Developer",
  company: "Foresight Technologies",
  email: "gunaeniyan1@gmail.com",
  phone: "+91 7339323675",
  dob: "11 October 2002",
  languages: "Tamil, English",
  summary:
    "Passionate Fullstock Developer with 2.5 years of professional experience and 6 months of internship building dynamic web applications. Specializing in PHP (Core & CodeIgniter 3/4), with solid frontend skills in HTML, CSS, Tailwind, and JavaScript. Experienced in RESTful API integration, MySQL, and creating mobile-responsive web pages wrapped as hybrid Android apps.",
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
      items: ["PHP Core", "CodeIgniter 3", "CodeIgniter 4", "RESTful APIs", "MySQL", "JSON", "JWT", "OAuth 2.0", "Money Transfer API"],
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
      role: "Fullstock Developer",
      company: "Foresight Technologies",
      duration: "Jan 2024 – Present · 2 Years 5 Months",
      points: [
        "Developing and maintaining web applications using PHP CodeIgniter 3 & 4.",
        "Building and integrating RESTful APIs including Money Transfer APIs, JWT authentication, and OAuth 2.0 authorization.",
        "Creating mobile-responsive web pages using HTML, CSS, Tailwind, and JavaScript.",
        "Wrapping mobile-responsive pages into hybrid Android apps using a single Java file.",
        "Managing MySQL databases, writing optimized queries and stored procedures.",
      ],
      tags: ["PHP", "CodeIgniter 3/4", "REST API", "JWT", "OAuth 2.0", "Tailwind CSS", "MySQL", "Android Hybrid"],
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
      title: "CodeIgniter Web Apps",
      desc: "Multiple web applications built using CodeIgniter 3 & 4 at Foresight Technologies — including CRUD modules, admin panels, and dashboard systems.",
      stack: ["PHP CI3", "PHP CI4", "MySQL", "Tailwind CSS", "JavaScript"],
      type: "Professional",
    },
    {
      icon: "api",
      title: "RESTful API Integration",
      desc: "Designed and consumed RESTful APIs including Money Transfer APIs. Implemented JWT-based authentication and OAuth 2.0 authorization for secure API communication.",
      stack: ["PHP", "REST API", "JSON", "JWT", "OAuth 2.0", "Money Transfer API", "cURL"],
      type: "Professional",
    },
    {
      icon: "android",
      title: "Hybrid Android App",
      desc: "Converted a mobile-responsive web page into an Android application using a single Java file with WebView — enabling app-like experience on Android devices.",
      stack: ["Android", "Java(Basic)", "WebView", "HTML", "CSS"],
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
  }
  
  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-thumb { background: linear-gradient(var(--accent), var(--accent3)); border-radius: 999px; }
  
  .portfolio-root { 
    min-height: 100vh; 
    position: relative;
  }

  /* SCROLL PROGRESS BAR */
  .scroll-progress {
    position: fixed; top: 0; left: 0; height: 3px;
    background: linear-gradient(90deg, var(--accent), var(--accent3), var(--accent2));
    z-index: 999; width: 0%;
    transition: width 0.1s ease-out;
  }

  /* SUBTLE BRIGHT BACKGROUND GLOW ORBS */
  .ambient-glows {
    position: fixed; top: 0; left: 0; right: 0; bottom: 0;
    pointer-events: none; z-index: -1; overflow: hidden;
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

  /* FLOATING NAV */
  .nav-wrapper {
    position: fixed; top: 1.5rem; left: 50%; transform: translateX(-50%);
    z-index: 500; width: fit-content; max-width: 90%;
  }
  .nav {
    display: flex; align-items: center; gap: 1rem;
    padding: 0.5rem 1rem;
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(20px);
    border: 1px solid var(--border);
    border-radius: 999px;
    box-shadow: 0 10px 30px -10px rgba(15, 23, 42, 0.08);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .nav-logo {
    font-family: 'Syne', sans-serif;
    font-weight: 800; font-size: 1.1rem;
    color: var(--text);
    padding: 0.4rem 0.8rem;
    border-right: 1px solid var(--border);
    margin-right: 0.5rem;
  }
  .nav-links { display: flex; gap: 0.5rem; list-style: none; align-items: center; }
  .nav-links button {
    background: none; border: none; cursor: pointer;
    color: var(--muted); font-family: 'Outfit', sans-serif;
    font-size: 0.85rem; font-weight: 500; padding: 0.5rem 1rem;
    border-radius: 999px; transition: all 0.25s ease;
  }
  .nav-links button:hover { color: var(--accent); background: rgba(15, 23, 42, 0.03); }
  .nav-links button.active {
    color: var(--accent);
    background: rgba(14, 165, 233, 0.08);
    border: 1px solid rgba(14, 165, 233, 0.15);
  }
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
    transition: transform 0.3s cubic-bezier(0.25, 1, 0.5, 1), border-color 0.3s ease, box-shadow 0.3s ease;
  }
  .spotlight-card:hover {
    transform: translateY(-5px);
    border-color: rgba(14, 165, 233, 0.25);
    box-shadow: 0 15px 35px rgba(15, 23, 42, 0.06);
  }
  .spotlight-card::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; bottom: 0;
    border-radius: inherit; pointer-events: none; opacity: 0;
    background: radial-gradient(400px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(14, 165, 233, 0.06), transparent 80%);
    transition: opacity 0.4s ease; z-index: 1;
  }
  .spotlight-card:hover::before { opacity: 1; }

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
  .section-sub { color: var(--muted); font-size: 1.05rem; font-weight: 300; max-width: 600px; }
  .section-header { margin-bottom: 4rem; }
  .divider { height: 1px; background: linear-gradient(90deg, transparent, var(--border), transparent); max-width: 1120px; margin: 0 auto; }

  /* HERO SECTION (Split Grid) */
  .hero-grid {
    display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 4rem; align-items: center;
    min-height: 100vh; padding: 8rem 2rem 4rem; max-width: 1120px; margin: 0 auto;
  }
  .hero-info { display: flex; flex-direction: column; justify-content: center; }
  .hero-badge {
    display: inline-flex; align-items: center; gap: 0.6rem;
    background: rgba(14, 165, 233, 0.06); border: 1px solid rgba(14, 165, 233, 0.15);
    border-radius: 999px; padding: 0.5rem 1.1rem;
    font-size: 0.75rem; color: var(--accent); font-weight: 600;
    letter-spacing: 0.08em; text-transform: uppercase;
    margin-bottom: 2rem; width: fit-content;
  }
  .badge-dot {
    width: 8px; height: 8px; background: var(--accent); border-radius: 50%;
    box-shadow: 0 0 10px rgba(14, 165, 233, 0.3); animation: blink 2s infinite;
  }
  @keyframes blink {
    0%,100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.3; transform: scale(1.4); }
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
  .chip:hover { border-color: var(--accent); color: var(--accent); background: rgba(14, 165, 233, 0.05); }
  .hero-cta { display: flex; gap: 1rem; flex-wrap: wrap; }
  
  .btn {
    display: inline-flex; align-items: center; gap: 0.6rem;
    padding: 0.8rem 1.8rem; border-radius: 12px;
    font-family: 'Outfit', sans-serif; font-size: 0.92rem; font-weight: 600;
    cursor: pointer; border: none; text-decoration: none; transition: all 0.25s ease;
  }
  .btn-primary { 
    background: linear-gradient(135deg, var(--accent), var(--accent3)); 
    color: #ffffff; 
    box-shadow: 0 10px 30px -10px rgba(14, 165, 233, 0.35);
  }
  .btn-primary:hover { 
    transform: translateY(-2px); 
    box-shadow: 0 15px 35px -10px rgba(14, 165, 233, 0.5);
  }
  .btn-outline { background: transparent; color: var(--text); border: 1px solid var(--border); }
  .btn-outline:hover { border-color: var(--accent); color: var(--accent); transform: translateY(-2px); background: rgba(15, 23, 42, 0.02); }

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

  /* ABOUT SECTION & INFO ROW ALIGNMENT */
  .about-grid { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 5rem; align-items: start; }
  .about-text p { color: var(--muted); font-size: 1.05rem; font-weight: 300; line-height: 1.8; margin-bottom: 1.5rem; }
  .about-text strong { color: var(--text); font-weight: 600; }
  
  .personal-info { margin-top: 2rem; display: flex; flex-direction: column; gap: 1rem; }
  .info-row {
    display: flex; align-items: center; gap: 1.5rem;
    padding: 0.8rem 0; border-bottom: 1px solid var(--border);
    font-size: 0.95rem;
  }
  .info-icon { 
    width: 36px; height: 36px;
    border-radius: 8px; background: rgba(15,23,42,0.02);
    border: 1px solid var(--border);
    color: var(--accent);
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
  }
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
  .skills-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.5rem; }
  .skill-card { padding: 2rem; }
  .skill-cat {
    font-family: 'Syne', sans-serif; font-size: 0.85rem; font-weight: 700;
    letter-spacing: 0.1em; text-transform: uppercase; color: var(--accent);
    margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.75rem;
  }
  .pills { display: flex; flex-wrap: wrap; gap: 0.6rem; }
  .pill {
    background: rgba(15, 23, 42, 0.02); border: 1px solid var(--border);
    border-radius: 8px; padding: 0.45rem 0.9rem;
    font-size: 0.85rem; color: var(--text); font-weight: 500;
    transition: all 0.25s ease; cursor: default;
  }
  .pill:hover { background: rgba(14, 165, 233, 0.08); border-color: var(--accent); color: var(--accent); transform: scale(1.03); }

  /* EXPERIENCE */
  .exp-timeline { position: relative; padding-left: 2.5rem; }
  .exp-timeline::before {
    content: ''; position: absolute; left: 0; top: 12px; bottom: 12px;
    width: 2px; background: linear-gradient(180deg, var(--accent), var(--accent3));
  }
  .exp-item { position: relative; margin-bottom: 4rem; }
  .exp-item:last-child { margin-bottom: 0; }
  .exp-dot {
    position: absolute; left: -2.9rem; top: 8px;
    width: 14px; height: 14px; background: var(--bg);
    border: 3px solid var(--accent); border-radius: 50%;
    box-shadow: 0 0 10px rgba(14, 165, 233, 0.2);
  }
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
  }

  /* PROJECTS */
  .proj-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 2rem; }
  .proj-card {
    padding: 2.2rem;
    display: flex; flex-direction: column;
    justify-content: space-between; min-height: 320px;
  }
  .proj-badge {
    display: inline-block; margin-bottom: 1rem;
    background: rgba(168, 85, 247, 0.05); border: 1px solid rgba(168, 85, 247, 0.15);
    border-radius: 6px; padding: 0.25rem 0.75rem;
    font-size: 0.7rem; color: var(--accent3); font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase;
    width: fit-content;
  }
  .proj-icon {
    width: 46px; height: 46px; background: rgba(15, 23, 42, 0.01);
    border: 1px solid var(--border); border-radius: 12px;
    display: flex; align-items: center; justify-content: center;
    color: var(--accent); margin-bottom: 1.5rem;
    transition: all 0.3s ease;
  }
  .proj-card:hover .proj-icon {
    background: rgba(14, 165, 233, 0.08);
    color: var(--accent); border-color: var(--accent);
    box-shadow: 0 0 15px rgba(14, 165, 233, 0.15);
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
    position: relative;
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
  }
  .c-link:hover .c-icon { color: #fff; background: var(--accent); border-color: var(--accent); }
  
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
  }
`;

const sections = ["About", "Education", "Skills", "Experience", "Projects", "Contact"];

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [typedCode, setTypedCode] = useState("");

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

  // Update scroll progress bar
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.pageYOffset / totalScroll) * 100);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Reveal elements on scroll
  useEffect(() => {
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
    document.querySelectorAll(".fu").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // Track active section on scroll
  useEffect(() => {
    const secObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setActiveSection(e.target.id);
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

  // Spotlight card mouse tracking
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
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
        <div className="ambient-glows">
          <div className="glow-orb orb-1" />
          <div className="glow-orb orb-2" />
          <div className="glow-orb orb-3" />
        </div>

        {/* NAV */}
        <div className="nav-wrapper">
          <nav className="nav">
            <div className="nav-logo">&lt;Web Stack /&gt;</div>
            <ul className="nav-links">
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
            <div className="hero-badge"><span className="badge-dot" />Open to Opportunities</div>
            <h1>
              <span style={{ fontSize: "clamp(1.2rem,3vw,1.8rem)", fontWeight: 600, color: "var(--muted)", display: "block", marginBottom: "0.5rem" }}>Hi, I'm</span>
              Eniya Gunalan<br />
              <span className="highlight">Fullstock Developer</span>
            </h1>
            <p className="hero-sub">
              2.5 years of professional experience & 6 months of internship building high-performing backend systems using <strong style={{ color: "var(--text)" }}>PHP, CodeIgniter & MySQL</strong>. Wrapping mobile-ready applications as hybrid Android apps at Foresight Technologies.
            </p>
            <div className="hero-chips">
              {["PHP Core", "CodeIgniter 3/4", "REST APIs", "Tailwind CSS", "React Core", "Android Hybrid"].map(t => (
                <span key={t} className="chip">{t}</span>
              ))}
            </div>
            <div className="hero-cta">
              <button className="btn btn-primary" onClick={() => scrollTo("Contact")}>✉ Get In Touch</button>
              <button className="btn btn-outline" onClick={() => scrollTo("Projects")}>↓ View Projects</button>
            </div>
          </div>

          {/* Realistic Code Editor Window Mock */}
          <div className="editor-wrapper">
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
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="divider" />

        {/* ABOUT */}
        <section className="section" id="about">
          <div className="fu">
            <div className="section-header">
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
              <div className="stats-grid">
                {[
                  { num: "2.5", label: "Years Professional" },
                  { num: "6M", label: "Internship" },
                  { num: "10+", label: "Projects Shipped" },
                  { num: "6+", label: "Main Tech Stacks" },
                ].map((s) => (
                  <div key={s.label} className="spotlight-card stat-card" onMouseMove={handleMouseMove}>
                    <div className="stat-num">{s.num}</div>
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
            <div className="section-header">
              <div className="section-label">Education</div>
              <h2 className="section-title">Academic History</h2>
            </div>
            <div className="edu-list">
              {data.education.map((e) => (
                <div key={e.degree} className="spotlight-card edu-card" onMouseMove={handleMouseMove}>
                  <div>
                    <div className="edu-degree">{e.degree}</div>
                    <div className="edu-inst">{e.institute}</div>
                  </div>
                  <div className="edu-right">
                    <div className="edu-year">{e.year}</div>
                    <span className="edu-score">{e.score}</span>
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
            <div className="section-header">
              <div className="section-label">Technical Skills</div>
              <h2 className="section-title">My Tech Stack</h2>
              <p className="section-sub">Experienced across database management, core backend architectures, frontend templates, and app integrations.</p>
            </div>
            <div className="skills-grid">
              {data.skills.map((g) => (
                <div key={g.category} className="spotlight-card skill-card" onMouseMove={handleMouseMove}>
                  <div className="skill-cat"><span className="skill-svg-icon">{Icons[g.icon]}</span>{g.category}</div>
                  <div className="pills">
                    {g.items.map((i) => <span key={i} className="pill">{i}</span>)}
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
            <div className="section-header">
              <div className="section-label">Work History</div>
              <h2 className="section-title">Experience</h2>
            </div>
            <div className="exp-timeline">
              {data.experience.map((exp) => (
                <div key={exp.role} className="exp-item">
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
            <div className="section-header">
              <div className="section-label">Projects</div>
              <h2 className="section-title">Recent Work</h2>
              <p className="section-sub">A select showcase of commercial platforms, custom API integrations, and hybrid apps.</p>
            </div>
            <div className="proj-grid">
              {data.projects.map((p) => (
                <div key={p.title} className="spotlight-card proj-card" onMouseMove={handleMouseMove}>
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
            <div className="section-header">
              <div className="section-label">Contact</div>
              <h2 className="section-title">Let's Connect</h2>
            </div>
            
            <div className="contact-box">
              <div className="contact-title">Start a Conversation</div>
              <p className="contact-p">
                I'm currently open to freelance opportunities, professional Fullstock developer positions, and team collaborations. 
                Click below to copy my contact information.
              </p>
              
              <div className="contact-links">
                <div className="c-link" onClick={() => copyToClipboard(data.email, "Email Address")}>
                  <span className="c-icon">{Icons.mail}</span>
                  <div className="c-info">
                    <span className="c-info-label">Email Me</span>
                    <span className="c-info-val">{data.email}</span>
                  </div>
                </div>
                
                <div className="c-link" onClick={() => copyToClipboard(data.phone, "Phone Number")}>
                  <span className="c-icon">{Icons.phone}</span>
                  <div className="c-info">
                    <span className="c-info-label">Call / Text</span>
                    <span className="c-info-val">{data.phone}</span>
                  </div>
                </div>
                
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="c-link">
                  <span className="c-icon">{Icons.linkedin}</span>
                  <div className="c-info">
                    <span className="c-info-label">LinkedIn</span>
                    <span className="c-info-val">linkedin.com/in/eniya</span>
                  </div>
                </a>
                
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="c-link">
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