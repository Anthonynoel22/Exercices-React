import { useState } from "react";

function ToggleBlackWhite () {
    const [isBlack, setIsBlack] = useState(false);

    const handleToggle = () => {
        setIsBlack((prev) => !prev)
    };

    const boxStyle = {
        width: 200,
        height: 200,
        backgroundColor: isBlack ? "black" : "white",
        color: isBlack ? "black" : "white",
        border: "1px solid #333",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 16,
    };

    return (
        <div>
            <div style={boxStyle}>
                {isBlack ? "Background black" : "Blackground white"}
            </div>
            <button onClick={handleToggle}>
            Toggle
            </button>
        </div>
    );
}

export default ToggleBlackWhite;
