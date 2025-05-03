import { Link } from "react-router-dom";

export function ButtonNarrow({ to = "/", text = "Button Narrow" }) {
  return (
    <Link
      to={to}
      className="block max-w-[343px] text-center bg-darkgreen text-white text-lg font-bold py-4 px-6 rounded-rounded"
    >
      {text}
    </Link>
  );
}
