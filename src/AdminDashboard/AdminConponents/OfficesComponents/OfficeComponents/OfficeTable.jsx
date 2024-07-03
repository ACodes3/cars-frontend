import { Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import * as React from "react";
import branchesData from "../../../../DummyData/OfficesDummyData";

const BranchesTable = () => {
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Branch Name</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Country</TableCell>
              <TableCell>Contact Number</TableCell>
              <TableCell>Weekdays Operating Hours</TableCell>
              <TableCell>Weekends Operating Hours</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {branchesData.map((branch) => (
              <TableRow
                key={branch.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Typography variant="caption" display="block" gutterBottom>
                    {branch.name}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="caption" display="block" gutterBottom>
                    {branch.address}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="caption" display="block" gutterBottom>
                    {branch.country}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="caption" display="block" gutterBottom>
                    {branch.contactNumber}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="caption" display="block" gutterBottom>
                    {branch.operatingHours.weekdays}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="caption" display="block" gutterBottom>
                    {branch.operatingHours.weekends}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default BranchesTable;
