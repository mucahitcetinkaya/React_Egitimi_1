// Ders 9 React State Nedir ?

import { useState } from "react";

function Clicker() {
  /*
useState
buna reactta hook deniyor
useState in içine yazılan count un ilk degeri oluyor
useState bize bir degisken ve onu ayarlamak için funchion veriyor
isim onemli değil verdigin isme gore genelde basına funchion adının basına set yazıyolar
cagırdıgımız fuchion da set ile tarayıcıyıda guncellemıs olduk
artık ekranda da sayılar guncellenıyor
ekranda yazanın 1 eksiğini console da gosteriyor 
sebebi setCount metodunun asenkron olmamasından kaynaklanıyor
js kodu beklemeden alt satıra gecıyor ondan dolayı
genelde console log kullanılmaz ekranda yazan neyse o alınır
degiskenler degistirilirken state kullanılır
deger veripte bunu al gibi bişey yazma
count + 1 dedik 1 er 1 er artıyor 10 yazsan 10 olurdu dururdu
+ 10 desen 10 ar 10 ar artar
------------------
2 farklı funchion cagırıp arttır azalt yaptık
*/
  const [count, setCount] = useState(0);

  //   function handleClick() {

  //     setCount(count + 1);
  //     //console.log(count);
  //   }

  function Arttır() {
    setCount(count + 1);
  }
  function Azalt() {
    setCount(count - 1);
  }

  return (
    <div>
      <div>Sayaç : {count}</div>
      <button onClick={Arttır}>Arttır</button>
      <button onClick={Azalt}>Azalt</button>
    </div>
  );
}

export default Clicker;

/*
Ders 9 notları 
click yapınca console da rakamlar artıyor ama
count ekrana yazdırdık o sayı ilk yazıldıgı degerde kalıyor degismiyor
sebebi state olmaması 
kod basılınca html olarak kalıyor degisiklik olmuyor bundan dolayı
component kendini yenilemiyor
state olusturalım
*/