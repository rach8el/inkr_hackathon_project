import React, { useState } from 'react';
import './App.css';
import ToDoCard from './ToDoCard';



function App() {
    const [open, setOpen] = useState(false);
    return (
        <div>
        <div className="background">
        
        <div style={{ 
            fontSize: '40px', 
            textAlign: 'left',
            position: 'relative',
            left: '0',
            color: 'white',
            
         }}>
            <b>inkr</b>
         </div>
    <hr />
    <br></br>
    <br></br>
    
    
        <div className="todo-card">
        <ToDoCard />
        </div>
        <div style={{
        fontSize: '45px',
        textAlign: 'left',
        position: 'relative',
        left: '90px',
        color: 'white',
        fontFamily: "'Allura'"
    }}>
        To Do:

        
    </div>
    </div>
    </div>
    )
}
export default App;