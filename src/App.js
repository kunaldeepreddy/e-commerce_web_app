import "./App.css";
import React from "react";
import Layout from "./components/Layout.js";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./styles/theme.js";
import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider, closeSnackbar } from "notistack";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <SnackbarProvider
          maxSnack={3}
          autoHideDuration={2000}
          action={(snackbarId) => (
            // <button onClick={() => closeSnackbar(snackbarId)}>Dismiss</button>
            <IconButton
              aria-label="dismiss"
              size="small"
              onClick={() => closeSnackbar(snackbarId)}
            >
              <CloseIcon
                fontSize="inherit"
                sx={{
                  color: theme.palette.primary.light,
                }}
              />
            </IconButton>
          )}
        >
          <Layout />
        </SnackbarProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
