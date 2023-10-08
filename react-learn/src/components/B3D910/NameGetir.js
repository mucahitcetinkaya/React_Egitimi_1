import { useState } from "react";

function NameGetir() {
  const [name, setName] = useState("");

  function handleChange(e) {
    console.log(e);
    setName(e.target.value);
  }

  function handleClear() {
    setName("");
  }

  return (
    <>
      <div>
        <div>İsminizi Giriniz</div>
        <input value={name} onChange={(e) => { handleChange(e) }} />
        <button onClick={handleClear}>Temizle</button>
        <div>İsminiz : {name}</div>
      </div>
    </>
  );
}

export default NameGetir;

/*
bu derste yazılan degeri nasıl işleme alacagız
mesela inputa deger yazdık bunu elimize alıp baska bir yere tasımammız işleme sokmamız lazım bunu nası yaparız
hemen bir state olusturalım
state olusturduk yazılan input içindekini alacak orda gösterecek
sadece value yazdıgımızda input içine bişey yazılmadı
yanına da onChange eklememız lazım
        <input value={name} onChange={(e) => {handleChange(e)}} />
boyle yazıp 
function handleChange(e) {
    console.log(e);
  setName();
}
cagırdıgımızda console.log daki e de yazan 
input içine bişey yazdıgında cıkan yazılar
SyntheticBaseEvent {_reactName: 'onChange', _targetInst: null, type: 'change', nativeEvent: InputEvent, target: input, …}
bubbles
: 
true
cancelable
: 
false
currentTarget
: 
null
defaultPrevented
: 
false
eventPhase
: 
3
isDefaultPrevented
: 
ƒ functionThatReturnsFalse()
isPropagationStopped
: 
ƒ functionThatReturnsFalse()
isTrusted
: 
true
nativeEvent
: 
InputEvent {isTrusted: true, data: 'a', isComposing: false, inputType: 'insertText', dataTransfer: null, …}
target
: 
input
timeStamp
: 
3546.699999988079
type
: 
"change"
_reactName
: 
"onChange"
_targetInst
: 
null
[[Prototype]]
: 
Object
target i ac onun value sunda ınputa yazdıgın deger cıkıyor biz a yazdık
target
: 
input
value
: 
"a"
eger bunu alıyorsa o zaman e yerine 
func içindeki setName i 
e.target.value a set edersek istediğimiz seyi alırız
function handleChange(e) {
    console.log(e);
  setName(e.target.value);
}
boyle yaptıgında div içindeki isminiz yazan name de input içine ne yazarsan
name e gidiyor onunda yazıldıgını görursun
boylece bir kayıt aldık bunu state de tuttuk bunu da bastırmıs olduk
*/

/*
birde temizle butonu koyalım basınca temizlesin
birinde onChange var birinde onClick var 
birisi girdiğimde değiştirilsin demek
birisi tıkladıgımda degistirilsin demek
onChange de e gonderdik 
onClick de e gerek yok
set içine value degerini verdik ordan aldı name e set etti
temizle dediğimiz de de bos string verdik
temizleye tıklayınca bos string yaptı temizlemiş oldu
*/