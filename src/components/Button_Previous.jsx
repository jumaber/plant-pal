import { Link } from "react-router-dom";

export function ButtonPrevious({ to, text="← Previous" }) {
  return (
    <Link
      to={to}
      className="flex flex-row justify-start items-center text-sm lg:text-base text-[var(--color-grey)] w-full py-4"
    >
      {text}
    </Link>
  );
}
