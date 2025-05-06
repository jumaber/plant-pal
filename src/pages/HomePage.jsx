import { ButtonBack } from "../components/Button_Back"
import { Button } from "../components/Button";
import { ButtonNarrow } from "../components/Button_Narrow";
import { ButtonCircle } from "../components/Button_Circle";
import { WateringBar } from "../components/WateringBar";
import { PlantCard } from "../components/PlantCard";
import { PlantList } from "../components/PlantList";



import { NavBar } from "../components/Navbar"

export function HomePage (){
    return (
      <div className="flex flex-col gap-8 bg-[var(--color-background)] p-4 md:px-8 lg:px-20">
        <NavBar />
        <div className="text-h1">My Plants</div>
        <PlantList />
      </div>
    );
}
