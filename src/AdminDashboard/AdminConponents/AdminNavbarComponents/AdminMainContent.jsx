import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import { useParams } from "react-router-dom";
import Account from "../AccountComponents/Account";
import Brands from "../BrandsComponents/Brands";
import Cars from "../CarsComponents/Cars";
import Employees from "../EmployeesComponents/Employees";
import Offices from "../OfficesComponents/Offices";
import Profile from "../ProfileComponents/Profile";
import Renters from "../RentersComponents/Renters";
import Settings from "../SettingsComponents/Settings";

const AdminMainContent = () => {
  let { item } = useParams();
  let contentComponent;

  switch (item) {
    case "employees":
      contentComponent = <Employees />;
      break;
    case "renters":
      contentComponent = <Renters />;
      break;
    case "offices":
      contentComponent = <Offices />;
      break;
    case "cars":
      contentComponent = <Cars />;
      break;
    case "brands":
      contentComponent = <Brands />;
      break;
    case "profile":
      contentComponent = <Profile/>;
      break;
    case "account":
      contentComponent = <Account />;
      break;
    case "settings":
      contentComponent = <Settings />;
      break;
    default:
      contentComponent = null;
  }
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />
      {contentComponent}
    </Box>
  );
};

export default AdminMainContent;
