import { Link } from "react-router-dom";
import plantIcon from "../assets/plant.svg";
import { Button } from "../components/Button";

export function PageNotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-[var(--color-background)] px-6">
      <img src={plantIcon} alt="Lost plant" className="w-120 h-auto mb-6 " />
      <h1 className="text-h1 font-bold text-[var(--color-darkgreen)] mb-2">
        404 – Lost in the jungle
      </h1>
      <p className="text-paragraph text-[var(--color-darkgreen)] mb-12">
        This page doesn't exist. Maybe it got overwatered.
      </p>
      <Button to="/" text="Take me home" width="min-w-[280px]" />
    </div>
  );
}
