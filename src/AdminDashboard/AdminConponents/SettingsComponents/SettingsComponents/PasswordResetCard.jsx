import { Button, FormControl, InputLabel, OutlinedInput } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import FormGroup from "@mui/material/FormGroup";
import * as React from "react";


const PasswordResetCard = () => {
  return (
    <Card
      sx={{ maxWidth: 1200 }}
      style={{ paddingBottom: "15px", marginBottom: "20px" }}
    >
      <CardHeader title="Password" subheader="Update Password" />
      <CardContent
        style={{
          marginLeft: "20px",
          marginRight: "20px",
          display: "flex",
          justifyContent: "start",
          alignItems: "start",
          gap: "50px",
        }}
      >
        <FormGroup style={{display:"flex", flexDirection:"column", gap:"20px"}}>
        <FormControl style={{ width: "600px" }}>
            <InputLabel htmlFor="component-outlined">Password</InputLabel>
            <OutlinedInput
              id="component-outlined"
              label="Password"
            />
          </FormControl>
          <FormControl style={{ width: "600px" }}>
            <InputLabel htmlFor="component-outlined">Confirm Password</InputLabel>
            <OutlinedInput
              id="component-outlined"
              label="Confirm Password"
            />
          </FormControl>
        </FormGroup>
      </CardContent>
      <CardActions
        disableSpacing
        style={{
          display: "flex",
          justifyContent: "end",
          alignItems: "end",
          alignSelf:"end",
          justifySelf:"end",
          marginLeft: "20px",
          marginRight: "20px",
        }}
      >
        <Button disabled variant="contained">
          Save Changes
        </Button>
      </CardActions>
    </Card>
  );
};

export default PasswordResetCard;
