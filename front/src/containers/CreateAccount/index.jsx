import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createAcoountService } from "../../services/UserServices";
import { useNavigate  } from "react-router-dom";

const CreateAccount = () => {
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");

  const onSubmit = () => {
    const payload = {
      name,
      email,
      mobile,
      address,
      password
    };

    if (!name || !email || !mobile || !address || !password || !cpassword) {
      alert("Fields cannot be empty");
    } else if (password != cpassword) {
      alert("Password and confirm password do not match");
    } else {
      createAcoountService(payload)
        .then((res) => {
          if (res.ok) {
            alert("Successfully created user account");
            navigate("/profile");
          } else {
            alert("oops! error occured...");
          }
        })
        .catch((err) => {
          alert("oops! error occured...");
          console.error("err!", err.message);
        });
    }
  };

  return (
    <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Create Account
      </Typography>
      <Box component="form" noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="name"
          label="Name"
          name="name"
          autoComplete="name"
          autoFocus
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          type="email"
          autoFocus
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="mobile"
          label="Mobile"
          name="mobile"
          autoComplete="mobile"
          autoFocus
          onChange={(e) => setMobile(e.target.value)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="address"
          label="Address"
          name="address"
          autoComplete="address"
          autoFocus
          onChange={(e) => setAddress(e.target.value)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="cpassword"
          label="Confirm Password"
          type="password"
          id="cpassword"
          autoComplete="current-password"
          onChange={(e) => setCPassword(e.target.value)}
        />
        <Button
          type="button"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={() => {
            onSubmit();
          }}
        >
          Continue
        </Button>
        <Grid container>
          <Grid item>
            <Link href="#" variant="body2">
              {"Already have an account? Sign In"}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default CreateAccount;
