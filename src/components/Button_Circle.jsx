import { useState } from "react";

// Reusable circular button component
export function ButtonCircle({
  text = "💦", 
  bgColor = "bg-[var(--color-background)]", 
  onClick, 
}) {
  const [clicked, setClicked] = useState(false); // Track if the button has been clicked
  const [hovered, setHovered] = useState(false); // Track if the button is being hovered

  const handleClick = () => {
    setClicked((prev) => !prev); // Toggle clicked state
    if (onClick) onClick(); // Call external onClick logic if provided
  };

  return (
    <div className="relative flex justify-center items-center">
      {/* Circular button */}
      <button
        onClick={handleClick}
        onMouseEnter={() => setHovered(true)} // Set hover to true on mouse enter
        onMouseLeave={() => setHovered(false)} // Set hover to false on mouse leave
        className={`flex min-w-14 min-h-14 justify-center items-center radius-circular text-center text-h3 font-bold py-[10px] ${
          clicked ? "bg-[var(--color-lightgreen)]" : bgColor // Change background if clicked
        }`}
      >
        {clicked ? "✅" : text} {/* Show checkmark if clicked, else original text */}
      </button>

      {/* Tooltip text appears on hover, shows "Water Plant" or "Watered!" */}
      {hovered && (
        <span className="absolute left-[-80px] top-[45%] text-[10px] px-2 py-0.5 rounded bg-[rgba(255,255,255,0.6)] text-[var(--color-darkgreen)] whitespace-nowrap pointer-events-none shadow-sm">
          {clicked ? "Watered!" : "Water Plant"}
        </span>
      )}
    </div>
  );
}
