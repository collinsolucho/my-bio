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
    <main className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white py-12 px-4 sm:px-6">
      <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 text-white py-10 px-5 sm:px-8 rounded-2xl shadow-2xl max-w-4xl mx-auto">
        {/* === Intro Section === */}
        <div className="text-center mb-10">
          <p className="text-lg sm:text-xl font-medium leading-relaxed">
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

          <h2 className="text-2xl sm:text-3xl font-extrabold mt-6 text-amber-400">
            Contact Me!
          </h2>
        </div>

        {/* === Contact Info + Form === */}
        <div className="border border-white/30 p-6 sm:p-8 rounded-xl flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* === Contact Info === */}
          <div className="flex-1 space-y-4 md:text-left w-full">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3">
              Get In Touch
            </h2>
            <p className="text-gray-300 mb-5 leading-relaxed">
              I'm always open to discussing new opportunities, interesting
              projects, or just having a chat about technology.
            </p>

            <div className="space-y-3 text-sm sm:text-base">
              <p className="flex flex-wrap items-center gap-2">
                <AiOutlineMail className="text-amber-400 text-lg" />
                <span>Email:</span>
                <Link
                  to="mailto:collinsolucho@gmail.com"
                  className="text-amber-300 underline hover:text-amber-400"
                >
                  collinsolucho@gmail.com
                </Link>
              </p>

              <p className="flex flex-wrap items-center gap-2">
                <Phone className="text-amber-400 text-lg" />
                <span>Phone:</span>
                <Link
                  to="tel:+254743709582"
                  className="text-amber-300 underline hover:text-amber-400"
                >
                  0743709582
                </Link>
              </p>

              <p className="flex flex-wrap items-center gap-2">
                <FaLinkedin className="text-amber-400 text-lg" />
                <span>LinkedIn:</span>
                <Link
                  to="https://www.linkedin.com/in/collins-olucho-419922325/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-300 underline hover:text-amber-400"
                >
                  linkedin.com/in/collins-olucho-419922325
                </Link>
              </p>

              <p className="flex flex-wrap items-center gap-2">
                <FaGithubAlt className="text-amber-400 text-lg" />
                <span>GitHub:</span>
                <Link
                  to="https://github.com/collinsolucho"
                  className="text-amber-300 underline hover:text-amber-400"
                >
                  github.com/collinsolucho
                </Link>
              </p>
            </div>
          </div>

          {/* === Form === */}
          <Form
            method="post"
            className="flex-1 bg-slate-900/50 p-5 sm:p-6 rounded-lg shadow-lg backdrop-blur-sm space-y-5"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-center text-amber-400">
              Let’s Hear From You
            </h3>

            <div className="space-y-4">
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
                  className="w-full border border-amber-400 bg-transparent p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
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
                  className="w-full border border-amber-400 bg-transparent p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
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
                  className="w-full border border-amber-400 bg-transparent p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              className=" bg-amber-400 text-slate-900 font-semibold py-2 rounded-md hover:bg-amber-300 transition duration-300 ease-in-out px-2"
            >
              Submit
            </button>
          </Form>
        </div>
      </section>
    </main>
  );
}
