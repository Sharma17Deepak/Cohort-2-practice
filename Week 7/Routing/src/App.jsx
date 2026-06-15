import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
const Dashboard = React.lazy(() => import("./components/Dashboard"));
const Landing = React.lazy(() => import("./components/Landing"));
import "./App.css";

//Learnings from this code Routing, Lazy loading , Suspense Fallback

function App() {
  return (
    <>
      <BrowserRouter>
        <Appbar />
        <Suspense fallback={<div>Loading page...</div>}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

function Appbar() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        Dashboard
      </button>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Landing
      </button>
    </div>
  );
}

export default App;
