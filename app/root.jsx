import {
  data,
  isRouteErrorResponse,
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "react-router";
import { Toaster, toast } from "react-hot-toast";
import { Menu, X } from "lucide-react";
import "./app.css";
import { useEffect, useState } from "react";
import { commitSession, getSession } from "./.server/session";

export const links = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export async function loader({ request }) {
  let session = await getSession(request.headers.get("Cookie"));
  let messages = session.get("messages") || [];
  let toastMessage = session.get("toastMessage");

  return data(
    { messages, toastMessage },
    {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    }
  );
}

export function Layout({ children }) {
  let { messages, toastMessage } = useLoaderData();
  let [isClicked, setIsClicked] = useState(false);
  useEffect(() => {
    if (!toastMessage) {
      return;
    }
    const { message, type } = toastMessage;

    switch (type) {
      case "success":
        toast.success(message);
        break;
      case "error":
        toast.error(message);
        break;
      default:
        throw new Error(`${type} is not handled`);
    }
  }, [toastMessage]);
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <header className="bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] text-white shadow-md fixed top-0 left-0 right-0 z-50">
          <main className="flex justify-between items-center px-4 md:px-10 py-3">
            {/* === LOGO === */}
            <div className="flex items-center space-x-2">
              <img
                src="/images/logo.png"
                alt="Logo"
                className="h-10 w-10 rounded-md object-cover"
              />
              <h1 className="text-lg font-bold tracking-wide text-amber-400">
                Collins Dev
              </h1>
            </div>

            {/* === DESKTOP NAV === */}
            <nav className=" mr-50">
              <ul className="hidden md:flex items-center space-x-4 lg:space-x-8 text-sm font-medium">
                <li>
                  <Link
                    to="/"
                    className="hover:text-amber-400 transition-colors duration-300"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="hover:text-amber-400 transition-colors duration-300"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-amber-400 transition-colors duration-300"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-amber-400 transition-colors duration-300"
                  >
                    Message Us!
                  </Link>
                </li>
              </ul>
            </nav>

            {/* === MOBILE MENU BUTTON === */}
            <button
              onClick={() => setIsClicked(!isClicked)}
              className="md:hidden text-amber-400 focus:outline-none"
            >
              {isClicked ? <X size={28} /> : <Menu size={28} />}
            </button>
          </main>

          {/* === MOBILE NAV === */}
          {isClicked && (
            <nav className="md:hidden bg-[#1b2a33] border-t border-gray-700 animate-slide-down">
              <ul className="flex flex-col space-y-4 px-6 py-4 text-sm font-medium text-gray-200">
                <li>
                  <Link
                    to="/"
                    onClick={() => setIsClicked(false)}
                    className="block hover:text-amber-400 transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    onClick={() => setIsClicked(false)}
                    className="block hover:text-amber-400 transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    onClick={() => setIsClicked(false)}
                    className="block hover:text-amber-400 transition-colors"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    onClick={() => setIsClicked(false)}
                    className="block hover:text-amber-400 transition-colors"
                  >
                    Message Us!
                  </Link>
                </li>
              </ul>
            </nav>
          )}
        </header>
        {children}
        <Toaster />
        <ScrollRestoration />
        <Scripts />
        {/* === FOOTER === */}
        <div className="border-t border-gray-400 py-4  text-center text-sm text-gray-300 bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364]">
          © {new Date().getFullYear()} @collinsolucho - All rights reserved.
        </div>
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
