import { ButtonCircle } from "./Button_Circle";
import { WateringBar } from "./WateringBar";

export function PlantCard({
  name = "Madagascar Jewel", // Default plant name if no prop is passed.
  image = "src/assets/7.jpeg", // Default image path for the plant.
  room = "Kitchen", // Default room where the plant is located.
  wateringFrequencyDays = 7, // Default watering interval in days.
  lastWatered = "2025-05-01", // Default date string of the last watering.
  thirstLevel = 2, // Default thirst level represented by number of water drops.
}) {
  const waterAmount = "💧".repeat(thirstLevel); // Creates a string with 💧 repeated based on thirstLevel.

  // Calculate days left until next watering
  const today = new Date(); // Gets the current date.
  const lastWateredDate = new Date(lastWatered); // Converts the last watered string to a Date object.
  const daysSinceWatered = Math.floor(
    (today - lastWateredDate) / (1000 * 60 * 60 * 24)
  ); // Calculates the number of full days since last watering.
  const daysLeft = Math.max(wateringFrequencyDays - daysSinceWatered, 0); // Difference in milliseconds converted to days.

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
        <ButtonCircle />
      </div>
      <WateringBar
        frequency={wateringFrequencyDays}
        daysLeft={daysLeft}
        waterAmount={waterAmount}
      />
    </div>
  );
}
