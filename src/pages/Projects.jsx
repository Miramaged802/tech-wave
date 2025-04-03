import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");

  const allProjects = {
    web: [
      {
        title: "E-Commerce Platform",
        description:
          "A full-featured online shopping platform with real-time inventory management.",
        image:
          "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2089&q=80",
        category: "Web Development",
        technologies: ["React", "Node.js", "PostgreSQL"],
        url: "https://example.com/case-studies/e-commerce-platform",
      },
      {
        title: "Corporate Dashboard",
        description:
          "Modern analytics dashboard with real-time data visualization.",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2015&q=80",
        category: "Web Development",
        technologies: ["Vue.js", "D3.js", "Firebase"],
        url: "https://example.com/case-studies/corporate-dashboard",
      },
    ],
    mobile: [
      {
        title: "Health & Fitness App",
        description:
          "Mobile application for tracking workouts and nutrition with AI-powered recommendations.",
        image:
          "https://images.unsplash.com/photo-1576442705004-8b5be8e8a9f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
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
        title: "Smart City Dashboard",
        description:
          "Real-time monitoring and analytics platform for urban infrastructure management.",
        image:
          "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
        category: "AI & Analytics",
        technologies: ["Python", "TensorFlow", "AWS"],
        url: "https://example.com/case-studies/smart-city-dashboard",
      },
      {
        title: "AI Content Generator",
        description: "Advanced content generation platform using GPT models.",
        image:
          "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        category: "AI & Analytics",
        technologies: ["PyTorch", "FastAPI", "Redis"],
        url: "https://example.com/case-studies/ai-content-generator",
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
