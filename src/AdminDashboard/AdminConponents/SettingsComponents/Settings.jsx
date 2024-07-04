import { Box, Container } from "@mui/material";
import React from "react";
import NotificationsCard from "./SettingsComponents/NotificationsCard";
import PasswordResetCard from "./SettingsComponents/PasswordResetCard";

const Settings = () => {
  return (
    <Container>
      <Box>
        <NotificationsCard />
      </Box>
      <Box>
        <PasswordResetCard />
      </Box>
    </Container>
  );
};

export default Settings;
