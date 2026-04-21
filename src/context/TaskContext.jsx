import { createContext, useState, useEffect } from "react";
// Este componente se encarga de mostrar la lista de tareas, utilizando el estado para almacenar las tareas y el efecto para cargar los datos de tasks.js cuando el componente se monta.
import {tasks as data} from '../data/tasks'

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  // El estado de las tareas es un array vacio inicialmente, luego se llena con los datos de tasks.js
  const [tasks, setTasks] = useState([]);

  function createTask(task) {
    const newTask = {
      title: task.title,
       id: tasks.length,
      description: task.description,
    };
    setTasks([...tasks, newTask]);
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

     // useEffect se ejecuta una sola vez cuando el componente se monta, y llena el estado de tareas con los datos de tasks.js
    useEffect(() => {
        setTasks(data)
    }, [])

  return (
    <TaskContext.Provider value={{
      tasks, 
      deleteTask,
      createTask      
    }}>
      {props.children}
    </TaskContext.Provider>
  );
}
