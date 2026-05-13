import { useEffect, useState } from "react";

import image1 from "../src/assets/pics/image.jpg";
import {
  CheckCircle2,
  CircleMinus,
  Moon,
  UserCircle,
  XCircle,
} from "lucide-react";

const KEY_STORAGE = {
  NAME: "@mock_name",
  COLOR: "@mock_color",
  STATUS: "@mock_status",
};

export default function Habal() {
  const [name, setName] = useState(
    localStorage.getItem(KEY_STORAGE.NAME) || null,
  );
  const [color, setColor] = useState(
    localStorage.getItem(KEY_STORAGE.COLOR) || "black",
  );
  const [status, setStatus] = useState(
    localStorage.getItem(KEY_STORAGE.STATUS) || "offline",
  );

  const getStatusColor = () => {
    switch (status) {
      case "available":
        return "rgb(6, 237, 6)";
      case "away":
        return "orange";
      case "offline":
        return "gray";
      case "busy":
        return "red";
    }
  };

  const IconComp = () => {
    switch (status) {
      case "available":
        return <CheckCircle2 color="white" size={33} />;
      case "away":
        return <Moon color="white" size={33} />;
      case "offline":
        return <XCircle color="white" size={33} />;
      case "busy":
        return <CircleMinus color="white" size={33} />;
    }
  };

  return (
    <div className="container">
      <a href="/login">Login</a>
      <br />

      <div style={{ display: "flex", margin: "2rem auto", gap: "2rem" }}>
        <div className="imageCont">
          <img src={image1} alt="Support Guy" />
          <div className="status" style={{ backgroundColor: getStatusColor() }}>
            {IconComp()}
          </div>
        </div>

        <div>
          <h3>Got any problems?</h3>
          <p>This is Nour?, don't hesitate to contact him at 2am.</p>

          <a href="tel:+0785284138">Call Now!</a>
        </div>
      </div>
      <div className="inputBox">
        <UserCircle size={28} />
        <input
          className="inputNoBorder"
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <select
        name="status"
        id="status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        style={{ color: color, borderColor: color }}
      >
        <option value="offline">Offline</option>
        <option value="available">Available</option>
        <option value="busy">Busy</option>
        <option value="away">Away</option>
      </select>
      <div style={{ display: "flex", gap: ".5rem", marginBottom: "1rem" }}>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <button
          onClick={() => {
            localStorage.setItem(KEY_STORAGE.NAME, name);
            localStorage.setItem(KEY_STORAGE.COLOR, color);
            localStorage.setItem(KEY_STORAGE.STATUS, status);
          }}
          className="pri"
        >
          Save
        </button>
        <button
          onClick={() => {
            setColor(null);
            setName(null);
            localStorage.clear();
          }}
          className="sec"
        >
          Reset
        </button>
      </div>
      <hr />
      <br />
      <p>Hello, </p>
      <h2 className="margin" style={{ color: color ?? "black" }}>
        {name ? name : "John Doe"}!
      </h2>
      <h3>About this website</h3>
      <p>This is a useless website, but here is a list of things you can do.</p>
      <ul>
        <li>Change the name</li>
        <li>Change the color</li>
        <li>Save</li>
        <li>Reset</li>
      </ul>
      <h3>Things to keep in mind</h3>
      <p>
        while the changes appear immediately, you would have to click Save sot
        these changes can persist.
      </p>
      <p>
        The data is saved to your browser's local storage, you can Reset it by
        the button or by clearing it from the console
      </p>
      <br />
    </div>
  );
}
