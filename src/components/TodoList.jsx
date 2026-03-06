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
        setTask(tasks.filter((_, i) => i !== index));
    };

    return (
        <div>
            <h2>My Todo List</h2>
            <input
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
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
