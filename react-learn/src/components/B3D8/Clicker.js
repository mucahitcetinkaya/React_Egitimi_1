function Clicker() {
    // not 1
    //   function handleClick() {
    //     console.log("üstteki click me 1.");
    //   }

    // not 2
    //arttırmaya yarıyor
    //   let count = 0;
    //   function handleClick() {
    //     count++;
    //     console.log(count);
    //   }

    // not 3
    // arttırdıgını console da değilde ekranda görmek istiyoruz bunu nasıl yaparız
    // count verdik return da count u cagıralım
    // count geliyor tıklayınca console da artıyor ama ekranda yazan artmıyor
    // burda araya state kavramı giriyor
    // neden boyle oluyor bu component html olarak kalıyor kendini yenilemiyor
    // state kullanınca bu component degistiginde yenile demiş oluyoruz
    // state e geçelim
    let count = 0;
    function handleClick() {
        count++;
        console.log(count);
    }

    return (
        <>
            <div>
                <div>{count}</div>
                <button onClick={handleClick}>Click me 1 </button>
                {/* <button onClick={handleClick}>Click me 1 </button> */}
                {/* <button onClick={handleClick()}>Click me</button> */}
                {/* <button
          onClick={function a() {
            console.log("alttaki click me 2");
          }}
        >
          Click me 2{" "}
        </button>
        <button
          onClick={() => {
            console.log("clickme 3");
          }}
        >
          Click me 3{" "}
        </button> */}
            </div>
        </>
    );
}

export default Clicker;

/*
fonksiyon vermemiz lazım tıklanınca bişey olması için
tarayıcıdan console a tıklanıldı yazıyor
1. olan funchion yazıp cagırmak var 
        <button onClick={handleClick}>Click me</button>
2. olan funchion ı burda belirtmek var 
        <button onClick={handleClick()}>Click me</button>
farkı react calısırken direk calısması
parantezli yazarsan eger tıklamadan direk calısıyor
2. kere yazıyor bunun sebebi de index.js de 
App in 
<React.StrictMode>
    <App />
  </React.StrictMode>
  boyle cagrılmıs olmasında 
scrictmode u kaldırırsan 1 kere yazar
tıklamadan cagırmasını istemiyoruz parantezsiz yazdık 
fonksiyon cagırma sekillerine bakıyoruz burda 
yukarıda cagırıp içeride verebilirsin
direk altta fonksiyon olusturabilirsin
arrow funchion ile yazabilirsin
bir sürü yöntemi var 
*/