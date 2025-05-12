import { useEffect, useState } from "react";
import { PlantList } from "../components/PlantList";
import { NavBar } from "../components/Navbar";
import { FilterBar } from "../components/FilterBar";

export function HomePage() {
  const [plants, setPlants] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("all");

  const fetchPlants = () => {
    fetch("https://plantpal-backend-9iz1.onrender.com/plants", {
      cache: "no-store",
    })
      .then((res) => res.json())
      .then((data) => setPlants(data))
      .catch((err) => console.error("Failed to fetch plants:", err));
  };

  useEffect(() => {
    fetchPlants();
  }, []);

  // Calcular contagens por room
  const plantCounts = plants.reduce(
    (acc, plant) => {
      const room = plant.room || "Unknown";
      acc[room] = (acc[room] || 0) + 1;

      if (
        plant.thirstLevel === "high" || 
        plant.thirstLevel === "medium" // opcional, depende da tua lógica
      ) {
        acc["thirsty"] = (acc["thirsty"] || 0) + 1;
      }

      acc["all"] = (acc["all"] || 0) + 1;

      return acc;
    },
    { all: 0, thirsty: 0 }
  );

  // Filtrar as plantas para mostrar
  const filteredPlants = plants.filter((plant) => {
    if (selectedFilter === "all") return true;
    if (selectedFilter === "thirsty") {
      return (
        plant.thirstLevel === "high" || 
        plant.thirstLevel === "medium" // depende da tua definição de sede
      );
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
