export function WateringBar({
  waterAmount = "💧💧", // given by backend
  daysLeft = 1, // definedgit in PlantCard
  frequency = 7, // watering frequency from backend
}) {
  const overdue = daysLeft < 0; // true if the plant is overdue for watering
  const maxDays = frequency; // used as the maximum range for the bar

  const absDays = Math.abs(daysLeft); // ensures value is always positive (e.g., turns -3 into 3)
  const percent = Math.min(absDays / maxDays, 1) * 100; // % fill of the bar, max 100%

  // Style logic
  // Background color changes depending on whether plant is overdue or not
  const barBg = overdue
    ? "bg-[var(--color-lightred)]"
    : "bg-[var(--color-lightgreen)]";

  // Fill color for the inner part of the bar
  const fillColor = overdue
    ? "bg-[var(--color-red)]"
    : "bg-[var(--color-highlightgreen)]";

  // Message shown next to the bar, changes depending on status
  const textDisplay =
    daysLeft === 0
      ? "Water me today!"
      : overdue
      ? `${absDays} day${absDays > 1 ? "s" : ""} overdue`
      : `${daysLeft} day${daysLeft > 1 ? "s" : ""} left`;

  return (
    <div className="w-full">
      <div className="flex justify-between mb-1">
        <div className="text-base">{waterAmount}</div>
        <div className="text-h4 text-[var(--color-darkgreen)]">
          {textDisplay}
        </div>
      </div>
      <div
        className={`w-full h-3 radius-rounded ${barBg} relative overflow-hidden`}
      >
        <div
          className={`${fillColor} h-full absolute top-0 ${
            overdue ? "left-0" : "right-0"
          }`}
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
}
