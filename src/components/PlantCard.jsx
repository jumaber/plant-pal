import { ButtonCircle } from "./Button_Circle";
import { WateringBar } from "./WateringBar";

export function PlantCard({
  name = "Madagascar Jewel",
  image = "src/assets/7.jpeg",
  room = "Kitchen",
  frequency = 7,
  daysLeft = 2,
  thirstLevel = 2, 
}) {
  const waterAmount = "💧".repeat(thirstLevel);

  return (
    <div className="flex flex-col bg-white radius-square p-4 max-w-lg">
      <img
        className="w-full aspect-square object-cover rounded-[0.25rem]"
        src={image}
        alt={name}
      />
      <div className="flex flex-row justify-between py-4">
        <div>
          <div className="text-h1">{name}</div>
          <div className="text-sub">{room}</div>
        </div>
        <ButtonCircle />
      </div>
      <WateringBar
        frequency={frequency}
        daysLeft={daysLeft}
        waterAmount={waterAmount}
      />
    </div>
  );
}
