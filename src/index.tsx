import * as React from "react";
import * as ReactDOM from "react-dom";
import { Books } from "./context/Books";

const init = (): void => {
	ReactDOM.render(<Books />, document.getElementById("app"));
};

window.addEventListener("DOMContentLoaded", init);
