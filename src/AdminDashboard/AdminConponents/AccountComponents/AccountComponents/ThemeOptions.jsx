import SettingsIcon from "@mui/icons-material/Settings";
import { Box, Button, Container, IconButton } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import FormControl from "@mui/material/FormControl";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import * as React from "react";

const ThemeOptions = () => {
  const [value, setValue] = React.useState("system");

  const handleChange = (event, newValue) => {
    if (newValue !== null) {
      setValue(newValue);
    }
  };

  const renderToggleButton = (val, label, description) => (
    <ToggleButton
      value={val}
      aria-label={`${val} mode`}
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        border: value === val ? "2px solid #3f51b5" : "1px solid rgba(0, 0, 0, 0.12)",
        borderRadius: "4px",
        padding: "10px",
        width: '100%',
      }}
    >
      <Box style={{ textAlign: "left" }}>
        <div>{label}</div>
        <div style={{ fontSize: "12px", color: "#666" }}>
          {description}
        </div>
      </Box>
      {value === val && (
        <div
          style={{
            width: "12px",
            height: "12px",
            backgroundColor: "#3f51b5",
            borderRadius: "50%",
            marginLeft: "10px",
          }}
        />
      )}
    </ToggleButton>
  );

  return (
    <Card
      sx={{ maxWidth: 1200, margin: 'auto' }}
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
          <SettingsIcon sx={{ fontSize: 40 }} />
        </IconButton>
        <CardHeader title="Theme Options" subheader="Change your theme" />
      </Container>
      <CardContent
        style={{
          marginLeft: "20px",
          marginRight: "20px",
          display: "flex",
          justifyContent: "start",
          alignItems: "start",
        }}
      >
        <FormControl component="fieldset" style={{ width: '100%' }}>
          <ToggleButtonGroup
            value={value}
            exclusive
            onChange={handleChange}
            aria-label="theme mode"
            orientation="vertical"
            style={{ display: "flex", flexDirection: "column", gap: "10px", width: '100%' }}
          >
            {renderToggleButton("light", "Light mode", "Best for bright environments")}
            {renderToggleButton("dark", "Dark mode", "Recommended for dark rooms")}
            {renderToggleButton("system", "System", "Adapts to your device's theme")}
          </ToggleButtonGroup>
        </FormControl>
      </CardContent>
      <CardActions
        disableSpacing
        style={{
          display: "flex",
          justifyContent: "end",
          justifySelf:"end",
          alignSelf:"end",
          alignItems: "end",
          marginLeft: "20px",
          marginRight: "20px",
        }}
      >
        <Button disabled variant="contained">
          Save Changes
        </Button>
      </CardActions>
    </Card>
  );
};

export default ThemeOptions;
