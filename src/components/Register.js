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
import { PASSWORD_RULE, EMAIL_RULE, NAME_RULE ,PHONE_RULE} from "../utils/Validator/rule";
import "./Login.css";
import { useUserSignUpMutation } from "../store/index.js";

export default function Register(props) {
  const theme = useTheme();
  const navigate = useNavigate();
  const [userSignUp, registrationData] = useUserSignUpMutation();
  // console.log(registrationData);
  const [account, setAccount] = useState({ email: "", name: "", password: "" , mobile_number: ""});
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [mobileError, setMobileError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false)
  const [shakeEmailError, setShakeEmailError] = useState();
  const [shakeMobileError, setShakeMobileError] = useState();
  const [shakeNameError, setShakeNameError] = useState();
  const [shakePasswordError, setShakePasswordError] = useState();
  const [shakeConfirmPasswordError, setShakeConfirmPasswordError] = useState();
  const [shakePasswordMismatchError, setShakePasswordMismatchError] = useState();
  const [showPasswordMismatchError, setShowPasswordMismatchError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showInvalidCredentials, setShowInvalidCredentials] = useState(false);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  const handleClickShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);
  const handleMouseDownShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);
  const handelAccount = (property, event) => {
    const accountCopy = { ...account };
    accountCopy[property] = event.target.value;
    setAccount(accountCopy);
  };

  const isVerifiedSignUp = (async (email, name, mobile_number, password, confirm_password) => {
    let isEmailValid = Validator(email, EMAIL_RULE);
    let isNameValid = Validator(name, NAME_RULE);
    let isMobileNumberValid = Validator(mobile_number, PHONE_RULE);
    let isPasswordValid = Validator(password, PASSWORD_RULE);
    let isConfirmPasswordValid = Validator(confirm_password, PASSWORD_RULE);
    let isConfirmPasswordMatch = password === confirm_password;;
    setEmailError(!isEmailValid);
    setShakeEmailError(!isEmailValid);
    setNameError(!isNameValid);
    setShakeNameError(!isNameValid);
    setMobileError(!isMobileNumberValid);
    setShakeMobileError(!isMobileNumberValid);
    setPasswordError(!isPasswordValid);
    setShakePasswordError(!isPasswordValid);
    setConfirmPasswordError(!isConfirmPasswordValid);
    setShakeConfirmPasswordError(!isConfirmPasswordValid);
    setShowPasswordMismatchError(!isConfirmPasswordMatch);
    setShakePasswordMismatchError(!isConfirmPasswordMatch);
    if (isEmailValid && isNameValid && isMobileNumberValid && isPasswordValid && isConfirmPasswordValid && isConfirmPasswordMatch) {
      userSignUp(account)
        .unwrap()
        .then((response) => {
          // console.log(response);
          if (response && response.status === true) {
            setShowInvalidCredentials(false);
            authService.doLogIn(account.email, response.data);
            dispatch(loginSuccess(response.data))
            setAccount({ email: "", password: "" });
            enqueueSnackbar("Signed Up successfully", {
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

  const handleNameShakeEnd = () => {
    setShakeNameError(false);
  };

  const handleMobileShakeEnd = () => {
    setShakeMobileError(false);
  };

  const handlePasswordShakeEnd = () => {
    setShakePasswordError(false);
    setShakePasswordMismatchError(false);
  };

  const handleConfirmPasswordShakeEnd = () => {
    setShakeConfirmPasswordError(false);
    setShakePasswordMismatchError(false);
  };

  const handelLogin = async () => {
    await isVerifiedSignUp(account.email, account.name, account.mobile_number, account.password, account.confirm_password);
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
        sm={8}
        md={6}
        lg={5}
        component={Paper}
        elevation={1}
        square
        sx={{
          margin: (theme) => theme.spacing(2, 6),
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "5%",
        }}
      >
        <Typography component="h5" variant="h5" sx={{ fontWeight: 600 }}>
          Sign Up
        </Typography>
        <Typography component="h6" variant="caption" color="#9096B2">
          Please sign up by entering required details below
        </Typography>
        <TextField
          onAnimationEnd={handleNameShakeEnd}
          className={shakeNameError === true ? "shake" : ""}
          onChange={(event) => handelAccount("name", event)}
          helperText={nameError === true ? "invalid name" : ""}
          label="Name"
          type= "text"
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="userName"
          placeholder="Name"
          name="userName"
          autoFocus
          sx={{
            fieldset: { borderColor: "#b6b6bf", borderRadius: "2px" },
            "& .MuiOutlinedInput-input": {
              padding: "10px 14px", // <-- added zero padding instruction
            },
          }}
        />
        <TextField
          onAnimationEnd={handleEmailShakeEnd}
          className={shakeEmailError === true ? "shake" : ""}
          onChange={(event) => handelAccount("email", event)}
          helperText={emailError === true ? "invalid email" : ""}
          label="Email Id"
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          placeholder="Email Address"
          name="email"
          sx={{
            fieldset: { borderColor: "#b6b6bf", borderRadius: "2px" },
            "& .MuiOutlinedInput-input": {
              padding: "10px 14px", // <-- added zero padding instruction
            },
          }}
        />
        <TextField
          onAnimationEnd={handleMobileShakeEnd}
          className={shakeMobileError === true ? "shake" : ""}
          onChange={(event) => handelAccount("mobile_number", event)}
          helperText={mobileError === true ? "invalid mobile number" : ""}
          label="Mobile Number"
          type="number"
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="mobile_number"
          placeholder="Mobile Number"
          name="mobile_number"
          sx={{
            fieldset: { borderColor: "#b6b6bf", borderRadius: "2px" },
            "& .MuiOutlinedInput-input": {
              padding: "10px 14px", // <-- added zero padding instruction
            },
          }}
        />
        <TextField
          onAnimationEnd={handlePasswordShakeEnd}
          className={shakePasswordError === true || shakePasswordMismatchError === true ? "shake" : ""}
          onChange={(event) => handelAccount("password", event)}
          helperText={passwordError === true ? "Password is required": showPasswordMismatchError === true ? "passwords are not matching.please check again" : "" }
          type={showPassword ? "text" : "password"}
          label="Password"
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
        <TextField
          onAnimationEnd={handleConfirmPasswordShakeEnd}
          className={(shakeConfirmPasswordError === true || shakePasswordMismatchError === true) ? "shake" : "" }
          onChange={(event) => handelAccount("confirm_password", event)}
          helperText={confirmPasswordError === true ? "Password is required" : showPasswordMismatchError === true ? "passwords are not matching.please check again" : "" }
          type={showConfirmPassword ? "text" : "password"}
          label="Confirm Password"
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="confirm_password"
          placeholder="Confirm Password"
          id="confirm_password"
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
                  aria-label="toggle confirm password visibility"
                  onClick={handleClickShowConfirmPassword}
                  onMouseDown={handleMouseDownShowConfirmPassword}
                >
                  {showConfirmPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        {/* <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" /> */}
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
          disabled={registrationData.isLoading}
          loading={registrationData.isLoading}
          onClick={handelLogin}
        >
          Sign In
        </LoadingButton>
        <Grid container sx={{justifyContent:"center"}}>
          <Grid item>
            <Link
              href="/login"
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
              {"Already have an Account? Log In"}
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
