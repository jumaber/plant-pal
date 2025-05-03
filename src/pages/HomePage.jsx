import { ButtonBack } from "../components/Button_Back"
import { NavBar } from "../components/Navbar"

export function HomePage (){
    return (
      <div className="bg-[var(--color-background)]">
        <NavBar />
        <h2>My Plants</h2>
        <ButtonBack />
      </div>
    );
}
