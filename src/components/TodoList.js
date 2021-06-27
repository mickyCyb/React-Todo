import Todo from './Todo';

const TodoList = ({todos,setTodos}) => {
    console.log(todos)
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {todos.map(todo => (
                   <Todo todo={todo} todos={todos} setTodos={setTodos} key={todo.id}/>
                ))}
                
            </ul>
        </div>
    
    )
}
export default TodoList;