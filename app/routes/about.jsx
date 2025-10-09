// src/pages/About.jsx
import { Link } from "react-router";
import { AiOutlineMail } from "react-icons/ai";
import { Phone } from "lucide-react";
import { FaGithubAlt, FaLinkedin } from "react-icons/fa";

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white py-16 px-6">
      {/* === PROFILE SECTION === */}
      <section className="max-w-5xl mx-auto rounded-b-2xl grid md:grid-cols-2 gap-10 items-center bg-slate-900 md:pr-4 pb-7">
        <img
          src="/images/photo.jpg"
          alt="Collins Olucho"
          className="w-50 h-50  mx-auto rounded-full border-4 border-amber-400  object-cover hover:scale-105 transition-transform duration-300 mt-4"
        />

        <div className="text-center md:text-left space-y-4">
          <h2 className="text-3xl font-bold text-amber-300 mt-4">About Me</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Educator • Full Stack Developer • UI/UX Enthusiast
          </p>
          <p className="text-gray-400">
            Passionate about coding and building meaningful digital solutions
            that empower learning and creativity.
          </p>

          {/* === QUICK LINKS === */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4 text-sm">
            <Link
              to={"mailto:collinsolucho@gmail.com"}
              className="flex items-center gap-2 bg-amber-400 text-slate-900 px-4 py-2 rounded-full font-semibold hover:bg-amber-300 transition"
            >
              <AiOutlineMail /> Email
            </Link>

            <Link
              to={"tel:+254743709582"}
              className="flex items-center gap-2 bg-slate-800 border border-slate-600 px-4 py-2 rounded-full text-gray-200 hover:text-amber-400 transition"
            >
              <Phone size={16} /> Call
            </Link>

            <Link
              to={"https://www.linkedin.com/in/collins-olucho-419922325/"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-slate-800 border border-slate-600 px-4 py-2 rounded-full text-gray-200 hover:text-amber-400 transition"
            >
              <FaLinkedin size={16} /> LinkedIn
            </Link>

            <Link
              to={"https://github.com/collinsolucho"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-slate-800 border border-slate-600 px-4 py-2 rounded-full text-gray-200 hover:text-amber-400 transition"
            >
              <FaGithubAlt size={16} /> GitHub
            </Link>
          </div>
        </div>
      </section>

      {/* === ABOUT SUMMARY === */}
      <section className="max-w-4xl mx-auto mt-20 text-center space-y-6">
        <p className="text-gray-300 text-lg leading-relaxed">
          I’m a passionate developer and ICT educator with a strong interest in
          full-stack development, networking, and user experience design. My
          goal is to craft modern, responsive web applications that solve
          real-world challenges and enhance digital learning experiences.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          I enjoy working with new technologies, exploring backend systems, and
          designing clean, user-focused interfaces that blend functionality with
          simplicity.
        </p>
      </section>

      {/* === SKILLS SECTION === */}
      <section className="max-w-5xl mx-auto mt-20 bg-slate-900/50 border border-slate-700 rounded-2xl p-10 shadow-lg">
        <h2 className="text-3xl font-bold text-center text-amber-400 mb-10">
          Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Frontend */}
          <div>
            <h3 className="text-xl font-semibold text-amber-300 mb-3">
              Frontend Development
            </h3>
            <ul className="text-gray-300 space-y-2 text-base">
              <li>• React & React Router</li>
              <li>• JavaScript</li>
              <li>• Tailwind CSS</li>
              <li>• Responsive Design</li>
            </ul>
          </div>

          {/* Backend */}
          <div>
            <h3 className="text-xl font-semibold text-amber-300 mb-3">
              Backend Development
            </h3>
            <ul className="text-gray-300 space-y-2 text-base">
              <li>• Node.js</li>
              <li>• MongoDB</li>
              <li>• RESTful APIs</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-amber-300 mb-3">
              Educational Tools: Programming for Kids
            </h3>
            <ul className="text-gray-300 space-y-2 text-base">
              <li>• Scratch</li>
              <li>• Game Design Basics</li>
              <li>• Block-based Logic</li>
              <li>• Animation & Storytelling</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
