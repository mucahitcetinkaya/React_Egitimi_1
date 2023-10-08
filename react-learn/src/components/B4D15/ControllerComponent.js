import { useState } from "react";
import BiggerComponent from "./BiggerComponent";
import LessComponent from "./LessComponent";

function ControllerComponent() {

  const [number, setNumber] = useState(0);

  return (
    <>
      <div>
        <input value={number} onChange={e => { setNumber(e.target.value) }} />
      </div>

      {number < 5 && <LessComponent />}

      {number > 5 && <BiggerComponent />}

      {/* {number == 5 && <div>Eşittir</div>} */}

      <div hidden={number > 5}> hidden 5 ten küçük</div>

      <div hidden={number < 5}> hidden 5 ten büyük</div>

      {number > 5 ? <div>turnerif 5 ten büyük</div> : <div>turnerif 5 ten küçük</div>}

    </>
  )
}

export default ControllerComponent;

/*
istediğimiz 
inputta bir deger yazıyor default olarak 0 verdik 
altına da yazı yazdık 
                Değer 5'ten küçüktür.
5 e kadar yazılırsa inputa küçüktür yazacak
5 den büyükse büyüktür yazacak
component olarak yazarsan eger tarayıcıda incelede gostermez farklı yerde oldugu için
hidden olarak yazarsan incelede gösterir
*/