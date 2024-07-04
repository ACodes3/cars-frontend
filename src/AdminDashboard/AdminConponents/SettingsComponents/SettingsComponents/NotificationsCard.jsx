import EditIcon from "@mui/icons-material/Edit";
import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import IconButton from "@mui/material/IconButton";
import * as React from "react";

const NotificationsCard = () => {
  return (
    <Card sx={{ maxWidth: 1200 }}style={{paddingBottom:"15px", marginBottom:"20px"}}>
      <CardHeader title="Notifications" subheader="Manage the notifications" />
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
        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Product updates"
          />
          <FormControlLabel control={<Checkbox />} label="Security Updates" />
        </FormGroup>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Email"
          />
          <FormControlLabel control={<Checkbox />} label="GMS" />
        </FormGroup>
      </CardContent>
      <CardActions
        disableSpacing
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginLeft: "20px",
          marginRight: "20px",
        }}
      >
        <IconButton aria-label="edit">
          <EditIcon />
        </IconButton>
        <Button disabled variant="contained">
          Save Changes
        </Button>
      </CardActions>
    </Card>
  );
};

export default NotificationsCard;
