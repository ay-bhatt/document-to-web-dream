import { motion } from "framer-motion";

const FuturePlans = () => {
  return (
    <section className="py-24 section-gradient">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-5xl md:text-7xl text-center neon-text-white text-foreground mb-16"
        >
          FUTURE PLANS
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Make Money Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-3xl overflow-hidden shadow-xl"
          >
            <div className="bg-foreground p-8">
              <p className="text-muted text-sm uppercase tracking-wider mb-2">Make Money</p>
              <h3 className="font-display text-3xl md:text-4xl text-background leading-tight">
                HOW TO ACTUALLY MAKE MONEY WITH AI
              </h3>
              <p className="text-muted mt-4 text-sm">
                The people making real money with AI aren't geniuses. They're just people who took action. What's stopping you from being one of them?
              </p>
              <button className="mt-6 bg-secondary text-secondary-foreground px-6 py-3 rounded font-semibold text-sm hover:opacity-90 transition-opacity">
                READ NOW
              </button>
            </div>
          </motion.div>

          {/* Prompt Engineering Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-3xl overflow-hidden shadow-xl flex items-center justify-center p-8"
          >
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                <span className="text-4xl">🎓</span>
              </div>
              <h3 className="font-display text-3xl gradient-text">Prompt Engineering</h3>
              <p className="text-muted-foreground mt-2">free courses</p>
            </div>
          </motion.div>
        </div>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex flex-wrap gap-6 justify-center"
        >
          <button className="btn-gradient text-lg py-4 px-10 text-foreground">
            MAKE YOUR POCKET MONEY
          </button>
          <button className="btn-gradient text-lg py-4 px-10 text-foreground">
            BRIGHT YOUR FUTURE
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FuturePlans;
