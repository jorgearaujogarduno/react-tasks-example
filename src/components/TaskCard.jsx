import {useContext} from 'react'
import { TaskContext } from '../context/TaskContext';

function TaskCard({task}) {
  const {deleteTask} = useContext(TaskContext)

  return (
    // Para cada tarea en el array de tareas, se muestra su titulo y descripcion en un div, utilizando la propiedad id como key para cada elemento.
    // El key es importante para que React pueda identificar cada elemento de la lista y optimizar su renderizado.
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h3 className='text-xl font-bold capitalize'>{task.title}</h3>
      <p className='text-gray-500 text-sm'>{task.description}</p>
      <button 
      className='bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400' 
      onClick={() => {deleteTask(task.id)}}>Eliminar tarea</button>
    </div>
  );
}

export default TaskCard;
