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
  useTheme
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
const pages = ["Home", "Products", "About Us", "Contact Us"];
const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const theme = useTheme();
  const handleLoginButtonclick = () => {
    const urlObject = new URL(window.location.href);
    const currentEndpoint = urlObject.pathname;
    if (currentEndpoint !== '/login') {
      const currentURL = window.location.href;
      const newURL = currentURL + 'login';
      window.location.href = newURL;
    }
  }
  return (
    <React.Fragment>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List sx={{ width: '60vw', backgroundColor: theme.palette.secondary.main }}>
          <ListItem >
            <Button style={{ alignItems: 'left' }} onClick={handleLoginButtonclick} sx={{
              color: theme.palette.primary.light, borderColor: theme.palette.primary.light,
              transition: 'box-shadow 0.3s', // Adding a smooth transition for the hover effect
              '&:hover': {
                borderColor: theme.palette.primary.light,
                boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.3)', // Shadow on hover
              },
            }} variant="outlined" startIcon={<PersonOutlineOutlinedIcon />}>
              Login
            </Button>
          </ListItem>
          <ListItem sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <Button sx={{ color: theme.palette.primary.light }} variant="text" startIcon={<BookmarkAddOutlinedIcon />}>
              Wishlist
            </Button>
            <Button sx={{ color: theme.palette.primary.light }} variant="text" startIcon={<ShoppingCartOutlinedIcon />}>
              Cart
            </Button>
          </ListItem>
        </List>
        <Divider />
        <List>
          {pages.map((page, index) => (
            <ListItemButton key={index}>
              <ListItemIcon>
                <ListItemText>{page}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
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
