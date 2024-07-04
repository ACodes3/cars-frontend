import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Button, Container, IconButton, Switch } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import * as React from "react";

const PrivacyCard = () => {
  return (
    <Card
      sx={{ maxWidth: 1200 }}
      style={{ paddingBottom: "15px", marginBottom: "20px" }}
    >
      <Container
        style={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        <IconButton aria-label="key" style={{ cursor: "auto" }}>
          <AccountCircleIcon sx={{ fontSize: 40 }} />
        </IconButton>
        <CardHeader title="Privacy" />
      </Container>
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
        <FormGroup style={{ width: "100%" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <FormControlLabel
              control={<Switch defaultChecked />}
              label="Make contact info public"
              labelPlacement="start"
              style={{
                flex: 1,
                display: "flex",
                justifyContent: "space-between",
              }}
            />
          </div>
          <div style={{ fontSize: "14px", color: "#666", marginLeft: "25px" }}>
            Means that anyone viewing your profile will be able to see your
            contact details.
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              marginTop: "10px",
            }}
          >
            <FormControlLabel
              control={<Switch />}
              label="Available to hire"
              labelPlacement="start"
              style={{
                flex: 1,
                display: "flex",
                justifyContent: "space-between",
              }}
            />
          </div>
          <div style={{ fontSize: "14px", color: "#666", marginLeft: "25px" }}>
            Toggling this will let your teammates know that you are available
            for acquiring new projects.
          </div>
        </FormGroup>
      </CardContent>
      <CardActions
        disableSpacing
        style={{
          display: "flex",
          justifyContent: "end",
          justifySelf: "end",
          alignSelf: "end",
          alignItems: "end",
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

export default PrivacyCard;
