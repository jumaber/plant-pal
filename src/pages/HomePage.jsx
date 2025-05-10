import { PlantList } from "../components/PlantList";


import { NavBar } from "../components/Navbar"

export function HomePage (){
    return (
      <div className="flex flex-col gap-8 bg-[var(--color-background)] px-4  py-24 lg:py–30 md:px-8 lg:px-20">
        <NavBar />
        <div className="text-h1">My Plants</div>
        <PlantList />
      </div>
    );
}
