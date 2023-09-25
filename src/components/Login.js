import { React, useEffect, useState, useCallback } from "react";
import {
  TextField,
  Link,
  Button,
  Paper,
  Grid,
  Typography,
  useTheme,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../store';
import { useSnackbar } from "notistack";
import LoadingButton from "@mui/lab/LoadingButton";
import { useNavigate } from "react-router-dom";
import authService from "./../service/authService";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Validator from "../utils/Validator";
import { DEFAULT_RULE, EMAIL_RULE } from "../utils/Validator/rule";
import "./Login.css";
import { useUserLoginMutation } from "../store/index.js";

export default function Login(props) {
  const theme = useTheme();
  const navigate = useNavigate();
  const [userLogin, loginData] = useUserLoginMutation();
  // console.log(loginData);
  const [account, setAccount] = useState({ email: "", password: "" });
  const [passwordError, setPasswordError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [shakeEmailError, setShakeEmailError] = useState();
  const [shakePasswordError, setShakePasswordError] = useState();
  const [showInvalidCredentials, setShowInvalidCredentials] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const handelAccount = (property, event) => {
    const accountCopy = { ...account };
    accountCopy[property] = event.target.value;

    setAccount(accountCopy);
  };

  const isVerifiedUser = (async (email, password) => {
    let isEmailValid = Validator(email, EMAIL_RULE);
    let isPasswordValid = Validator(password, DEFAULT_RULE);
    setEmailError(!isEmailValid);
    setShakeEmailError(!isEmailValid);
    setPasswordError(!isPasswordValid);
    setShakePasswordError(!isPasswordValid);
    if (isEmailValid && isPasswordValid) {
      // let userList = users.find(
      //   (user) => user.email === email && user.password === password
      // );
      userLogin(account)
        .unwrap()
        .then((response) => {
          // console.log(response);
          if (response && response.status === true) {
            setShowInvalidCredentials(false);
            authService.doLogIn(account.email, response.data);
            dispatch(loginSuccess(response.data))
            setAccount({ email: "", password: "" });
            enqueueSnackbar("logged in successfully", {
              variant: "success",
              anchorOrigin: {
                vertical: "bottom",
                horizontal: "right",
              },
            });
            navigate("/home");
          } else {
            setShowInvalidCredentials(true);
          }
          return response;
        })
        .catch((err) => {
          setShowInvalidCredentials(true);
          return;
        });
    } else {
      return;
    }
  });

  const handleEmailShakeEnd = () => {
    setShakeEmailError(false);
  };

  const handlePasswordShakeEnd = () => {
    setShakePasswordError(false);
  };

  const handelLogin = async () => {
    await isVerifiedUser(account.email, account.password);
  };

  return (
    <Grid
      container
      component="main"
      sx={{ paddingTop: "5vw", alignItems: "center", justifyContent: "center" }}
    >
      <Grid
        item
        xs={10}
        sm={6}
        md={5}
        lg={3.5}
        component={Paper}
        elevation={1}
        square
        sx={{
          margin: (theme) => theme.spacing(2, 6),
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "3rem",
        }}
      >
        <Typography component="h5" variant="h5" sx={{ fontWeight: 600 }}>
          Login
        </Typography>
        <Typography component="h6" variant="caption" color="#9096B2">
          Please login using account detail bellow
        </Typography>
        <TextField
          onAnimationEnd={handleEmailShakeEnd}
          className={shakeEmailError === true ? "shake" : ""}
          onChange={(event) => handelAccount("email", event)}
          helperText={emailError === true ? "invalid email" : ""}
          hiddenLabel
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          placeholder="Email Address"
          name="email"
          autoFocus
          sx={{
            fieldset: { borderColor: "#b6b6bf", borderRadius: "2px" },
            "& .MuiOutlinedInput-input": {
              padding: "10px 14px", // <-- added zero padding instruction
            },
          }}
        />
        <TextField
          onAnimationEnd={handlePasswordShakeEnd}
          className={shakePasswordError === true ? "shake" : ""}
          onChange={(event) => handelAccount("password", event)}
          helperText={passwordError === true ? "Password is required" : ""}
          type={showPassword ? "text" : "password"}
          hiddenLabel
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          placeholder="Password"
          id="password"
          autoComplete="current-password"
          sx={{
            fieldset: { borderColor: "#b6b6bf", borderRadius: "2px" },
            "& .MuiOutlinedInput-input": {
              padding: "10px 14px", // <-- added zero padding instruction
            },
          }}
          InputProps={{
            // <-- This is where the toggle button is added.
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        {/* <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" /> */}
        <Grid container sx={{ alignItems: "center", justifyContent: "center" }}>
          <Grid item>
            <Link
              href="#"
              variant="caption"
              underline="none"
              color="#9096B2"
              sx={{
                "&:hover": {
                  color: theme.palette.primary.main,
                  textDecoration: "underline",
                  cursor: "pointer",
                },
              }}
            >
              "Forgot your password?"
            </Link>
          </Grid>
        </Grid>
        {showInvalidCredentials && (
          <h5 style={{ marginBottom: 0, color: theme.palette.error.main }}>
            Invalid credentials. Please try again.
          </h5>
        )}
        <LoadingButton
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{
            margin: (theme) => theme.spacing(2, 0, 2),
            borderRadius: "2px",
            textTransform: "none",
            "&:hover": {
              color: theme.palette.primary.main,
              backgroundColor: theme.palette.primary.light,
              borderColor: theme.palette.primary.main,
              boxShadow: `0px 0px 0px 1px ${theme.palette.primary.main}`,
            },
          }}
          disabled={loginData.isLoading}
          loading={loginData.isLoading}
          onClick={handelLogin}
        >
          Sign In
        </LoadingButton>
        <Grid container>
          <Grid item>
            <Link
              href="#"
              variant="caption"
              underline="none"
              color="#9096B2"
              sx={{
                "&:hover": {
                  color: theme.palette.primary.main,
                  textDecoration: "underline",
                  cursor: "pointer",
                },
              }}
            >
              {"Don’t have an Account?Create account"}
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
