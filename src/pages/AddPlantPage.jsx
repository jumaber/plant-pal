import { useState } from "react";
import { useNavigate } from "react-router-dom";
import close from "../assets/close.svg"
import { ButtonNarrow } from "../components/ButtonNarrow"
import { Button } from "../components/Button";

import { Pill } from "../components/Pill"


export function AddPlantPage() {
  const [name, setName] = useState("");
  const [scientificName, setScientificName] = useState("");
  const [location, setLocation] = useState("");
  const [room, setRoom] = useState("");
  const [lastWatered, setLastWatered] = useState("");
  const [wateringFrequencyDays, setWateringFrequencyDays] = useState("");
  const [wateringUnit, setWateringUnit] = useState("days");

  const [careTips, setCareTips] = useState("");

  const [thirstLevel, setThirstLevel] = useState("");

  const navigate = useNavigate(); // Hook to redirect after submission

  const roomOptions = [
    "Kitchen Window",
    "Kitchen Shelf",
    "Living Room",
    "Corridor",
    "Balcony",
    "Parents Room",
    "Marius Room",
    "Caterina Room"
  ];

  const locationOptions = ["Indoor", "Outdoor", "Indoor & Outdoor"];

  const thirstLevelOptions = ["💧 Light", "💧💧 Moderate ", "💧💧💧 Generous"];

  // const handleSubmit {}

  return (
    <div className="flex justify-center p-4 md:p-8 lg:p-20 lg:px-20">
      <div className="flex flex-col w-full  max-w-4xl justify-center">
        <div className="flex flex-row w-full justify-between">
          <h1 className="text-h1">Add Plant</h1>
          <img
            src={close}
            alt="Close icon"
            className="cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>
        <form>
          {/* onSubmit={handleSubmit}*}

        {/* Common Name */}
          <div className="bg-[var(--color-background)] p-2 md:p-4 mt-6 rounded-sm">
            <div className="text-h3 pb-2 text-bg-[var(--color-darkgreen)]">
              Common Name
            </div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g., Spider Plant"
              className="bg-white flex w-full p-3 rounded-sm text-placeholder"
            ></input>
          </div>

          {/* Scientific Name */}
          <div className="bg-[var(--color-background)] p-2 md:p-4 mt-6 rounded-sm">
            <div className="text-h3 pb-2 text-bg-[var(--color-darkgreen)]">
              Scientific Name
            </div>
            <input
              type="text"
              value={scientificName}
              onChange={(e) => setScientificName(e.target.value)}
              placeholder="e.g., Euphorbia leuconeura"
              className="bg-white flex w-full p-3 rounded-sm text-placeholder"
            ></input>
          </div>

          {/* Location */}
          <div className="bg-[var(--color-background)] p-2 md:p-4 mt-6 rounded-sm">
            <div className="text-h3 pb-2 text-bg-[var(--color-darkgreen)]">
              Location
            </div>
            <div className="flex flex-wrap gap-2">
              {locationOptions.map((option) => (
                <Pill
                  key={option}
                  label={option}
                  selected={location === option}
                  onClick={() => setLocation(option)}
                  variant="select"
                />
              ))}
            </div>
          </div>

          {/* Room */}
          <div className="bg-[var(--color-background)] p-2 md:p-4 mt-6 rounded-sm">
            <div className="text-h3 pb-2 text-bg-[var(--color-darkgreen)]">
              Room
            </div>
            <div className="flex flex-wrap gap-2">
              {roomOptions.map((option) => (
                <Pill
                  key={option}
                  label={option}
                  selected={room === option}
                  onClick={() => setRoom(option)}
                  variant="select"
                />
              ))}
            </div>
          </div>

          {/* Last Watered On */}
          <div className="bg-[var(--color-background)] p-2 md:p-4 mt-6 rounded-sm">
            <div className="text-h3 pb-2 text-bg-[var(--color-darkgreen)]">
              Last Watered On...
            </div>
            <input
              type="date"
              value={lastWatered}
              onChange={(e) => setLastWatered(e.target.value)}
              className="bg-white flex w-full p-3 rounded-sm text-placeholder"
            ></input>
          </div>

          {/* Watering Frequency*/}
          <div className="bg-[var(--color-background)] p-2 md:p-4 mt-6 rounded-sm">
            <div className="text-h3 pb-2 text-bg-[var(--color-darkgreen)]">
              Watering Frequency
            </div>

            {/* Winter */}
            <div className="flex flex-row w-full items-center gap-2 md:gap-4">
              {/* <label className="body lg:pr-4 text-[var(--color-grey)]">
              Winter
            </label> */}

              {/* Value Picker */}
              <div className="relative w-1/2">
                <select
                  value={wateringFrequencyDays}
                  onChange={(e) => setWateringFrequencyDays(e.target.value)}
                  className="bg-white appearance-none p-4 pr-10 w-full rounded-sm text-paragraph text-[var(--color-darkgreen)]"
                >
                  {[...Array(30)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2 text-[var(--color-darkgreen)]">
                  ⌄
                </div>
              </div>

              {/* Unit Picker */}
              <div className="relative w-1/2">
                <select
                  value={wateringUnit}
                  onChange={(e) => setWateringUnit(e.target.value)}
                  className="bg-white appearance-none p-4 pr-10 w-full rounded-sm text-paragraph text-[var(--color-darkgreen)]"
                >
                  <option value="days">Day(s)</option>
                  <option value="weeks">Week(s)</option>
                  <option value="months">Month(s)</option>
                </select>
                <div className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2 text-[var(--color-darkgreen)]">
                  ⌄
                </div>
              </div>
            </div>
          </div>

          {/* Watering Amount*/}
          <div className="bg-[var(--color-background)] p-2 md:p-4 mt-6 rounded-sm">
            <div className="text-h3 pb-2 text-bg-[var(--color-darkgreen)]">
              Watering Amount
            </div>
            <div className="flex flex-wrap gap-2">
              {thirstLevelOptions.map((option) => (
                <Pill
                  key={option}
                  label={option}
                  selected={thirstLevel === option}
                  onClick={() => setThirstLevel(option)}
                  variant="select"
                />
              ))}
            </div>
          </div>
          {/* Care Tips */}
          <div className="bg-[var(--color-background)] p-2 md:p-4 mt-6 rounded-sm">
            <div className="text-h3 pb-2 text-bg-[var(--color-darkgreen)]">
              Care Tips
            </div>
            <textarea
              type="text"
              value={careTips}
              onChange={(e) => setCareTips(e.target.value)}
              placeholder="e.g., Euphorbia leuconeura"
              className="bg-white flex w-full p-3 rounded-sm text-placeholder"
            ></textarea>
          </div>

          {/* Image */}
          <div className="bg-[var(--color-background)] p-2 md:p-4 mt-6 rounded-sm">
            <div className="flex flex-row justify-between items-star">
              <div className="text-h3 pb-2 text-bg-[var(--color-darkgreen)]">
                Image
              </div>
              <ButtonNarrow text="Add Room" />
            </div>
          </div>
        </form>
        <div className="my-4">
          <Button width="full" text="Add a new Plant" />
        </div>
      </div>
    </div>
  );
}
