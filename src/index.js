import React from "react";
import ReactDOM from "react-dom";

// library
import { BrowserRouter } from "react-router-dom";

// component
import App from "./App";

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById("root")
);
