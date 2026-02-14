import { useParams } from "react-router-dom";
import tours from "../data";

function TourDetails() {
  const { id } = useParams();
  const tour = tours.find((t) => t.id === parseInt(id));

  if (!tour) {
    return <h2 className="text-center mt-10 text-xl">Tour Not Found</h2>;
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <img
        src={tour.image}
        alt={tour.title}
        className="w-full h-96 object-cover rounded-xl mb-6"
      />

      <h2 className="text-3xl font-bold mb-4">{tour.title}</h2>
      <p className="text-gray-700 mb-4">{tour.description}</p>
      <h3 className="text-2xl font-semibold mb-6">${tour.price}</h3>

      <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
        Book Now
      </button>
    </div>
  );
}

export default TourDetails;
