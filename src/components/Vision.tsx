import { motion } from "framer-motion";
import laptopColorful from "@/assets/laptop-colorful.png";

const Vision = () => {
  return (
    <section id="vision" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-5xl md:text-7xl neon-text-white text-foreground mb-8">
              OUR VISION
            </h2>
            
            <div className="relative rounded-3xl overflow-hidden">
              <img 
                src={laptopColorful} 
                alt="Laptop with colorful screen"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 via-transparent to-pink-500/20" />
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-primary font-bold text-lg uppercase mb-3">What You Learn :</h3>
              <p className="text-muted-foreground leading-relaxed">
                Welcome to a community dedicated to learning and growth. Here, I share valuable knowledge and study content to help you, and the next generation, thrive. Let's work together to build a brighter future through education.
              </p>
            </div>

            <div>
              <h3 className="text-primary font-bold text-lg uppercase mb-3">Benefits :-</h3>
              <p className="text-muted-foreground leading-relaxed">
                Get free access to a growing library of study materials, guides, and insights created by an educator, for educators. No subscriptions, no fees—just a passion for sharing knowledge to make a tangible difference in the lives of our students.
              </p>
            </div>

            <div>
              <h3 className="text-primary font-bold text-lg uppercase mb-3">My Goal :</h3>
              <p className="text-muted-foreground leading-relaxed">
                My goal is to empower educators with high-quality, free resources. I believe that by sharing our knowledge, we can create a more collaborative and inspiring educational landscape for everyone.
              </p>
            </div>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-gradient mt-4 text-foreground"
            >
              {"-->THANK YOU <--"}
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
