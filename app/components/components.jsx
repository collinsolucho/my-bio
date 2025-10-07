import { Link } from "react-router";

export function Skills({ title, tools }) {
  return (
    <section className="my-6 p-6 rounded-2xl shadow-md bg-gradient-to-br from-slate-800 via-slate-900 to-black text-white max-w-md mx-auto">
      {/* Title */}
      <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent text-center">
        {title}
      </h2>

      {/* Tools list */}
      <ul className="flex flex-wrap justify-center gap-3">
        {tools.map((tools, index) => (
          <li
            key={index}
            className="px-4 py-2 bg-gray-800 rounded-full border border-gray-700 hover:border-cyan-400 transition duration-300 text-sm"
          >
            {tools}
          </li>
        ))}
      </ul>
    </section>
  );
}

export function ProjectCard({ imgSrc, title, description, href }) {
  return (
    <div className="bg-white/5 backdrop-blur-sm p-5 rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-transform duration-300 border border-white/10 my-3">
      <img
        src={imgSrc}
        alt={title}
        className="rounded-xl w-full h-48 object-cover mb-3 border-2 border-gray-50"
      />
      <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
      <p className="text-gray-300 text-sm mb-2">{description}</p>{" "}
      <Link to={href} target="_blank" rel="noopener noreferrer">
        {/*  target tells the browser to Open a link in a new tab or window.*/}
        {/* noopener → Prevents the new tab from gaining access to your original page 
      noreferrer → Prevents the browser from sending “referrer” info  */}
        <button className="text-amber-500 font-semibold hover:bg-amber-400 hover:text-white border-2 border-amber-300 rounded-lg px-4 py-2 mt-3 transition duration-300 ease-in-out">
          View Project →
        </button>
      </Link>
    </div>
  );
}
