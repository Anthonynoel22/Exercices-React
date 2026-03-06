import { useState } from "react";

function MouseTracker () {
    const [isHover, setIsHover] = useState(false);
    const [coords, setCoords] = useState({ x: 0, y: 0})

    const handleOnMouseEnter = () => {
        setIsHover(true)
    };

    const handleOnMouseLeave = () => {
        setIsHover(false)
    };

    const handleOnMouseMove = (event) => {
        setCoords({
            x: event.clientX,
            y: event.clientY,
        });
    }

    return(
        <div>
            <div
            style={{
                width: 300, 
                height: 200, 
                backgroundColor: isHover ? "lightgray" : "lightgreen", 
                border: "1px solid #333",
                marginBottom: 16
                }}
                onMouseEnter={handleOnMouseEnter}
                onMouseLeave={handleOnMouseLeave}
                onMouseMove={handleOnMouseMove}
                />
            
                {isHover && (
                    <div>
                        <p>Hovering</p>
                        <p>Coords: x = {coords.x}, y = {coords.y}</p>
                    </div>
                )}
        </div>
    );
}

export default MouseTracker;



