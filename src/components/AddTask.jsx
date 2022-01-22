import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';

function AddTask({ addTask }) {
  const [newTask, setNewTask] = useState('');
  const handleNewTask = (event) => {
      setNewTask(event.target.value);
  }
  return (
    <div className="flex flex-col">
        <h1 className="text-3xl font-bold text-center">Agregar Tarea</h1>
        <span className="w-full my-4 flex justify-center">
           <TextField
              id="task"
              label="Agregar Tarea"
              value={newTask}
              onChange={handleNewTask}
              sx={{width: '80%'}}
            /> 
        </span>
        <span className="w-full flex justify-center">
           <Button 
                color="primary" 
                variant="contained" 
                onClick={()=> addTask(newTask)}>
                    Añadir Tarea
           </Button> 
        </span>
        
    </div>
);
}

export default AddTask;
