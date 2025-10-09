import { Link } from "react-router";
import { ProjectCard, Skills } from "../components/components";
// import { motion } from "framer-motion";
export function meta() {
  return [
    { title: "Personal Portfolio" },
    { name: "description", content: "Personal Bio!" },
  ];
}

export default function Home() {
  return (
    <main className="text-gray-200 bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364]">
      {/* === HERO SECTION === */}
      {/* <motion.h1
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-4xl font-bold text-amber-400"
      >
        Welcome to My Page
      </motion.h1> */}
      <section
        className="relative text-center md:text-left py-16 px-6 flex flex-col justify-center items-center md:items-start bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero.png')" }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>

        <div className="relative z-10 max-w-4xl ld:max-w-5xl lg:mx-auto">
          <h1 className="font-extrabold text-5xl md:text-6xl bg-gradient-to-r from-blue-700 via-purple-950 to-pink-600 bg-clip-text text-transparent drop-shadow-2xl">
            I’m Collins Olucho
          </h1>

          <p className="mt-3 text-lg md:text-xl text-gray-200 tracking-wide">
            Full Stack Developer • ICT Educator • Lifelong Learner • Aspiring
            UX/UI Designer
          </p>

          <div className="flex flex-col md:flex-row items-center gap-6 mt-8">
            <div className="md:w-2/3 text-center md:text-left space-y-4 lg:border-r-4 border-amber-600 lg:p-2">
              <p className="text-lg text-gray-100 leading-relaxed">
                I’m an ICT teacher and full-stack developer passionate about
                creating engaging digital experiences and inspiring young minds
                through technology. Based in{" "}
                <span className="text-amber-300 font-semibold">Eldoret</span>, I
                merge teaching with hands-on software development to make
                learning interactive and practical.
              </p>

              <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-2">
                <a
                  href="#projects"
                  className="px-6 py-3 bg-gradient-to-r from-[#1a2a6c] via-[#b21f1f] to-[#fdbb2d] text-white font-semibold rounded-lg hover:opacity-90 transition"
                >
                  View My Work
                </a>

                <Link
                  to="https://github.com/collinsolucho"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#1a2a6c] via-[#b21f1f] to-[#fdbb2d] text-white font-semibold hover:opacity-90 transition"
                >
                  GitHub
                </Link>
              </div>
            </div>

            <img
              src="/images/photo.jpg"
              alt="Collins Olucho"
              className="w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-amber-400 shadow-2xl object-cover saturate-125 hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </section>

      {/* === SKILLS SECTION === */}
      <section className="py-12 px-6 text-center  md:max-w-5xl md:mx-auto">
        <p className="text-xl md:text-2xl font-medium text-amber-300 mb-6">
          I’m a Full Stack Developer skilled in the following tools and
          technologies:
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 md:gap-3">
          <Skills
            title="FrontEnd"
            tools={[
              "HTML",
              "React",
              "Tailwind CSS",
              "JavaScript",
              "Responsive Design",
            ]}
          />
          <Skills
            title="BackEnd"
            tools={[
              "MongoDB",
              "Node.js",
              "REST APIs",
              "JavaScript",
              "Authentication (Bcrypt)",
            ]}
          />
          <Skills
            title="Tools"
            tools={["Git", "Vercel", "GitHub", "VS Code", "Firefox DevTools"]}
          />
          <Skills
            title="Educational Tools: Programming for Kids"
            tools={[
              "Scratch",
              "Game Design Basics",
              "Block-based Logic",
              "Animation & Storytelling",
            ]}
          />
          <Skills title="Automation & Workflow" tools={["Vibe Coding"]} />
        </div>
      </section>

      {/* === PROJECTS SECTION === */}
      <section className="py-10 md:max-w-5xl md:mx-auto" id="projects">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-6 text-amber-400">
          Some of My Works
        </h2>
        <div className="p-4 grid md:grid-cols-2 gap-3 lg:grid-cols-4">
          <ProjectCard
            imgSrc="/images/e-commerce.png"
            title="E-commerce Platform"
            description="Full-featured online store with cart, payments, and authentication."
            href="https://collins-edu-mart.vercel.app/"
          />
          <ProjectCard
            imgSrc="/images/movies.png"
            title="Movies & Shows App"
            description="Modern movie and shows app featuring search, trending titles, and detailed previews — built with React and Tailwind CSS for a fast, responsive experience"
            href="https://movie-shows-lime.vercel.app/"
          />
          <ProjectCard
            imgSrc="/images/to-do.png"
            title="To-do App"
            description="Track, add, and manage your daily tasks with a clean modern interface."
            href="https://to-do-app-iwyw.vercel.app/"
          />
          <ProjectCard
            imgSrc="/images/weather.png"
            title="Weather Tracker"
            description="Weather web app helping users plan their day with real-time forecasts."
            href="https://weather-api-ten-xi.vercel.app/"
          />
          <ProjectCard
            imgSrc="/images/vibecoding.png"
            title="vibe-coding with Ai"
            description="AI-assisted movie app built with Vibe Coding — browse, search, and explore trending films in a clean responsive U."
            href="https://movie-ai-puce.vercel.app/"
          />
          <ProjectCard
            imgSrc="/images/payments.png"
            title="M-PESA Online Payments Integration"
            description="A real-time payment integration built with M-PESA Daraja API — enabling users to send and receive mobile payments securely through a modern web interface."
            href="https://online-payments-pctp.vercel.app/"
          />
        </div>
        <Link
          to="/contact"
          className="px-12 py-5  text-xl  rounded-lg bg-gradient-to-r from-[#1a2a6c] via-[#b21f1f] to-[#fdbb2d] text-white font-semibold hover:opacity-80 transition"
        >
          Reach Us!
        </Link>{" "}
      </section>
    </main>
  );
}
