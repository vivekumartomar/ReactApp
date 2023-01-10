import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import BodyComp from "./src/components/Body";
import Footer from "./src/components/Footer";


const AppLayout = () =>{
    return (
        <>
        <Header/>
        <BodyComp/>
        <Footer />
        </>

    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(AppLayout());
