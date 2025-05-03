import { Link } from "react-router-dom";
import { Button_Large } from "./Button_Large";

export function NavBar() {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 bg-white shadow-navbarshadow z-50">
      <h1 className="text-darkgreen">Plant Pal</h1>
      <Link to="/AddPlant">
        <Button_Large text="Add Plant" />
      </Link>
    </nav>
  );
}