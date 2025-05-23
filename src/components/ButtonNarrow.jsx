import { Link } from "react-router-dom";
export function ButtonNarrow({
  to,
  text = "Add your first Plant",
  bgColor = "bg-[var(--color-highlightgreen)]",
  textColor = "text-darkgreen",
  width = "max-w-fit",
  paddingx = "px-6",
  type = "button",
  onClick,
}) {
  const classes = `flex ${width} justify-center radius-rounded text-center ${textColor} text-h4 font-body ${bgColor} text-lg py-2 ${paddingx}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {text}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {text}
    </button>
  );
}
// Use Button like this: 
// <Button text="Add Plant" bgColor="bg-[var(--color-darkgreen)]" textColor="text-highlightgreen" width="max-w-fit" paddingx="px-4" />
