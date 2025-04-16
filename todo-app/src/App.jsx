import { useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [todos, setTodos] = useState([]);

  let todoRef = useRef();

  function handelTodoSubmit() {
    setTodos([...todos, todoRef.current.value]);
  }

  function handelDelete(todo) {
    let newTodos = todos.filter((t) => {
      return todo != t;
    });

    setTodos(newTodos);
  }

  return (
    <>
      <h1 className=" text-center font-bold text-3xl my-5 ">Todo app</h1>

      <div className=" text-center">
        <input
          className=" border border-amber-400  px-4 py-2 "
          type="text"
          name=""
          id=""
          ref={todoRef}
          placeholder="enter your todo"
        />
        <button
          onClick={handelTodoSubmit}
          className=" bg-amber-500  rounded-lg py-3 px-8 text-white mx-4"
        >
          Add todo
        </button>
      </div>

      <section id="todo">
        <div className="todo mt-12">
          {todos.map((todo) => {
            return (
              <h1 className=" text-center text-xl mt-2 ">
                {todo}
                <button
                  onClick={() => handelDelete(todo)}
                  className=" bg-red-600 pt-y px-8 rounded-2xl text-white text-lg "
                >
                  delete
                </button>
              </h1>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default App;
