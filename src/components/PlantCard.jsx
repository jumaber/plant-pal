import { Link } from "react-router-dom";
import { ButtonCircle } from "./Button_Circle";
import { WateringBar } from "./WateringBar";
import { useState } from "react";

export function PlantCard({
  id,
  name = "Madagascar Jewel",
  image = "src/assets/7.jpeg",
  room = "Kitchen",
  wateringFrequencyDays = 7,
  lastWatered = "2025-05-01",
  thirstLevel = 2,
  onWatered,
}) {
  const waterAmount = "💧".repeat(thirstLevel); // Creates a string with 💧 repeated based on thirstLevel.

  // Calculate days left until next watering
  const today = new Date(); // Gets the current date.
  const lastWateredDate = new Date(lastWatered); // Uses the most up-to-date prop directly from backend.
  const daysSinceWatered = Math.floor(
    (today - lastWateredDate) / (1000 * 60 * 60 * 24)
  ); // Calculates the number of full days since last watering.
  const daysLeft = wateringFrequencyDays - daysSinceWatered; // Remaining days until next watering.

  const [previousLastWatered, setPreviousLastWatered] = useState(null); // Temporarily stores last value for undo

  // Called when the water button is clicked
  const handleWaterPlant = async () => {
    const today = new Date();

    // If already watered and undo is available → revert to previous date
    if (daysLeft === wateringFrequencyDays && previousLastWatered) {
      try {
        await fetch(`https://plantpal-backend-9iz1.onrender.com/plants/${id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ lastWatered: previousLastWatered }),
        });
        if (onWatered) onWatered();
        setPreviousLastWatered(null); // Clear undo
      } catch (error) {
        console.error("Failed to revert watering:", error);
      }
      return;
    }

    // Otherwise → mark as watered
    setPreviousLastWatered(lastWatered); // Save current value temporarily
    try {
      await fetch(`https://plantpal-backend-9iz1.onrender.com/plants/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lastWatered: today.toISOString() }),
      });
      if (onWatered) onWatered();
    } catch (error) {
      console.error("Failed to update watering:", error);
    }
  };

  return (
    <div className="flex flex-col bg-white radius-square p-4 max-w-lg">
      <Link to={`/plant/${id}`}>
        {image ? (
          <img
            className="w-full aspect-square object-cover rounded-[0.25rem]"
            src={image}
            alt={name}
          />
        ) : (
          <div className="w-full aspect-square bg-stone-100 flex items-center justify-center rounded-[0.25rem] text-xl font-bold"></div>
        )}
      </Link>

      <div className="flex flex-row justify-between py-4">
        <div>
          <div className="text-h2">{name}</div>
          <div className="text-sub text-[#006045]">{room}</div>
        </div>

        <ButtonCircle onClick={handleWaterPlant} />
        
      </div>
      <WateringBar
        frequency={wateringFrequencyDays}
        daysLeft={daysLeft}
        waterAmount={waterAmount}
      />
    </div>
  );
}
