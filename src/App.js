import { useState } from 'react';
import './index.css';

const dictionary = ["apple", "b", "c", "d", "e", "f", "g", "h"];

function App() {

  const [input, userInput] = useState("");

  function inputUpdate(e){
    userInput(e.target.value);
    console.log(input);
  }

  return (
    <div className="App">
    <input type="text" value = {input} onChange={inputUpdate}/>

    <div className="dictionaryArea">
      {
        dictionary.map((word) => {
          return <h1 key={word}>{input === word && word}</h1>
        })
      }
    </div>
    </div>
  );
}

export default App;
