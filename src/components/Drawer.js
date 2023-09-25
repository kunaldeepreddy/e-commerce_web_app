import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Button,
  Divider,
  ListItem,
  useTheme,
  Stack,
  Typography,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LogoutIcon from '@mui/icons-material/Logout';
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";
import { logout } from "../store";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useSnackbar } from "notistack";
import authService from "./../service/authService";
import useGetUserAvatar from "../hooks/useGetUserAvatar";
const pages = [
  {
    name: "Home",
    path: "/home",
  },
  {
    name: "Products",
    path: "/products",
  },
  {
    name: "About Us",
    path: "/aboutUs",
  },
  {
    name: "Contact Us",
    path: "/contactUs",
  },
];
const DrawerComp = () => {
  const userData = useSelector((state) => state.user.user);
  // console.log(userData);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [openDrawer, setOpenDrawer] = useState(false);
  const theme = useTheme();
  const { userAvatar } = useGetUserAvatar(30, userData?._id);

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
    setOpenDrawer(false);
    navigate("/login");
  };
  return (
    <React.Fragment>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List
          style={{ width: "clamp(20vw, 300px, 60vw)" }}
          sx={{ backgroundColor: theme.palette.secondary.main }}
        >
          <ListItem>
            {!userData?.user && !authService.getUserToken() ? (
              <Button
                component={Link}
                to={"/login"}
                style={{ marginLeft: "15%" }}
                sx={{
                  alignItems: "center",
                  width: '70%',
                  color: theme.palette.primary.light,
                  borderColor: theme.palette.primary.light,
                  borderRadius: "2px",
                  // transition: "box-shadow 0.3s", // Adding a smooth transition for the hover effect
                  "&:hover": {
                    backgroundColor: theme.palette.primary.light,
                    color: theme.palette.secondary.main,
                    borderColor: theme.palette.primary.light,
                    // boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.3)", // Shadow on hover
                  },
                }}
                variant="outlined"
                startIcon={<PersonOutlineOutlinedIcon />}
                onClick={() => setOpenDrawer(false)}
              >
                Login
              </Button>
            ) : (
              <Stack
                spacing={{ xs: 1, sm: 2 }}
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                flexWrap="wrap"
                // sx={{alignItems:"center"}}
              >
                <Button
                  sx={{
                    lineHeight: "0",
                  }}
                  title="Profile"
                  // onClick={handleUserButtonClick}
                >
                  <img src={userAvatar} alt={userData.name} />
                </Button>
                <Typography
                  color={theme.palette.text.tertiary}
                  sx={{
                    fontSize: "clamp(1rem, 4vw, 1.2rem)",
                    textTransform: "capitalize",
                  }}
                >
                  {userData.name}
                </Typography>
              </Stack>
            )}
          </ListItem>
          <ListItem
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Button
              sx={{ color: theme.palette.primary.light }}
              variant="text"
              startIcon={<BookmarkAddOutlinedIcon />}
            >
              Wishlist
            </Button>
            <Button
              sx={{ color: theme.palette.primary.light }}
              variant="text"
              startIcon={<ShoppingCartOutlinedIcon />}
            >
              Cart
            </Button>
          </ListItem>
        </List>
        <Divider />
        <List>
          {pages.map((page, index) => (
            <ListItemButton
              sx={{
                "&:hover .MuiTypography-body1": {
                  color: theme.palette.primary.main,
                  // backgroundColor: theme.palette.secondary.main,
                  cursor: "pointer",
                },
              }}
              key={index}
              component={Link}
              to={page.path}
              onClick={() => setOpenDrawer(false)}
            >
              <ListItemIcon>
                <ListItemText>{page.name}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
        {userData?.user || authService.getUserToken() != undefined ? (
          <Button
            style={{ alignItems: "center", position: "absolute", bottom: "2px",}}
            sx={{
              paddingLeft: "5%",
              width: '100%',
              color: theme.palette.secondary.main,
              // borderColor: theme.palette.primary.light,
              // transition: "box-shadow 0.3s", // Adding a smooth transition for the hover effect
              "&:hover": {
                backgroundColor: theme.palette.secondary.light,
                color: theme.palette.primary.light,
                // boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.3)", // Shadow on hover
              },
            }}
            variant="text"
            endIcon={<LogoutIcon />}
            onClick={handleLogoutClose}
          >
            Logout
          </Button>
        ) : "" }
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon color="white" />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;
