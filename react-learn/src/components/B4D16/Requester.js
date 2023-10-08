import axios from "axios";
import { useEffect, useState } from "react";

function Requester() {

  const [myResponse, setMyResponse] = useState("");
  const [responseArr, setResponseArr] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then(response => {
        setMyResponse(response.data.title)
        console.log(response.data);
      })

    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        console.log(response.data)
        setResponseArr(response.data)
      })
  }, []);

  return (
    <>
      <div>
        {myResponse}
        {responseArr.map(post => {
          return <div key={post.id}>{post.body}</div>
        })}
      </div>
    </>
  )
}

export default Requester;

/*
1 kere olusturan useEffect kullandık 
jsonplaceholder dan fake data alıp get atmak için 
axios kullandık
gelen istegin sadece data içindeki title ını aldık 
state içine atıp
ekrana yazdırdık
*/