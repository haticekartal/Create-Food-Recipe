import { useState } from "react";

import "./App.css";
import { TaskCreate } from "./components/TaskCreate";
import { TaskList } from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const crateTask = (title, taskDesc) => {
    const createdTasks = [
      ...tasks,
      {
        id: Math.round(Math.random() * 999999),
        title,
        taskDesc,
      },
    ];
    setTasks(createdTasks);
  };
  const deleteTaskById = (id) => {
    const afterDeletingTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(afterDeletingTasks);
  };
  const editTaskById = (id,updatedTitle,updatedTaskDesc) => {
    const updatedTasks = tasks.map((task) => {
      if(task.id===id){
        return {
          id,
          title:updatedTitle,
          taskDesc:updatedTaskDesc
        }
      }
      else{
        return task;
      }
    });
    setTasks(updatedTasks);
  };
  return (
    <div className="app">
      <TaskCreate onCreate={crateTask} />
      <h2>Yemekler</h2>
      <TaskList tasks={tasks} onDelete={deleteTaskById} onUpdate={editTaskById} />
    </div>
  );
}

export default App;
