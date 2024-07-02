import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select from "@mui/material/Select";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import * as React from "react";

const ProfileInfoForm = () => {
  const [value, setValue] = React.useState(dayjs("2022-04-17"));
  const [gender, setGender] = React.useState("");

  const handleChange = (event) => {
    setGender(event.target.value);
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <Typography
        variant="h6"
        component="h2"
        style={{
          marginBottom: "20px",
          display: "flex",
          justifySelf: "center",
          alignSelf: "center",
        }}
      >
        User Information
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "20px",
        }}
        component="form"
        noValidate
        autoComplete="off"
      >
        <FormControl style={{ width: "310px" }}>
          <InputLabel htmlFor="component-outlined">Name</InputLabel>
          <OutlinedInput
            id="component-outlined"
            defaultValue="Profile User Name"
            label="Name"
          />
        </FormControl>
        <FormControl style={{ width: "310px" }}>
          <InputLabel htmlFor="component-outlined">Surname</InputLabel>
          <OutlinedInput
            id="component-outlined"
            defaultValue="Profile User Surname"
            label="Surname"
          />
        </FormControl>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "20px",
        }}
        component="form"
        noValidate
        autoComplete="off"
      >
        <FormControl style={{ width: "310px" }}>
          <DatePicker
            label="Date of Birth"
            value={value}
            onChange={(newValue) => setValue(newValue)}
          />
        </FormControl>
        <FormControl style={{ width: "310px" }}>
          <InputLabel id="demo-simple-select-label">Gender</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={gender}
            label="Gender"
            onChange={handleChange}
          >
            <MenuItem value={10}>Male</MenuItem>
            <MenuItem value={20}>Female</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "20px",
        }}
        component="form"
        noValidate
        autoComplete="off"
      >
        <FormControl style={{ width: "310px" }}>
          <InputLabel htmlFor="component-outlined">Email</InputLabel>
          <OutlinedInput
            id="component-outlined"
            defaultValue="profile.user@email.com"
            label="Email"
            type="email"
          />
        </FormControl>
        <FormControl style={{ width: "310px" }}>
          <InputLabel htmlFor="component-outlined">Phone</InputLabel>
          <OutlinedInput
            id="component-outlined"
            defaultValue="+123456789"
            label="Phone"
            type="tel"
          />
        </FormControl>
        <Typography
          variant="h6"
          component="h2"
          style={{
            marginBottom: "20px",
            display: "flex",
            justifySelf: "start",
            alignSelf: "start",
          }}
        >
          Address
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "20px",
          }}
          component="form"
          noValidate
          autoComplete="off"
        >
          <FormControl style={{ width: "500px" }}>
            <InputLabel htmlFor="component-outlined">Address</InputLabel>
            <OutlinedInput
              id="component-outlined"
              defaultValue="Some Street of Address"
              label="Address"
            />
          </FormControl>
          <FormControl style={{ width: "120px" }}>
            <InputLabel htmlFor="component-outlined">Number</InputLabel>
            <OutlinedInput
              id="component-outlined"
              defaultValue="Street No."
              label="Number"
            />
          </FormControl>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "20px",
          }}
          component="form"
          noValidate
          autoComplete="off"
        >
          <FormControl style={{ width: "200px" }}>
            <InputLabel htmlFor="component-outlined">City</InputLabel>
            <OutlinedInput
              id="component-outlined"
              defaultValue="City"
              label="City"
            />
          </FormControl>
          <FormControl style={{ width: "200px" }}>
            <InputLabel id="demo-simple-select-label">State</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={gender}
              label="Gender"
              onChange={handleChange}
            >
              <MenuItem value={10}>State 1</MenuItem>
              <MenuItem value={20}>State 2</MenuItem>
            </Select>
          </FormControl>
          <FormControl style={{ width: "200px" }}>
            <InputLabel htmlFor="component-outlined">Zip</InputLabel>
            <OutlinedInput
              id="component-outlined"
              defaultValue="ZIP"
              label="ZIP"
              type="number"
            />
          </FormControl>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "start",
          alignItems: "start",
          flexWrap: "wrap",
          gap: "20px",
          marginLeft: "20px",
        }}
        component="form"
        noValidate
        autoComplete="off"
      >
        <Button variant="contained" width="50px" disabled>
          Save
        </Button>
      </Box>
    </div>
  );
};

export default ProfileInfoForm;
