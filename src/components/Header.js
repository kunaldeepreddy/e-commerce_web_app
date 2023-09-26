import React, { useState, useEffect } from "react";
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  TextField,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
  InputAdornment,
  IconButton,
  Grid,
  Icon,
  Menu,
  MenuItem,
} from "@mui/material";
import { logout } from "../store";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useSnackbar } from "notistack";
import authService from "./../service/authService";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import DrawerComp from "./Drawer";
import useGetUserAvatar from "../hooks/useGetUserAvatar";

const Header = (props) => {
  const [value, setValue] = useState(0);
  const userData = useSelector((state) => state.user.user);
  // console.log(userData);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const tabRemoveFocusStyle= {};
  useEffect(() => {
    const pathToValue = {
      "/home": 0,
      "/products": 1,
      "/aboutUs": 2,
      "/contactUs": 3,
    };
    const value = pathToValue[window.location.pathname] || 0;
    setValue(value);
    if(![0,1,2,3].includes(value))
    {
      tabRemoveFocusStyle = {
        '& .MuiTabs-indicator': { display: 'none' }
      }
    }
  }, []);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleUserButtonClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleUserButtonClose = () => {
    setAnchorEl(null);
  };

  const handleLogoutClose = () => {
    authService.logOut();
    dispatch(logout());
    enqueueSnackbar("logged out successfully", {
      variant: "success",
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "right",
      },
    });
    navigate("/login");
    setAnchorEl(null);
  };

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down(800));
  const isSmallScreenMatch = useMediaQuery(theme.breakpoints.down(350));

  const tabStyle = {
    minWidth: { xs: 50 },
    paddingLeft: { xs: 0 },
    paddingRight: { xs: 0 },
  };

  const { userAvatar } = useGetUserAvatar(32, userData?._id);

  return (
    <React.Fragment>
      <AppBar
        position="static"
        sx={{
          boxShadow: "none",
          backgroundColor: "white",
          "& .MuiToolbar-root": {
            paddingLeft: "0",
            paddingRight: "0",
          },
        }}
      >
        <Toolbar>
          {isMatch ? (
            <>
              <Grid
                container
                spacing={2}
                sx={{
                  placeItems: "center",
                  backgroundColor: theme.palette.secondary.main,
                  padding: "4px 0 4px 0",
                }}
              >
                <Grid item xs={1}>
                  <DrawerComp align="right" sx={{ paddingRight: "0" }} />
                </Grid>
                {!isSmallScreenMatch ? (
                  <Grid item xs={3}>
                    <Typography
                      align="center"
                      color={theme.palette.text.tertiary}
                      sx={{ typography: { sm: "body1", xs: "body2" } }}
                    >
                      Homely Haven
                    </Typography>
                  </Grid>
                ) : (
                  ""
                )}
                <Grid item xs={8}>
                  <TextField
                    hiddenLabel
                    style={{ width: "99%" }}
                    sx={{
                      fieldset: { borderColor: "#b6b6bf" },
                      backgroundColor: theme.palette.primary.light,
                      justifyContent: "center",
                      "& .MuiInputBase-input": {
                        fontSize: "0.8rem",
                        padding: "8px 8px",
                      },
                    }}
                    InputProps={{
                      style: {
                        paddingRight: "0",
                      },
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            size="small"
                            sx={{
                              backgroundColor: theme.palette.primary.main,
                              borderRadius: "0",
                              width: "100%",
                            }}
                          >
                            <SearchIcon
                              sx={{
                                color: "white",
                                "&:hover": {
                                  color: theme.palette.primary.main,
                                },
                              }}
                            />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
              </Grid>
            </>
          ) : (
            <>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100vw",
                }}
              >
                <Grid
                  container
                  sx={{
                    placeItems: "center",
                    backgroundColor: theme.palette.secondary.main,
                    paddingTop: "4px",
                    paddingBottom: "3px",
                  }}
                >
                  {!userData?.user && !authService.getUserToken() ? (
                    <>
                    <Grid item xs={8} md={9} ></Grid>
                    <Grid item xs={4} md={3} sx={{display:"flex", flexDirection:"row",gap:"5%", flexWrap:"nowrap", justifyContent:"center"}}>
                      <Button
                        sx={{
                          lineHeight: "0",
                          width: '30%',
                          backgroundColor: theme.palette.secondary.main,
                          borderRadius: "2px",
                          justifyContent:"center",
                          "&:hover": {
                            backgroundColor: theme.palette.primary.light,
                            borderColor: theme.palette.primary.light,
                          },
                          "&:hover .MuiTypography-root": {
                            color: theme.palette.text.tertiary
                          }
                        }}
                        component={Link}
                        to={"/login"}
                      >
                        <Typography
                          color={theme.palette.primary.light}
                          variant="caption"
                        >
                          Log In
                        </Typography>
                        {/* <Icon>
                          <PersonOutlineOutlinedIcon />
                        </Icon> */}
                      </Button>
                      <Button
                        sx={{
                          lineHeight: "0",
                          width: '30%',
                          backgroundColor: theme.palette.secondary.main,
                          borderRadius: "2px",
                          justifyContent:"center",
                          "&:hover": {
                            backgroundColor: theme.palette.primary.light,
                            borderColor: theme.palette.primary.light,
                          },
                          "&:hover .MuiTypography-root": {
                            color: theme.palette.text.tertiary
                          }
                        }}
                        component={Link}
                        to={"/register"}
                      >
                        <Typography
                          color={theme.palette.primary.light}
                          variant="caption"
                        >
                          Sign Up
                        </Typography>
                        {/* <Icon>
                          <PersonOutlineOutlinedIcon />
                        </Icon> */}
                      </Button>
                    </Grid>
                    </>
                  ) : (
                    ""
                  )}
                  {userData?.user || authService.getUserToken() != undefined ? (
                    <>
                    {/* <Grid item xs={9}></Grid>
                      <Grid item xs={1}> */}
                    <Grid item xs={8} md={9} ></Grid>
                    <Grid item xs={4} md={3} sx={{display:"flex", flexDirection:"row",gap:"10%", flexWrap:"nowrap", placeItems:"center"}}>
                        <Button
                           sx={{
                            width: '30%',
                            backgroundColor: theme.palette.secondary.main,
                            borderRadius: "2px",
                            justifyContent:"center",
                            "&:hover": {
                              backgroundColor: theme.palette.primary.light,
                              borderColor: theme.palette.primary.light,
                            },
                            "&:hover .MuiTypography-root": {
                              color: theme.palette.text.tertiary
                            }
                          }}
                        >
                          <Typography
                            color={theme.palette.primary.light}
                            variant="caption"
                            sx={{padding:"2px 0 2px 0"}}
                          >
                            Wishlist
                          </Typography>
                        </Button>
                      {/* </Grid>
                      <Grid item xs={1}> */}
                        <Typography
                          color={theme.palette.primary.light}
                          variant="caption"
                        >
                          <Button
                            sx={{
                              lineHeight: "0",
                              width: '50%',
                              backgroundColor: theme.palette.secondary.main,
                              borderRadius: "2px",
                              justifyContent:"center",
                              "&:hover": {
                                backgroundColor: theme.palette.primary.light,
                                borderColor: theme.palette.primary.light,
                              },
                              "&:hover .MuiSvgIcon-root": {
                                color: theme.palette.text.tertiary
                              }
                            }}
                          >
                            <Icon>
                              <ShoppingCartOutlinedIcon sx={{color:theme.palette.primary.light}}/>
                            </Icon>
                          </Button>
                        </Typography>
                      {/* </Grid>
                      <Grid item xs={1}> */}
                        <Button
                          sx={{
                            lineHeight: "0",
                          }}
                          id="demo-positioned-button"
                          aria-controls={
                            open ? "demo-positioned-menu" : undefined
                          }
                          aria-haspopup="true"
                          aria-expanded={open ? "true" : undefined}
                          onClick={handleUserButtonClick}
                          title={userData.name}
                        >
                          <img style={{
                            border:`2px solid ${theme.palette.text.tertiary}`,
                            padding:"1px",
                            borderRadius:"50%"
                          }} src={userAvatar} alt={userData.name} />
                        </Button>
                        <Menu
                          id="demo-positioned-menu"
                          aria-labelledby="demo-positioned-button"
                          anchorEl={anchorEl}
                          open={open}
                          onClose={handleUserButtonClose}
                          anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "left",
                          }}
                          transformOrigin={{
                            vertical: "top",
                            horizontal: "left",
                          }}
                        >
                          <MenuItem onClick={handleUserButtonClose}>
                            Profile
                          </MenuItem>
                          <MenuItem onClick={handleLogoutClose}>
                            Logout
                          </MenuItem>
                        </Menu>
                      </Grid>
                    </>
                  ) : (
                    ""
                  )}
                </Grid>

                <Grid
                  container
                  sx={{ placeItems: "center", background: "white" }}
                >
                  <Grid item xs={1} md={1.5}></Grid>
                  <Grid item xs={2} md={1.5}>
                    <Typography
                      color={theme.palette.text.primary}
                      sx={{ typography: { md: "body1", lg: "h6" } }}
                    >
                      Homely Haven
                    </Typography>
                  </Grid>
                  <Grid item xs={5.5} md={4.5}>
                    <Tabs
                      // indicatorColor="white"
                      sx={{ "&.MuiButtonBase-root ": { outline: "none" }, ...tabRemoveFocusStyle }}
                      textColor="primary"
                      value={value}
                      onChange={(e, value) => setValue(value)}
                      variant="fullWidth"
                      centered
                    >
                      <Tab
                        sx={{
                          fontSize: {
                            md: "0.7rem",
                            sm: "0.6rem",
                          },
                          ...tabStyle,
                        }}
                        label="Home"
                        component={Link}
                        to="/home"
                      ></Tab>
                      <Tab
                        sx={{
                          fontSize: {
                            md: "0.7rem",
                            sm: "0.6rem",
                          },
                          ...tabStyle,
                        }}
                        label="Products"
                        component={Link}
                        to="/products"
                      ></Tab>
                      <Tab
                        sx={{
                          fontSize: {
                            md: "0.7rem",
                            sm: "0.6rem",
                          },
                          ...tabStyle,
                        }}
                        label="About Us"
                        component={Link}
                        to="/aboutUs"
                      ></Tab>
                      <Tab
                        sx={{
                          fontSize: {
                            md: "0.7rem",
                            sm: "0.6rem",
                          },
                          ...tabStyle,
                        }}
                        label="Contact Us"
                        component={Link}
                        to="/contactUs"
                      ></Tab>
                    </Tabs>
                  </Grid>
                  <Grid item xs={2} md={3}>
                    <TextField
                      hiddenLabel
                      sx={{
                        width: "100%",
                        fieldset: { borderColor: "#b6b6bf" },
                        justifyContent: "center",
                        paddingTop: "3px",
                        paddingLeft: "5%",
                        "& .MuiInputBase-input": {
                          fontSize: "0.8rem",
                          padding: "8px 8px",
                        },
                      }}
                      InputProps={{
                        style: {
                          paddingRight: "0",
                        },
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              size="small"
                              sx={{
                                backgroundColor: theme.palette.primary.main,
                                width: "100%",
                                borderRadius: "0",
                              }}
                            >
                              <SearchIcon
                                sx={{
                                  color: "white",
                                  "&:hover": {
                                    color: theme.palette.primary.main,
                                  },
                                }}
                              />
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={1.5}></Grid>
                </Grid>
              </div>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
