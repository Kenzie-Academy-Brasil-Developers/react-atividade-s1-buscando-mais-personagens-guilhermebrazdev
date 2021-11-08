import "./App.css";

import Characters from "./components/Characters";
import { useEffect, useState } from "react";

function App() {
  const [characterList, setCharacterList] = useState([]);
  const [next, setNext] = useState(1);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${next}`)
      .then((response) => response.json())
      .then((response) => setCharacterList(response.results))
      .catch((err) => console.log(err));
  }, [next]);

  const previousPage = () => {
    if (next > 1) {
      setNext(next - 1);
    }
  };
  const nextPage = () => {
    if (next < 42) {
      setNext(next + 1);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <Characters lista={characterList} />
        <div id="botoes">
          <button onClick={previousPage}>Anterior</button>
          <button onClick={nextPage}>Próxima</button>
        </div>
      </header>
    </div>
  );
}

export default App;
