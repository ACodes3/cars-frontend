import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";
import carData from "../../../DummyData/CarsDummyData";
import CarCard from "./CarCard/CarCard";
import SearchComponent from "./SearchComponent/SearchComponent";

const Cars = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <SearchComponent />
      <Container style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
        <Typography variant="h4" component="h2">
          All Cars
        </Typography>
        <Button variant="contained">Add Car</Button>
      </Container>
      <Container
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "50px",
        }}
      >
        <Grid container spacing={3}>
          {carData.map((car) => (
            <Grid item key={car.id} xs={12} sm={6} md={4}>
              <CarCard car={car} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Cars;
