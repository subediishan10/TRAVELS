import { useState } from "react";
import toursData from "../data";
import TourCard from "../components/TourCard";

function Tours() {
  const [search, setSearch] = useState("");

  const filteredTours = toursData.filter((tour) =>
    tour.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-center mb-6">Available Tours</h2>

      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search tours..."
          className="border px-4 py-2 rounded-lg w-72 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredTours.map((tour) => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </div>
    </div>
  );
}

export default Tours;
