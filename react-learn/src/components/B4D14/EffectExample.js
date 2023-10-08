import { useEffect, useState } from "react";

// function EffectExample() {

// const [number, setNumber] = useState(0);

// function handleClick() {
//     setNumber(Math.random);
//     console.log(number);
//     /*
//      bu durumda degistire basında console ekrandan bir once gidiyor
//      ekranda yazı degisiyor mesela
//      ekranda 0.10 yazıyor olsun tıkladık degisti şimdi 0.20 yazıyor
//      ekranda 0.20 yazarken console da 0.10 yazıyor
//      tekrar degistir 0.30 oldugunda ekranda console da 0.20 yazıyor
//      yani bir geriden geliyor
//      sebebi async olmasından kaynaklanıyor okuyor beklemiyor direk geçiyor
//      bekle dememiz için
//      useEffect kullanmamız lazım
//     */
// }

// const [number, setNumber] = useState(0);

/*
useEffect i import etmeyi unutma
useEffect yokken direk okuyup geçiyordu 
şimdi useEffect e verdiğin parametre ile [number]
number degistikten sonra calıs demiş oluyoruz
artık sadece number degisince console yazıyor
bir onden gitme olayı ortadan kalktı
ne yazıyorsa onu da yazıyor
bir state değişimi bittikten sonra cagırcagının garantisini veriyor
*/

// useEffect(() => {
//     console.log(number);
// }, [number]);

/*
useEffect in bir kaç yazımı var onları gorelim
number yazmazsak ne olur
state in her değişiminde cagır demek oluyor
*/

// useEffect(() => {
//     console.log("parametresiz hep cagrılır");
// });

/*
useEffect in bir kaç yazımı var onları gorelim
[] bos array verdiğinde kod bastan sonra bir kere cagrılır useEffect te bir kere cagrılır bir daha degisiklik olsa da cagırma olmaz
*/

// useEffect(() => {
//     console.log("boş array 1 kere cagrıldı");
// }, []);

// function handleClick() {
//     setNumber(Math.random);
// }


// return (
//     <>
//         <div>
//             <div>
//                 {number}
//             </div>
//             <button onClick={handleClick}>Değiştir</button>
//         </div>
//     </>
// )
// }

//export default EffectExample;

//-----------------------------------------------

// props gondererek yapalım yukarısı cok doldu ondan burayı yazayım dedım

function EffectExample(props) {

  // durmadan props.example yazmamak için bunu cıkarttık

  /*
  son durumda console da yazanlar 
  bos array olan zaten 1 kere cagrılıyor
  hiç bişey olmayan her degisiklik oldugunda cagrılıyor
  
  */
  const example = props.example;

  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.log("boş array 1 kere cagrıldı");
  }, []);

  useEffect(() => {
    console.log("parametresiz hep cagrılır");
  });

  useEffect(() => {
    console.log("number");
    console.log(number);
  }, [number]);

  useEffect(() => {
    console.log("example");
    console.log(example);
  }, [example]);

  /*
  
  example yanına baska parametrede yazabilirsin
  
  */
  useEffect(() => {
    console.log("state veya props değişti");
    console.log(example);
  }, [number, example]);

  function handleClick() {
    setNumber(Math.random);
  }

  return (
    <>
      <div>
        <div>
          {number}
        </div>
        <div>
          {example}
        </div>
        <button onClick={handleClick}>Değiştir</button>
      </div>
    </>
  )
}

export default EffectExample;