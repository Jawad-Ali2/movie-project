import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Outlet, RouterProvider, ScrollRestoration } from "react-router-dom";
import { router } from "./routes/routes.jsx";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

export function RootLayout() {
  return (
    <div className="dark:bg-slate-800">
      <ScrollRestoration />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
