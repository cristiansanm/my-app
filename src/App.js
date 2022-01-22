import React, { useState } from 'react';
import AddTask from './components/AddTask';
import TableCrud from './components/TableCrud';


function App() {
  const {taskList, setTaskList} = useState([]);

  return (
    <div className="App">
      <h1 className="text-2xl font-semibold w-full text-center mt-4">CRUD Simple</h1>
      <div className="w-full flex flex-col items-center lg:flex-row lg:flex-wrap">
        <div className="lg:w-4/6 w-full p-4">
          <TableCrud data={taskList}/>
        </div>
        <div className="lg:w-2/6 w-1/2 p-4">
          <AddTask/>
        </div>
      </div>
    </div>
  );
}

export default App;
