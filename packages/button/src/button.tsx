import { useState } from "react";
import "./button.css";

export default function Button() {
  const [count, setCount] = useState(0);

  return (
    <button className="button" onClick={() => setCount(Date.now())}>
      Provider button {count}
    </button>
  );
}
