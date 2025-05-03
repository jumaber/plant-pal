export function Button_Large({ onClick, text }) {
  return (
    <button
      onClick={onClick}
      className="bg-highlightgreen border-2 border-highlightgreen text-darkgreen py-2 px-6 rounded-lg hover:bg-transparent hover:text-highlightgreen hover:border-darkgreen transition duration-200"
    >
      {text}
    </button>
  );
}