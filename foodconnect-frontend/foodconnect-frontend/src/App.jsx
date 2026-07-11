import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DonorDashboard from "./pages/DonorDashboard";
import NgoDashboard from "./pages/NgoDashboard";
import VolunteerDashboard from "./pages/VolunteerDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import AddFood from "./pages/AddFood";
import MyFood from "./pages/MyFood";
import RequestFood from "./pages/RequestFood";
import MyRequests from "./pages/MyRequests";
import EditFood from "./pages/EditFood";
import ManageUsers from "./pages/ManageUsers";
import VolunteerDeliveries from "./pages/VolunteerDeliveries";
import MyDeliveries from "./pages/MyDeliveries";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Donor */}
        <Route
          path="/donor"
          element={
            <ProtectedRoute>
              <DonorDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/add-food"
          element={
            <ProtectedRoute>
              <AddFood />
            </ProtectedRoute>
          }
        />

        <Route
          path="/my-food"
          element={
            <ProtectedRoute>
              <MyFood />
            </ProtectedRoute>
          }
        />

        <Route
          path="/edit-food/:id"
          element={
            <ProtectedRoute>
              <EditFood />
            </ProtectedRoute>
          }
        />

        {/* NGO */}
        <Route
          path="/ngo"
          element={
            <ProtectedRoute>
              <NgoDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/request-food"
          element={
            <ProtectedRoute>
              <RequestFood />
            </ProtectedRoute>
          }
        />

        <Route
          path="/my-requests"
          element={
            <ProtectedRoute>
              <MyRequests />
            </ProtectedRoute>
          }
        />

        {/* Volunteer */}
        <Route
          path="/volunteer"
          element={
            <ProtectedRoute>
              <VolunteerDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/volunteer-deliveries"
          element={
            <ProtectedRoute>
              <VolunteerDeliveries />
            </ProtectedRoute>
          }
        />

        <Route
          path="/my-deliveries"
          element={
            <ProtectedRoute>
              <MyDeliveries />
            </ProtectedRoute>
          }
        />

        {/* Admin */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/manage-users"
          element={
            <ProtectedRoute>
              <ManageUsers />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;