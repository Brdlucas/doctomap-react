import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import Doctor from "./pages/doctor/Doctor";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
