import React from 'react';
import Navber from '../../Shared/Navber/Navber';
import { Outlet } from 'react-router';
import Footer from '../../Shared/Footer/Footer';

const RootLayout = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default RootLayout;