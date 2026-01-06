import { motion } from "framer-motion";
import cosmicOrb from "@/assets/cosmic-orb.png";

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-5xl md:text-7xl neon-text-white text-foreground mb-6">
              ABOUT US
            </h2>
            
            <p className="text-muted-foreground mb-4">
              <span className="text-foreground font-semibold">Empowering Educators, Together</span>
            </p>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Welcome to my personal space for sharing knowledge and resources. As an educator, I understand the constant search for high-quality, free content to inspire our students. My goal is simple: to build a collaborative hub where we can all access and share study-related materials that make a real difference in the classroom.
            </p>
            
            <p className="text-muted-foreground leading-relaxed mb-8">
              This website is a passion project born from the belief that education is a collective effort. By providing free access to the knowledge and tools I've created, I hope to lighten your workload and ignite a love for learning in students everywhere. Join me on this journey to design a better world, one lesson at a time.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-gradient text-foreground"
              >
                SEE OUR PRODUCTS
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-outline-glow"
              >
                GET IN TOUCH
              </motion.button>
            </div>
          </motion.div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="rounded-3xl overflow-hidden max-w-md">
              <img 
                src={cosmicOrb} 
                alt="Cosmic hands holding crystal ball"
                className="w-full h-auto animate-float"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
