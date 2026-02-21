import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <h2 className="text-xl font-bold">Travel Agency</h2>

      <div className="space-x-6">
        <Link className="hover:text-gray-200" to="/">Home</Link>
        <Link className="hover:text-gray-200" to="/tours">Tours</Link>
        <Link className="hover:text-gray-200" to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
