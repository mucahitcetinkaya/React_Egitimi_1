// Bölüm 6 : React Redux ve React Router

// Ders 22 React Redux ve Redux Toolkit Kullanımı

import "../App.css";
import { useDispatch, useSelector } from 'react-redux';
import { increment ,changePointByInput } from "../components/B6D22/slices/numberSlice";
import { useState } from "react";

function B6D22() {

    const number = useSelector(state => state.number);
    const point = number.point;

    const dispatch = useDispatch();

    const [inputValue, setInputValue] = useState("");

    function handleClick() {
        dispatch(increment());
    }

    function handleForPoint() {
        dispatch(changePointByInput(inputValue));
    }

    return (
        <>
            <div className="App">
                {number.value}
                <button onClick={handleClick}>Arttır</button>
                <div>
                    {point}
                    <input value={inputValue} onChange={(e) => {setInputValue(e.target.value)}}/>
                    <button onClick={handleForPoint}>Point'i Değiştir</button>
                </div>
            </div>
        </>
    )
}

export default B6D22;

/*

index.js den geldik

bir ara program hata verdi react-redux yerine sadece redux ı yuklemişim package.json dan kaldırdım programı kapadım actım tekrar yukledim calıstı

numberSlice a gidelim

redux fonksiyonları cagrılırken dispatch oluşturup onun içine vermen lazım

*/