import { useState } from "react";
import "./App.css";

const KEY_STORAGE = {
  NAME: "@mock_name",
  COLOR: "@mock_color",
};

function App() {
  const [name, setName] = useState(localStorage.getItem(KEY_STORAGE.NAME));
  const [color, setColor] = useState(
    localStorage.getItem(KEY_STORAGE.COLOR) || "black",
  );

  return (
    <>
      <input
        className="margin"
        type="text"
        name="name"
        id="name"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Hello, </p>

      <h2 className="margin" style={{ color: color ?? "black" }}>
        {name ? name : "John Doe"}!
      </h2>
      <div style={{ display: "flex", gap: ".5rem" }}>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <button
          onClick={() => {
            localStorage.setItem(KEY_STORAGE.NAME, name);
            localStorage.setItem(KEY_STORAGE.COLOR, color);
          }}
        >
          Save
        </button>
        <button
          onClick={() => {
            setColor(null);
            setName(null);
            localStorage.clear();
          }}
        >
          Reset
        </button>
      </div>
    </>
  );
}

export default App;
