import { useState } from "react";

export function ButtonCircle({
  text = "💦",
  bgColor = "bg-[var(--color-lightgreen)]",
}) {
  const [clicked, setClicked] = useState(false);

  return (
    <button
      onClick={() => setClicked((prev) => !prev)}
      className={`flex w-14 h-14 justify-center items-center radius-circular text-center text-h3 font-bold py-[10px] ${
        clicked ? "bg-[var(--color-background)]" : bgColor
      }`}
    >
      {clicked ? "✅" : text}
    </button>
  );
}
