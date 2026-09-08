import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Background3D from './Background3D';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen text-slate-100 font-sans selection:bg-blue-500 selection:text-white flex flex-col justify-between">
      <Background3D />

      <nav className="w-full backdrop-blur-md bg-slate-950/40 border-b border-slate-800/50 px-6 py-4">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <button 
            onClick={() => navigate('/')} 
            className="font-bold text-lg tracking-wider text-blue-400 bg-transparent border-0 cursor-pointer"
          >
            DEV.PORTFOLIO
          </button>
        </div>
      </nav>

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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-col sm:flex-row justify-center gap-4 pt-4"
        >
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-slate-900 border border-slate-800 hover:border-blue-500/50 text-slate-300 text-sm font-medium transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver atrás
          </button>

          {/* Botón corregido usando la función navigate('/') */}
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-colors cursor-pointer"
          >
            <Home className="w-4 h-4" />
            Ir al inicio
          </button>
        </motion.div>
      </main>

      <footer className="py-6 text-center text-xs text-slate-500 border-t border-slate-800/30">
        DEV.PORTFOLIO — Todos los derechos reservados
      </footer>
    </div>
  );
}