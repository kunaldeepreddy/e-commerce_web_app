import React, { useState } from "react";
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
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
// import { AiOutlineSearch } from 'react-icons/ai';
import DrawerComp from "./Drawer";
const Header = (props) => {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  // console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  // console.log(isMatch);
  const isSmallScreenMatch = useMediaQuery(theme.breakpoints.down(350));

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
                    <Typography align="center" color={theme.palette.text.tertiary} sx={{ typography: { sm: 'body1', xs: 'body2' } }}>
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
                  <Grid item xs={9}></Grid>
                  <Grid item xs={1}>
                    <Button
                      sx={{
                        lineHeight: "0",
                        color: theme.palette.primary.light,
                      }}
                      component={Link}
                      to={"/login"}
                    >
                      <Typography
                        color={theme.palette.primary.light}
                        variant="caption"
                      >
                        Login
                      </Typography>
                      <Icon>
                        <PersonOutlineOutlinedIcon />
                      </Icon>
                    </Button>
                  </Grid>
                  <Grid item xs={1}>
                    <Button
                      sx={{
                        lineHeight: "0",
                        color: theme.palette.primary.light,
                      }}
                    >
                      <Typography
                        color={theme.palette.primary.light}
                        variant="caption"
                      >
                        Wishlist
                      </Typography>
                    </Button>
                  </Grid>
                  <Grid item xs={1}>
                    <Typography
                      color={theme.palette.primary.light}
                      variant="caption"
                    >
                      <Button
                        sx={{
                          lineHeight: "0",
                          color: theme.palette.primary.light,
                        }}
                      >
                        <Icon>
                          <ShoppingCartOutlinedIcon />
                        </Icon>
                      </Button>
                    </Typography>
                  </Grid>
                </Grid>

                <Grid
                  container
                  sx={{ placeItems: "center", background: "white" }}
                >
                  <Grid item xs={1.5}></Grid>
                  <Grid item xs={1.5}>
                    <Typography color={theme.palette.text.primary} sx={{ typography: { md: 'body1', lg: 'h6' } }}>
                      Homely Haven
                    </Typography>
                  </Grid>
                  <Grid item xs={5.5} md={4.5}>
                    <Tabs
                      // indicatorColor="white"
                      sx={{ "&.MuiButtonBase-root ": { outline: "none" } }}
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
                        width:"100%",
                        fieldset: { borderColor: "#b6b6bf" },
                        justifyContent: "center",
                        paddingTop: "3px",
                        paddingLeft: '5%',
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
