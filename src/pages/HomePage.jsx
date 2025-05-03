import { ButtonBack } from "../components/Button_Back"
import { ButtonLarge } from "../components/Button_Large";
import { ButtonSmall } from "../components/Button_Small";
import { ButtonNarrow } from "../components/Button_Narrow";



import { NavBar } from "../components/Navbar"

export function HomePage (){
    return (
      <div className="bg-[var(--color-background)]">
        <NavBar />
        <h2>My Plants</h2>
        <ButtonBack />
        <ButtonLarge />
        <ButtonSmall />
        <ButtonNarrow />
      </div>
    );
}
