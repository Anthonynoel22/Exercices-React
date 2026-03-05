import { useState } from "react";
import Compteur from "./components/Compteur.jsx";
import TexteLive from "./components/TexteLive.jsx";
import TodoList from "./components/TodoList.jsx";
import LikesToggle from "./components/LikesToggle.jsx";

function App() {
  const [exo, setExo] = useState("compteur");

  return (
    <div style={{ padding: "20px" }}>
      <h1>🎯 Exercices React</h1>
      
      <div>
        <button onClick={() => setExo("compteur")}>Compteur</button>
        <button onClick={() => setExo("texte")}>Texte Live</button>
        <button onClick={() => setExo("todo")}>Todo List</button>
        <button onClick={() => setExo("like")}>LikesToggle</button>
      </div>

      {exo === "compteur" && <Compteur />}
      {exo === "texte" && <TexteLive />}
      {exo === "todo" && <TodoList />}
      {exo === "like" && <LikesToggle />}
    </div>
  );
}

export default App;