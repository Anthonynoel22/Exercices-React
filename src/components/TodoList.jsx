import { useState } from "react";

function TodoList() {

    // State pour stocker la liste des tâches dans un tableau 
    const [tasks, setTask] = useState([]);

    // State pour stocker une nouvelle tâches dans l'input
    const [newTask, setNewTask] = useState("");

    // Fonction pour ajouter une tâche
    const addTask = () => {
        //.trim pour éviter les espacement et chaines vides 
        if (newTask.trim()) {
            // Ajoute une nouvelle tâche au tableau existant (copie Spread operator + ajout)
            setTask([...tasks, newTask]);

            // Réinitialise l'input après ajout
            setNewTask("");
        }
    };

    // Fonction pour supprimer une tâche
    const deleteTask = (index) => {

        // filter parcourt le tableau :
        // "_" représente la valeur 
        // "i" représente l'index de chaque élément
        // On garde uniquement les éléments dont l'index est différent de celui qu'on veut supprimer 
        setTask(tasks.filter((_, i) => i !== index));
    };

    return (
        <div>
            <h2>My Todo List</h2>

            {/* Champs de saisie pour ajouter une tâche */}
            <input
                value={newTask} // Input contrôlé par le state
                onChange={ e => setNewTask(e.target.value)} // Met à jour le state à chaque frappe
                placeholder="NewTask..." //Indicatif
            />

            {/* Bouton pour ajouter une tâche */}
            <button onClick={addTask}>Add</button>

            {/* Liste des tâches */}
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {/* Affiche le contenu de la tâche */}
                        {task}{" "}

                        {/* Bouton pour supprimer la tâche */}
                        <button onClick={() => deleteTask(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
