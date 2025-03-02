import { FaCode, FaLaptopCode, FaDatabase, FaTools } from "react-icons/fa";
import { motion } from "framer-motion"; // Importing Framer Motion
import skillImage from "../assets/skill.jpg"; // Replace with your skill image path

export default function About() {
  return (
    <section id="about" className="flex flex-col md:flex-row px-6 py-12 text-white min-h-screen">
      
      <div className="w-full md:w-1/2">
        {/* About Heading */}
        <h1 className="text-custom text-4xl font-urbanist font-bold">About Me</h1>
        <p className="py-6 text-lg text-gray-300">
          I'm a passionate and optimistic second-year Artificial Intelligence and Data Science (AIDS) student 
          at <span className="text-custom font-semibold">Sri Eshwar College of Engineering</span>, with a GPA of <span className="text-custom font-semibold">8.6</span>. 
          I am deeply enthusiastic about technology, problem-solving, and the transformative potential of data science.
        </p>
        
        <p className="text-lg text-gray-300">
          My aspiration is to become a skilled Data Scientist, leveraging AI and data analytics to create 
          impactful solutions for real-world challenges. Driven by curiosity, continuous learning, and innovation, 
          I am dedicated to exploring emerging technologies and building applications that make a difference.
        </p>

        {/* Skills Section */}
        <h2 className="text-custom text-3xl font-urbanist font-bold mt-8">Skills</h2>

        <ul className="mt-4 space-y-3">
          <li className="flex items-center">
            <FaCode className="text-custom mr-3" />
            <span className="text-gray-300">
              <strong className="text-white">Programming Languages:</strong> C | C++ | Python | Java
            </span>
          </li>
          <li className="flex items-center">
            <FaLaptopCode className="text-custom mr-3" />
            <span className="text-gray-300">
              <strong className="text-white">Web Technologies:</strong> HTML | CSS | JavaScript | React.js | Tailwind CSS
            </span>
          </li>
          <li className="flex items-center">
            <FaDatabase className="text-custom mr-3" />
            <span className="text-gray-300">
              <strong className="text-white">Core Concepts:</strong> Data Structures & Algorithms (Intermediate) | OOPS (Intermediate) | DBMS
            </span>
          </li>
          <li className="flex items-center">
            <FaTools className="text-custom mr-3" />
            <span className="text-gray-300">
              <strong className="text-white">Tools:</strong> VS Code | Jupyter | Anaconda | Canva | GitHub | Figma
            </span>
          </li>
        </ul>
      </div>

      {/* Right Side - Animated Image */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0"
        whileHover={{ scale: 1.1 }} // Simple hover scale effect
        transition={{ duration: 0.3 }} // Duration for smooth hover transition
      >
        <img
          src={skillImage}
          alt="Skills"
          className="w-[100px] h-[100px] object-cover rounded-full shadow-lg" // Ensuring it's round
        />
      </motion.div>

    </section>
  );
}
