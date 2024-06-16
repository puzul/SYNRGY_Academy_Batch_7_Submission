import { Routes, Route } from "react-router-dom";
import Index from "../views/index";
import Cars from "../views/cars";
import Login from "../views/admin/login";
import Dashboard from "../views/admin/dashboard";
import AddCars from "../views/admin/addCars";
import EditCars from "../views/admin/editCars";
import ShowCars from "../views/admin/showCars";

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/cars" element={<Cars />} />
      <Route path="/admin/dashboard" element={<Dashboard />} />
      <Route path="/admin" element={<Login />} />
      <Route path="/admin/cars" element={<ShowCars />} />
      <Route path="/admin/add-car" element={<AddCars />} />
      <Route path="/admin/edit-car/:id" element={< EditCars />} />
    </Routes>
  )
}

export default RoutesIndex;