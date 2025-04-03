import {  Github, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-white shadow-lg mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center space-x-2">
              <img
                src="img\Artboard 24@3x.png"
                alt="Tech Wave"
                className="h-8 w-16"
              />
              <span className="text-xl font-bold text-purple-900">
                Tech Wave
              </span>
            </div>
            <p className="mt-4 text-gray-600">
              Transforming ideas into exceptional software solutions.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Services
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  to="/services"
                  className="text-gray-600 hover:text-purple-900"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-600 hover:text-purple-900"
                >
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-600 hover:text-purple-900"
                >
                  Cloud Solutions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Company
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-gray-600 hover:text-purple-900"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-gray-600 hover:text-purple-900"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 hover:text-purple-900"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Connect
            </h3>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-purple-900">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-purple-900">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-purple-900">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-8 text-center">
          <p className="text-gray-600">
            © {new Date().getFullYear()} Tech Wave. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
