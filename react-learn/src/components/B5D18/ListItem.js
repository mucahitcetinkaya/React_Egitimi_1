function ListItem(props) {
  
  // şimdi biz buraya id i nasıl atacagız ListControllerde id i yolladık
  // ama bu key prop değil bu key i react kullansın diye veriyoruz
  // console da props u yazdırıp id ne geliyor ona bakalım
  // cıkanları en altta yazdım key underfined dönüyor
  // bu key i prop olarak kullanamazsınız diye hata veriyor
  // key i kullanamıyorsak o zaman id şeklinde tekrar gönderelim bizde
  // diger tarafa id ekleyinde ekle yapınca id geldi bu sefer
  // console.log(props);

  // handleDelete fonksiyonu id istiyordu onu verdik
  function handleClick() {
    props.handleDelete(props.id);
  }

  return (
    <>
      <div>
        {props.index + 1 + "." + props.todo}
        <button onClick={handleClick} >Sil</button>
      </div>
    </>
  )
}
export default ListItem;

/*

props un içinde artık handleDelete function da var

*/

/*

{todo: 'todo 1', handleDelete: ƒ}
handleDelete
: 
ƒ handleClick()
length
: 
0
name
: 
"handleClick"
prototype
: 
{constructor: ƒ}
arguments
: 
(...)
caller
: 
(...)
[[FunctionLocation]]
: 
ListController.js:20
[[Prototype]]
: 
ƒ ()
[[Scopes]]
: 
Scopes[4]
todo
: 
"todo 1"
key
: 
undefined
get key
: 
ƒ ()
[[Prototype]]
: 
Object

key için underfined dönüyor

*/