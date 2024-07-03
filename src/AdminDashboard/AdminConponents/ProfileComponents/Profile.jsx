import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import * as React from "react";
import ProfileInfoCard from "./ProfileInfoCard/ProfileInfoCard";
import ProfileInfoForm from "./ProfileInfoForm/ProfileInfoForm";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Profile = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h4" component="h2" style={{ marginBottom: "20px" }}>
        General Information
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={7}>
          <Item style={{ paddingTop: "40px", paddingBottom: "35px" }}>
            <ProfileInfoForm />
          </Item>
        </Grid>
        <Grid item xs={5}>
          <ProfileInfoCard />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Profile;
