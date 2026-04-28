import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-8 relative"
        >
          <h1 className="text-9xl font-black text-brand-black/5">404</h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl font-black uppercase tracking-tighter">Lost?</span>
          </div>
        </motion.div>
        
        <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
        <p className="text-gray-500 mb-10 leading-relaxed">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        <Link 
          to="/" 
          className="btn-primary inline-flex items-center gap-2 px-8 py-4"
        >
          <Home size={18} />
          Back to Home
        </Link>
        
        <div className="mt-8">
          <Link 
            to="/shop" 
            className="text-sm font-bold text-gray-400 uppercase tracking-widest hover:text-brand-orange transition-colors inline-flex items-center gap-1"
          >
            <ArrowLeft size={14} />
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
