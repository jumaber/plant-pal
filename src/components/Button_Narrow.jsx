import { Link } from "react-router-dom";

export function ButtonNarrow({
  to = "/",
  text = "Mark as watered 💦",
  width = "max-w-fit",
}) {
  return (
    <Link
      to={to}
      className={`flex ${width} max-w-fit justify-center radius-rounded text-center text-white text-base font-body bg-[var(--color-darkgreen)] text-lg font-bold m-4 py-2 px-6`}
    >
      {text}
    </Link>
  );
}
