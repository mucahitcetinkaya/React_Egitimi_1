import { useEffect, useState } from "react";
import ListItem from "./ListItem";
import { uniqueId } from "lodash";

function ListController() {

  const [todoList, setTodoList] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    const tempArr = [];
    JSON.parse(localStorage.getItem("myTodoList")).forEach(item => {
      tempArr.push({ ...item, id: uniqueId(), })
    });
    setTodoList(tempArr);
  }, []);

  useEffect(() => {
    localStorage.setItem("myTodoList", JSON.stringify(todoList));
  }, [todoList]);

  function handleClick() {
    const tempArr = [...todoList];
    tempArr.push(
      {
        todo: newTodo,
        id: uniqueId(), isDone: false
      });
    setTodoList(tempArr);
    setNewTodo("");
  }

  function handleDelete(id) {
    const tempArr = [...todoList];
    const index = tempArr.findIndex(elem => elem.id === id);
    tempArr.splice(index, 1);
    setTodoList(tempArr);
  }

  function handleEdit(id, editedTodo) {
    const tempArr = [...todoList];
    const index = tempArr.findIndex(elem => elem.id === id);
    tempArr[index] = { ...tempArr[index], todo: editedTodo };
    setTodoList(tempArr);
  }

  function handleDone(id) {
    const tempArr = [...todoList];
    const index = tempArr.findIndex(elem => elem.id === id);
    tempArr[index] = { ...tempArr[index], isDone: !tempArr[index].isDone };
    setTodoList(tempArr);
  }

  return (
    <>
      <div>
        <input value={newTodo} onChange={e => setNewTodo(e.target.value)} />
        <button onClick={handleClick}>Ekle</button>
        {todoList.map((item, i) => {
          return <ListItem
            key={item.id}
            id={item.id}
            index={i}
            todo={item.todo}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            isDone={item.isDone}
            handleDone={handleDone}
          />;
        })}
      </div>
    </>
  )
}

export default ListController;

/*



*/