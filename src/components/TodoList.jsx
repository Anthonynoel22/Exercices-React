import { useState } from "react";

function TodoList() {
    const [tasks, setTaches] = useState([]);
    const [newTask, setNouvelleTache] = useState("");

    const addTask = () => {
        if (newTask.trim()) {
            setTaches([...tasks, newTask]);
            setNouvelleTache("");
        }
    };

    const deleteTask = (index) => {
        setTaches(tasks.filter((_, i) => i !== index));
    };

    return (
        <div>
            <h2>My Todo List</h2>
            <input
                value={newTask}
                onChange={(e) => setNouvelleTache(e.target.value)}
                placeholder="Nouvelle tâche..."
            />
            <button onClick={addTask}>Ajouter</button>

            <ul>
                {tasks.map((tache, index) => (
                    <li key={index}>
                        {tache}{" "}
                        <button onClick={() => deleteTask(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
