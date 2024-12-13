import axios from "axios";
import { useEffect, useState } from "react";
import Todos from "../components/Todos";

export default function App() {
  const [newTodo, setNewTodo] = useState<string>("");
  const [todos, setTodos] = useState<[]>([]);

  const getTodos = async () => {
    try {
      const response = await axios.get(
        "http://94.74.86.174:8080/api/checklist"
      );

      setTodos(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  const onSubmit = async () => {
    try {
      const response = await axios.post(
        "http://94.74.86.174:8080/api/checklist",
        {
          name: newTodo,
        }
      );

      const { message } = response.data;

      alert(message);

      setNewTodo("");
      getTodos();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="w-full px-4 md:max-w-xl mx-auto pt-5">
      <section>
        <h1 className="text-lg font-semibold">TODO APP</h1>
      </section>

      <section>
        <div className="mb-3 flex items-center justify-center gap-2">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            className="w-10/12 outline-none border-b border-b-inherit hover:border-b hover:border-b-sky-500 focus:border-b-sky-500 "
            placeholder="New Todo"
          />

          <div className="w-2/12">
            <button
              onClick={onSubmit}
              className="w-full shadow-md bg-sky-500 text-white font-semibold px-2 py-1 rounded-md hover:bg-sky-600"
            >
              +Todo
            </button>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {todos.length === 0 && <h5>Loading...</h5>}

        {todos.length > 0 &&
          todos.map((item, index) => <Todos todo={item} key={index} />)}
      </section>
    </main>
  );
}
