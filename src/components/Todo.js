
const Todo = ({todo, todos, setTodos}) =>{

    const handleDelete = () => {
        setTodos(todos.filter( ele => ele.id!= todo.id));
    }
    const handleCompleted = () =>{
        setTodos(
            todos.map( item =>{
                if(item.id === todo.id){
                    return {
                        ...item,
                        completed : !item.completed
                    }
                }
            })
        );
    }

    return(
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ''} `}>{todo.text}</li>
            <button onClick={handleCompleted} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
           
            <button onClick={handleDelete} className="trash-btn">
                <i className="fas fa-trash"> </i>
            </button>

        </div>
    )
}
export default Todo;