import './App.css';
import QuoteCard from "./component/QuoteCard";
import axios from "axios";
import { useState } from "react";


const initialQuote = {
  quote: "Gah, stupid sexy Flanders!",
  character: "Homer Simpson",
  img: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
  characterDirection: "Right",
};


function App() {
  const [quote, setQuote] = useState(initialQuote);

  const getQuote = () => {

    axios
      .get(`https://simpsons-quotes-api.herokuapp.com/quotes`)
      .then((response) => response.data)
      .then((data) => {
        console.log(data[0]);
        setQuote(data[0]);

      });
  };


    return (
      <div className="App">
        <QuoteCard quote={quote} />
        <button type="button" onClick={getQuote}>
          Get a new Quote
        </button>
      </div>
    );
  }


export default App;
