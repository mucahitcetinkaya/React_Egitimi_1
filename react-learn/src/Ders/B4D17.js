//BÖLÜM 4: React Array'ler Login Form UseEffect Hook'u ve Axios

// Ders 17 React DatePicker kullanımı(Tarih Seçen Input)

import { useState } from "react";
import "../App.css";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function B4D17() {

    const [myDate, setMyDate] = useState();

    console.log(myDate);

    return (
        <>
            <div className="App">
                <ReactDatePicker
                    selected={myDate}
                    onChange={date => setMyDate(date)}
                    showTimeSelect={true}
                />
            </div>
        </>
    )
}

export default B4D17;

/*
Ders 17 Notları
component cagırdık paketin direk kendi componenti yeni bişey acmadık
css i import ettik
tıklayınca bir işlem olmuyor state gerekiyor onu yazalım
*/