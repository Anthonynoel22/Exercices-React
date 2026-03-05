import { useState } from 'react';

function TexteLive () {
    const [text, setText] = useState("");

    const handleClear = () => {
    setText("");
    };

    return (
        <div>
            <input 
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder='write something...'
            />
            <p>you writed <strong>{text}</strong></p>
            <button onClick={handleClear}>Erase</button>
        </div>
    );
}

export default TexteLive;