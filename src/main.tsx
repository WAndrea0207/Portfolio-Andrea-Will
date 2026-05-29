import { createRoot } from "react-dom/client";
import App from "./app/App";
import "./styles/index.css";

// Le "!" après getElementById dit à TypeScript : "je suis sûr que cet élément existe"
// (car on sait que index.html contient bien un <div id="root">)
createRoot(document.getElementById("root")!).render(<App />);
