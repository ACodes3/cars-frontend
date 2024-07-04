import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import { Button, Container, IconButton } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import * as React from "react";

const DeleteAccount = () => {
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
          <WarningAmberIcon sx={{ fontSize: 40 }} />
        </IconButton>
        <CardHeader title="Delete Account" />
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
        <p>
          Delete your account and all of your source data. This is irreversible.
        </p>
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
        <Button variant="contained" color="error">
          Delete Account
        </Button>
      </CardActions>
    </Card>
  );
};

export default DeleteAccount;
