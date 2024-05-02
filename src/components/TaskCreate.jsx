import { useState } from "react";
export const TaskCreate = ({ onCreate, task, taskFormUpdate,onUpdate }) => {
  const [title, setTitle] = useState(task ? task.title : "");
  const [taskDesc, settaskDes] = useState(task ? task.taskDesc : "");
  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleTaskChange = (event) => {
    settaskDes(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if(taskFormUpdate){
        onUpdate(task.id,title,taskDesc)
    }
    else{
        onCreate(title, taskDesc);
    }

    setTitle("");
    settaskDes("");
  };
  return (
    <div>
      {taskFormUpdate ? (
        <div className="task-update">
          <h3>Lütfen Yemeği Düzenleyin</h3>
          <form className="task-form">
            <label className="task-label">Yemek Adını Düzenleyiniz</label>
            <input
              value={title}
              onChange={handleChange}
              className="task-input"
            />
            <label className="task-label">
              Yemek Tarifini Düzenleyiniz
            </label>
            <textarea
              value={taskDesc}
              onChange={handleTaskChange}
              className="task-input"
              rows={5}
            />
            <button className="task-button update-button" onClick={handleSubmit}>
              Güncelle
            </button>
          </form>
        </div>
      ) : (
        <div className="task-create">
          <h3>Yemek Tarifi Ekleyiniz</h3>
          <form className="task-form">
            <label className="task-label">Yemek Adı</label>
            <input
              value={title}
              onChange={handleChange}
              className="task-input"
            />
            <label className="task-label">Yemek Tarifi Ekleyiniz</label>
            <textarea
              value={taskDesc}
              onChange={handleTaskChange}
              className="task-input"
              rows={5}
            />
            <button className="task-button" onClick={handleSubmit}>
              Oluştur
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
