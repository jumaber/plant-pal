export function WateringBar({
  waterAmount = "💧💧",
  daysLeft = 1,
  frequency = 7, // watering frequency from backend
}) {
  const overdue = daysLeft < 0;
  const maxDays = frequency;

  const absDays = Math.abs(daysLeft);
  const percent = Math.min(absDays / maxDays, 1) * 100;

  // Style logic
  const barBg = overdue
    ? "bg-[var(--color-lightred)]"
    : "bg-[var(--color-lightgreen)]";

  const fillColor = overdue
    ? "bg-[var(--color-red)]"
    : "bg-[var(--color-highlightgreen)]";

  const textDisplay =
    daysLeft === 1
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
