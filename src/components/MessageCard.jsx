
function MessageCard({author, content, isImportant}) {

    const cartStyle = {
        border: "1px solid #cccccc",
        borderRadius: "8px",
        padding: "12px",
        marginBottom: "8px",
    };

    const contentStyle = {
        color: isImportant ? "red" : "black",
        fontWeight: isImportant ? "bold" : "normal",
    };


    return (
        <div style={cartStyle}>
            <h1>Message</h1>
            <p>De : {author}</p>
            <p style={contentStyle}>{content}</p>
            {isImportant && <p>Message important</p>}
        </div>
    );
}

export default MessageCard;