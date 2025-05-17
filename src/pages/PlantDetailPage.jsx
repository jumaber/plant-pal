import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { NavBar } from "../components/Navbar";
import { ButtonBack } from "../components/Button_Back";
import { ButtonNarrow } from "../components/ButtonNarrow";
import { WateringBar } from "../components/WateringBar";
import { ButtonCircle } from "../components/Button_Circle";
import { ButtonNext } from "../components/Button_Next";

export function PlantDetailPage() {
  const { id } = useParams();
  const [plant, setPlant] = useState(null);
  const [clicked, setClicked] = useState(false); // Local toggle state for watering button
  const [originalLastWatered, setOriginalLastWatered] = useState(null); // To revert watering date if toggled off
  const [allPlants, setAllPlants] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://plantpal-backend-9iz1.onrender.com/plants/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPlant(data);
        setOriginalLastWatered(data.lastWatered);
        const lastWateredDate = new Date(data.lastWatered);
        const today = new Date();
        setClicked(lastWateredDate.toDateString() === today.toDateString());
      })
      .catch((err) => console.error("Failed to fetch plant:", err));

    // Fetch all plants to compute next/previous
    fetch("https://plantpal-backend-9iz1.onrender.com/plants")
      .then((res) => res.json())
      .then((data) => setAllPlants(data))
      .catch((err) => console.error("Failed to fetch all plants:", err));
  }, [id]);


  if (!plant) return <div>Loading...</div>;

  const waterAmount = "💧".repeat(plant.thirstLevel ?? 0);

  //Next and Previous plants
  const sortedPlants = allPlants.sort((a, b) => a.id - b.id);
  const currentIndex = sortedPlants.findIndex((p) => p.id === Number(id));
  const prevId = currentIndex > 0 ? sortedPlants[currentIndex - 1].id : null;
  const nextId =
    currentIndex < sortedPlants.length - 1
      ? sortedPlants[currentIndex + 1].id
      : null;


  // Calculate days since last watering and how many days left before next watering
  const today = new Date();
  const lastWateredDate = new Date(plant.lastWatered);
  const daysSinceWatered = Math.floor(
    (today - lastWateredDate) / (1000 * 60 * 60 * 24)
  );
  const daysLeft = Math.max(plant.wateringFrequencyDays - daysSinceWatered, 0);

  // Delete plant handler with confirmation
  const deletePlant = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this plant?");
    if(!confirmDelete) return;

    try {
      const response = await fetch(`https://plantpal-backend-9iz1.onrender.com/plants/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete plant");
      }
      alert("Plant deleted successfully.");
      navigate("/");
    } catch (error) {
      console.error("Error deleting plant:", error);
      alert("Something went wrong while deleting the plant.");
    }
  };

  // Toggle watering state and update backend accordingly
  const handleWaterToggle = async () => {
    const newClicked = !clicked;
    setClicked(newClicked);

    // If toggled on, set lastWatered to now; if toggled off, revert to original date
    const newLastWatered = newClicked ? new Date().toISOString() : originalLastWatered;

    try {
      const response = await fetch(`https://plantpal-backend-9iz1.onrender.com/plants/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lastWatered: newLastWatered }),
      });

      if (!response.ok) throw new Error("Failed to update watering");

      // Update local plant state immediately to reflect changes in UI
      setPlant((prev) => ({
        ...prev,
        lastWatered: newLastWatered,
      }));
    } catch (error) {
      console.error(error);
      alert("Erro ao atualizar a rega.");
      // Revert toggle state if API update fails
      setClicked(!newClicked);
    }
  };

  return (
    <>
      <NavBar />

      <div className="flex flex-col min-h-screen bg-[var(--color-background)] px-4 py-20 lg:py–30 md:px-8 lg:px-20">
        <div className="flex flex-row w-full justify-between md:py-2 lg:py-4">
          <ButtonBack to={prevId ? `/plant/${prevId}` : ""} />
          <ButtonNext to={nextId ? `/plant/${nextId}` : ""} />
        </div>

        <div className="flex flex-col lg:flex-row lg:gap-8 justify-between">
          {/* IMAGE */}
          <div className="w-full lg:w-1/2 lg:h-fit bg-white rounded-md shadow-md p-4 flex justify-center items-center">
            <img
              className="bg-gray-200 w-full aspect-square object-cover radius-square"
              src={plant.photo}
              alt={plant.name}
            />
          </div>

          <div className="flex flex-col lg:justify-between w-full lg:w-1/2">
            <div>
              {/* TITLE AND WATER BUTTON */}
              <div className="flex flex-row justify-between items-center lg:pb-6 ">
                <div className="py-10 lg:py-0 lg:pt-0 text-h1 font-bold text-[var(--color-darkgreen)]">
                  {plant.name}
                </div>
                <ButtonCircle
                  bgColor="bg-white"
                  onClick={handleWaterToggle} // Toggle watering status
                  text={clicked ? "✅" : "💦"}
                />
              </div>

              {/* PLANT DETAILS */}
              <div className="flex flex-col gap-4 w-full bg-white p-4 radius-square">
                <div className="flex flex-row justify-between items-center">
                  <h2 className="min-w-fit text-h5 text-[var(--color-grey)]">
                    Scientific Name
                  </h2>
                  <p className="text-[var(--color-darkgreen)] text-right">
                    {plant.scientificName}
                  </p>
                </div>

                <hr className="separator" />

                <div className="flex flex-row gap-4 justify-between items-center">
                  <h2 className="min-w-fit text-h5 text-[var(--color-grey)]">
                    Location
                  </h2>
                  <p className="text-[var(--color-darkgreen)] font-medium  text-right">
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

            {/* DELETE AND EDIT BUTTONS */}
            <div className="flex justify-end mt-6 gap-4">
              <div className="flex flex-row">
                <ButtonNarrow
                  text="Delete"
                  bgColor="none"
                  textColor="text-[var(--color-darkgreen)]"
                  width="max-w-fit"
                  paddingx="px-6"
                  onClick={() => deletePlant(plant.id)}
                />
                <ButtonNarrow
                  text="Edit"
                  bgColor="bg-white"
                  textColor="text-[var(--color-darkgreen)]"
                  width="max-w-fit"
                  paddingx="px-6"
                  onClick={() => navigate(`/edit/${plant.id}`)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
