import plantIcon from "../assets/plant.svg";

export function SubmitStatus({
  status = "loading",
  message = "Photosynthesizing your request... ☀️",
}) {
  if (status !== "loading") return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white bg-opacity-50">
      <img
        src={plantIcon}
        alt="Plant icon"
        className="w-120 h-auto mb-4 animate-bounce"
      />
      <div className="text-lg font-semibold text-[var(--color-darkgreen)] animate-pulse">
        {message}
      </div>
    </div>
  );
}
