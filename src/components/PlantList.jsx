import { useEffect, useState } from "react";
import { PlantCard } from "./PlantCard";

export function PlantList() {
  const [plants, setPlants] = useState([]);

  const fetchPlants = () => {
    fetch("https://plantpal-backend-9iz1.onrender.com/plants", {
      cache: "no-store", // ✅ this disables browser + server-side caching
    })
      .then((res) => res.json())
      .then((data) => setPlants(data))
      .catch((err) => console.error("Failed to fetch plants:", err));
  };

  useEffect(() => {
    fetchPlants();
  }, []);

  return (
    <div
      className="
    grid gap-6 w-full
    grid-cols-[repeat(auto-fit,minmax(260px,1fr))]
    md:grid-cols-[repeat(auto-fit,minmax(320px,1fr))]
    lg:grid-cols-[repeat(auto-fit,minmax(360px,1fr))]
  "
    >
      {plants.map((plant) => (
        <PlantCard
          key={plant.id}
          id={plant.id}
          name={plant.name}
          image={plant.photo}
          room={plant.room}
          wateringFrequencyDays={plant.wateringFrequencyDays}
          thirstLevel={plant.thirstLevel}
          onWatered={fetchPlants}
          lastWatered={plant.lastWatered}
        />
      ))}
    </div>
  );
}
