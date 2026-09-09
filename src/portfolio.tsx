import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { Mail, ExternalLink, Code2, FileText } from 'lucide-react';
import Background3D from './Background3D';

interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Oficina Virtual Solintelca,C.A.',
    description: `Aplicación destinada para oficina de soporte técnico y atención al
                  cliente en el área de telecomunicaciones y venta de internet. Su
                  principal función es llevar el registro de Instalaciones, Soportes
                  Técnicos y Reportes de Fallas reemplazando el uso de tablas de
                  Excel y facilitando la comunicación entre departamentos.`,
    tech: ['Bootstrap', 'JavaScript', 'Node.js', 'PostgreSQL'],
    link: 'https://appsolintelca.onrender.com/',
    github: 'https://github.com/manuelSandia/AplicacionWebSolintelca'
  },
  // {
  //   id: '2',
  //   title: 'Proyecto Destacado 2',
  //   description: 'Herramienta interactiva desarrollada con enfoque en rendimiento y experiencia de usuario 3D.',
  //   tech: ['TypeScript', 'Three.js', 'Tailwind CSS'],
  //   link: 'https://example.com',
  //   github: 'https://github.com'
  // }
];

export default function Portfolio() {
  return (
    <div className="min-h-screen text-slate-100 font-sans selection:bg-blue-500 selection:text-white">
      <Background3D />

      {/* Navegación */}
      {/* <nav className="fixed top-0 w-full backdrop-blur-md bg-slate-950/40 border-b border-slate-800/50 z-50 px-6 py-4">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <span className="font-bold text-lg tracking-wider text-blue-400">DEV.PORTFOLIO</span>
          <div className="flex gap-6 text-sm text-slate-400">
            <a href="#sobre-mi" className="hover:text-blue-400 transition-colors">Sobre mí</a>
            <a href="#cv" className="hover:text-blue-400 transition-colors">Curriculum</a>
            <a href="#proyectos" className="hover:text-blue-400 transition-colors">Proyectos</a>
            <a href="#contacto" className="hover:text-blue-400 transition-colors">Contacto</a>
          </div>
        </div>
      </nav> */}
      <nav className="fixed top-0 w-full backdrop-blur-md bg-slate-950/40 border-b border-slate-800/50 z-50 px-6 py-4">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <span className="font-bold text-lg tracking-wider text-blue-400">DEV.PORTFOLIO</span>
          <div className="flex gap-6 text-sm text-slate-400 cursor-pointer">
            <button 
              onClick={() => document.getElementById('sobre-mi')?.scrollIntoView({ behavior: 'smooth' })}
              className="hover:text-blue-400 transition-colors bg-transparent border-0"
            >
              Sobre mí
            </button>
            <button 
              onClick={() => document.getElementById('cv')?.scrollIntoView({ behavior: 'smooth' })}
              className="hover:text-blue-400 transition-colors bg-transparent border-0"
            >
              Curriculum
            </button>
            <button 
              onClick={() => document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' })}
              className="hover:text-blue-400 transition-colors bg-transparent border-0"
            >
              Proyectos
            </button>
            <button 
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              className="hover:text-blue-400 transition-colors bg-transparent border-0"
            >
              Contacto
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-20 space-y-32">
        {/* Presentación */}
        <section id="sobre-mi" className="space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-blue-500 font-mono text-sm tracking-widest mb-2">HOLA, MI NOMBRE ES</h2>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-50 mb-4">
              Manuel Alfonso Sandia Ramirez
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
              Javascript Full Stack Web Developer especializado en crear soluciones modernas, robustas e interactivas.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex gap-4 pt-4"
          >
            <a href="https://github.com/manuelSandia" target="_blank" rel="noreferrer" className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-colors">
              <FaGithub className="w-5 h-5 text-slate-300" />
            </a>
            <a href="www.linkedin.com/in/sandiamanuel" target="_blank" rel="noreferrer" className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-colors">
              <FaLinkedin className="w-5 h-5 text-slate-300" />
            </a>
            <a href="mailto:sandiamanuel@gmail.com" className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-colors">
              <Mail className="w-5 h-5 text-slate-300" />
            </a>
          </motion.div>
        </section>

        {/* Curriculum */}
        <section id="cv" className="space-y-6 bg-slate-900/40 p-8 rounded-2xl border border-slate-800/60 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-2">
            <FileText className="text-blue-500" />
            <h2 className="text-2xl font-bold">Mi Curriculum</h2>
          </div>
          <p className="text-slate-400 leading-relaxed">
            Enfocado en brindar soluciones inteligentes a las distintas problemáticas y necesidades que se presentan, usando como herramienta la transformación digital para estandarizar procesos, hacerlos eficientes y dar un mejor servicio al cliente.
          </p>
          <div className="pt-2">
            <a
              href="https://drive.google.com/file/d/19GRV9t-lRIevU6lFeYUabJGQrlq4vMFm/view?usp=drive_link"
              download
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-800 border border-slate-700 hover:border-blue-500 text-sm font-medium transition-colors"
            >
              CV Completo (PDF)
            </a>
          </div>
        </section>

        {/* Proyectos */}
        <section id="proyectos" className="space-y-8">
          <div className="flex items-center gap-3">
            <Code2 className="text-blue-500" />
            <h2 className="text-2xl font-bold">Aplicaciones y Trabajos Realizados</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                whileHover={{ y: -5 }}
                className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-6 backdrop-blur-sm flex flex-col justify-between hover:border-blue-500/30 transition-all"
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold text-slate-100">{project.title}</h3>
                    <div className="flex gap-3">
                      <a href={project.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                        <FaGithub className="w-4 h-4" />
                      </a>
                      <a href={project.link} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed">{project.description}</p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((techName, idx) => (
                    <span key={idx} className="text-xs px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      {techName}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="text-center py-12 border-t border-slate-800/50 space-y-4">
          <h2 className="text-2xl font-bold">¿Tienes un proyecto en mente?</h2>
          <p className="text-slate-400 max-w-md mx-auto text-sm">
            Estoy disponible para oportunidades laborales y proyectos freelance.
          </p>
          <a
            href="mailto:sandiamanuel@gmail.com"
            className="inline-block mt-4 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-colors"
          >
            Enviar Mensaje
          </a>
        </section>
      </main>
    </div>
  );
}