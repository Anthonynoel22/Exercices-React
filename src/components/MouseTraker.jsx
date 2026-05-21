import { useState } from "react";

function MouseTracker () {

    // State pour savoir si la souris est au dessus de la zone
    const [isHover, setIsHover] = useState(false);

    // State pour stocker les coordonnées de la souris
    const [coords, setCoords] = useState({ x: 0, y: 0})

    // Déclanché quand la souris entre dans la zone
    const handleOnMouseEnter = () => {
        setIsHover(true) // Passe à true (hover actif)
    };

    // Déclanché quand la souris quitte la zone
    const handleOnMouseLeave = () => {
        setIsHover(false) // Passe à false (hover inactif)
    };

    // Déclanché à chaque mouvement de la souris dans la zone
    const handleOnMouseMove = (event) => {
        setCoords({
            x: event.clientX, // Position horizontale de la souris
            y: event.clientY, // Position verticale de la souris 
        });
    }

    return(
        <div>
            <div 
            // Zone interactive
            style={{
                width: 300, // Largeur de la zone
                height: 200, // Hauteur de la zone
                backgroundColor: isHover ? "lightgray" : "lightgreen", // Change la couleur selon hover 
                border: "1px solid #333", // Bordure
                marginTop: 16,
                marginBottom: 16, // Espace en dessous
                }}
                onMouseEnter={handleOnMouseEnter} // Quand la souris entre
                onMouseLeave={handleOnMouseLeave} // Quand la souris sort
                onMouseMove={handleOnMouseMove} // Quand la souris bouge 
                />
            
                {/* Affichage conditionnel : visible seulement si hover actif */}
                {isHover && (
                    <div>
                        <p>Hovering</p>

                        {/* Affiche les coordonnées de la souris */}
                        <p>Coords: x = {coords.x}, y = {coords.y}</p>
                    </div>
                )}
        </div>
    );
}

export default MouseTracker;



