import { ButtonBack } from "../components/Button_Back"
import { Button } from "../components/Button";
import { ButtonNarrow } from "../components/Button_Narrow";
import { ButtonCircle } from "../components/Button_Circle";
import { WateringBar } from "../components/WateringBar";


import { NavBar } from "../components/Navbar"

export function HomePage (){
    return (
      <div className="bg-[var(--color-background)] p-4 md:px-8 lg:px-20">
        <NavBar />
        <div className="text-h1">My Plants</div>

        <Button
          text="Add your first Plant"
          bgColor="bg-[var(--color-darkgreen)]"
          textColor="text-white"
          width="max-w-sm"
        />

        <Button
          text="Edit"
          bgColor="bg-white"
          textColor="text-[var(--color-darkgreen)]"
          width="max-w-fit"
          paddingx="px-6"
        />

        <Button
          text="Delete"
          bgColor="none"
          textColor="text-[var(--color-darkgreen)]"
          width="max-w-fit"
          paddingx="px-6"
        />

        <ButtonNarrow />

        <ButtonCircle />

        <ButtonBack />
        <WateringBar />
      </div>
    );
}
