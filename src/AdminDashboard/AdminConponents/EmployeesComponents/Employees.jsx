import Autocomplete from "@mui/material/Autocomplete";
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TextField from "@mui/material/TextField";
import * as React from "react";
import { useState } from "react";
import employeesData from "../../../DummyData/EmployeesDummyData";

const Employees = () => {
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  
  // Create a sorted copy of the departments array
  const departments = [
    { label: "All Departments" },
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

  const sortedDepartments = [
    departments[0], // All Departments
    ...departments.slice(1).sort((a, b) => a.label.localeCompare(b.label))
  ];

  // Function to filter employees by department
  const filteredEmployees = selectedDepartment && selectedDepartment.label !== "All Departments"
    ? employeesData.filter(employee => employee.department === selectedDepartment.label)
    : employeesData;

  return (
    <div>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={sortedDepartments}
        sx={{ width: "auto" }}
        onChange={(event, newValue) => setSelectedDepartment(newValue)}
        renderInput={(params) => <TextField {...params} label="Department" />}
      />
      <Container style={{marginTop:"30px"}}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Avatar</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Department</TableCell>
                <TableCell>Position</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredEmployees.map((employee) => (
                <TableRow
                  key={employee.email}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Avatar alt={employee.name} src={employee.avatar} />
                  </TableCell>
                  <TableCell>{employee.name}</TableCell>
                  <TableCell>{employee.department}</TableCell>
                  <TableCell>{employee.position}</TableCell>
                  <TableCell>{employee.email}</TableCell>
                  <TableCell>{employee.phone}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
};

export default Employees;
