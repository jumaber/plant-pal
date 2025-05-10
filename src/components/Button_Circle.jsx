import { useState } from "react";

export function ButtonCircle({
  text = "💦",
  bgColor = "bg-[var(--color-background)]",
}) {
  const [clicked, setClicked] = useState(false);

  return (
    <button
      onClick={() => setClicked((prev) => !prev)}
      className={`flex min-w-14 min-h-14 justify-center items-center radius-circular text-center text-h3 font-bold py-[10px] ${
        clicked ? "bg-[var(--color-lightgreen)]" : bgColor
      }`}
    >
      {clicked ? "✅" : text}
    </button>
  );
}
