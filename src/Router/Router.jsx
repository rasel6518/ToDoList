
import {
    createBrowserRouter,

} from "react-router-dom";

import Home from "../Pages/Home/Home/Home";
import Root from "../Root/Root";
import About from "../Pages/About/About";
import ErrorPage from "../Components/ErrorPage/ErrorPage";


export const Router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/aboutc",
                element: <About />,
            },


        ],

    },
]);