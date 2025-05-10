import { useParams } from "react-router-dom";
import { NavBar } from "../components/Navbar";
import { Button } from "../components/Button";
import { ButtonBack } from "../components/Button_Back";
import { ButtonNarrow } from "../components/Button_Narrow";

export function PlantDetailPage() {
  const { id } = useParams();

  return (
    <div className="bg-[var(--color-background)] p-4 md:px-8 lg:px-20 min-h-screen">
      <NavBar />
      <div className="text-h1">My Plants</div>

      <ButtonBack />

      <div className="flex flex-col lg:flex-row gap-8 relative">
        {/* IMAGEM */}
        <div className="w-full lg:w-1/2 bg-white rounded-md shadow-md p-4 flex justify-center items-center min-h-[550px]">
          <div className="w-full max-w-md aspect-[3/4] bg-gray-200 rounded-md" />
        </div>

        {/* TEXTO */}
        <div className="w-full lg:w-2/5 bg-white p-6 rounded-md shadow-md flex flex-col min-h-[550px] justify-between relative">
          {/* TÍTULO */}
          <h1 className="absolute top-0 left-0 right-0 text-h2 font-bold text-[var(--color-darkgreen)] z-10 mx-6 lg:mx-0">
            Madagascar Jewel
          </h1>

          <div className="space-y-4 pt-16">
            <div>
              <h2 className="text-sm text-[var(--color-grey)]">Scientific Name:</h2>
              <p className="text-[var(--color-darkgreen)] font-medium">Alocasia amazonica</p>
            </div>

            <div>
              <h2 className="text-sm text-[var(--color-grey)]">Location:</h2>
              <p className="text-[var(--color-darkgreen)] font-medium">Indoors, Kitchen Shelf</p>
            </div>

            <div>
              <h2 className="text-sm text-[var(--color-grey)]">Watering Needs:</h2>
              <p className="text-[var(--color-darkgreen)] font-medium">Every 3 days</p>
              <p className="text-[var(--color-darkgreen)]">💧💧 Moderate</p>
              <p className="text-[var(--color-darkgreen)]">Overdue by 1 day</p>
              <ButtonNarrow className="mt-2" />
            </div>

            <div>
              <h2 className="text-sm text-[var(--color-grey)]">Care Tips</h2>
              <p className="text-[var(--color-darkgreen)]">
                Water regularly and never let the root ball dry out. As soon as the surface of the soil feels dry, it is time to water. If possible, use lime-free water like filtered water or rainwater.
              </p>
            </div>
          </div>
        </div>

        {/* BOTÕES (abaixo da caixa de texto) */}
        <div className="w-full lg:w-2/5 flex justify-center mt-6">
          <div className="flex gap-4">
            <Button
              text="Delete"
              bgColor="none"
              textColor="text-[var(--color-darkgreen)]"
              width="max-w-fit"
              paddingx="px-6"
            />
            <Button
              text="Edit"
              bgColor="bg-white"
              textColor="text-[var(--color-darkgreen)]"
              width="max-w-fit"
              paddingx="px-6"
            />
          </div>
        </div>
      </div>
    </div>
  );
}