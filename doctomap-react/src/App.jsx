import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import Doctor from "./pages/doctor/Doctor";
import Id from "./pages/doctor/id";
import Nav from "./pages/components/nav/nav";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctor />} />
        <Route path="/doctors/:id" element={<Id />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
