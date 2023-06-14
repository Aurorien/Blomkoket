import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.jsx";
import store from "./store.js";
import { registerSW } from "virtual:pwa-register";
registerSW();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

////////////////////////////////////////////////////////////////////
//Typescript versions:

// import React from "react";
// import ReactDOM from "react-dom/client";
// import { Provider } from "react-redux";
// import App from "./App.js";
// import store from "./store.js";
// import { registerSW } from "virtual:pwa-register";
// registerSW();

// ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>
// );

// import React from "react";
// import ReactDOM from "react-dom";
// import { Provider } from "react-redux";
// import App from "./App";
// import store from "./store";

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );
