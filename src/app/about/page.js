"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaDownload, FaTimes } from "react-icons/fa";
import Image from "next/image";
import ClientA from "../../assets/images/client1.jpg";
import ClientB from "../../assets/images/client2.jpg";
import ClientC from "../../assets/images/client4.jpg";
import ProfileImage from "../../assets/images/profile.jpg";

const testimonials = [
  {
    image: ClientA,
    name: "Timileyin",
    text: "Damola is an incredible developer! Delivered the project ahead of schedule and exceeded expectations.",
  },
  {
    image: ClientB,
    name: "Bimbo",
    text: "Exceptional attention to detail. Highly recommend Damola to anyone in need of a reliable developer.",
  },
  {
    image: ClientC,
    name: "David",
    text: "The best experience I've had with a developer. Responsive and brought great ideas to the table.",
  },
];

export default function About() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col mt-12 lg:mt-0 pt-14 lg:pt-40 lg:flex-row items-start justify-between px-2 lg:px-6 py-6 relative">
      <div className="text-center lg:text-left w-full lg:w-2/3 mb-10 lg:mb-0">
        <motion.h1
          className="text-2xl lg:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.7 } }}
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          About Me
        </motion.h1>

        <motion.p
          className="text-base lg:text-lg text-secondary-text mb-4 lg:text-justify"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.7 } }}
        >
          I’m Adebitan Damola, a Frontend Developer passionate about creating
          clean and efficient solutions. My journey started from curiosity, and
          now I help businesses build scalable apps. I enjoy working on creative
          projects and solving real-world problems.
        </motion.p>

        <motion.p
          className="text-base lg:text-lg text-secondary-text mb-4 lg:text-justify"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.7, delay: 0.5 } }}
        >
          In my free time, I enjoy playing football, listening to music, and
          learning new languages. I find myself to be an ambitious, hardworking
          and resolute individual. And I am a 100% team player who works
          diligently toward achieving the best result on each project I am
          assigned.
        </motion.p>

        <motion.div
          className="flex justify-center lg:justify-start gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.7, delay: 0.7 } }}
        >
          <a
            href="/Resume.pdf"
            download
            className="flex items-center px-6 py-2 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 transition duration-300"
          >
            <FaDownload className="mr-2" /> Resume
          </a>

          <button
            onClick={openModal}
            className="flex items-center px-6 py-2 bg-gray-200 text-gray-900 text-secondary-text font-semibold rounded-full shadow-md hover:bg-gray-300 transition duration-300"
          >
            Testimonials
          </button>
        </motion.div>
      </div>

      <div className="hidden lg:block w-full lg:w-1/3 lg:pl-8">
        <Image
          src={ProfileImage}
          alt="Profile Picture"
          width={250}
          height={250}
          className="rounded-lg shadow-lg"
        />
      </div>

      {isModalOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="bg-white rounded-lg p-6 max-w-xs md:max-w-md w-full relative">
            <button
              className="absolute top-4 right-4 text-secondary-text hover:text-gray-900"
              onClick={closeModal}
            >
              <FaTimes className="text-gray-900" />
            </button>

            <div
              className="flex flex-col items-center"
              key={currentTestimonial}
            >
              <Image
                src={testimonials[currentTestimonial].image}
                alt={testimonials[currentTestimonial].name}
                width={80}
                height={80}
                className="rounded-full mb-4 h-20"
              />
              <p className="italic text-gray-800 mb-4 text-center">
                {testimonials[currentTestimonial].text}
              </p>
              <h3 className="font-semibold text-gray-900">
                {testimonials[currentTestimonial].name}
              </h3>

              <div className="flex justify-center space-x-2 mt-4">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full ${
                      currentTestimonial === index
                        ? "bg-blue-600"
                        : "bg-gray-300"
                    }`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
