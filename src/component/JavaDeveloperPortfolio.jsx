import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Moon, Sun, Code2, Award, Terminal, Menu, X } from 'lucide-react';

export default function JavaDeveloperPortfolio() {
  const [theme, setTheme] = useState('dark');
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'education', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const projects = [
    {
      title: "Enterprise E-Commerce Platform",
      description: "Microservices-based e-commerce platform using Spring Boot and Apache Kafka",
      tech: ["Java 17", "Spring Boot", "Kafka", "PostgreSQL", "Redis", "Docker"],
      github: "https://github.com/",
      demo: "https://demo.com"
    },
    {
      title: "JobStream – Scalable Job Portal",
      description: "Microservices-based job portal supporting job postings, candidate profiles, resume uploads, and real-time application notifications using event-driven architecture.",
      tech: ["Java", "Spring Boot", "Spring WebFlux", "MongoDB", "RabbitMQ", "React"],
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "AI-Based Student Performance Evaluation System",
      description: "Intelligent academic analytics platform that evaluates student performance using machine learning models. Built with a Spring Boot backend and integrated Flask-based ML APIs for predictive scoring, performance insights, and personalized recommendations.",
      tech: ["Java 21", "Spring Boot", "FAST API", "Python ML", "MySQL", "REST APIs"],
      github: "https://github.com",
      demo: "https://demo.com"
    }
  ];

  const skills = {
    "Core Java": ["Java 8/11/17/21", "OOP", "Design Patterns", "Multithreading", "JVM Internals", "Streams API"],
    "Frameworks": ["Spring Boot", "Spring MVC", "Spring Security", "Spring Data JPA", "Hibernate", "Spring Cloud"],
    "Databases": ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
    "Tools & DevOps": ["Git", "Maven", "Gradle", "Docker"],
    "Messaging": ["Apache Kafka"],
    "Testing": ["JUnit", "Mockito", "REST Assured"],
    "Others": ["Microservices", "REST APIs", "Web-Socket"]
  };

  const experience = [
    {
      role: "Java Developer Intern",
      company: "Zidio development.",
      period: "Oct 2025 - Nov 2025",
      location: "Remote",
      responsibilities: [
        "Architected and developed microservices using Spring Boot and Spring Cloud",
        "Led migration from monolithic to microservices architecture reducing deployment time by 70%",
        "Optimized database queries resulting in 40% performance improvement"
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Technology in Computer Engineering",
      institution: "Government Engineering college Bhavnagar",
      period: "2023 - 2027",
      gpa: "7.95"
    }
  ];

  const certifications = [
    "Spring Professional Certification",
    "MongoDB Certified Developer"
  ];

  const isDark = theme === 'dark';

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-zinc-950 text-white' : 'bg-white text-zinc-900'}`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Onest:wght@300;400;500;600;700&display=swap');
        body {
          font-family: 'Onest', sans-serif;
        }
        .font-mono {
          font-family: 'JetBrains Mono', monospace;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 1s ease;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .animate-pulse-custom {
          animation: pulse 2s ease infinite;
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease;
        }
      `}</style>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 ${isDark ? 'bg-zinc-900/80' : 'bg-white/80'} backdrop-blur-lg border-b ${isDark ? 'border-zinc-800' : 'border-zinc-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2 text-xl font-bold font-mono text-emerald-500">
              <Terminal size={24} />
              <span>Pratik dholakiya</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {['home', 'about', 'experience', 'projects', 'skills', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize font-medium transition-colors relative ${
                    activeSection === section 
                      ? isDark ? 'text-white' : 'text-zinc-900'
                      : isDark ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-zinc-900'
                  }`}
                >
                  {section}
                  {activeSection === section && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-emerald-500"></span>
                  )}
                </button>
              ))}
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full border ${isDark ? 'bg-zinc-800 border-zinc-700 hover:border-emerald-500' : 'bg-zinc-100 border-zinc-300 hover:border-emerald-500'} transition-all hover:scale-105`}
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg border ${isDark ? 'bg-zinc-800 border-zinc-700' : 'bg-zinc-100 border-zinc-300'}`}
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-lg border ${isDark ? 'bg-zinc-800 border-zinc-700' : 'bg-zinc-100 border-zinc-300'}`}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden ${isDark ? 'bg-zinc-900' : 'bg-white'} border-t ${isDark ? 'border-zinc-800' : 'border-zinc-200'} animate-slideDown`}>
            <div className="px-4 py-4 space-y-2">
              {['home', 'about', 'experience', 'projects', 'skills', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`w-full text-left px-4 py-3 rounded-lg capitalize font-medium transition-colors ${
                    activeSection === section
                      ? isDark ? 'bg-zinc-800 text-white' : 'bg-zinc-100 text-zinc-900'
                      : isDark ? 'text-zinc-400 hover:bg-zinc-800 hover:text-white' : 'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `repeating-linear-gradient(0deg, ${isDark ? '#10b981' : '#059669'} 0px, transparent 1px, transparent 40px),
                           repeating-linear-gradient(90deg, ${isDark ? '#10b981' : '#059669'} 0px, transparent 1px, transparent 40px)`
        }}></div>
        
        <div className="max-w-7xl w-full relative z-10">
          <div className={`inline-flex items-center gap-2 ${isDark ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-zinc-200'} border px-4 py-2 rounded-full mb-8 animate-fadeInUp`}>
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse-custom"></span>
            <span className={isDark ? 'text-zinc-400' : 'text-zinc-600'}>Available for opportunities</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 animate-fadeInUp" style={{animationDelay: '0.2s', animationFillMode: 'backwards'}}>
            <span className="bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent">Java Developer</span>
            <br />
            Building Scalable Solutions
          </h1>

          <p className={`text-lg sm:text-xl ${isDark ? 'text-zinc-400' : 'text-zinc-600'} max-w-2xl mb-8 animate-fadeInUp`} style={{animationDelay: '0.4s', animationFillMode: 'backwards'}}>
            Specialized in enterprise applications, microservices architecture, and cloud-native development with 6+ years of experience delivering high-performance Java solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-fadeInUp" style={{animationDelay: '0.6s', animationFillMode: 'backwards'}}>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-emerald-500 text-black font-semibold rounded-xl hover:bg-emerald-400 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-500/20 flex items-center justify-center gap-2"
            >
              Get In Touch
              <Mail size={20} />
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className={`px-8 py-4 ${isDark ? 'bg-zinc-900 border-zinc-800 hover:border-emerald-500' : 'bg-white border-zinc-200 hover:border-emerald-500'} border font-semibold rounded-xl transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2`}
            >
              View Projects
              <ExternalLink size={20} />
            </button>
          </div>

          <div className="flex gap-4 animate-fadeInUp" style={{animationDelay: '0.8s', animationFillMode: 'backwards'}}>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={`w-12 h-12 ${isDark ? 'bg-zinc-900 border-zinc-800 hover:border-emerald-500' : 'bg-white border-zinc-200 hover:border-emerald-500'} border rounded-xl flex items-center justify-center transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-500/10`}>
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={`w-12 h-12 ${isDark ? 'bg-zinc-900 border-zinc-800 hover:border-emerald-500' : 'bg-white border-zinc-200 hover:border-emerald-500'} border rounded-xl flex items-center justify-center transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-500/10`}>
              <Linkedin size={20} />
            </a>
            <a href="mailto:developer@example.com" className={`w-12 h-12 ${isDark ? 'bg-zinc-900 border-zinc-800 hover:border-emerald-500' : 'bg-white border-zinc-200 hover:border-emerald-500'} border rounded-xl flex items-center justify-center transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-500/10`}>
              <Mail size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className={`inline-block ${isDark ? 'bg-zinc-900 border-zinc-800' : 'bg-zinc-100 border-zinc-200'} border px-4 py-2 rounded-full text-sm font-semibold text-emerald-500 mb-4`}>
              About Me
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Passionate About Clean Code</h2>
            <p className={`text-lg ${isDark ? 'text-zinc-400' : 'text-zinc-600'} max-w-2xl`}>
              Building robust, scalable applications with modern Java technologies
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className={`text-lg ${isDark ? 'text-zinc-400' : 'text-zinc-600'} space-y-6`}>
              <p>
                I'm a Java Developer with a passion for creating efficient, scalable, and maintainable software solutions. With over 1.5 years of professional experience, I've worked on everything from monolithic applications to distributed microservices architectures.
              </p>
              <p>
                My expertise lies in Spring Boot ecosystem, cloud technologies, and building RESTful APIs that power mission-critical applications. I believe in writing clean, testable code and following SOLID principles to ensure long-term maintainability.
              </p>
              <p>
                When I'm not coding, you'll find me contributing to open-source projects, writing technical blogs, or exploring new technologies in the Java ecosystem. I'm particularly interested in reactive programming, event-driven architectures, and DevOps practices.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { number: "1.5+", label: "Years Experience" },
                { number: "10+", label: "Projects Completed" },
                { number: "3+", label: "Technologies Mastered" },
                { number: "2", label: "Certifications" }
              ].map((stat, index) => (
                <div key={index} className={`${isDark ? 'bg-zinc-900 border-zinc-800 hover:border-emerald-500' : 'bg-zinc-50 border-zinc-200 hover:border-emerald-500'} border rounded-2xl p-6 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/10`}>
                  <div className="text-4xl font-bold font-mono text-emerald-500 mb-2">{stat.number}</div>
                  <div className={isDark ? 'text-zinc-400' : 'text-zinc-600'}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className={`inline-block ${isDark ? 'bg-zinc-900 border-zinc-800' : 'bg-zinc-100 border-zinc-200'} border px-4 py-2 rounded-full text-sm font-semibold text-emerald-500 mb-4`}>
              Career Journey
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Professional Experience</h2>
            <p className={`text-lg ${isDark ? 'text-zinc-400' : 'text-zinc-600'} max-w-2xl`}>
              My journey through the software development industry
            </p>
          </div>

          <div className="relative pl-8 space-y-12">
            <div className={`absolute left-0 top-0 bottom-0 w-0.5 ${isDark ? 'bg-zinc-800' : 'bg-zinc-200'}`}></div>
            
            {experience.map((exp, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-8 top-0 w-4 h-4 rounded-full bg-emerald-500 border-4 border-zinc-950 shadow-lg"></div>
                <div className={`${isDark ? 'bg-zinc-900 border-zinc-800 hover:border-emerald-500' : 'bg-zinc-50 border-zinc-200 hover:border-emerald-500'} border rounded-2xl p-6 sm:p-8 transition-all hover:translate-x-2`}>
                  <h3 className="text-2xl font-bold mb-2">{exp.role}</h3>
                  <div className="text-emerald-500 font-semibold mb-2">{exp.company}</div>
                  <div className={`flex flex-wrap gap-2 text-sm ${isDark ? 'text-zinc-400' : 'text-zinc-600'} mb-6`}>
                    <span>{exp.period}</span>
                    <span>•</span>
                    <span>{exp.location}</span>
                  </div>
                  <ul className="space-y-3">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className={`flex gap-3 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                        <span className="text-emerald-500 font-bold mt-1">▹</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className={`inline-block ${isDark ? 'bg-zinc-900 border-zinc-800' : 'bg-zinc-100 border-zinc-200'} border px-4 py-2 rounded-full text-sm font-semibold text-emerald-500 mb-4`}>
              Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Featured Projects</h2>
            <p className={`text-lg ${isDark ? 'text-zinc-400' : 'text-zinc-600'} max-w-2xl`}>
              A showcase of my recent work and technical achievements
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div key={index} className={`${isDark ? 'bg-zinc-900 border-zinc-800 hover:border-emerald-500' : 'bg-zinc-50 border-zinc-200 hover:border-emerald-500'} border rounded-2xl p-6 sm:p-8 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/10 flex flex-col`}>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <div className="flex gap-2">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className={`${isDark ? 'text-zinc-400 hover:text-emerald-500' : 'text-zinc-600 hover:text-emerald-500'} transition-colors`}>
                      <Github size={20} />
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className={`${isDark ? 'text-zinc-400 hover:text-emerald-500' : 'text-zinc-600 hover:text-emerald-500'} transition-colors`}>
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
                <p className={`${isDark ? 'text-zinc-400' : 'text-zinc-600'} mb-6 flex-grow`}>{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className={`${isDark ? 'bg-zinc-800 border-zinc-700' : 'bg-white border-zinc-300'} border px-3 py-1 rounded-lg text-sm font-mono text-emerald-500`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className={`inline-block ${isDark ? 'bg-zinc-900 border-zinc-800' : 'bg-zinc-100 border-zinc-200'} border px-4 py-2 rounded-full text-sm font-semibold text-emerald-500 mb-4`}>
              Technical Arsenal
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Skills & Technologies</h2>
            <p className={`text-lg ${isDark ? 'text-zinc-400' : 'text-zinc-600'} max-w-2xl`}>
              The tools and technologies I work with daily
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items], index) => (
              <div key={index} className={`${isDark ? 'bg-zinc-900 border-zinc-800 hover:border-emerald-500' : 'bg-zinc-50 border-zinc-200 hover:border-emerald-500'} border rounded-2xl p-6 transition-all hover:-translate-y-1`}>
                <h3 className="text-xl font-bold text-emerald-500 flex items-center gap-2 mb-6">
                  <Code2 size={20} />
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, idx) => (
                    <span key={idx} className={`${isDark ? 'bg-zinc-800 border-zinc-700 hover:border-emerald-500' : 'bg-white border-zinc-300 hover:border-emerald-500'} border px-3 py-1.5 rounded-lg text-sm transition-all hover:scale-105`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className={`inline-block ${isDark ? 'bg-zinc-900 border-zinc-800' : 'bg-zinc-100 border-zinc-200'} border px-4 py-2 rounded-full text-sm font-semibold text-emerald-500 mb-4`}>
              Academic Background
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Education & Certifications</h2>
            <p className={`text-lg ${isDark ? 'text-zinc-400' : 'text-zinc-600'} max-w-2xl`}>
              My academic journey and professional certifications
            </p>
          </div>

          <div className="space-y-6 mb-12">
            {education.map((edu, index) => (
              <div key={index} className={`${isDark ? 'bg-zinc-900 border-zinc-800 hover:border-emerald-500' : 'bg-zinc-50 border-zinc-200 hover:border-emerald-500'} border rounded-2xl p-6 sm:p-8 transition-all hover:translate-x-2 grid lg:grid-cols-[1fr_auto] gap-6 items-center`}>
                <div>
                  <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                  <div className="text-emerald-500 font-semibold mb-2">{edu.institution}</div>
                  <div className={`text-sm ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>{edu.period}</div>
                </div>
                <div className={`${isDark ? 'bg-zinc-800 border-zinc-700' : 'bg-white border-zinc-300'} border rounded-xl p-6 text-center min-w-[120px]`}>
                  <div className={`text-sm ${isDark ? 'text-zinc-400' : 'text-zinc-600'} mb-2`}>GPA</div>
                  <div className="text-2xl font-bold font-mono text-emerald-500">{edu.gpa}</div>
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-bold mb-6">Professional Certifications</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className={`${isDark ? 'bg-zinc-900 border-zinc-800 hover:border-emerald-500' : 'bg-zinc-50 border-zinc-200 hover:border-emerald-500'} border rounded-xl p-6 flex items-center gap-4 transition-all hover:translate-x-1`}>
                <Award size={24} className="text-emerald-500 flex-shrink-0" />
                <span>{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`mx-4 sm:mx-6 lg:mx-8 my-20 ${isDark ? 'bg-zinc-900' : 'bg-zinc-100'} rounded-3xl`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Let's Work Together</h2>
          <p className={`text-lg ${isDark ? 'text-zinc-400' : 'text-zinc-600'} mb-12 max-w-2xl mx-auto`}>
            I'm always interested in hearing about new projects and opportunities. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: <Mail size={24} />, title: "Email", link: "mailto:dholakiya225@gmail.com", text: "dholakiya225@gmail.com" },
              { icon: <Linkedin size={24} />, title: "LinkedIn", link: "https://linkedin.com/in/pratik-dholakiya", text: "Connect with me" },
              { icon: <Github size={24} />, title: "GitHub", link: "https://github.com/pratikdholakiya0", text: "Check out my code" }
            ].map((contact, index) => (
              <div key={index} className={`${isDark ? 'bg-zinc-950 border-zinc-800 hover:border-emerald-500' : 'bg-white border-zinc-200 hover:border-emerald-500'} border rounded-2xl p-8 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/10`}>
                <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center text-black mx-auto mb-4">
                  {contact.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{contact.title}</h3>
                <a href={contact.link} target="_blank" rel="noopener noreferrer" className={`${isDark ? 'text-zinc-400 hover:text-emerald-500' : 'text-zinc-600 hover:text-emerald-500'} transition-colors`}>
                  {contact.text}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 px-4 sm:px-6 lg:px-8 border-t ${isDark ? 'border-zinc-800' : 'border-zinc-200'} text-center`}>
        <div className="max-w-7xl mx-auto">
          <p className={`${isDark ? 'text-zinc-400' : 'text-zinc-600'} mb-2`}>
            Designed & Built by Pratik | © 2026 All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
}