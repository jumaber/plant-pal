import { Link } from "react-router-dom";

export function ButtonBack({ to, text="← Previous" }) {
  return (
    <Link
      to={to}
      className="flex flex-row justify-start items-center text-base font-bold text-[var(--color-grey)] w-full py-4"
    >
      {text}
    </Link>
  );
}
