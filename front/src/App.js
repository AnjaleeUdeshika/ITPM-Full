import React from 'react';
import { Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SignIn from './containers/SignIn';
import SignInOptions from './containers/SIgnInOptions';
import CreateAccount from './containers/CreateAccount';
import Profile from './containers/Profile';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route exact path="/" element={<SignIn />} />
        <Route path="/register" element={<CreateAccount />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/login-options" element={<SignInOptions />} />
        <Route path="/profile" element={<Profile />} />
        <Route exact path='/' element={<ProtectedRoute/>}>
          <Route exact path='/profile' element={<Profile/>}/>
        </Route>
      </Routes>
      {/* <Container component="main" maxWidth="xs">
        <CreateAccount/>
      </Container> */}
      {/* <NavBar/>
      <Profile/> */}
    </ThemeProvider>
  );
}

export default App;
