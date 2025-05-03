import { Link } from "react-router-dom";

export function ButtonBack() {
  return (
    <Link to="/" className="bg-darkgreen">
      <h3 className="flex justify-center align-center items-center text-lg text-teal-950 font-bold h-64">
        Add your first Plant
      </h3>
    </Link>
  );
}
