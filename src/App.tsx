"use client"

import { useState, useEffect } from "react"
import { Github, Linkedin, Mail } from "lucide-react"
import { Navigation } from "./components/Navigation"
import { ProjectCard } from "./components/ProjectCard"
import { TechStackSection } from "./components/TechStackSection"
import { ContactForm } from "./components/ContactForm"
import AnimatedBackground from "./components/AnimatedBackground"
import type { Project, TechStack } from "./types"

const projects: Project[] = [
  {
    title: "Convolutional Neural Network Brain Tumor Classifier",
    description: "An AI model powered by a CNN to predict brain tumors using MRI images",
    imageUrl: "https://images.unsplash.com/photo-1631563019676-dade0dbdb8fc?auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com/4rtux/CNN-Brain-Tumor-Classification-Model",
    tags: ["Python", "TensorFlow", "Keras"],
  },
  {
    title: "Neural Network Stroke Predictor",
    description: "A neural network model to predict strokes using patient data",
    imageUrl: "https://images.unsplash.com/photo-1617791160536-598cf32026fb?auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com/4rtux/NN-Stroke-Predictor",
    tags: ["Python", "Tensorflow", "Keras"],
  },
  {
    title: "Asian Restaurant Website",
    description: "An elegant website for an Asian restaurant",
    imageUrl: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com/4rtux/Asian-Restaurant-Website",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Advertising Portal",
    description: "A portal for advertising products and services",
    imageUrl: "https://images.unsplash.com/photo-1541535650810-10d26f5c2ab3?auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com/4rtux/Advertising-portal",
    tags: ["React", "Node.js", "TypeScript"],
  },
  {
    title: "Simple App Showcasing Security Implementations",
    description: "A transactional app showcasing RSA encryption and certificate verification",
    imageUrl: "https://images.unsplash.com/photo-1603899122634-f086ca5f5ddd?auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com/NataaNK/Criptografia_ptica_final",
    tags: ["Python", "Security", "RSA", "Certificates", "2FA"],
  },
  {
    title: "App showcasing client-server communication including web server petitions",
    description: "Client-server communication in C using RPC and web server (Python) petitions",
    imageUrl: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com/NataaNK/SSDD_Proyecto_Final",
    tags: ["C", "Python", "RPC"],
  },
]

const techStacks: TechStack[] = [
  {
    category: "Frontend",
    icon: "🎨",
    skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Vue.js"],
  },
  {
    category: "Backend",
    icon: "⚙️",
    skills: ["Node.js", "Python", "Javascript", "C", "C++"],
  },
  {
    category: "DevOps",
    icon: "🚀",
    skills: ["Docker", "R", "AWS", "Microsoft Azure", "Google Cloud Platform"],
  },
  {
    category: "Databases",
    icon: "💾",
    skills: ["SQL", "SQLite"],
  },
]

function App() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches
    setIsDark(darkMode)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const toggleTheme = () => setIsDark(!isDark)

  return (
    <div className={isDark ? "dark" : ""}>
      <div className="min-h-screen bg-transparent text-gray-900 dark:text-gray-100 transition-colors">
        <AnimatedBackground />
        <Navigation isDark={isDark} toggleTheme={toggleTheme} />

        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
          <div className="max-w-7xl mx-auto text-center z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-down">
              Arturo Soto
              <span className="block text-2xl md:text-3xl text-gray-600 dark:text-gray-400 mt-2">
                Computer Scientist
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto italic animate-fade-in">
              "The most exciting interfaces are those yet to be imagined, where humans and AI collaborate seamlessly."
            </p>
            <div className="flex justify-center space-x-6 mt-8 animate-fade-in-up">
              <a
                href="https://github.com/4rtux"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-all hover:scale-110"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/4rtux"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-all hover:scale-110"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:arturosotoruedas@gmail.com?subject=Job Offer"
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-all hover:scale-110"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 px-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">About Me</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <img
                src="src/media/Imagen Linkedin.jpg"
                alt="Profile"
                className="rounded-[0.5rem] shadow-lg w-full h-auto object-cover"
              />
              <div>
                <p className="text-lg leading-relaxed mb-6">
                  I'm Arturo. A Computer Scientist in Madrid which loves AI related projects. Since I was a kid, I've
                  been fascinated by the power of technology and computers. I built myself my first computer when I was
                  16 years old and I've been coding ever since. When I was 18, I built my first NAS server for myself
                  and started learning about networking and cloud computing. Now, I'm finishing my degree in Computer
                  Science and I had the opportunity to work with many people and in different countries.
                </p>
                <p className="text-lg leading-relaxed">
                  My journey in technology has led me to work on various exciting projects, for example, an AI model
                  that predicts brain tumors with MRI images. I'm always eager to learn new technologies and contribute
                  to meaningful projects that push the boundaries of what's possible.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="py-16 px-4 bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur-md">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Tech Stack</h2>
            <TechStackSection stacks={techStacks} />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
            <ContactForm />
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>© {new Date().getFullYear()} 4rtux.dev. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}

export default App

