import { useState } from "react";
import "./App.css";
import { fetchAnimes } from "./store/reducers/Animes";

function App() {
  const [animes, setAnimes] = useState([]);

  const buttonHandler = async () => {
    const animesArray = await fetchAnimes();
    setAnimes(animesArray);
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={buttonHandler}>Click me</button>
        <ul>
          {animes.map((post: any) => (
            <li key={post.id}>{post.name}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
