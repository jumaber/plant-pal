import { Link } from "react-router-dom";

export function Button({
  to,
  text = "Add your first Plant",
  bgColor = "bg-[var(--color-highlightgreen)]",
  textColor = "text-darkgreen",
  width = "max-w-fit",
  paddingx = "px-4",
  type = "button",
  onClick,
  disabled = false,
}) {
  const classes = `flex ${width} justify-center radius-rounded text-center text-h3 font-bold py-[10px] ${paddingx} ${bgColor} ${textColor}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {text}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${classes} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

// Use Button like this:
// <Button text="Add Plant" bgColor="bg-[var(--color-darkgreen)]" textColor="text-highlightgreen" width="max-w-fit" paddingx="px-4" />
