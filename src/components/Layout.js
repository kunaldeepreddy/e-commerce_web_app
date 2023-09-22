import React from "react";
import Header from './Header.js'
import Login from './Login.js'
import Home from './Home.js'
import ProductsPage from './ProductsPage.js'
import AboutUs from './AboutUs.js'
import ContactUs from './ContactUs.js'
import Footer from './Footer.js'
import NotFound from './NotFound.js'
import { Route, Routes, Navigate } from 'react-router-dom';
const Layout = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/home" exact element={<Home />} />
                <Route path="/products" element={<ProductsPage />}/>                   
                <Route path="/AboutUs" element={<AboutUs />}/>
                <Route path="/ContactUs" element={<ContactUs />}/>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
            <Footer />
        </>
    );
}

export default Layout;