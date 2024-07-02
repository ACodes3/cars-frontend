import EarbudsIcon from '@mui/icons-material/Earbuds';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LuggageIcon from '@mui/icons-material/Luggage';
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PersonIcon from '@mui/icons-material/Person';
import ShareIcon from "@mui/icons-material/Share";
import Avatar from "@mui/material/Avatar";
import Button from '@mui/material/Button';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Stack from '@mui/material/Stack';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { red } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import * as React from "react";
import CarImage from "./Images/ABARTH-124-SPIDER.webp";
import ArabathLogo from "./Images/fiat-arabath-logo.png";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function createData(specification, numericValue) {
  return { specification, numericValue };
}

const rows = [
  createData("Engine", 1.4),
  createData("HP", 170),
  createData("0-100 km/h (in seconds)", 6.8),
  createData("Top Speed", 232),
];

const CarCard = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              <img
                src={ArabathLogo}
                alt="Car Logo"
                style={{ height: "100%" }}
              />
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="ABARTH 124 SPIDER"
          subheader="from 250€ per day"
        />
        <CardMedia
          component="img"
          height="160"
          width="auto"
          src={CarImage}
          alt="Car Image"
        />
        <CardContent>
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 280 }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead style={{ backgroundColor: "#A9CDEF" }}>
                <TableRow>
                  <TableCell>Specifications</TableCell>
                  <TableCell align="right">Value</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.specification}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.specification}
                    </TableCell>
                    <TableCell align="right">{row.numericValue}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
          <Stack spacing={2} direction="row" alignSelf={"center"} size="small">
            <Button variant="outlined" disabled size="small"><PersonIcon/> 4</Button>
            <Button variant="outlined" disabled size="small"><LuggageIcon/> 2</Button>
            <Button variant="outlined" disabled size="small"><EarbudsIcon/> Manual</Button>
            </Stack>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
};

export default CarCard;
