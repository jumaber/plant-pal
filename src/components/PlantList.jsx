import { useEffect, useState } from "react";
import { PlantCard } from "./PlantCard";

export function PlantList() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch("https://plantpal-backend-9iz1.onrender.com/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data))
      .catch((err) => console.error("Failed to fetch plants:", err));
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
      {" "}
      {plants.map((plant) => (
        <PlantCard
          key={plant._id || plant.id} // depending on your DB
          name={plant.name}
          image={plant.image}
          room={plant.room}
          frequency={plant.wateringFrequency}
          daysLeft={plant.daysLeft}
          thirstLevel={plant.thirstLevel}
        />
      ))}
    </div>
  );
}
