import "./button.css"

export default function Button({text, clickText}) {
  return (
        <button onClick={clickText}>
            {text}
        </button>
  )
}
