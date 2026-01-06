import { motion } from "framer-motion";

const faqs = [
  {
    icon: "💎",
    question: "1. What is the purpose of this website?",
    answer: "This website is a personal passion project dedicated to empowering educators. My goal is to create a hub of free, high-quality study content and resources to support you in your teaching journey and to make a positive impact on education."
  },
  {
    icon: "🌸",
    question: "2. Who is the content on this site for?",
    answer: "The content is designed for all educators—teachers, tutors, and parents—who are looking for free and accessible materials to use in their classrooms or with their students."
  },
  {
    icon: "✨",
    question: "3. Is all the content on this website really free?",
    answer: "Yes, absolutely. My mission is to share knowledge and resources without any cost. All the study materials, guides, and articles you find here are completely free to use."
  }
];

const FAQ = () => {
  return (
    <section className="py-24 faq-gradient">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-5xl md:text-7xl text-center neon-text-white text-foreground mb-16"
        >
          FAQs
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateY: 180 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="text-4xl mb-6">{faq.icon}</div>
              <h3 className="font-bold text-lg mb-4 text-foreground">{faq.question}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
