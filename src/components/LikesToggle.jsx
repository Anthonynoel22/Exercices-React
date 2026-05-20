import { useState } from "react";

function LikesToggle() {

    // State pour gérer le nombre de likes (initialisé à 0)
    const [likes, setLikes] = useState(0);

    // State pour gérer la visibilité du secret (false = caché)
    const [visible, setVisible] = useState(false);

    // Fonction pour incrémenter les likes 
    const handleLike = () => {
        setLikes(likes + 1); // Ajoute 1 au nombre de likes 
    };

    // Fonction pour afficher/ cacher le contenu
    const handleToggle = () => {
        setVisible(!visible); // Inverse la valeur  (true ↔ false )
    };

    return (
        <div>
            {/* Titre du composant */}
            <h2>Post Instagram-like</h2>

            {/* Contenu du post */}
            <p>Article super cool !</p>

            {/* Bouton pour liker (affiche aussi le nombre de likes) */}
            <button onClick={handleLike}>{likes} likes</button>

            {/* saut de ligne pour espacer les éléments */}
            <br />
            <br />
            
            {/* Bouton pour afficher ou cacher le secret */}
            <button onClick={handleToggle}>
                {/* Texte dynamique selon l état visible */}
                {visible ? "Cacher le secret" : "Montrer le secret"}
            </button>

            {/* Affichage conditionnel : le bloc apparaît seulement si visible = true */}
            {visible && (
                <div
                    style={{
                        marginTop: "10px", // Espace au dessus
                        padding: "10px", // Espace interne 
                        background: "#f0f8ff", // Couleur de fond 
                    }}
                >
                    {/* Contenu caché */}
                    <strong>SECRET :</strong> Tu maîtrises les events + state
                    en React ! 
                </div>
            )}
        </div>
    );
}

export default LikesToggle;
