import { useState } from "react";

export function ButtonCircle({
  text = "💦",
  bgColor = "bg-[var(--color-background)]",
  onClick, // accept onClick prop
}) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked((prev) => !prev);
    if (onClick) onClick(); // trigger watering logic
  };

  return (
    <button
      onClick={handleClick}
      className={`flex min-w-14 min-h-14 justify-center items-center radius-circular text-center text-h3 font-bold py-[10px] ${
        clicked ? "bg-[var(--color-lightgreen)]" : bgColor
      }`}
    >
      {clicked ? "✅" : text}
    </button>
  );
}
