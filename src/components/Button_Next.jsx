import { Link } from "react-router-dom";

export function ButtonNext({ to, text = "Next →" }) {
  return (
    <Link
      to={to}
      className="flex flex-row justify-end items-center text-base font-bold text-[var(--color-grey)] w-full py-4"
    >
      {text}
    </Link>
  );
}
