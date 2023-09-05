import Header from './Header.js'
import Login from './Login.js'
import Home from './Home.js'
import Footer from './Footer.js'
import NotFound from './NotFound.js'
import { Route, Routes, Navigate } from 'react-router-dom';
const Layout = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route element={<NotFound />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            <Footer />
        </>
    );
}

export default Layout;