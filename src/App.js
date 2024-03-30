import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home, SingleHotel,LoginPage,RegisterPage } from "./Pages";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hotels/:hotelId" element={<SingleHotel />} />
      <Route path="/api/auth/" element={<LoginPage />} />
      <Route path="/api/auth/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
