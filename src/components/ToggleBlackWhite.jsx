import { useState } from "react";

function ToggleBlackWhite () {

    // State pour savoir si le fond est noir ou blanc
    const [isBlack, setIsBlack] = useState(false);

    // Fonction pour inverser la couleur
    const handleToggle = () => {
        setIsBlack((prev) => !prev) // Inverse la valeur précédente (true ↔ false)
    };

    // Style de la boîte 
    const boxStyle = {
        width: 200, // Largeur
        height: 200, // Hauteur
        backgroundColor: isBlack ? "black" : "white", // Couleur de fond dynamique 
        color: isBlack ? "white" : "black", // Couleur de texte
        border: "1px solid #333", // Bordure

        // Centrage du texte
        display: "flex", 
        alignItems: "center",
        justifyContent: "center",
        marginTop: 16, // Espace au dessus
        marginBottom: 16, // Espace en dessous
    };

    return (
        <div>
            {/* Zone visuelle */}
            <div style={boxStyle}>
                {/* Texte dynamique */}
                {isBlack ? "Je m'appelle Anthony" : "Je m'appelle Anthony "}
            </div>

            {/* Bouton pour changer la couleur */}
            <button onClick={handleToggle}>
            Toggle
            </button>
        </div>
    );
}

export default ToggleBlackWhite;
