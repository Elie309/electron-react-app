import React from 'react';

const App = () => {
    const [count, setCount] = React.useState<number>(0);
    return (
        <h1 className="bg-red-500">
            Hello React + Electron + Vite + Tailwind + Prettier + Eslint!
            <p>Counter: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </h1>
    );
}

export default App;
