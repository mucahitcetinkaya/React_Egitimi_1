function PersonInfo(props) {


    console.log(props);

    return (
        <>
            <div>
                {/* Hello my name is {props.person.name} */}
                Hello my name is {props.name}
            </div>
            <div>
                Hello my name is {props.age}
            </div>
        </>
    );
}

export default PersonInfo;

/*
buranın içine bir props yollayım bunları bassın tekrar tekrar yapmayalım
aynı kodu tekrar yazmak istemiyorum
PersonInfo u app.js de cagıralım
app.js den geldik 
parametre verelim
console yazdıralım bakalım ne var içinde
{person: {…}}
person
: 
{name: 'Mücahit', age: 29}
[[Prototype]]
: 
Object
tarayıcıda consola gelen bu 
props bir obje içinde de person objesi var 
obje olarak cagırırsan eger parametre.objeiçindekiisim.cagırmakistediğin
degiskene atarsan eger parametre.degiskenadı
*/