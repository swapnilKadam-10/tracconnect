import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import App from "./App.jsx";
import "./index.css";
import { ScrollToTop } from "./components";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
      <ToastContainer closeButton={false} position={"top-center"} autoClose={2000} className={"text-red-600"}/>
      <App />
    </Router>
  </React.StrictMode>
);
