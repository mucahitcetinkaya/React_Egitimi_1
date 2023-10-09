import { useEffect, useState } from "react";
import ListItem from "./ListItem";
import { uniqueId } from "lodash";

function ListController() {

  const [todoList, setTodoList] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  // function handleClick() {
  //   const tempArr = [...todoList];
  //   tempArr.push(newTodo);
  //   setTodoList(tempArr);
  //   setNewTodo("");
  // }

  useEffect(() => {
    console.log(todoList);
  }, [todoList])

  // bu acıkken push yapmaya kalkarsan hata alırsın 
  // sebebi ListItem de todo item in tamamını verdik string olarak
  // şimdi obje oldugu için item.todo yazmamız lazım
  function handleClick() {
    const tempArr = [...todoList];
    tempArr.push(
      {
        todo: newTodo,
        id: uniqueId()
      });
    setTodoList(tempArr);
    setNewTodo("");
  }

  /*
  bu ne yapacak mesela asağıdan bir sil gelecek id 5 olan mesela
  todoList array ınden alacak tempArr e kopyalayacak
  findIndex ile id i bulacagız bütün elemanlara tek tek bakıyor
  5 e geldiğinde index ini dönüyor
  splice da hangisinden baslayıp kacını silmek istiyorsun onu yazıyorsun
  indexden basla 1 tanesini sil dedik

  */
  function handleDelete(id) {
    const tempArr = [...todoList];
    const index = tempArr.findIndex(elem => elem.id === id);
    tempArr.splice(index, 1);
    setTodoList(tempArr);
  }

  return (
    <>
      <div>
        <input value={newTodo} onChange={e => setNewTodo(e.target.value)} />
        <button onClick={handleClick}>Ekle</button>
        {todoList.map((item,i) => {
          // return <ListItem todo={item} />;
          return <ListItem
            key={item.id}
            id={item.id}
            index = {i}
            todo={item.todo}
            handleDelete={handleDelete}
          />;
        })}
      </div>
    </>
  )
}

export default ListController;

/*

Todo List 
renklerinin neden degisik oldugunu bilmiyorum
To do List yapalım todo list bir array state de tutmaamız lazım

ilk yazdıgımız kod boyleydi

function handleClick() {
    const tempArr = [...todoList];
    tempArr.push(newTodo);
    setTodoList(tempArr);
    setNewTodo("");
  }

artık bunu obje içinde tutmamız lazım key verebilmemiz için
string array olmayacak obje array i olacak

uniqueId lodash den geldi import ettik
return da ki todo u da degistirdik
ekleme ve key işlemi tamam sorun hata kalmadı

şimdide silme işlemini yapalım

silme için ListItem a eklenen ler orda ekleniyor 
bir sil butonu koymamız lazım her kayıtın yanında sil yazacak
ama sile basınca hangisi sileceğini nerden anlayacak

bunun için burda yeni bir function oluşturup yukarıya vermemiz lazım

ListItem ın içinde 
          handleDelete ={handleClick} 
bunu yazarak oraya yolladık 
bunuda orada props ile karsılamamız lazım

ekleme silme id atama işlemi bitti birde index yazdırma işlemine bakalım

map içine 2 tane parametre yazabiliyorsun index 

*/