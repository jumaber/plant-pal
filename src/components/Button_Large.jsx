import { Link } from "react-router-dom";

export function ButtonLarge({ to = "/", text = "Add your first Plant" }) {
  return (
    <Link
      to={to}
      className="block max-w-[343px] text-center bg-darkgreen text-white text-lg font-bold py-4 px-6 rounded-rounded"
    >
      {text}
    </Link>
  );
}
