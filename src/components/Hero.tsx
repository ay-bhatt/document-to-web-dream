import { motion } from "framer-motion";
import birdsStudying from "@/assets/birds-studying.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden pink-border-top">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />
      
      <div className="container relative z-10 mx-auto px-6 pt-8 pb-20">
        {/* Welcome text */}
        <motion.p 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-lg md:text-xl font-semibold text-primary mb-6"
        >
          WELCOME TO STDHUB
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <motion.h1 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-display text-6xl md:text-8xl lg:text-9xl leading-none neon-text-white text-foreground"
            >
              WAY TO
              <br />
              SUCCESS
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-8 text-lg md:text-xl text-primary font-bold uppercase tracking-wider"
            >
              With our work & experience
            </motion.p>
          </div>

          {/* Right image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative"
          >
            <img 
              src={birdsStudying} 
              alt="Cute birds studying with books" 
              className="w-full max-w-lg mx-auto animate-float"
            />
          </motion.div>
        </div>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 flex flex-wrap gap-6 justify-center lg:justify-start"
        >
          <a href="#products" className="btn-gradient flex items-center gap-3">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
              <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span className="text-foreground">{"-->FREE SOFTWARES"}</span>
          </a>
          
          <a href="#vision" className="btn-gradient flex items-center gap-3">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
              <path d="M12 6v12M6 12h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span className="text-foreground">{"-->FREE COURSES"}</span>
          </a>
          
          <a href="#contact" className="btn-gradient flex items-center gap-3">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" stroke="currentColor" strokeWidth="2"/>
            </svg>
            <span className="text-foreground">{"-->CONNECT HERE"}</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
