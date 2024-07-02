import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import * as React from "react";
import ProfilePic from "./Images/portrait-young.jpg";

const ProfileInfoCard = () => {
  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        width="50%"
        height="auto"
        src={ProfilePic}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          User Name and Surname
        </Typography>
      </CardContent>
      <CardActions
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Button size="small">
          <IconButton aria-label="edit">
            <EditIcon />
          </IconButton>
        </Button>
        <Button size="small">
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProfileInfoCard;
