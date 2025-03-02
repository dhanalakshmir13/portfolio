import { motion } from "framer-motion";
import achievementImage from "../assets/acheivement.jpg"; // Add your achievement image path
import certificateImage from "../assets/certificate.jpg"; // Add your certificate image path

export default function Achievement() {
  return (
    <section id="achievement" className="py-20 px-5 bg-black text-white min-h-screen">
      
      {/* Achievements Section */}
      <div className="flex flex-col md:flex-row items-start max-w-5xl mx-auto">
        
        {/* Left Side - Achievements */}
        <div className="w-full md:w-2/3">
          <h1 className="text-custom text-5xl font-urbanist font-bold mb-8 animate-fadeIn">
            Achievements
          </h1>
          <ul className="list-disc text-lg text-left px-8 space-y-4 animate-slideIn">
            <li>🏆 <b>Creatathon</b> – Secured <span className="text-custom">2nd place</span> among 65 students.</li>
            <li>🚀 <b>Smart India Hackathon (SIH)</b> – Qualified for the <span className="text-custom">2nd round</span> among 200 teams.</li>
            <li>🎯 <b>Selfie Hackathon</b> – Qualified among 100 teams.</li>
            <li>💻 <b>SkillRack</b> – Solved <span className="text-custom">500+ coding problems</span>.</li>
            <li>🎓 <b>Mentoring</b> – Served as a <span className="text-custom">student mentor</span>.</li>
          </ul>
        </div>

        {/* Right Side - Animated Image */}
        <motion.div 
          className="w-full md:w-1/3 mt-10 md:mt-0"
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          whileHover={{ scale: 1.05, rotate: 5 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img src={achievementImage} alt="Achievements" className="w-full max-w-[250px] rounded-full shadow-lg transition-transform duration-300" />
        </motion.div>
      </div>

      {/* Certificates Section */}
      <div className="flex flex-col md:flex-row items-start max-w-5xl mx-auto mt-16">
        
        {/* Left Side - Animated Image */}
        <motion.div 
          className="w-full md:w-1/3 mt-10 md:mt-0"
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          whileHover={{ scale: 1.05, rotate: -5 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img src={certificateImage} alt="Certificates" className="w-full max-w-[250px] rounded-full shadow-lg transition-transform duration-300" />
        </motion.div>

        {/* Right Side - Certificates */}
        <div className="w-full md:w-2/3 mt-10 md:mt-0">
          <h1 className="text-custom text-5xl font-urbanist font-bold mb-8 animate-fadeIn">
            Certificates
          </h1>
          <ul className="list-disc text-lg text-left px-8 space-y-4 animate-slideIn">
            <li>📜 <b>Object-Oriented Programming in C++</b> – <span className="text-custom">Udemy</span></li>
            <li>📚 <b>Data Structures & Algorithms</b> – <span className="text-custom">Udemy</span></li>
            <li>🔍 <b>SQL Basics</b> – <span className="text-custom">HackerRank</span></li>
            <li>🏆 <b>Difficult 500 Problems</b> – <span className="text-custom">CodeChef</span></li>
            <li>🌐 <b>Introduction to HTML</b> – <span className="text-custom">SoloLearn</span></li>
            <li>🐍 <b>Python Programming</b> – <span className="text-custom">CodeChef</span></li>
          </ul>
        </div>
      </div>

    </section>
  );
}
