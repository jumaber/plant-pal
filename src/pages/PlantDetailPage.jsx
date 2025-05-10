import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavBar } from "../components/Navbar";
import { Button } from "../components/Button";
import { ButtonBack } from "../components/Button_Back";
import { ButtonNarrow } from "../components/Button_Narrow";
import { WateringBar } from "../components/WateringBar";
import { ButtonCircle } from "../components/Button_Circle";

export function PlantDetailPage() {
  const { id } = useParams();
  const [plant, setPlant] = useState(null);

  useEffect(() => {
    fetch(`https://plantpal-backend-9iz1.onrender.com/plants/${id}`)
      .then((res) => res.json())
      .then((data) => setPlant(data))
      .catch((err) => console.error("Failed to fetch plant:", err));
  }, [id]);

  if (!plant) return <div>Loading...</div>;

  const waterAmount = "💧".repeat(plant.thirstLevel ?? 0);

  const today = new Date();
  const lastWateredDate = new Date(plant.lastWatered);
  const daysSinceWatered = Math.floor(
    (today - lastWateredDate) / (1000 * 60 * 60 * 24)
  );
  const daysLeft = Math.max(plant.wateringFrequencyDays - daysSinceWatered, 0);
  return (
    <>
      <NavBar />

      <div className="flex flex-col min-h-screen bg-[var(--color-background)] px-4 py-20 lg:py–30 md:px-8 lg:px-20">
        <ButtonBack />
        <div className="flex flex-col lg:flex-row lg:gap-8 justify-between">
          {/* IMAGEM */}
          <div className="w-full lg:w-1/2 lg:h-fit bg-white rounded-md shadow-md p-4 flex justify-center items-center">
            <img
              className="bg-gray-200 w-full aspect-square object-cover radius-square"
              src={plant.photo}
              alt={plant.name}
            />
          </div>

          <div className="flex flex-col lg:justify-between w-full lg:w-1/2">
            <div>
              {/* TÍTULO */}
              <div className="flex flex-row justify-between items-center lg:pb-6 ">
                <h1 className="py-10 lg:py-0 lg:pt-0 text-h2 font-bold text-[var(--color-darkgreen)]">
                  {plant.name}
                </h1>
                <ButtonCircle bgColor="bg-white" />
              </div>

              {/* TEXTO */}
              <div className="flex flex-col gap-4 w-full bg-white p-4 radius-square relative">
                <div className="flex flex-row justify-between items-center">
                  <h2 className="min-w-fit text-h5 text-[var(--color-grey)]">
                    Scientific Name
                  </h2>
                  <p className="text-[var(--color-darkgreen)] font-medium">
                    {plant.scientificName}
                  </p>
                </div>

                <hr className="separator" />

                <div className="flex flex-row gap-4 justify-between items-center">
                  <h2 className="min-w-fit text-h5 text-[var(--color-grey)]">
                    Location
                  </h2>
                  <p className="text-[var(--color-darkgreen)] font-medium">
                    {plant.location}, {plant.room}
                  </p>
                </div>

                <hr className="separator" />

                <div className="flex flex-col gap-1">
                  <div className="flex flex-row items-start gap-4 justify-between">
                    <h2 className="min-w-fit text-h5 text-[var(--color-grey)]">
                      Watering Needs
                    </h2>
                    <div>Every {plant.wateringFrequencyDays} days</div>
                  </div>
                  <div className="flex flex-row gap-4">
                    <WateringBar
                      frequency={plant.wateringFrequencyDays}
                      daysLeft={daysLeft}
                      waterAmount={waterAmount}
                    />
                  </div>
                </div>

                <hr className="separator" />

                <div className="flex flex-row gap-4 justify-between items-start">
                  <h2 className="min-w-fit text-h5 text-[var(--color-grey)]">
                    Care Tips
                  </h2>
                  <p className="text-right text-[var(--color-darkgreen)]">
                    {plant.careTips}
                  </p>
                </div>
              </div>
            </div>

            {/* BOTÕES (abaixo da caixa de texto) */}
            <div className="flex justify-end mt-6 gap-4">
              <div className="flex flex-row">
                <ButtonNarrow
                  text="Delete"
                  bgColor="none"
                  textColor="text-[var(--color-darkgreen)]"
                  width="max-w-fit"
                  paddingx="px-6"
                />
                <ButtonNarrow
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
      </div>
    </>
  );
}