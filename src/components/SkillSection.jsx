import { motion } from "framer-motion";
import Image from "next/image";

const SkillSection = ({ title, skills }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="my-6">
      <h2 className="text-lg lg:text-2xl font-bold mb-4">{title}</h2>
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center p-4 border rounded-lg shadow-lg bg-white"
            variants={itemVariants}
          >
            <Image
              src={skill.icon.src || skill.icon}
              alt={skill.name}
              height={48}
              width={48}
              className="mb-2"
            />
            <p className="text-sm lg:text-lg font-semibold text-gray-900">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SkillSection;
