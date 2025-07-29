import '@fontsource/poppins';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/profile" element={<h1>Profile</h1>} />
      <Route path="/logout" element={<h1>Logout</h1>} />
      <Route path="/tasks/:id" element={<h1>Task</h1>} />
      </Routes>
    </BrowserRouter>
  )
}
