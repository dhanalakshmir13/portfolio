export default function Projects() {
    return (
      <section
        id="project"
        className="flex flex-col py-20 px-5 justify-center bg-black text-white min-h-screen mb-32"
      >
        
  
        {/* Projects Section */}
        <div>
        <div className="">
          <h1 className="text-custom text-5xl font-urbanist font-bold mb-8 animate-fadeIn">
            Projects
          </h1>
          <ul className="list-disc text-lg text-left px-8 space-y-4 animate-slideIn">
            <li>📝 <b>Recipe Manager (SQL & Java)</b> – Developed a CRUD-based recipe management system.</li>
            <li>🖩 <b>Calculator App (MERN)</b> – Built a calculator application using the <span className="text-custom">MERN</span> stack.</li>
            <li>📊 <b>YouTube Performance Analysis (Data Science)</b> – Analyzed  <span className="text-custom">YouTube metrics</span> using data science techniques.</li>
            <li>🎨 <b>Eshwarite Hub Prototype (Figma - SECE)</b> – Designed a prototype for <span className="text-custom">SECE</span> using Figma.</li>
            <li>♟️ <b>Checkmate (Figma & Prototyping)</b> – Created an interactive <span className="text-custom">UI/UX</span> prototype.</li>
          </ul>
        </div>
        <br/>
        <br>
        </br>
        </div>
  
        {/* Internship Section */}
        <div className="">
          <h1 className="text-custom text-5xl font-urbanist font-bold mb-8 animate-fadeIn">
            Internships
          </h1>
          <ul className="list-disc text-lg text-left px-8 space-y-4 animate-slideIn">
            <li>💻 <b>MERN Stack Internship</b> – <span className="text-custom">Naga Nandhini</span>| January 2025  
              <p className="text-gray-300 pl-6">
                Gaining hands-on experience in MERN stack development by building a full-stack <span className="text-custom">catering application</span>, focusing on both frontend and backend functionalities.
              </p>
            </li>
            <li>🎨 <b>UI/UX Design</b> – <span className="text-custom">Rajparis</span> | February 2025  
              <p className="text-gray-300 pl-6">
                Enhancing UI/UX skills by designing intuitive user interfaces in <span className="text-custom">Figma</span>, creating wireframes, and developing interactive prototypes.
              </p>
            </li>
            <li>🌍 <b>Frontend & Landing Page Development</b> – <span className="text-custom">Astra</span>  | February 2025  
              <p className="text-gray-300 pl-6">
                Designing a modern, responsive landing page using Astra and Figma, ensuring a seamless user experience with best <span className="text-custom">UI/UX </span>practices.
              </p>
            </li>
          </ul>
        </div>
      </section>
      
    );
  }
  