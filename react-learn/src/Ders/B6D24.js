// Bölüm 6 : React Redux ve React Router

// Ders 24 React Profile Projesi

import { RouterProvider } from "react-router-dom";
import "../App.css";
import routes from "../components/B6D24/routes/routes";


export default function B6D24() {

    return (
        <>
            <div className="App">
                <h1>User Pages</h1>
                <RouterProvider router={routes}/>
            </div>
        </>
    )
}


/*



*/