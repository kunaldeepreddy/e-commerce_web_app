import React, { Suspense, lazy } from "react";
import Login from "./Login.js";
import Register from "./Register.js";
import { Backdrop, useTheme } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';
// import Header from "./Header.js";
// import Home from './Home.js'
// import ProductsPage from "./ProductsPage.js";
// import AboutUs from "./AboutUs.js";
// import ContactUs from "./ContactUs.js";
// import Footer from "./Footer.js";
import NotFound from "./NotFound.js";
import { Route, Routes, Navigate } from "react-router-dom";
const Home = lazy(() => import("./Home.js"));
const ProductsPage = lazy(()=>import("./ProductsPage.js"));
const AboutUs = lazy(()=>import("./AboutUs.js"));
const ContactUs = lazy(()=>import("./ContactUs.js"));
const Footer = lazy(()=>import("./Footer.js"));
const Header = lazy(()=>import("./Header.js"));
const Layout = () => {
    const theme = useTheme();
  return (
    <>
      <Suspense fallback={<Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={true}
    >
      <CircularProgress color={theme.palette.primary.secondary} />
    </Backdrop>}>
        <Header />
        <Routes>
          <Route path="/home" exact element={<Home />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Suspense>
    </>
  );
};

function delayForDemo(promise) {
    return new Promise(resolve => {
      setTimeout(resolve, 2000);
    }).then(() => promise);
  }

export default Layout;
