import myImage from '../assets/Dhana.jpg';
import { motion } from "framer-motion";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
    return (
        <section id="hero" className="flex flex-col md:flex-row items-center px-5 justify-center min-h-screen bg-black text-white">
            {/* Left Section - Text */}
            <div className="md:w-1/2 flex flex-col text-center md:text-left">
                <h1 className="py-10 md:py-20 font-urbanist font-bold text-5xl">
                    Hi, <br />
                    I am <span className="text-custom">Dhanalakshmi R</span> <br />
                    <i className="text-2xl text-gray-300">I'm a Data Scientist</i>
                </h1>

                {/* Social Media Icons */}
                <div className="flex justify-center md:justify-start space-x-5 mt-5">
                    <a href="https://www.instagram.com/glowpurelyyy._/profilecard/?igsh=dWk3azQyanU0aXdu" className="hover:text-custom transition-transform transform hover:scale-110">
                        <BsInstagram size={40} />
                    </a>
                    <a href="https://www.facebook.com/" className="hover:text-custom transition-transform transform hover:scale-110">
                        <FaFacebook size={40} />
                    </a>
                    <a href="https://github.com/DhanalakshmiRavikumar" className="hover:text-custom transition-transform transform hover:scale-110">
                        <FaGithub size={40} />
                    </a>
                    <a href="https://www.linkedin.com/in/dhanalakshmi-r-196297289/" className="hover:text-custom transition-transform transform hover:scale-110">
                        <FaLinkedin size={40} />
                    </a>
                </div>
            </div>
            <motion.div 
    className="md:w-1/2 flex justify-center mt-10 md:mt-0"
    initial={{ opacity: 0, scale: 0.5, x: -50 }} // Start off-screen with a pop effect
    animate={{ opacity: 1, scale: 1, x: 0 }}  // Slide in and scale up
    transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
>
    <motion.img 
        className="w-1/2 max-w-[350px] md:max-w-[350px] lg:max-w-[350px] 
                    rounded-full object-cover border-4 border-custom shadow-lg 
                    transition-transform transform hover:scale-105" 
        src={myImage} 
        alt="Dhanalakshmi R"
        whileHover={{ scale: 1.1, rotate: 2 }} // Small bounce effect on hover
    />
</motion.div>



        </section>
    );
}
