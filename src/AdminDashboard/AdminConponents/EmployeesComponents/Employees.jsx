import Button from "@mui/material/Button";
import * as React from "react";

const Employees = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap", // Allow items to wrap to the next line
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        margin: "0 auto", // Center the container horizontally
      }}
    >
      <Button variant="outlined">Customer Service</Button>
      <Button variant="outlined">Rental Agents</Button>
      <Button variant="outlined">Fleet Managers</Button>
      <Button variant="outlined">Mechanics and Maintenance Crew</Button>
      <Button variant="outlined">Administrative Staff</Button>
      <Button variant="outlined">Branch Managers</Button>
      <Button variant="outlined">Sales Representatives</Button>
      <Button variant="outlined">Drivers</Button>
      <Button variant="outlined">Cleaning Crew</Button>
      <Button variant="outlined">Security Personnel</Button>
    </div>
  );
};

export default Employees;
