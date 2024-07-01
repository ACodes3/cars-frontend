import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import React from "react";
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AdminNavbar from "./AdminDashboard/AdminConponents/AdminNavbar";
import AdminMainContent from "./AdminDashboard/AdminConponents/AdminNavbarComponents/AdminMainContent";
import AdminSidebar from "./AdminDashboard/AdminConponents/AdminNavbarComponents/AdminSidebar";
import AdminLogin from "./Login/AdminLogin";
import AdminRegister from "./Register/AdminRegister";

function App() {
  return (
    <Router>
      <Routes>
        {/* Default Route for Admin Dashboard */}
        <Route
          path="/admin-dashboard/:item"
          element={
            <AdminLayout>
              <AdminMainContent />
            </AdminLayout>
          }
        />
        {/* Route for Admin Login */}
        <Route path="/admin-login" element={<AdminLogin />} />
        {/* Route for Admin Register */}
        <Route path="/admin-register" element={<AdminRegister />} />
        {/* Default Redirect (if no matching route is found) */}
        <Route
          path="/*"
          element={<Navigate replace to="/admin-dashboard/profile" />}
        />
      </Routes>
    </Router>
  );
}

// Separate layout component for Admin Dashboard
const AdminLayout = ({ children }) => (
  <Box sx={{ display: "flex" }}>
    <AdminNavbar />
    <AdminSidebar />
    {children}
  </Box>
);

AdminLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
