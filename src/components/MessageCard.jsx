// Composant MessageCard qui reçoit des props : author, content, isImportant
function MessageCard({author, content, isImportant}) {

    // Style de la carte (conteneur principal)
    const cartStyle = {
        border: "1px solid #cccccc", // Bordure grise
        borderRadius: "8px", // Coins arrondis
        padding: "12px", // Espace interne
        marginBottom: "8px", // Espace entre les cartes 
    };

    // Style du contenu du message (dépend de isImportant)
    const contentStyle = {
        color: isImportant ? "red" : "black", // Rouge si important, sinon noir
        fontWeight: isImportant ? "bold" : "normal", // Gras si important
    };


    return (
        <div style={cartStyle}>
            {/* Titre du composant */}
            <h1>Message</h1>

            {/* Affiche l'auteur du message */}
            <p>De : {author}</p>

            {/* Affiche le contenu avec un style conditionnel */}
            <p style={contentStyle}>{content}</p>

            {/* Affichage conditionnel : s'affiche seulement si isImportant = true */}
            {isImportant && <p>Message important</p>}
        </div>
    );
}

export default MessageCard;