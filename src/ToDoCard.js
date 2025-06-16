import React, { useState } from 'react';

function ToDoCard() {
    const [tasks, setTasks] = useState([]); // stores list of tasks + able to add, delete, update tasks
    const [newTask, setNewTask] = useState(""); // stores watever you type into task input box / updates whats inside input box

    function inputChange(event){
        setNewTask(event.target.value); // updates newTask whenever input box changes
    }  
    
    

    function addTask(){
        if (newTask.trim() === "") return;  // adds new task to list if input is not empty. list has less than 7 tasks
        if (tasks.length >= 7) {
            return;
        }
        setTasks([...tasks, 
            { text: newTask.trim(), 
                completed: false }]);
        setNewTask("");
    }

    
    
    function deleteTask(index){
        setTasks(tasks.filter((_, i) => i !== index)); // removes specific task from list without messing up array of list

    }

    function toggleCompleted(index) { // changes if a specific task is complete or not while others remain unchanged
    setTasks(tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
    ));
}


    return(
        <div className="to-do-list">
            <div> 
                
                <input
                    type="text"
                    placeholder="Enter new task.."
                    value={newTask}
                    onChange={inputChange}/>
                
            <button className="button" onClick={addTask}>
            +
            </button>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}  className="task-item">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleCompleted(index)}
              
            />
            <span style={{ 
                textDecoration: task.completed ? 
                'line-through' : 'none',
                color: 'black',
                fontSize: '15px',}}>
                    {task.text}
                </span>
            <button onClick={() => deleteTask(index)}>
            Delete
            </button>
          </li>
        ))}
      </ul>
            
            </div>
        </div>
    )
}

export default ToDoCard;