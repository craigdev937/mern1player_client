import React from "react";
import { createBrowserRouter, 
    RouterProvider } from "react-router-dom";
import { NotFound } from "../components/NotFound";
import { Players } from "../containers/Players";
import { Add } from "../containers/Add";
import { Edit } from "../containers/Edit";

const RRouter = createBrowserRouter([
    {
        path: "/",
        element: <Players />,
        errorElement: <NotFound />
    },
    {
        path: "/add",
        element: <Add />,
        errorElement: <NotFound />
    },
    {
        path: "/edit/:id",
        element: <Edit />,
        errorElement: <NotFound />
    }
]);

export const Main = () => {
    return (
        <React.Fragment>
            <RouterProvider router={RRouter} />
        </React.Fragment>
    );
};


