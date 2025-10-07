import { index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.jsx"),
  route("contact", "routes/contact.jsx"),
  route("about", "routes/about.jsx"),
];
