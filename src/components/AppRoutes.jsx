import React from 'react';
import { Navbar, Footer} from '../components';
import { MainScreen } from '../screens';

const AppRoutes = () => {
    return (
        <>
            <Navbar />

            <MainScreen />

            <Footer />
        </>
    );
};

export default AppRoutes;
