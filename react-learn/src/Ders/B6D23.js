// Bölüm 6 : React Redux ve React Router

// Ders 23 React Router Dom V6 Kullanımı (URL ve Bileşen Eşleme)

import { RouterProvider } from "react-router-dom";
import "../App.css";
import routes from "../components/B6D23/routes/routes";

function B6D23() {

    return (
        <>
            <div className="App">
                <RouterProvider router={routes} />
            </div>
        </>
    )
}

export default B6D23;

/*



*/