function Home() {
  return (
    <div className="h-[80vh] flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center px-6">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Explore The World With Us
      </h1>
      <p className="text-lg mb-6">
        Book your dream vacation today!
      </p>
      <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
        Get Started
      </button>
    </div>
  );
}

export default Home;
