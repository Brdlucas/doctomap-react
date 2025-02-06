import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import Doctor from "./pages/doctor/Doctor";
import Id from "./pages/doctor/id";
import Nav from "./pages/components/nav/nav";
import Dashboard from "./pages/admin/Dashboard";
import AdminDoctor from "./pages/admin/adminDoctor";
import Form from "./pages/form/Form";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctor />} />
        <Route path="/doctors/:id" element={<Id />} />
        <Route path="/dashboard/" element={<Dashboard />} />
        <Route path="/dashboard/users" element={<AdminDoctor />} />
        <Route path="/formulaire" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
