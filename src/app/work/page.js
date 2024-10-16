'use client'
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import projects from "@/data/project";
import Link from "next/link";

const categories = ["All", "Web Development", "Articles"];

const Work = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="px-2 py-4 lg:px-8 lg:py-10 mt-14 lg:mt-0">
      <h2 className="text-3xl font-bold mb-6">My Projects</h2>
      
      <div className="mb-6 flex flex-wrap gap-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`sm:text-sm px-4 py-2 rounded-full transition duration-300 ${
              selectedCategory === category
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
                <Link href={project.link}>
                    <Slideshow image={project.image} />
                </Link>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                <p className="text-gray-600">{project.category}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export const Slideshow = ({ image }) => (
  <AnimatePresence>
    <motion.img
      key={image.src}
      src={image.src}
      className="w-full h-48 object-cover"
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 200 }}
    />
  </AnimatePresence>
);

export default Work
