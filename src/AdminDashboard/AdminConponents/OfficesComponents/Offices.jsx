import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import * as React from "react";
import OfficeMap from "./OfficeComponents/OfficeMap";
import OfficeTable from "./OfficeComponents/OfficeTable";


const Offices = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={7}>
          <OfficeTable />
        </Grid>
        <Grid item xs={5}>
          <OfficeMap />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Offices;
