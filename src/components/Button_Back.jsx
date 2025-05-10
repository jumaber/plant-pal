import { Link } from "react-router-dom";

export function ButtonBack() {
  return (
    <Link
      to="/"
      className="flex flex-row justify-start items-center text-lg font-bold text-[var(--color-darkgreen)] w-full py-4"
    >
      ← Back
    </Link>
  );
}
