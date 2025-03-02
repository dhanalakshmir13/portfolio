import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="flex flex-col items-center px-6 py-5 bg-black text-white ">
      
      {/* Heading */}
      
      
      <div className="text-center">
        <h1 className="text-custom text-5xl font-bold">Contact</h1>
        <p className="py-5 text-lg text-gray-300">
          Feel free to reach out for collaborations, inquiries, or discussions.
        </p>
      </div>

      {/* Contact Details */}
      <div className="mt-8 text-lg text-gray-300 space-y-5">
        <p className="flex items-center">
          <FaEnvelope className="text-custom mr-3" />
          <span className="font-bold text-custom">Email:</span>
          <a href="mailto:dhanalakshmiravikumar28@gmail.com" className="text-white hover:underline ml-2">
            dhanalakshmiravikumar28@gmail.com
          </a>
        </p>

        <p className="flex items-center">
          <FaPhone className="text-custom mr-3" />
          <span className="font-bold text-custom">Phone:</span>
          <a href="tel:+918015435055" className="text-white hover:underline ml-2">
            +91 80154 35055
          </a>
        </p>

        <p className="flex items-center">
          <FaLinkedin className="text-custom mr-3" />
          <span className="font-bold text-custom">LinkedIn:</span>
          <a href="https://www.linkedin.com/in/dhanalakshmi-r-196297289/" target="_blank" 
            rel="noopener noreferrer" className="text-white hover:underline ml-2">
            Dhanalakshmi R
          </a>
        </p>

        <p className="flex items-center">
          <FaGithub className="text-custom mr-3" />
          <span className="font-bold text-custom">GitHub:</span>
          <a href="https://github.com/DhanalakshmiRavikumar" target="_blank" 
            rel="noopener noreferrer" className="text-white hover:underline ml-2">
            DhanalakshmiRavikumar
          </a>
        </p>
      </div>
    </section>
  );
}
