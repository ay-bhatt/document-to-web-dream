import { motion } from "framer-motion";
import { Shield, FileCheck, ScanLine, CreditCard, GraduationCap } from "lucide-react";

const Security = () => {
  return (
    <section className="py-24 section-gradient">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Left - Checked Files */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="border-4 border-primary rounded-3xl p-8 bg-card/50">
              <h3 className="font-display text-4xl text-foreground mb-2">Checked Files</h3>
              <p className="text-muted-foreground text-sm mb-4">Anti-Malware</p>
              <div className="flex items-center gap-4">
                <Shield className="w-12 h-12 text-primary" />
                <div>
                  <p className="font-bold text-foreground text-xl">Safe & Secure</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <GraduationCap className="w-8 h-8 text-foreground" />
              </div>
              <span className="font-display text-2xl text-foreground">learn</span>
            </div>

            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-cyan-500 flex items-center justify-center">
                <CreditCard className="w-8 h-8 text-foreground" />
              </div>
              <span className="font-display text-2xl text-foreground">pay</span>
            </div>

            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center">
                <ScanLine className="w-8 h-8 text-foreground" />
              </div>
              <span className="font-display text-2xl text-foreground">scan</span>
            </div>
          </motion.div>
        </div>

        {/* Let's Study CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <button className="bg-gradient-to-r from-orange-400 to-pink-500 text-foreground font-bold text-xl px-12 py-5 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105">
            LET'S STUDY 👆
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Security;
