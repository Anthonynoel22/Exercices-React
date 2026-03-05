import { useState } from "react";

function LikesToggle() {
    const [likes, setLikes] = useState(0);
    const [visible, setVisible] = useState(false);

    const handleLike = () => {
        setLikes(likes + 1);
    };

    const handleToggle = () => {
        setVisible(!visible);
    };

    return (
        <div>
            <h2>Post Instagram-like</h2>

            {/* Système de likes */}
            <p>Article super cool !</p>
            <button onClick={handleLike}>{likes} likes</button>

            {/* Toggle visibilité */}
            <br />
            <br />
            <button onClick={handleToggle}>
                {visible ? "Cacher le secret" : "Montrer le secret"}
            </button>

            {visible && (
                <div
                    style={{
                        marginTop: "10px",
                        padding: "10px",
                        background: "#f0f8ff",
                    }}
                >
                    <strong>SECRET :</strong> Tu maîtrises les events + state
                    en React ! 
                </div>
            )}
        </div>
    );
}

export default LikesToggle;
