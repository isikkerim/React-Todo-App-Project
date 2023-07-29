import "../css/Home.css"
import React, { useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { VscCheck } from "react-icons/vsc";
import { VscAdd} from "react-icons/vsc";
import Navbar from "../components/Navbar";

// HOME PAGE 

function Home() {


    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleAddTodo = () => {
        if (inputValue.trim()) {
            setTodos([...todos, { text: inputValue, isCompleted: false }]);
            setInputValue('');
        }
    };

    const handleDeleteTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    const handleCompleteTodo = (index) => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = !newTodos[index].isCompleted;
        setTodos(newTodos);
    };

    const handleEditTodo = (index, value) => {
        const newTodos = [...todos];
        newTodos[index].text = value;
        setTodos(newTodos);
    };

  
    return (<div className="div">

        <Navbar/>
        {/* HOME PAGE BODY  FIELD */}


        <div className="body-div">
            <div className="add-div">
                <input className="input"
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />


                <button className="button" onClick={handleAddTodo}><VscAdd/></button></div>
            <div className="todos-div">  <ul> 
                {todos.map((todo, index) => (
                    <li className="todo-li" key={index}>
                        <input className="input"
                            type="text"
                            value={todo.text}
                            onChange={(e) => handleEditTodo(index, e.target.value)}
                        />
                        <button className={`todos-button  ${todos[index].isCompleted}`} onClick={()=>{  handleCompleteTodo(index);}}>
                           <VscCheck/>
                        </button>
                        <button className="todos-button" onClick={() =>{ handleDeleteTodo(index);}}><FaRegTrashCan/></button>
                    </li>
                ))}
            </ul>
            
            
            </div>

        </div>
    </div>);
}
export default Home;