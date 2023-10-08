// BÖLÜM 4: React Array'ler Login Form UseEffect Hook'u ve Axios

// Ders 14 React useEffect Hook'u

import { useState } from "react";
import "../App.css";
import EffectExample from "../components/B4D14/EffectExample";

function B4D14() {

    const [example, setExample] = useState("Mücahit");

    function handleClick() {
        setExample("Çetinkaya");
    }

    return (
        <>
            <div className="App">
                <EffectExample example={example} />
                <button onClick={handleClick}>App Buton</button>
            </div>
        </>
    )
}

export default B4D14;

/*
Ders 14 Notları
useEffect hook nedir ? 
state lerdeki prop lardan sonra kullanılır
yani state lerdeki proplardan sonra bişey olmasını istiyorsan
useEffect kullanırsın
*/