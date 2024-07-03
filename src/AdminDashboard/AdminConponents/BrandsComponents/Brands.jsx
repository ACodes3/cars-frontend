import {
  Autocomplete,
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import carBrandsData from "../../../DummyData/CarBrandsDummyData";

const Brands = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleCountryChange = (event, value) => {
    setSelectedCountry(value);
  };

  const countries = [...new Set(carBrandsData.map((brand) => brand.country))]; // Extract unique countries

  const filteredBrands = selectedCountry
    ? carBrandsData.filter((brand) => brand.country === selectedCountry)
    : carBrandsData;

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Paper elevation={3} style={{ padding: "20px" }}>
          <Typography variant="h6" gutterBottom>
            Filter Brands by Country
          </Typography>
          <Autocomplete
            value={selectedCountry}
            onChange={handleCountryChange}
            options={[...countries]}
            renderInput={(params) => (
              <TextField {...params} label="Select Country" />
            )}
          />
        </Paper>
      </Grid>
      {filteredBrands.map((brand) => (
        <Grid item key={brand.id} xs={12} sm={6} md={4}>
          <Paper elevation={3}>
            <Card>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: "white" }}>
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      style={{ height: "100%" }}
                    />
                  </Avatar>
                }
                title={brand.name}
                subheader={`Country: ${brand.country}`}
              />
              <CardMedia
                component="img"
                height="400"
                width="auto"
                image={brand.logo} // Using logo as image for demo purposes
                alt={brand.name}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary">
                  {truncateText(brand.description, 90)}
                </Typography>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default Brands;
