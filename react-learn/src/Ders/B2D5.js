import '../App.css';
import Example from '../components/B2D5/Example';

///////////////////////////////////////////////////////////////////////////////////
// Bölüm 2 : React Kurulumu ve Bileşen Oluşturup Kullanma
//////////////////////////////////////////////////////////////////////////////////
// Ders 5 React Bileşenleri Oluşturma

function B2D5() {

    return (
        // <div className="App">
        //   Hello World ! 
        //   <div>Mücahit</div>
        //   <div>div</div>
        //   <span>span</span>
        //   <p>p</p>
        // </div>

        // <div>hata</div>

        // hata kalkıyor

        // <div>
        // <div className="App">
        //   Hello World ! 
        //   <div>Mücahit</div>
        //   <div>div</div>
        //   <span>span</span>
        //   <p>p</p>
        // </div>

        // <div>hata</div>
        // </div>

        <>
            <div className="App">
                Hello World !
                <div>Mücahit</div>
                <div>div</div>
                <span>span</span>
                <p>p</p>
                {/* <Example></Example> */}
                <Example />
                <Example />
                <Example />
                <Example />
            </div>

            <div>hata</div>
        </>

    );
}

export default B2D5;

/*

bileşenler hakkında bilgi edineceğiz
bileşen olusturma
bileşenleri iç içe cagırma
bizim app.js imiz bir bileşen ve ekrana basılıyor
return ne anlama geliyor
returndan sonraki kısım ekrana yazılan kısım olacak
div yazan html e benziyor ama değil
bunun kendine özgü bir uzantısı var 
jsx olarak geçiyor
yazıları değiştirmekle basyalım hello world yazmıstık en son 
npm start ile terminalde calıstırdık calıstı tarayıcıda calısıyor
html taglarinden olusturabilirsin
class isimleri degişiklik gösteriyor ufak ufak
class yerine className yazıyor mesela
en basta yazan diz className app div inin içine yazıyoruz ona dikkat et 
onun içine değilde dısına yazarsan eger hata veriyor
Compiled with problems:
×
ERROR in ./src/App.js
sebebi jsx de bir tane hepsini kapsayan obje olur aynı anda 2 tane olmaz
bunların hepsini kapsayan baska bir yapı olusturursan eger hata kalkar 
dive sarmak istemiyorsam eger ne yapmam gerek
react bos tag sunuyor <></> bunların arasına da yazabilirsin
bu işarete Fragment de deniyor bos yerine böyle de yazabilirsin sayfanın üstüne import ediyor kendisi otomatik
peki react app.js i otomatik olarak nasıl cagıyor handle ediyor buna bakalım 
public index.html e gidelim react once burayı cagırıyor
Example.js den geldik burada onu cagıralım 
normal tag içinde adını verdiğimiz funchion ı cagırdık
import etmeyi unutma
import Example from './components/Example';
bunu boyle yazmak yerine
      <Example></Example> 
      <Example/>
      olarakta yazabilirsin içine bişey yazmıyorsun sadece cagırıyorsun cunku 
suan bir component olusturma ve onu cagırmayı gorduk 
baska bir component olusturalım MyComponent
bu MyComponent i example.js in içinde cagıralım
app.js de example ı cagırdık exapmle da olanlar buraya da gelmiş oldu
iç içe component cagırmayı da görduk 
birden fazla da cagırabiliriz

*/