import React, { lazy, Suspense, useContext, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import BodyComp from "./src/components/Body";
import Footer from "./src/components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./src/components/About";
import RestaurantMenu from "./src/components/RestaurantMenu";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import Profile from "./src/components/Profile";
import Shimmer from "./src/components/Shimmer";
import userContext from "./src/utils/userContext";

const AppLayout = () =>{
    const users = useContext(userContext);

    const [user, setUser] = useState({
        name:'ABC',
        email:"test"
    })
    return (
        <>
        <userContext.Provider value={{user:user, setUser:setUser}}>
            <Header/>
            <Outlet/>
            <Footer />
        </userContext.Provider>
        </>

    )
}
const InstaMart = lazy(()=> import("./src/components/mart/InstaMart"));
const appRouter = createBrowserRouter([
{
    path: "/",
    element: <AppLayout/>,
    errorElement: <Error/>,
    children:[
        {
            path: '/about',
            element: <About/>,
            children:[
                {
                    path:'profile',
                    element:<Profile/>
                }
            ]
        },
        {
            path: '/',
            element: <BodyComp/>
        },
        {
            path: '/home',
            element: <BodyComp/>
        },
        {
            path: '/contact',
            element: <Contact/>
        },
        {
            path: '/restaurant/:id',
            element: <RestaurantMenu/>
        },
        {
            path: '/instamart',
            element: <Suspense fallback={<Shimmer/>}>
                <InstaMart/>
                </Suspense>
        }
    ]
}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(AppLayout());
root.render(<RouterProvider router={appRouter}/>)
