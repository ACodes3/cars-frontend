import { Box, Container } from "@mui/material";
import React from 'react';
import DeleteAccount from './AccountComponents/DeleteAccount';
import PrivacyCard from './AccountComponents/PrivacyCard';
import ThemeOptions from './AccountComponents/ThemeOptions';

const Account = () => {
  return (
    <Container>
      <Box>
        <ThemeOptions />
      </Box>
      <Box>
        <PrivacyCard />
      </Box>
      <Box>
        <DeleteAccount />
      </Box>
    </Container>
  )
}

export default Account