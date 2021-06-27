import React from 'react';

const Form = ({inputValues, setInputValues, todos, setTodos}) =>{

    const handleSubmit = (e) =>{
        e.preventDefault();
        setTodos([...todos,
            {text:inputValues,
             completed:false,
             id: Math.random()*1000,
            }],
            setInputValues(""),
        )
    }

    return(
        <div>
            <form>
                <input 
                    value={inputValues}
                    onChange={ (e) => setInputValues(e.target.value)}
                    type="text" 
                    className='todo-input'
                />
                <button 
                    type="submit" 
                    className="todo-button"
                    onClick={handleSubmit}
                >
                    <i className="fas fa-plus-square"></i>
                </button>

                <div className="select">
                    <select name="todos" className="filter-todo">
                        <option value="all">all</option>
                        <option value="completed">completed</option>
                        <option value="uncompleted">uncompleted</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default Form;