import { Link } from "react-router-dom";

export function ButtonBack() {
  return (
    <Link
      to="/"
      className="flex flex-row justify-start items-center text-lg font-bold text-darkgreen bg-lightgreen w-full py-4 px-4 md:px-8 lg:px-16 "
    >
      ← Back
    </Link>
  );
}
