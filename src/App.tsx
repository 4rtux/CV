"use client"

import { useState, useEffect } from "react"
import { Github, Linkedin, Mail } from "lucide-react"
import { useTranslation } from "react-i18next"
import { Navigation } from "./components/Navigation"
import { ProjectCard } from "./components/ProjectCard"
import { TechStackSection } from "./components/TechStackSection"
import { ContactForm } from "./components/ContactForm"
import AnimatedBackground from "./components/AnimatedBackground"
import type { Project, TechStack} from "./types"

const projectsData: Project[] = [
  {
    title: 'project.1.title',
    description: 'project.1.description',
    imageUrl: "https://images.unsplash.com/photo-1631563019676-dade0dbdb8fc?auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com/4rtux/CNN-Brain-Tumor-Classification-Model",
    tags: ["Python", "TensorFlow", "Keras"],
  },
  {
    title: "project.2.title",
    description: "project.2.description",
    imageUrl: "https://images.unsplash.com/photo-1617791160536-598cf32026fb?auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com/4rtux/NN-Stroke-Predictor",
    tags: ["Python", "Tensorflow", "Keras"],
  },
  {
    title: "project.3.title",
    description: "project.3.description",
    imageUrl: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com/4rtux/Asian-Restaurant-Website",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "project.4.title",
    description: "project.4.description",
    imageUrl: "https://images.unsplash.com/photo-1541535650810-10d26f5c2ab3?auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com/4rtux/Advertising-portal",
    tags: ["React", "Node.js", "TypeScript"],
  },
  {
    title: "project.5.title",
    description: "project.5.description",
    imageUrl: "https://images.unsplash.com/photo-1603899122634-f086ca5f5ddd?auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com/NataaNK/Criptografia_ptica_final",
    tags: ["Python", "Security", "RSA", "Certificates", "2FA"],
  },
  {
    title: "project.6.title",
    description: "project.6.description",
    imageUrl: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com/NataaNK/SSDD_Proyecto_Final",
    tags: ["C", "Python", "RPC"],
  },
];

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

  const { t } = useTranslation()

  useEffect(() => {
    const darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches
    setIsDark(darkMode)
  }, []);

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
              {t('hero.title')}
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto italic animate-fade-in">
            {t('hero.quote')}
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
            <h2 className="text-3xl font-bold mb-8">{t('about.title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <img
                src="src/media/Imagen Linkedin.jpg"
                alt="Profile"
                className="rounded-[0.5rem] shadow-lg w-full h-auto object-cover"
              />
              <div>
                <p className="text-lg leading-relaxed mb-6">
                {t('about.content1')}
                </p>
                <p className="text-lg leading-relaxed">
                {t('about.content2')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">{t('projects.title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projectsData.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="py-16 px-4 bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur-md">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">{t('techStack.title')}</h2>
            <TechStackSection stacks={techStacks} />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">{t('contact.title')}</h2>
            <ContactForm />
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>© {new Date().getFullYear()} 4rtux.dev. {t('footer.rights')}</p>
        </footer>
      </div>
    </div>
  )
}

export default App

