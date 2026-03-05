import { useState } from 'react';

function Compteur () {
const [count, setCount] = useState(0);


const handleIncrement = () => {
    setCount(count +1);
};

const handleDecrement = () => {
    if (count > 0) {
        setCount(count -1)
    };
};

const handleReset = () => {
    setCount(0)
};

return (
        <div>
            <h1>Compteur : {count}</h1>
            <button onClick={handleIncrement}>+1</button>
            <button onClick={handleDecrement}>-1</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
}

export default Compteur;