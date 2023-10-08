// Bölüm 3. React Props ve State

// Ders 7 React Props Nedir ?

import '../App.css';
import PersonInfo from '../components/B3D7/PersonInfo';

function B3D7() {

    // const person1 = {
    //   name : "Mücahit",
    //   age : 29
    // }

    const name1 = "name1";
    const age1 = 1;

    const name2 = "name2";
    const age2 = 2;

    return (
        <>
            <div className="App">
                {/* <PersonInfo person={person1} /> */}
                <PersonInfo name={name1} age={age1} />
                <PersonInfo name={name2} age={age2} />
                <PersonInfo name={"name3"} age={3} />
            </div>
        </>
    );
}
export default B3D7;

// Ders 7 Notları

/*
bi obje olusturduk bu person1 i PersonInfo içine basmak istiyorum bunu nasıl yaparım
PersonInfoya gidelim
orda parametre verdik props diye 
burda personınfo içinde cagıracagız
personinfo a person1 i yolladık içerideki ismi person
personinfo a gidelim
bu bizim ne işimize yaradı degisken adını verdik props cagırdık baska yerde yazıp baska yerde cagırdık 
birden fazla kullanılabilir bir yapı olusturmamıza olanak sagladı
PersonInfo u bir kere yazdık ama app.js de ne kadar yazarsan o kadar olusuyor
ustte yazıp altta da cagırabilirsin
diger altta da yazabilirsin içeriklerini
*/