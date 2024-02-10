
import {
    createBrowserRouter,

} from "react-router-dom";

import Home from "../Pages/Home/Home/Home";
import Root from "../Root/Root";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            }

        ],

    },
]);