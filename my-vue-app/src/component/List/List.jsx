

export default function List({ list, onClick }) {

    function handleClick(id){
        const newList = list.filter(item => item.id !== id)
        onClick(newList)
    
    }

  return (
    <ul>
      {list.map((todo) => (
        <div>
          <li key={todo.id}>
            {todo.title}
            <button
              type="button"
              onClick={()=>handleClick(todo.id)}
            >
              X
            </button>
          </li>
        </div>
      ))}
    </ul>
  );
}
