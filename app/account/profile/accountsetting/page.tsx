"use client"
import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  FormControl,
  InputAdornment,
  IconButton,
  Container,
  Grid,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";

const AccountSettingsForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSaveChanges = () => {
    // Add logic to save changes
  };

  const handleLocationChange = () => {
    // Add logic to set Google location
  };

  return (
    <Container maxWidth="xs">
      <Typography variant="h5" align="center" gutterBottom>
        Account Settings
      </Typography>
      <form>
        <TextField
          label="Current Password"
          type={showPassword ? "text" : "password"}
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleClickShowPassword} edge="end">
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label="New Password"
          type={showPassword ? "text" : "password"}
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleClickShowPassword} edge="end">
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label="Email Address"
          defaultValue="pristia@gmail.com"
          InputProps={{
            readOnly: true,
          }}
          fullWidth
        />
        <TextField label="New Email Address" fullWidth />
        <TextField label="Location" defaultValue="7th villa narges, New cairo, Egypt" InputProps={{ readOnly: true }} fullWidth />
        <Button variant="contained" color="primary" onClick={handleSaveChanges}>
          Save Changes
        </Button>
        <Button color="primary">Forgot Password?</Button>
        <TextField label="New Location" fullWidth InputProps={{ endAdornment: <InputAdornment position="end"><IconButton onClick={handleLocationChange}><VisibilityOff /></IconButton></InputAdornment> }}/>
        <Button variant="contained" color="primary" onClick={handleSaveChanges}>
          Save Changes
        </Button>
      </form>
    </Container>
  );
};

export default AccountSettingsForm;
