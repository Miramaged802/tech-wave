import { motion } from 'framer-motion';
import { Users, Target, Award } from 'lucide-react';

function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About Tech Wave</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          We're a team of passionate developers, designers, and innovators dedicated to creating exceptional software solutions.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center"
        >
          <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Our Team</h3>
          <p className="text-gray-600">
            Expert professionals with diverse skills and experience in modern technologies.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <Target className="h-12 w-12 text-purple-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
          <p className="text-gray-600">
            To deliver innovative solutions that empower businesses to achieve their digital goals.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <Award className="h-12 w-12 text-purple-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Our Values</h3>
          <p className="text-gray-600">
            Excellence, innovation, and client satisfaction drive everything we do.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="bg-white rounded-lg shadow-lg overflow-hidden"
      >
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2020, Tech Wave has grown from a small team of developers into a full-service software engineering company. We've successfully delivered hundreds of projects and continue to grow while maintaining our commitment to quality and innovation.
            </p>
            <p className="text-gray-600">
              Our expertise spans across web development, mobile applications, cloud solutions, and emerging technologies. We're proud to have helped businesses of all sizes transform their digital presence and achieve their goals.
            </p>
          </div>
          <div className="bg-purple-100 p-8 flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt="Team Meeting"
              className="rounded-lg shadow-md max-w-full h-auto"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default About;
