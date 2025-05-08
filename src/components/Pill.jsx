export function Pill({ label, selected, onClick, variant = "select" }) {
  const baseStyles = "radius-square px-4 py-1 border-1 cursor-pointer transition h-[32px]";
  const selectedStyles =
    variant === "select"
      ? "bg-[var(--color-darkgreen)] border-[var(--color-darkgreen)] text-white text-tag-selected"
      : "bg-white text-[var(--color-darkgreen)] text-tag-selected";

  const unselectedStyles =
    variant === "select"
      ? "bg-white border-[var(--color-darkgreen)] text-[var(--color-darkgreen)]] text-tag"
      : "bg-[var(--color-darkgreen)] border-[var(--color-darkgreen)] text-white text-tag-selected"
;

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${baseStyles} ${
        selected ? selectedStyles : unselectedStyles
      }`}
    >
      {label}
    </button>
  );
}
