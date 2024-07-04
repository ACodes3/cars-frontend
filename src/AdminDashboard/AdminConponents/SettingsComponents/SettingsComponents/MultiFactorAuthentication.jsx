import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import CheckIcon from '@mui/icons-material/Check';
import { Button } from "@mui/material";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import * as React from "react";

const MultiFactorAuthentication = () => {
  return (
    <Card
      sx={{ maxWidth: 1200 }}
      style={{ paddingBottom: "15px", marginBottom: "20px" }}
    >
      <CardHeader title="Multi factor authentication" />
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
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "40px",
          }}
        >
          <Card sx={{ minWidth: 500 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Off
              </Typography>
              <Typography variant="h5" component="div">
                Authenticator app
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Use an authenticator app to generate one time security codes.
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" size="medium">
                Set up authenticator{" "}
                <ArrowRightAltIcon/>
              </Button>
            </CardActions>
          </Card>
          <Card sx={{ minWidth: 500 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Off
              </Typography>
              <Typography variant="h5" component="div">
                Text message
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Use your mobile phone to receive security codes via SMS.
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" size="medium">
                Set up your phone{" "}
                <ArrowRightAltIcon/>
              </Button>
            </CardActions>
          </Card>
        </Box>
      </CardContent>
      <CardActions
        disableSpacing
        style={{
          marginLeft: "20px",
          marginRight: "20px",
        }}
      >
        <Alert icon={<CheckIcon fontSize="inherit" />} severity="success" style={{width:"100%"}}>
          87% of the technology industry has already implemented MFA and it is
          the top sector with the highest MFA adoption rate.{" "}
        </Alert>
      </CardActions>
    </Card>
  );
};

export default MultiFactorAuthentication;
