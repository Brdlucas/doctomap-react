function Home() {
  return (
    <section id="projects" className="mb-20 animate-fade-in-up p-3">
      <h2 className="text-3xl font-bold mb-8 text-primary-light dark:text-primary-dark">
        Acceuil
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className=" bg-white p-6 rounded-lg shadow-md hover:shadow-lg duration-300 transform hover:scale-[101%] transition-transform">
          <h3 className="text-xl font-semibold mb-2">
            Responsive Blog Platform
          </h3>
          <p className="mb-4">
            A fully responsive blog platform built with Next.js and Tailwind
            CSS.
          </p>
          <a
            href="#"
            className="text-primary-light dark:text-primary-dark hover:underline transition-colors duration-300"
          >
            View Project →
          </a>
        </div>
        <div className=" bg-white p-6 rounded-lg shadow-md hover:shadow-lg duration-300 transform hover:scale-[101%] transition-transform">
          <h3 className="text-xl font-semibold mb-2">Task Management App</h3>
          <p className="mb-4">
            A React-based task management application with drag-and-drop
            functionality.
          </p>
          <a
            href="#"
            className="text-primary-light dark:text-primary-dark hover:underline transition-colors duration-300"
          >
            View Project →
          </a>
        </div>
        <div className=" bg-white p-6 rounded-lg shadow-md hover:shadow-lg duration-300 transform hover:scale-[101%] transition-transform">
          <h3 className="text-xl font-semibold mb-2">E-commerce Website</h3>
          <p className="mb-4">
            A full-stack e-commerce platform built with Node.js, Express, and
            MongoDB.
          </p>
          <a
            href="#"
            className="text-primary-light dark:text-primary-dark hover:underline transition-colors duration-300"
          >
            View Project →
          </a>
        </div>
        <div className="bg-white bg-white p-6 rounded-lg shadow-md hover:shadow-lg duration-300 transform hover:scale-[101%] transition-transform">
          <h3 className="text-xl font-semibold mb-2">Weather Dashboard</h3>
          <p className="mb-4">
            A weather dashboard using OpenWeatherMap API and Chart.js for data
            visualization.
          </p>
          <a
            href="#"
            className="text-primary-light dark:text-primary-dark hover:underline transition-colors duration-300"
          >
            View Project →
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
