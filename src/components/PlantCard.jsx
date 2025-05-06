import { ButtonCircle } from "./Button_Circle";
import { WateringBar } from "./WateringBar";

export function PlantCard({
  name = "Madagascar Jewel",
  image = "src/assets/7.jpeg",
  room = "Kitchen",
  wateringFrequencyDays = 7,
  lastWatered = "2025-05-01",
  thirstLevel = 2,
}) {
  const waterAmount = "💧".repeat(thirstLevel);

  // Calculate days left until next watering
  const today = new Date();
  const lastWateredDate = new Date(lastWatered);
  const daysSinceWatered = Math.floor(
    (today - lastWateredDate) / (1000 * 60 * 60 * 24)
  );
  const daysLeft = Math.max(wateringFrequencyDays - daysSinceWatered, 0);

  return (
    <div className="flex flex-col bg-white radius-square p-4 max-w-lg">
      <img
        className="w-full aspect-square object-cover rounded-[0.25rem]"
        src={image}
        alt={name}
      />
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
