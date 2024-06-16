import { createRoot } from "react-dom/client";
import { Counter } from "./components/Counter";

const rootContainer = document.getElementById("root");
const root = createRoot(rootContainer);

root.render(
  <div>
    <Counter />
  </div>,
);
