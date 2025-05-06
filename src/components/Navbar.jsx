import { Link } from "react-router-dom";
import { Button } from "./Button";

export function NavBar() {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-4 py-2 bg-white shadow-navbarshadow z-50 md:px-8 lg:px-16">
      <h1 className="text-darkgreen text-h3">🌱 Plant Pal</h1>
      <Link to="/AddPlant">
        <Button text="Add Plant" />
      </Link>
    </nav>
  );
}
