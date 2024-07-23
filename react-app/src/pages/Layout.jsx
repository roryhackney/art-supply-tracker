import React from "react";
import {Outlet} from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

const Layout = () => {
    return (
        <>
            <Header isLoggedIn={false}/>
            <main>
                <Outlet />
            </main>
            <Footer/>
        </>
    );
}

export default Layout;

//TODO: set html title based on which url