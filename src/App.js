import { useState } from "react";
import "./App.css";

function App() {
  const [quote, setQuote] = useState();

  const handleClick = () => {
    fetch("https://animechan.vercel.app/api/random")
      .then((response) => response.json())
      // .then((quote) => console.log(quote));
      .then((quote) =>
        setQuote({
          quote: quote.quote,
          character: quote.character,
          anime: quote.anime,
        })
      );
  };

  return (
    <div className="App">
      <h1>{quote.quote}</h1>
      <h1>
        <b>{quote.character}</b> ({quote.anime})
      </h1>
      <button onClick={handleClick}>Get quote</button>
    </div>
  );
}

export default App;
