import { useEffect, useState } from "react";
function App_todolist() {


  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onClick = (id) => {
    setToDos((prevToDos) => (prevToDos.filter((item) => item.id !== id)))
  }
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }

    // 현재 시간을 기반으로 고유한 ID 생성
    const newTodo = {
      id: Date.now(), // 현재 시간의 밀리초를 ID로 사용
      text: toDo,
    };

    setToDos((prevToDos) => [newTodo, ...prevToDos]);
    setToDo("");
  }

  const onChange = (event) => {
    setToDo(event.target.value);
  }

  useEffect(() => {
    console.log(toDos); // toDos가 변경될 때마다 콘솔에 출력
  }, [toDos]);

  return (
    <div>
      <h1> My TODOS ({(toDos.length)})</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} placeholder="Write your TODO"></input>
        <button >Submit</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item) => (
          <li key={item.id}>{item.text} <button onClick={() => onClick(item.id)}>X</button></li>
        ))}
      </ul>
    </div>
  )
}

export default App_todolist;
