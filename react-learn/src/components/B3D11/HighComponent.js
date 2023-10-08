import { useState } from "react";
import NumberChanger from "./NumberChanger";
import NumberShower from "./NumberShower";
import NumberShower2 from "./NumberShower2";

// function HighComponent() {

// const [number, setNumber] = useState("00000");


//     return(
//         <>
//         <div>
//             {number}
//             <NumberChanger highComponentdenGelen={setNumber} />
//         </div>
//         </>
//     )
// }


// export default HighComponent;


/*
yeni conponent olusturup app.js de cagırdık 
probs ve useState in birlikte kullanımına bakalım
yapacagımız sey
HighComponent de bir state tutalım
bu state i asagıdaki bir componentte degistireceğiz
baska bir component te de bunu gösterelim
burda state actık 
baska bir component olusturduk NumberChanger
NumberChanger i burda cagırdık
NumberChanger da state yok buradaki state i orda kullanmak istiyoruz
cagırdıgımız yere set ettik
NumberChanger a props verdik ismi önemsiz 
altındaki funchion da da props.highComponentdenGelen diyip cagırdık
bu isim de onemsiz gelende aynı isim verilir setNumber gibi
anlamak için oyle yazdım
kodlama mantıgı sagdakini sola at 
birde basta {number} verdik sayıyı gösterdik onu da burda yazmak istemiyorum
onuda baska bir component de gostersin istiyoruz
*/

//---------------------------------------------------------------------


function HighComponent() {

  const [number, setNumber] = useState("00000");

  return (
    <>
      <div>
        <NumberShower number={number} />
        <NumberShower2 number={number} />
        <NumberChanger highComponentdenGelen={setNumber} />
      </div>
    </>
  );
}

export default HighComponent;

/*
bu sefer de numarayı baska yere tasıyacagız
numarayı tutan ne number bunu prop olarak gonderelim
nerede gostermek istiyorsak oraya gonderecegız
NumberShower da gostermek istiyoruz
ordada prop olarak cagıralım
*/