import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import * as React from "react";
import rentersData from "../../../DummyData/RentersDummyData";

const Renters = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="left">Rented Car</TableCell>
            <TableCell align="left">Start Date</TableCell>
            <TableCell align="left">End Date</TableCell>
            <TableCell align="left">Total Cost</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rentersData.map((renter) => (
            <TableRow key={renter.id}>
              <TableCell component="th" scope="row">
                {renter.name}
              </TableCell>
              <TableCell align="left">{renter.rentedCar}</TableCell>
              <TableCell align="left">{renter.startDate}</TableCell>
              <TableCell align="left">{renter.endDate}</TableCell>
              <TableCell align="left">{renter.totalCost}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Renters;
