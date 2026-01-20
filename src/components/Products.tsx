import { motion } from "framer-motion";
import designsCard from "@/assets/designs-card.png";
import creationCard from "@/assets/creation-card.png";
import bundlesCard from "@/assets/bundles-card.png";

const products = [
  {
    title: "DESIGNS",
    image: designsCard,
    gradient: "from-blue-500 via-purple-500 to-pink-500"
  },
  {
    title: "CREATION",
    image: creationCard,
    gradient: "from-cyan-400 via-blue-500 to-purple-600"
  },
  {
    title: "BUNDLES",
    image: bundlesCard,
    gradient: "from-orange-400 via-pink-500 to-purple-500"
  }
];

const Products = () => {
  return (
    <section id="products" className="py-24 section-gradient">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-5xl md:text-7xl text-center neon-text-white text-foreground mb-16"
        >
          OUR PRODUCTS
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="card-glow group cursor-pointer"
            >
              <div className="relative h-80 overflow-hidden rounded-3xl">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${product.gradient} opacity-30`} />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background/90 to-transparent">
                  <h3 className="font-display text-3xl text-foreground mb-4">{product.title}</h3>
                  <button className="btn-gradient text-sm py-2 px-6 text-foreground">
                    FIND OUT MORE
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
