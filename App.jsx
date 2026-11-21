import React, { useEffect, useState } from 'react'
import { Routes, Route, NavLink, Link, useLocation } from 'react-router-dom'
import { ArrowUpRight, Github, Linkedin, Mail, Menu, X, Code2, GraduationCap, Layers3, Sparkles, ExternalLink, MapPin, Download } from 'lucide-react'

const email = 'justinepauldelpilar@gmail.com'
const github = 'https://github.com/justinepauldelpilar'

const projects = [
  {
    number: '01',
    title: 'MyPag-asa',
    type: 'Barangay Management System',
    description: 'A web-based barangay platform concept that helps residents submit complaints, view community announcements, and request barangay documents.',
    stack: ['Web Development', 'PHP', 'Database'],
    outcome: 'Academic team project',
  },
  {
    number: '02',
    title: 'Gordon College Sports Program Portal',
    type: 'College Information Portal',
    description: 'A sports information portal designed to introduce students to campus sports, explain rules and guidelines, and present varsity player information.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    outcome: 'Academic project',
  },
  {
    number: '03',
    title: 'AI-Based Symptom Checker',
    type: 'Research & System Concept',
    description: 'A proposed system where users enter symptoms to receive preliminary health information and suggested next steps, while encouraging professional consultation.',
    stack: ['AI Concepts', 'Research', 'UI/UX'],
    outcome: 'Research project',
  },
]

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  const nav = [['Home', '/'], ['About', '/about'], ['Projects', '/projects'], ['Contact', '/contact']]
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link to="/" className="brand" onClick={close} aria-label="Justine Del Pilar home">
          <span className="brand-mark">J<span>.</span></span>
          <span>JUSTINE <b>DEL PILAR</b></span>
        </Link>
        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={open}>
          {open ? <X size={22}/> : <Menu size={22}/>}
        </button>
        <nav className={open ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
          {nav.map(([label, path]) => <NavLink key={path} to={path} end={path === '/'} onClick={close}>{label}</NavLink>)}
          <a className="nav-cta" href={`mailto:${email}`} onClick={close}>Let's talk <ArrowUpRight size={15}/></a>
        </nav>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} Justine Paul N. Del Pilar</p>
        <p>Designed & built with care <span>✳</span></p>
        <a href={`mailto:${email}`}>Get in touch <ArrowUpRight size={14}/></a>
      </div>
    </footer>
  )
}

function SectionHeading({ eyebrow, title, text }) {
  return <div className="section-heading"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>
}

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-top"><span className="project-number">{project.number} / SELECTED WORK</span><span className="project-arrow"><ArrowUpRight size={20}/></span></div>
      <div className="project-art" aria-hidden="true"><span className="art-orbit orbit-one"/><span className="art-orbit orbit-two"/><span className="art-symbol">{project.number === '01' ? 'M' : project.number === '02' ? 'GC' : 'AI'}</span></div>
      <div className="project-content">
        <span className="project-type">{project.type}</span>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tag-list">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div>
        <div className="project-bottom"><span>{project.outcome}</span><span className="project-detail">Project overview <ArrowUpRight size={14}/></span></div>
      </div>
    </article>
  )
}

function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="availability"><span className="pulse"/> BSIT STUDENT · ASPIRING WEB DEVELOPER</div>
            <h1>Building thoughtful<br/>digital <em>experiences.</em></h1>
            <p className="hero-lead">Hi, I'm <strong>Justine Paul N. Del Pilar</strong> — an Information Technology student who enjoys turning ideas into useful, approachable web experiences.</p>
            <div className="hero-actions"><Link className="button button-primary" to="/projects">Explore my work <ArrowUpRight size={17}/></Link><Link className="button button-quiet" to="/about">More about me <span>↗</span></Link></div>
            <div className="hero-meta"><span><MapPin size={15}/> Olongapo City, Philippines</span><span><span className="meta-line"/> Open to learning & collaboration</span></div>
          </div>
          <div className="hero-visual">
            <div className="visual-frame"><div className="visual-top"><span>PORTFOLIO / 2026</span><span>01 — 04</span></div><div className="visual-center"><div className="visual-circle"><span>J<span className="accent">.</span></span></div><span className="visual-caption">CURIOUS MIND.<br/>CREATIVE BUILD.</span></div><div className="visual-bottom"><span>DESIGNING WITH PURPOSE</span><Sparkles size={17}/></div></div>
            <div className="floating-note"><Code2 size={17}/><span>Learning by<br/><b>building.</b></span></div>
          </div>
        </div>
        <div className="hero-scroll"><span/> SCROLL TO EXPLORE</div>
      </section>
      <section className="intro-strip"><div className="container strip-inner"><span>WHAT I BRING</span><p>Curiosity <b>✳</b> Problem-solving <b>✳</b> Continuous learning <b>✳</b> Attention to detail</p></div></section>
      <section className="section container home-about">
        <SectionHeading eyebrow="A LITTLE INTRODUCTION" title={<>Learning today.<br/><em>Building for tomorrow.</em></>} text="I’m developing my skills in web technologies, software development, and user-centered design through coursework and hands-on projects."/>
        <Link to="/about" className="text-link">Get to know me <ArrowUpRight size={16}/></Link>
      </section>
      <section className="section projects-preview"><div className="container"><div className="section-row"><SectionHeading eyebrow="SELECTED WORK" title="Projects in progress." text="A few academic and research projects that reflect what I've been learning."/><Link className="text-link" to="/projects">View all projects <ArrowUpRight size={16}/></Link></div><div className="project-grid">{projects.slice(0,2).map(p => <ProjectCard key={p.number} project={p}/>)}</div></div></section>
      <section className="cta-band"><div className="container cta-inner"><div><span className="eyebrow">HAVE A PROJECT IN MIND?</span><h2>Let's make something<br/><em>meaningful.</em></h2></div><Link to="/contact" className="button button-primary">Get in touch <ArrowUpRight size={17}/></Link></div></section>
    </>
  )
}

