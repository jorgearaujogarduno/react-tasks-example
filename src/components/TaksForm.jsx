import {useState, useContext} from 'react'
// Este componente se encarga de mostrar un formulario para agregar nuevas tareas
import {TaskContext} from '../context/TaskContext'

function TaskForm() {
    // El estado title se encarga de almacenar el valor del input
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const {createTask} = useContext(TaskContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        const newTask = {          
            title,
            description,
        }
        createTask(newTask)
        setTitle('')
        setDescription('')
    }

  return (
    <div className='max-w-md mx-auto '>
        <form onSubmit={handleSubmit} className='bg-slate-800 p-10 mb-4'>
            <h1 className='text-2xl font-bold mb-3 text-white'>Crea tu tarea</h1>
            <input type="text" 
            placeholder="Escribe tu tarea"
            className='bg-slate-300 p-3 w-full mb-2'
            autoFocus
            // El valor del input se almacena en el estado title, y se actualiza cada vez que el usuario escribe en el input
            value={title}
            // El evento onChange se encarga de actualizar el estado title cada vez que el usuario escribe en el input
            onChange={(elemento) => setTitle(elemento.target.value) } />           
            <textarea placeholder="Escribe la descripción de tu tarea" 
            // El valor del textarea se almacena en el estado description, y se actualiza cada vez que el usuario escribe en el textarea
            value={description} 
            className='bg-slate-300 p-3 w-full mb-2'
            onChange={(elemento) => setDescription(elemento.target.value)}></textarea><br />
            <button className='bg-blue-600 px-3 py-1 rounded-md mt-4 hover:bg-blue-400 text-white' type="submit">Agregar tarea</button>
        </form>
    </div>
  )
}

export default TaskForm