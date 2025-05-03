export function Button_Large({ onClick, text }) {
    return (
      <button className="btn-large" onClick={onClick}>
        {text}
      </button>
    )
  }