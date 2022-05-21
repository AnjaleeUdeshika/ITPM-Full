import React, { useEffect, useState, useRef } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormGroup from "@mui/material/FormGroup";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import PrintIcon from "@mui/icons-material/Print";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import NavBar from "../../components/NavBar";
import {
  getUserData,
  updateUserProfileService,
  deleteUserService,
  logoutUser,
} from "../../services/UserServices";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import { useNavigate } from "react-router-dom";
import { useReactToPrint } from 'react-to-print';

const Input = styled("input")({
  display: "none",
});

const Profile = () => {
  let navigate = useNavigate();
  const componentRef = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("");
  const [events, setEvents] = useState([]);
  const [profilePic, setProfilePic] = useState(null);

  const eventOptions = ["Wedding", "Birthday", "Fashion", "Other"];

  useEffect(() => {
    if (!sessionStorage.getItem("token")) {
      navigate("/login");
    } else {
      getUserData()
        .then((res) => {
          setName(res.response.data.name);
          setEmail(res.response.data.email);
          setMobile(res.response.data.mobile);
          setAddress(res.response.data.address);
          setType(res.response.data.type);
          setEvents(res.response.data.events);
          console.log("INN", res);
        })
        .catch((err) => {
          alert("oops! error occured...");
          console.error("err!", err.message);
        });
    }
  }, []);

  const onSubmit = () => {
    const payload = {
      name,
      email,
      mobile,
      address,
      password,
      type,
      events,
    };

    if (!name || !email || !mobile || !address || !password) {
      alert("Fields cannot be empty");
    } else {
      updateUserProfileService(payload)
        .then((res) => {
          console.log("XX", res);
          if (res.ok) {
            alert("successfully updated");
          }
        })
        .catch((err) => {
          alert("oops! error occured...");
          console.error("err!", err.message);
        });
    }
  };

  const handleEventChange = (event) => {
    let event_list = events;
    let check = event.target.checked;
    let checked_event = event.target.value;
    if (check) {
      setEvents((events) => [...events, checked_event]);
    } else {
      var index = event_list.indexOf(checked_event);
      if (index > -1) {
        event_list.splice(index, 1);
        setEvents({
          events: event_list,
        });
      }
    }
  };

  const handleProfilePicChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      // setProfilePic(URL.createObjectURL(img));
      setProfilePic(event.target.files[0]);
    }
  };

  const deleteProfile = () => {
    confirmAlert({
      title: "Confirm to delete",
      message: "Are you sure want to delete your account ?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            deleteUser();
          },
        },
      ],
    });
  };

  const deleteUser = () => {
    deleteUserService()
      .then((res) => {
        console.log("XX", res);
        if (res.ok) {
          alert("successfully deleted");
          logoutUser();
          navigate("/login");
        }
      })
      .catch((err) => {
        alert("oops! error occured...");
        console.error("err!", err.message);
      });
  };

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <NavBar />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        ref={componentRef}
      >
        <Typography component="h1" variant="h5">
          My Profile
        </Typography>
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          badgeContent={
            <label htmlFor="icon-button-file">
              <Input
                accept="image/*"
                id="icon-button-file"
                type="file"
                onChange={(event) => {
                  handleProfilePicChange(event);
                }}
              />
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <PhotoCameraIcon />
              </IconButton>
            </label>
          }
        >
          <Avatar
            src="https://i.pravatar.cc/600"
            sx={{ width: 200, height: 200 }}
          />
        </Badge>
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Button
            variant="outlined"
            startIcon={<PrintIcon />}
            sx={{ mr: 2 }}
            onClick={handlePrint}
          >
            Print
          </Button>
          <Button variant="outlined" startIcon={<EditIcon />} sx={{ mr: 2 }}>
            Edit
          </Button>
          <Button
            variant="outlined"
            startIcon={<DeleteIcon />}
            onClick={deleteProfile}
          >
            Delete
          </Button>
        </Box>

        <Box component="form" noValidate sx={{ mt: 1 }}>
          <Divider flexItem={true} textAlign="left" sx={{ my: 2 }}>
            Personal Details
          </Divider>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            autoFocus
            value={name}
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
            value={email}
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
            value={mobile}
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
            value={address}
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
          <Divider flexItem={true} textAlign="left" sx={{ my: 3 }}>
            Other Details
          </Divider>
          <Box
            component="div"
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <FormControl sx={{ my: 2 }}>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Type
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                onChange={(e) => setType(e.target.value)}
              >
                <FormControlLabel
                  value="Photographer"
                  control={<Radio />}
                  label="Photographer"
                />
                <FormControlLabel
                  value="Videographer"
                  control={<Radio />}
                  label="Videographer"
                />
                <FormControlLabel
                  value="Both"
                  control={<Radio />}
                  label="Both"
                />
              </RadioGroup>
            </FormControl>
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Events
              </FormLabel>
              <FormGroup>
                {eventOptions.map((item, ind) => {
                  return (
                    <FormControlLabel
                      key={ind}
                      control={<Checkbox name={item} value={item} />}
                      label={item}
                      onChange={(e) => handleEventChange(e)}
                    />
                  );
                })}
              </FormGroup>
            </FormControl>
          </Box>

          {/* <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        /> */}
          <Button
            type="button"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={() => {
              onSubmit();
            }}
          >
            Update Profile
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default Profile;
