"use client";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaBehance,
} from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import Illustration from "../assets/images/User.gif";
import Image from "next/image";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center mt-24 lg:mt-0 px-6 lg:px-0">
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-4xl mx-auto">
        <div className="lg:w-2/3 text-center lg:text-left">
          <motion.p
            className="font-bold mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1, transition: { duration: 0.7 } }}
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Hi, My Name is
          </motion.p>

          <motion.h1
            className="text-5xl font-bold mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1, transition: { duration: 0.7 } }}
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Adebitan Damola
          </motion.h1>

          <motion.p
            className="text-4xl mb-6 text-gray-500 font-bold"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            I am a{" "}
            <span>
              <Typewriter
                words={[
                  "Frontend Developer",
                  "Technical Writer",
                  "Wordpress Developer",
                ]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </motion.p>

          <motion.div
            className="flex justify-center lg:justify-start gap-6 mb-10"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            <a
              href="https://github.com/Adedamola99"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-4xl hover:text-blue-500 transition-colors duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/adebitan-damola-0703a718b"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-4xl hover:text-blue-500 transition-colors duration-300" />
            </a>
            <a
              href="https://twitter.com/itz_damia"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-4xl hover:text-blue-500 transition-colors duration-300" />
            </a>
            <a
              href="https://www.behance.net/adebitandamola"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaBehance className="text-4xl hover:text-blue-500 transition-colors duration-300" />
            </a>
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 transition duration-300"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            onClick={() =>
              window.open(
                "https://wa.me/08123917221?text=Hi,%20I%20would%20like%20to%20hire%20you",
                "_blank"
              )
            }
          >
            Hire Me
          </motion.button>
        </div>

        <div className="hidden lg:flex justify-center lg:justify-end">
          <div
            style={{
              width: "100%",
              height: "0",
              paddingBottom: "116%",
              position: "relative",
            }}
          >
            <Image
              src={Illustration}
              alt="User Illustration"
              width={600}
              height={600}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
