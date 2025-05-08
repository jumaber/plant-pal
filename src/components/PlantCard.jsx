import { ButtonCircle } from "./Button_Circle";
import { WateringBar } from "./WateringBar";
import { useState } from "react";

export function PlantCard({
  id, // Unique identifier for the plant, used for backend updates.
  name = "Madagascar Jewel", // Default plant name if no prop is passed.
  image = "src/assets/7.jpeg", // Default image path for the plant.
  room = "Kitchen", // Default room where the plant is located.
  wateringFrequencyDays = 7, // Default watering interval in days.
  lastWatered = "2025-05-01", // Default date string of the last watering.
  onWatered,
  thirstLevel = 2, // Default thirst level represented by number of water drops.
}) {
  const waterAmount = "💧".repeat(thirstLevel); // Creates a string with 💧 repeated based on thirstLevel.

  // Calculate days left until next watering
  const today = new Date(); // Gets the current date.
  const lastWateredDate = new Date(lastWatered); // Uses the most up-to-date prop directly from backend.
  const daysSinceWatered = Math.floor(
    (today - lastWateredDate) / (1000 * 60 * 60 * 24)
  ); // Calculates the number of full days since last watering.
  const daysLeft = Math.max(wateringFrequencyDays - daysSinceWatered, 0); // Remaining days until next watering.

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
      {image ? (
        <img
          className="w-full aspect-square object-cover rounded-[0.25rem]"
          src={image}
          alt={name}
        />
      ) : (
        <div className="w-full aspect-square bg-stone-100 flex items-center justify-center rounded-[0.25rem] text-xl font-bold"></div>
      )}
      <div className="flex flex-row justify-between py-4">
        <div>
          <div className="text-h2">{name}</div>
          <div className="text-sub text-[#006045]">{room}</div>
        </div>
        <ButtonCircle
          onClick={handleWaterPlant}
          isWatered={daysLeft === wateringFrequencyDays}
        />{" "}
        {/* Water button - shows ✅ when fully watered */}
      </div>
      <WateringBar
        frequency={wateringFrequencyDays}
        daysLeft={daysLeft}
        waterAmount={waterAmount}
      />{" "}
      {/* Visual representation of watering status */}
    </div>
  );
}
