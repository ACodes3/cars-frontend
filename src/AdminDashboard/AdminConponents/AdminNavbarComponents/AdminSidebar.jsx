import OfficeIcon from "@mui/icons-material/Business";
import CarRentalIcon from '@mui/icons-material/CarRental';
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import PeopleIcon from "@mui/icons-material/People";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import { Link } from "react-router-dom";

const items = [
  { text: "Employees", path: "/admin-dashboard/employees", icon: PeopleIcon },
  { text: "Renters", path: "/admin-dashboard/renters", icon: PersonPinIcon },
  { text: "Offices", path: "/admin-dashboard/offices", icon: OfficeIcon },
];

const itemsTwo = [
  { text: "Cars", path: "/admin-dashboard/cars", icon: DirectionsCarIcon },
  { text: "Brands", path: "/admin-dashboard/brands", icon: CarRentalIcon },
];

const drawerWidth = 240;

const AdminSidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <List>
          {items.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton component={Link} to={item.path}>
                <ListItemIcon>{React.createElement(item.icon)}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {itemsTwo.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton component={Link} to={item.path}>
                <ListItemIcon>{React.createElement(item.icon)}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default AdminSidebar;
