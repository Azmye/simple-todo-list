type Props = {
  todo: {
    checklistCompletionStatus: boolean;
    id: number;
    items: [];
    name: string;
  };
};

export default function Todos({ todo }: Props) {
  return (
    <div className="shadow-md p-2 rounded-md ">
      <div className="flex justify-between items-center">
        <h5 className="text-lg font-semibold">{todo?.name}</h5>
        <button className="bg-sky-500 text-white rounded-md px-2 py-1">
          +
        </button>
      </div>

      <div className="mb-3 flex items-center justify-between gap-2">
        <input
          type="text"
          //   value={newTodo}
          //   onChange={(e) => setNewTodo(e.target.value)}
          className="w-full outline-none border-b border-b-inherit hover:border-b hover:border-b-sky-500 focus:border-b-sky-500 "
          placeholder="New Todo"
        />
      </div>
    </div>
  );
}
