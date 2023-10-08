// BÖLÜM 4: React Array'ler Login Form UseEffect Hook'u ve Axios

// Ders 12 React Array'ler Nasıl Ekrana Basılır ve Güncellenir (Map ve Key Kullanımı)

import { useState } from "react";
import "../App.css";
import NameShower from "../components/B4D12/NameShower";

function B4D12() {

    //------------ useStatesiz version
    // const arr =["Muhammet","Mücahit","Zayn","Zeyn"]

    // function handleClick(){
    //   arr.push("Can");
    //   console.log(arr);
    //   useState olmadan sadece ekle ile basıyoruz console da her ekleye basınca ekliyor ama ekranda gostermiyor sebebi useState yok
    // }

    // useState olan
    // useUState i yukarı da cagırmayı unutma
    // setArr i cagırmazsan degisiklik olmaz
    // setArr i cagırdık ekleye bastık yine degişiklik olmadı sebebi memory de arr olarak kayıtlıdı degisliklik oldugunu anlamadı ilk halini basmaya devam ediyor ama console da hala ekleyince can yazıyor
    // bunuda çözmemiz için kopya olarak arr olusturmamız lazım
    // const [arr, setArr] = useState(["Muhammet", "Mücahit", "Zayn", "Zeyn"]);

    // function handleClick() {
    //   arr.push("Can");
    //   console.log(arr);
    //   setArr(arr);
    // }

    //------------------- kopya arr olusturma
    // olusturdugun array i kopyanın içine bastın onu orda sakladın 
    // degistirdiğin uzerınden işlem yapınca degısıklık oluyor

    const [arr, setArr] = useState(["Muhammet", "Mücahit", "Zayn", "Zeyn"]);

    function handleClick() {
        console.log(arr);
        const tempArr = [...arr];
        tempArr.push("Can");
        setArr(tempArr);
        console.log(tempArr);
    }

    return (
        <>
            <div className="App">
                {/* <NameShower name={"Mücahit"} />
        <NameShower name={arr[0]} />
        <NameShower name={arr[1]} />
        <NameShower name={arr[2]} />
        <NameShower name={arr[3]} /> */}
                {/* yukarıdaki gibi yapabilirsin ama array uzunlugunu bilmiyorsun diyelim boyle tek tek yazamazsın */}
                {/* {arr.map((name) => {
          return name + " ";
        })} */}
                {/* napmıs oldu diziye girdi 
        0. ındex i gördü yazdırdı
        1. ixdex i gördü yazdırdı vs 
        */}

                {/*
        name olarak degilde div olarak cagıralım 
        yalnız burda soyle bir sorun var console da hata veriyor
        key hatası bunun sebebi diziye key ver diyor
        ekleme cıkarma olsa hangisinin ne oldugunu bilmiyor
        key verki ben bunları koylayabileyim diyor
        bunun içinde name e 2. parametre yazabilirsin
        ama bu uygulamada guzel degıl boyle olmaz
        neden silindiğinde vs kayma oluyor
        */}
                {/* {arr.map((name, i) => {
          return <NameShower key={i} name={name} />;
        })} */}

                {/*
          
          biz şimdilik name verelim hata gitsin diye
          normalde key için daha farklı yöntemler var
          ileride yapacagız
          bunları daha da sekillendirebilirsin
          NameShower da gosteriyor orda degısıklık yapabilirsin
          */}
                {/* {arr.map((name) => {
          return <NameShower key={name} name={name} />;
        })} */}

                {arr.map((name) => {
                    return <NameShower key={name} name={name} />;
                })}
                <button onClick={handleClick}>EKLE</button>
            </div>
        </>
    );
}
export default B4D12;

/*
Ders 12 Notları
normal string sekilde gosterebiliyorsun
array olusturup index numara ile cagırabilirsin
yada
reactta map kodu var bu foreach e denk geliyor
verdiğin diziyi tek tek dolaşıyor
birde array lerde ekleme cıkarma işine bakalım nasıl oluyor
sadece array olusturup ekle dersen eger ekler ama 
ekranda degısıklık olmaz
ekranda degısıklık ıcın biz zaten useState kullanıyoruz
sadece ekle yapıp console a bakalım ekleme oluyor
*/