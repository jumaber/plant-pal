import { Link } from "react-router-dom";

export function ButtonSmall({ to = "/", text = "Button Small" }) {
  return (
    <Link
      to={to}
      className="block max-w-[343px] text-center bg-darkgreen text-white text-lg font-bold py-4 px-6 rounded-rounded"
    >
      {text}
    </Link>
  );
}
