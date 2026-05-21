import { useState } from 'react';

function TexteLive () {

    // State pour stocker le texte saisi dans l'input
    const [text, setText] = useState("");

    // Fonction pour vider le champs de texte 
    const handleClear = () => {
    setText(""); // Réinitialise le texte à une chaîne vide 
    };

    return (
        <div>
            <div style={{marginTop: 16,}}>
                <input 
                type="text" // Champ de saisie texte
                value={text} // Valeur contrôlée pae le state
                onChange={ e => setText(e.target.value)} // Met à jour le state à chaque frappe
                placeholder='write something...' // Texte indicatif dans l'input 
                />
            </div>

            {/* Affiche en temps réél ce que l'utilisateur écrit */}
            <p>you writed <strong>{text}</strong></p>

            {/* Bouton pour effacer le texte */}
            <button onClick={handleClear}>Erase</button>
        </div>
    );
}

export default TexteLive;