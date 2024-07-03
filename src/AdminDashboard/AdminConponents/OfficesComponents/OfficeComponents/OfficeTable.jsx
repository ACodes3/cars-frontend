import { Autocomplete, Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import { useState } from "react";
import branchesData from "../../../../DummyData/OfficesDummyData";

const BranchesTable = () => {
  const [selectedCountry, setSelectedCountry] = useState("All Countries");

  // Extract unique countries from branchesData
  const countries = Array.from(new Set(branchesData.map(branch => branch.country)));
  const countryOptions = [{ label: "All Countries" }, ...countries.map(country => ({ label: country }))];

  // Filter branches based on the selected country
  const filteredBranches = selectedCountry === "All Countries"
    ? branchesData
    : branchesData.filter(branch => branch.country === selectedCountry);

  return (
    <div>
      <Box style={{display:"flex", justifyContent:"space-between", alignItems:"start"}}>
      <Autocomplete
        disablePortal
        id="country-select"
        options={countryOptions}
        sx={{ marginBottom: 2, width: 550 }}
        value={selectedCountry}
        onChange={(event, newValue) => setSelectedCountry(newValue ? newValue.label : "All Countries")}
        renderInput={(params) => <TextField {...params} label="Country" />}
      />
      <Button variant="contained">Add Office</Button>
      </Box>
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
            {filteredBranches.map((branch) => (
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
