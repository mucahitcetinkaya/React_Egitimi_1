import { useState } from "react";

function ListItem(props) {

  const [editInputVisiable, setEditInputVisiable] = useState(false);
  const [editedTodo, setEditedTodo] = useState("");

  function editClick() {
    setEditedTodo(props.todo);
    setEditInputVisiable(true);
  }

  function deleteClick() {
    props.handleDelete(props.id);
  }

  function okClick() {
    props.handleEdit(props.id, editedTodo);
    setEditInputVisiable(false);
  }

  function cancelClick() {
    setEditInputVisiable(false);
  }

  function doneClick() {
    props.handleDone(props.id);
  }

  return (
    <>
      <div>
        {editInputVisiable &&
          <>
            <input value={editedTodo} onChange={e => {setEditedTodo(e.target.value)}} />
          <button onClick={okClick} >Tamam</button>
          <button onClick={cancelClick} >Vazgeç</button>
          </>
        }
        {!editInputVisiable &&
          <>
            <input type="checkbox" value={props.isDone} onClick={doneClick}/>
            {props.index + 1 + "." + props.todo}
            <button onClick={editClick} >Düzenle</button>
            <button onClick={deleteClick} >Sil</button>
          </>
        }
      </div>
    </>
  )
}
export default ListItem;

/*


*/