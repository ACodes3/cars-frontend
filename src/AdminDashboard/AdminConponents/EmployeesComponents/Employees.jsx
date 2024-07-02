import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import * as React from "react";

const Employees = () => {
  // Create a sorted copy of the employees array
  const sortedEmployees = [...employees].sort((a, b) => a.label.localeCompare(b.label));

  return (
    <div>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={sortedEmployees}
        sx={{ width: "auto" }}
        renderInput={(params) => <TextField {...params} label="Department" />}
      />
    </div>
  );
};

export default Employees;

const employees = [
  { label: "Customer Service" },
  { label: "Rental Agents" },
  { label: "Fleet Managers" },
  { label: "Mechanics and Maintenance Crew" },
  { label: "Administrative Staff" },
  { label: "Branch Managers" },
  { label: "Sales Representatives" },
  { label: "Drivers" },
  { label: "Cleaning Crew" },
  { label: "Security Personnel" },
];
