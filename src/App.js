import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home, SingleHotel } from "./Pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hotels/:hotelId" element={<SingleHotel />} />
    </Routes>
  );
}

export default App;
