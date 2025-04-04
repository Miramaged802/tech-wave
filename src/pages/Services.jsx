import { motion } from 'framer-motion';
import { Code, Smartphone, Cloud, Database, Lock, Cpu } from 'lucide-react';

function Services() {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom web applications built with modern frameworks and best practices.',
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile apps for iOS and Android.',
    },
    {
      icon: Cpu,
      title: 'AI Integration',
      description: 'Machine learning and AI solutions for business growth.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          We offer a comprehensive range of software development services to help your business thrive in the digital age.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200"
          >
            <service.icon className="h-12 w-12 text-purple-900 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Services;
