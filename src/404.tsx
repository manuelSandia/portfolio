import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import Background3D from './Background3D';

export default function NotFound() {
  return (
    <div className="min-h-screen text-slate-100 font-sans selection:bg-blue-500 selection:text-white flex flex-col justify-between">
      {/* Fondo Canvas 3D */}
      <Background3D />

      {/* Navegación Simple */}
      <nav className="w-full backdrop-blur-md bg-slate-950/40 border-b border-slate-800/50 px-6 py-4">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <span className="font-bold text-lg tracking-wider text-blue-400">DEV.PORTFOLIO</span>
        </div>
      </nav>

      {/* Contenido Principal 404 */}
      <main className="max-w-3xl mx-auto px-6 text-center space-y-6 my-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <span className="text-blue-500 font-mono text-sm tracking-widest uppercase">
            Error 404
          </span>
          <h1 className="text-7xl md:text-9xl font-extrabold tracking-tight text-slate-100">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-300">
            Página no encontrada
          </h2>
          <p className="text-slate-400 max-w-md mx-auto text-base leading-relaxed">
            Parece que te has perdido en el espacio. La página que estás buscando no existe o fue movida.
          </p>
        </motion.div>

        {/* Botones de Acción */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-col sm:flex-row justify-center gap-4 pt-4"
        >
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-slate-900 border border-slate-800 hover:border-blue-500/50 text-slate-300 text-sm font-medium transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver atrás
          </button>

          <a
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-colors"
          >
            <Home className="w-4 h-4" />
            Ir al inicio
          </a>
        </motion.div>
      </main>

      {/* Footer sutil */}
      <footer className="py-6 text-center text-xs text-slate-500 border-t border-slate-800/30">
        DEV.PORTFOLIO — Todos los derechos reservados
      </footer>
    </div>
  );
}