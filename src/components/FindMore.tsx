import { motion } from "framer-motion";

const books = [
  {
    title: "Back 2 School",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=400&fit=crop",
    tag: "Education"
  },
  {
    title: "Career Planning",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=400&fit=crop",
    tag: "Career"
  },
  {
    title: "Study Tips",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=400&fit=crop",
    tag: "Learning"
  }
];

const FindMore = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Title */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-5xl md:text-7xl neon-text-white text-foreground mb-6 lg:writing-vertical-rl lg:rotate-180">
              FIND MORE
            </h2>
          </motion.div>

          {/* Right - Books Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="font-display text-3xl text-primary">PDF Book's</h3>
                <p className="text-muted-foreground text-sm mt-2">
                  Books to change your mood and elevate your mindset. Made for students.
                </p>
              </div>
            </div>

            <div className="grid gap-6">
              {books.map((book, index) => (
                <motion.div
                  key={book.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-card hover:bg-muted transition-colors cursor-pointer group"
                >
                  <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                    <img 
                      src={book.image} 
                      alt={book.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div>
                    <span className="text-xs text-primary uppercase tracking-wider">{book.tag}</span>
                    <h4 className="font-semibold text-foreground">{book.title}</h4>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Subscribe CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 p-6 rounded-2xl bg-destructive/20 border border-destructive/30"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-destructive rounded-lg flex items-center justify-center text-destructive-foreground font-bold">
                  SUB
                </div>
                <p className="text-foreground text-sm">
                  Stay updated on the latest tech. <span className="font-bold">Subscribe Now.</span>
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FindMore;
