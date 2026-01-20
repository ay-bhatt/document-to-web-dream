import { motion } from "framer-motion";
import { Instagram, Linkedin, Youtube, Play, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="relative py-24 overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-cyan-400/30 via-purple-500/30 to-pink-500/30"
        style={{
          backgroundImage: `linear-gradient(135deg, 
            hsl(185 80% 50% / 0.4) 0%, 
            hsl(270 80% 60% / 0.4) 50%, 
            hsl(315 80% 60% / 0.4) 100%)`
        }}
      />
      
      <div className="container relative z-10 mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Connect */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-right md:text-left"
          >
            <h2 className="font-display text-5xl md:text-7xl neon-text-white text-foreground mb-4">
              CONNECT
            </h2>
            <h3 className="font-display text-3xl md:text-5xl text-foreground opacity-80 mb-2">
              TO THE
            </h3>
            <h3 className="font-display text-3xl md:text-5xl text-foreground opacity-80 mb-2">
              LEARNING
            </h3>
            <h3 className="font-display text-3xl md:text-5xl text-foreground opacity-80 mb-6">
              WORLD
            </h3>
            <p className="text-primary font-semibold uppercase tracking-wider">
              LET'S GET STARTED
            </p>
          </motion.div>

          {/* Right side - Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Logo */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center">
                <span className="text-2xl font-bold text-secondary-foreground">⚡</span>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">padhaku</p>
                <p className="text-foreground font-semibold">STDHUB.IN</p>
              </div>
            </div>

            {/* Email */}
            <div>
              <p className="text-primary font-bold uppercase mb-2">EMAIL</p>
              <a 
                href="mailto:JatinPetwal2326@gmail.com" 
                className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                JatinPetwal2326@gmail.com
              </a>
            </div>

            {/* Social */}
            <div>
              <p className="text-primary font-bold uppercase mb-4">SOCIAL</p>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-orange-400 flex items-center justify-center hover:scale-110 transition-transform">
                  <Instagram className="w-6 h-6 text-foreground" />
                </a>
                <a href="#" className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center hover:scale-110 transition-transform">
                  <Linkedin className="w-6 h-6 text-foreground" />
                </a>
                <a href="#" className="w-12 h-12 rounded-xl bg-red-600 flex items-center justify-center hover:scale-110 transition-transform">
                  <Youtube className="w-6 h-6 text-foreground" />
                </a>
                <a href="#" className="w-12 h-12 rounded-xl bg-foreground flex items-center justify-center hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 text-background" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 pt-8 border-t border-border text-center"
        >
          <p className="text-muted-foreground text-sm">
            © 2024 Padhaku / STDHUB.IN - Empowering Education
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
