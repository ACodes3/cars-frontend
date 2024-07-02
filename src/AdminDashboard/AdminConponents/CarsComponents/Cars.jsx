import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import React from "react";
import CarCard from "./CarCard/CarCard";
import SearchComponent from "./SearchComponent/SearchComponent";

const Cars = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <SearchComponent />
      <Container>
        <Typography variant="h4" component="h2">
          All Cars
        </Typography>
      </Container>
      <Container style={{display:"flex", flexWrap:"wrap", justifyContent:"space-between", alignItems:"center", gap:"50px"}}>
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
      </Container>
    </div>
  );
};

export default Cars;
