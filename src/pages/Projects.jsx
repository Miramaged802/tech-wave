import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");

  const allProjects = {
    web: [
      {
        title: "Recipes website",
        description: "A website for sharing and discovering recipes.",
        image: "img/ricepi.png",
        category: "Web Development",
        technologies: ["React", "Java Script", "HTML", "CSS"],
        url: "https://recipes-prodact.netlify.app/",
      },
      {
        title: "Product-System website",
        description: "A website for  products and orders.",
        image: "img/Vite-React-04-04-2025_02_27_AM.png",
        category: "Web Development",
        technologies: ["Vue.js", "D3.js", "Firebase"],
        url: "https://mira-products.netlify.app/",
      },
      {
        title: "Car rental website",
        description: "An e-commerce website for selling and Renting cars.",
        image: "img/CarRent-Premium.png",
        category: "Web Development",
        technologies: ["React", "Node.js", "MongoDB"],
        url: "https://miramaged802.github.io/car-retail/",
      },
    ],
    mobile: [
      {
        title: "Health & Fitness App",
        description:
          "Mobile application for tracking workouts and nutrition with AI-powered recommendations.",
        image: "img/fit.jpg",
        category: "Mobile Development",
        technologies: ["React Native", "TensorFlow", "Firebase"],
        url: "https://example.com/case-studies/health-fitness-app",
      },
      {
        title: "Social Media App",
        description:
          "Next-generation social platform with AR filters and real-time messaging.",
        image:
          "https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        category: "Mobile Development",
        technologies: ["Flutter", "Firebase", "ARKit"],
        url: "https://example.com/case-studies/social-media-app",
      },
    ],
    ai: [
      {
        title: "Predictive Maintenance Project ",
        description: "Predictive maintenance model for industrial equipment.",
        image:
          "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
        category: "AI & Analytics",
        technologies: ["Python", "TensorFlow", "AWS"],
        url: "https://github.com/Yousefamr777/predictive-maintenance-api",
      },
      {
        title: "Stock Market Prediction Model – Alpha",
        description: "Predictive model for stock market analysis and trading.",
        image:
          "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        category: "AI & Analytics",
        technologies: ["PyTorch", "FastAPI", "Redis"],
        url: "https://github.com/Yousefamr777/Stock-Market-Prediction-Model-",
      },
      {
        title: "web-scraping-car",
        description: "Web scraping project to extract car data from a website.",
        image:
          "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
        category: "AI & Analytics",
        technologies: ["Python", "NLTK", "TensorFlow"],
        url: "https://github.com/Yousefamr777/web-scraping-car",
      },
    ],
  };

  const getDisplayedProjects = () => {
    if (activeCategory === "all") {
      return [...allProjects.web, ...allProjects.mobile, ...allProjects.ai];
    }
    return allProjects[activeCategory];
  };

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Development" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "ai", label: "AI & Analytics" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Projects</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Explore our portfolio of successful projects that showcase our
          expertise in delivering innovative solutions.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-center space-x-4 mb-12"
      >
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
              activeCategory === category.id
                ? "bg-purple-600 text-white shadow-lg"
                : "bg-white text-gray-600 hover:bg-purple-50"
            }`}
          >
            {category.label}
          </button>
        ))}
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {getDisplayedProjects().map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden h-full transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <div className="text-sm font-medium text-purple-600 mb-1">
                {project.category}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-200">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-purple-600 font-medium hover:text-purple-700 transition-colors duration-200"
              >
                View Case Study
                <ArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
