import { Form, Link, redirect } from "react-router";
import { FaLinkedin, FaGithubAlt } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";
import { Phone } from "lucide-react";
import { AddMessages } from "../model/database";
import {
  commitSession,
  getSession,
  setSuccessMessage,
} from "../.server/session";

export async function action({ request }) {
  let session = await getSession(request.headers.get("Cookie"));
  let messages = session.get("messages") || [];
  let formData = await request.formData();
  console.log(formData);
  let phone = formData.get("phone");
  let email = formData.get("email");
  let message = formData.get("message");
  console.log(phone, email, message);
  let update = await AddMessages(phone, email, message);
  if (update) {
    setSuccessMessage(session, "Message Sent successfully!");
  } else {
    setErrorMessage(session, "Failed to send message. Please try again.");
  }

  return redirect("/", {
    headers: { "Set-Cookie": await commitSession(session) },
  });
}

export default function Contact() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white py-16 px-6">
      {/* === CONTACT SECTION === */}
      <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 text-white py-12 px-6 md:px-12 rounded-2xl shadow-2xl max-w-5xl mx-auto">
        {/* === Intro Section === */}
        <div className="text-center mb-10">
          <p className="text-xl md:text-2xl font-medium leading-relaxed">
            Need <span className="text-amber-400 font-semibold">Modern</span>,
            <span className="text-amber-400 font-semibold"> Professional </span>
            and <span className="text-amber-400 font-semibold">
              Responsive
            </span>{" "}
            Websites?
            <br />
            <span className="text-gray-300">
              Whether corporate or personal?
            </span>
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold mt-6 text-amber-400">
            Contact Me!
          </h2>
        </div>

        {/* === Contact Info + Form === */}
        <div className="border-2 border-white p-10 flex flex-col rounded-xl md:flex-row gap-10 items-start justify-between">
          {/* === Contact Info === */}

          <div className="flex-1 space-y-4 text-center md:text-left  mt-20">
            <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
            <p className="text-gray-200 mb-6">
              I'm always open to discussing new opportunities, interesting
              projects, or just having a chat about technology.
            </p>
            <p className="text-gray-300 text-base  flex gap-3">
              <AiOutlineMail className="text-amber-400 text-lg" /> Email:
              <Link
                to={"mailto:collinsolucho@gmail.com"}
                className="text-amber-300 underline hover:text-amber-400"
              >
                collinsolucho@gmail.com
              </Link>
            </p>
            <p className="text-gray-300 text-base flex gap-3">
              <Phone className="text-amber-400 text-lg" /> Phone:{" "}
              <Link
                to={"tel:+254743709582"}
                className="text-amber-300 underline hover:text-amber-400"
              >
                0743709582
              </Link>
            </p>
            <p className="text-gray-300 text-base  flex gap-3">
              <FaLinkedin className="text-amber-400 text-lg" />
              <span>LinkedIn:</span>

              <Link
                to={"https://www.linkedin.com/in/collins-olucho-419922325/"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-300 underline hover:text-amber-400"
              >
                linkedin.com/in/collins-olucho-419922325
              </Link>
            </p>
            <p className="text-gray-300 text-base  flex gap-3">
              <FaGithubAlt className="text-amber-400 text-lg" /> GitHub:
              <Link
                to={"https://github.com/collinsolucho"}
                className="text-amber-300 underline hover:text-amber-400"
              >
                https://github.com/collinsolucho
              </Link>
            </p>
          </div>

          {/* === Form === */}
          <Form
            method="post"
            className="flex-1 border-2 bg-slate-900/50 p-6  rounded-lg shadow-lg backdrop-blur-sm space-y-5 w-full"
          >
            <h3 className="text-2xl font-bold mb-4 text-center text-amber-400">
              Let’s Hear From You
            </h3>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-semibold mb-2"
              >
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="+254............"
                className="w-full border-2 border-amber-400 bg-transparent p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold mb-2"
              >
                Your Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="joedoe@gmail.com"
                className="w-full border-2 border-amber-400 bg-transparent p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold mb-2"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="4"
                placeholder="Add your message..."
                className="w-full border-2 border-amber-400 bg-transparent p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-amber-400 text-slate-900 font-semibold py-2 rounded-md hover:bg-amber-300 transition duration-300 ease-in-out"
            >
              Submit
            </button>
          </Form>
        </div>
      </section>
    </main>
  );
}
