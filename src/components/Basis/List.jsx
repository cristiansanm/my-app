import React, { useState } from 'react';

const initialState = [
    {'id': 1, 'text': 'tarea 1'},
    {'id': 2, 'text': 'tarea 2'},
    {'id': 3, 'text': 'tarea 3'}
]

const List = () => {
  const [data, setData] = useState(initialState)
  const addTask = () => {
      let newIndex = data.length + 1;
      setData([
          ...data,
          {id: newIndex, text: `tarea ${newIndex}`}
      ])
  }
  return (
    <div>
        <h1>Lista de tareas</h1>
        {data?.map((item, index) => 
            <h3 key={index}>{`${item.text}, id: ${item.id}`}</h3>
        )}
        <button onClick={addTask}>Agregar</button>
    </div>
    );
};

export default List;
