# Welcome to React Router!

A modern, production-ready template for building full-stack React applications using React Router.

## Features

- 🚀 Server-side rendering
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization
- 🔄 Data loading and mutations
- 🎉 TailwindCSS for styling
- 📖 [React Router docs](https://reactrouter.com/)

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

## Project Structure

This application is a personal portfolio built with React Router, showcasing various projects and skills. The project is organized as follows:

- `app/`: Main application code
  - `root.jsx`: Root component that wraps the entire application
  - `routes.js`: Central route definitions
  - `routes/`: Individual page components
    - `home.jsx`: Home page showcasing featured projects
    - `about.jsx`: About page with personal information
    - `contact.jsx`: Contact page for getting in touch
  - `components/`: Reusable UI components
    - `components.jsx`: Shared component definitions
  - `model/`: Data handling layer
    - `database.js`: Database interaction utilities
  - `welcome/`: Welcome section components and assets
    - `welcome.jsx`: Welcome component
    - `logo-dark.svg` & `logo-light.svg`: Logo variants for different themes
- `public/`: Static assets
  - `images/`: Portfolio project images including e-commerce, hero banner, logo, movies app, payments, personal photo, to-do list, and weather app screenshots
- Configuration files: `package.json` (dependencies), `vite.config.js` (build tool), `react-router.config.js` (routing config), `Dockerfile` (containerization), and more

---

Built with ❤️ using React Router.
