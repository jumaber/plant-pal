import { useEffect, useState } from "react";
import { PlantList } from "../components/PlantList";
import { NavBar } from "../components/Navbar";
import { FilterBar } from "../components/FilterBar";

export function HomePage() {
  const [plants, setPlants] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("all");

  // Fetch all plants from the backend
  const fetchPlants = () => {
    fetch("https://plantpal-backend-9iz1.onrender.com/plants", {
      cache: "no-store",
    })
      .then((res) => res.json())
      .then((data) => setPlants(data))
      .catch((err) => console.error("Failed to fetch plants:", err));
  };

  useEffect(() => {
    fetchPlants(); // Load plants when component mounts
  }, []);

  // Count plants per room and plants that need water (daysLeft === 0)
  const plantCounts = plants.reduce(
    (acc, plant) => {
      const room = plant.room || "Unknown";
      acc[room] = (acc[room] || 0) + 1;

      const today = new Date();
      const lastWateredDate = new Date(plant.lastWatered);
      const daysSinceWatered = Math.floor(
        (today - lastWateredDate) / (1000 * 60 * 60 * 24)
      );
      const daysLeft = Math.max(plant.wateringFrequencyDays - daysSinceWatered, 0);

      // Count plants that need water today
      if (daysLeft === 0) {
        acc["thirsty"] = (acc["thirsty"] || 0) + 1;
      }

      // Count all plants
      acc["all"] = (acc["all"] || 0) + 1;

      return acc;
    },
    { all: 0, thirsty: 0 }
  );

  // Filter plants based on selected filter (room or thirsty)
  const filteredPlants = plants.filter((plant) => {
    if (selectedFilter === "all") return true;

    if (selectedFilter === "thirsty") {
      const today = new Date();
      const lastWateredDate = new Date(plant.lastWatered);
      const daysSinceWatered = Math.floor(
        (today - lastWateredDate) / (1000 * 60 * 60 * 24)
      );
      const daysLeft = Math.max(plant.wateringFrequencyDays - daysSinceWatered, 0);
      return daysLeft === 0;
    }

    return plant.room === selectedFilter;
  });

  return (
    <div className="flex flex-col gap-8 bg-[var(--color-background)] px-4 py-24 lg:py–30 md:px-8 lg:px-20">
      <NavBar />
      <div className="text-h1">My Plants</div>
      <FilterBar
        selectedFilter={selectedFilter}
        onFilterChange={setSelectedFilter}
        plantCounts={plantCounts}
      />
      <PlantList plants={filteredPlants} fetchPlants={fetchPlants} />
    </div>
  );
}
