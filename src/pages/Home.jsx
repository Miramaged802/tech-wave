import { motion } from 'framer-motion';
import { ArrowRight, Code, Cpu, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Transforming Ideas into
          <span className="text-purple-600"> Digital Reality</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          We are a leading software engineering company specializing in creating
          innovative solutions that drive business growth and success.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors duration-200"
        >
          Get Started
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </motion.div>

      {/* Services Preview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          <Code className="h-12 w-12 text-purple-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Web Development</h3>
          <p className="text-gray-600 mb-4">
            Custom web applications built with cutting-edge technologies.
          </p>
          <Link
            to="/services"
            className="text-purple-600 hover:text-purple-700 font-medium inline-flex items-center"
          >
            Learn More
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          <Smartphone className="h-12 w-12 text-purple-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Mobile Apps</h3>
          <p className="text-gray-600 mb-4">
            Native and cross-platform mobile applications for iOS and Android.
          </p>
          <Link
            to="/services"
            className="text-purple-600 hover:text-purple-700 font-medium inline-flex items-center"
          >
            Learn More
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          <Cpu className="h-12 w-12 text-purple-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">AI Integration</h3>
          <p className="text-gray-600 mb-4">
            Machine learning and AI solutions for business growth.
          </p>
          <Link
            to="/services"
            className="text-purple-600 hover:text-purple-700 font-medium inline-flex items-center"
          >
            Learn More
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </motion.div>
      </div>

      {/* Featured Project */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="bg-white rounded-lg shadow-lg overflow-hidden mb-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-4">Featured Project</h2>
            <p className="text-gray-600 mb-6">
              Discover how we helped our client achieve a 200% increase in user
              engagement through our innovative software solution.
            </p>
            <Link
              to="/projects"
              className="inline-flex items-center px-4 py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors duration-200"
            >
              View Case Study
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
          <div className="bg-purple-100 p-8 flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2015&q=80"
              alt="Featured Project"
              className="rounded-lg shadow-md max-w-full h-auto"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Home;
