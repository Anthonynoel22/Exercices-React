// Import du hook useState pour gérer l'état
import { useState } from 'react';

function Compteur () {

// Déclaration du state count intitialisé à 0
// setCount permet de modifier cette valeur 
const [count, setCount] = useState(0);

// Fonction pour incrémenter le compteur de +1
const handleIncrement = () => {
    setCount(count +1); // Met à jour le state en ajoutant 1
};

// Fonction décrémenter le compteur 
const handleDecrement = () => {
    // Vérifie que le compteur ne descend pas en dessous de 0
    if (count > 0) {
        setCount(count -1) // Soutrait 1 au state
    };
};

// Fonction pour réinitialiser le compteur à 0 
const handleReset = () => {
    setCount(0)
};

// Rendu du composant 
return (
        <div>
            {/* Affiche la valeur actuelle du compteur */}
            <h1>Compteur : {count}</h1>

            {/* Bouton pour incrémenter */}
            <button onClick={handleIncrement}>+1</button>

            {/* Bouton pour décrémenter */}
            <button onClick={handleDecrement}>-1</button>

            {/* Bouton pour reset */}
            <button onClick={handleReset}>Reset</button>
        </div>
    );
}

// Export du composant pour pouvoir l'utiliser ailleurs
export default Compteur;