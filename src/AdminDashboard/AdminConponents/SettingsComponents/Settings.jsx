import { Box, Container } from "@mui/material";
import React from "react";
import MultiFactorAuthentication from "./SettingsComponents/MultiFactorAuthentication";
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
      <Box>
        <MultiFactorAuthentication />
      </Box>
    </Container>
  );
};

export default Settings;
