import { Link } from "react-router-dom";

function TourCard({ tour }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
      <img
        src={tour.image}
        alt={tour.title}
        className="h-48 w-full object-cover"
      />

      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{tour.title}</h3>
        <p className="text-gray-600 mb-4">${tour.price}</p>

        <Link to={`/tours/${tour.id}`}>
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
}

export default TourCard;