function About() {
  const skills = [
    ['Frontend', 'HTML', 'CSS', 'JavaScript', 'React'],
    ['Backend & Data', 'PHP', 'MySQL', 'Python'],
    ['Tools & Concepts', 'Git & GitHub', 'Responsive Design', 'UI/UX', 'Problem Solving'],
  ]
  return <main className="page-main"><section className="page-hero container"><span className="eyebrow">ABOUT ME / 02</span><h1>A little about<br/><em>who I am.</em></h1><p>Student, builder, and lifelong learner with a growing interest in creating useful digital solutions.</p></section>
    <section className="section container about-layout"><div className="about-monogram"><span>J<span>.</span></span><small>JUSTINE PAUL N.<br/>DEL PILAR</small></div><div className="about-copy"><span className="eyebrow">MY BACKGROUND</span><h2>Technology is a space where I can keep learning and create things that help people.</h2><p>I am a Bachelor of Science in Information Technology student at Gordon College in Olongapo City, Philippines. Through academic activities and group projects, I have been exploring web development, programming, databases, and user experience.</p><p>I enjoy learning how websites and systems work from the interface to the logic behind them. I value collaboration, patience, and improving a project through feedback and practice.</p><div className="education-card"><GraduationCap size={22}/><div><b>Gordon College</b><span>Bachelor of Science in Information Technology</span></div><small>BSIT</small></div></div></section>
    <section className="section skills-section"><div className="container"><SectionHeading eyebrow="TOOLS OF THE TRADE" title="Skills I'm developing." text="My current learning toolkit. I continue to strengthen these skills through practice and project work."/><div className="skills-grid">{skills.map(([group,...items])=><div className="skill-card" key={group}><span className="skill-icon"><Layers3 size={19}/></span><h3>{group}</h3><div className="tag-list">{items.map(item=><span key={item}>{item}</span>)}</div></div>)}</div></div></section>
  </main>
}

function Projects() {
  return <main className="page-main"><section className="page-hero container"><span className="eyebrow">MY WORK / 03</span><h1>Projects &amp; <em>experiments.</em></h1><p>Academic work, system concepts, and practical exercises that help me turn what I learn into something tangible.</p></section><section className="section container projects-page"><div className="project-grid">{projects.map(p=><ProjectCard key={p.number} project={p}/>)}</div><p className="project-note">Project descriptions reflect academic and proposed work. More details and live demonstrations can be added as each project is published.</p></section></main>
}

function Contact() {
  return <main className="page-main"><section className="page-hero container"><span className="eyebrow">CONTACT / 04</span><h1>Have a good idea?<br/><em>Let's connect.</em></h1><p>I'm always open to learning from others, discussing ideas, and connecting with people in technology.</p></section><section className="section container contact-layout"><div className="contact-main"><span className="eyebrow">SEND A MESSAGE</span><a className="email-link" href={`mailto:${email}`}>{email} <ArrowUpRight size={22}/></a><p>For questions, collaboration, or simply to say hello, feel free to send me an email.</p></div><div className="social-list"><a href={`mailto:${email}`}><span><Mail size={19}/></span><div><small>EMAIL</small><b>{email}</b></div><ArrowUpRight size={17}/></a><a href={github} target="_blank" rel="noreferrer"><span><Github size={19}/></span><div><small>GITHUB</small><b>github.com/justinepauldelpilar</b></div><ExternalLink size={16}/></a><div className="social-coming"><span><Linkedin size={19}/></span><div><small>LINKEDIN</small><b>Profile link not added yet</b></div></div></div></section></main>
}

function NotFound() {
  return <main className="not-found container"><span className="eyebrow">ERROR / 404</span><h1>Page not <em>found.</em></h1><p>The page you're looking for doesn't exist or may have moved.</p><Link to="/" className="button button-primary">Back to home <ArrowUpRight size={17}/></Link></main>
}

export default function App() {
  return <><ScrollToTop/><Header/><Routes><Route path="/" element={<Home/>}/><Route path="/about" element={<About/>}/><Route path="/projects" element={<Projects/>}/><Route path="/contact" element={<Contact/>}/><Route path="*" element={<NotFound/>}/></Routes><Footer/></>
}
