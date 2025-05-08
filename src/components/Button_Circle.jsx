export function ButtonCircle({
  text = "💦",
  bgColor = "bg-[var(--color-background)]",
  onClick,
  isWatered = false, // ✅ new prop from parent
}) {
  return (
    <button
      onClick={onClick}
      className={`flex w-14 h-14 justify-center items-center radius-circular text-center text-h3 font-bold py-[10px] ${
        isWatered ? "bg-[var(--color-lightgreen)]" : bgColor
      }`}
    >
      {isWatered ? "✅" : text}
    </button>
  );
}
