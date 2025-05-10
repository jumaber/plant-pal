import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { ButtonNarrow } from "../components/ButtonNarrow"
import close from "../assets/close.svg";
import { Pill } from "../components/Pill";
import { SubmitStatus } from "../components/SubmissionStatus";

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
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);


  const navigate = useNavigate();

  const roomOptions = [
    "Kitchen Window",
    "Kitchen Shelf",
    "Living Room",
    "Corridor",
    "Balcony",
    "Parents Room",
    "Marius Room",
    "Caterina Room",
  ];

  const locationOptions = ["Indoor", "Outdoor", "Indoor & Outdoor"];

  const thirstLevelOptions = [
    "\uD83D\uDCA7 Light",
    "\uD83D\uDCA7\uD83D\uDCA7 Moderate ",
    "\uD83D\uDCA7\uD83D\uDCA7\uD83D\uDCA7 Generous",
  ];

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const uploadImageToCloudinary = async (file) => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "plantpal_uploads");

    const response = await fetch(
      "https://api.cloudinary.com/v1_1/jumaber/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    const result = await response.json();
    return result.secure_url;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    let uploadedImageUrl = "";
    if (imageFile) {
      uploadedImageUrl = await uploadImageToCloudinary(imageFile);
    }

    const newPlant = {
      name,
      scientificName,
      location,
      room,
      lastWatered,
      wateringFrequencyDays: Number(wateringFrequencyDays),
      wateringUnit,
      thirstLevel,
      careTips,
      photo: uploadedImageUrl,
    };

    try {
      const response = await fetch(
        "https://plantpal-backend-9iz1.onrender.com/plants",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newPlant),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to save plant to server");
      }

      navigate("/");
    } catch (error) {
      console.error("Error saving plant:", error);
      alert("Oops! Something went wrong while saving your plant.");
    } finally {
        setIsSubmitting(false);
    }
  };

  return (
    <div className="flex justify-center p-4 md:p-8 lg:p-20 lg:px-20">
      <div className="flex flex-col w-full max-w-4xl justify-center">
        <div className="flex flex-row w-full justify-between">
          <h1 className="text-h1">Add Plant</h1>
          <img
            src={close}
            alt="Close icon"
            className="cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>

        {isSubmitting && (
          <SubmitStatus status="loading" message="Adding your plant..." />
        )}

        <form onSubmit={handleSubmit}>
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
            />
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
            />
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
            />
          </div>

          {/* Watering Frequency */}
          <div className="bg-[var(--color-background)] p-2 md:p-4 mt-6 rounded-sm">
            <div className="text-h3 pb-2 text-bg-[var(--color-darkgreen)]">
              Watering Frequency
            </div>
            <div className="flex flex-row w-full items-center gap-2 md:gap-4">
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
                  ⌯
                </div>
              </div>
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
                  ⌯
                </div>
              </div>
            </div>
          </div>

          {/* Watering Amount */}
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
              placeholder="e.g., Avoid direct sunlight"
              className="bg-white flex w-full p-3 rounded-sm text-placeholder"
            ></textarea>
          </div>

          {/* Image Upload */}
          <div className="bg-[var(--color-background)] md:p-4 mt-6 rounded-sm">
            <div className="flex flex-row gap-4 justify-between items-center">
              <div className="text-h3 text-[var(--color-darkgreen)] mb-2">
                Image
              </div>
              <label className="inline-block">
                <input
                  id="plant-image"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />

                <button
                  type="button"
                  onClick={() => document.getElementById("plant-image").click()}
                  className="bg-[var(--color-darkgreen)] text-white text-sub py-2 px-6 rounded radius-rounded"
                >
                  {imageFile ? "Change Image" : "Upload Image"}
                </button>
              </label>
            </div>

            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                className="w-full aspect-square object-cover mt-2 rounded-sm"
              />
            )}
          </div>

          {/* Submit Button */}
          <div className="my-4">
            <Button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded"
              width="w-full"
              disabled={isSubmitting}
            >
              Add a new Plant
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
