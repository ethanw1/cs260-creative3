import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/home";
import Featured from "./pages/featured";
import Pass from "./pages/pass";
import Theaters from "./pages/theaters";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="featured" element={<Featured />} />
          <Route path="theaters" element={<Theaters />} />
          <Route path="pass" element={<Pass />} />
          <Route path="*" element={<Navigate to="/" />}  />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}