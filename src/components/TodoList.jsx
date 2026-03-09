import { useState } from "react";

function TodoList() {
    const [tasks, setTask] = useState([]);
    const [newTask, setNewTask] = useState("");

    const addTask = () => {
        if (newTask.trim()) {
            setTask([...tasks, newTask]);
            setNewTask("");
        }
    };

    const deleteTask = (index) => {
        {/* je déclare une variable pour supprimer une tâche je mais en paramètre (index) suivit d'un fonction fléchée j'ouvre les crochets 
            j'y mais le setTask qui est l'état pour modifier une tâche je filtre pour parcourir le tableau, le tiret (-) représente l'élément courant , (i) est l'index de cet élément
            si i est différent (!==) de l'index on supprime. */} 
        setTask(tasks.filter((_, i) => i !== index));
    };

    return (
        <div>
            <h2>My Todo List</h2>
            <input
                value={newTask}
                onChange={ e => setNewTask(e.target.value)}
                placeholder="Nouvelle tâche..."
            />
            <button onClick={addTask}>Ajouter</button>

            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task}{" "}
                        <button onClick={() => deleteTask(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
