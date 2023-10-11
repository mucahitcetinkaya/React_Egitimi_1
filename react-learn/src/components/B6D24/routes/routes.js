import { createBrowserRouter } from "react-router-dom";
import SigninPage from "../elements/SigninPage";
import HomePage from "../elements/HomePage";
import ProfilePage from "../elements/ProfilePage";

const routes = createBrowserRouter([
    {
        path : "/",
        element: <SigninPage />
    },
    {
        path: "/home",
        element: <HomePage />
    },
    {
        path: "/profile",
        element: <ProfilePage />
    }
])

export default routes;