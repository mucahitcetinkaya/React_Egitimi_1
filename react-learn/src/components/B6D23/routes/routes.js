import { createBrowserRouter } from "react-router-dom";
import Home from "../elements/Home";
import About from "../elements/About";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/about",
        element: <About />
    }
]);

export default routes;

/*

suanda 1 den fazla sayfamız oldu 
farklı endpoint e gidince farklı yerler cıkıyor
şimdi button koyup tıklayınca gitmek istiyorum

*/