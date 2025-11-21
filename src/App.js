import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import WordFrequency from './components/WordFrequency';
function App() {

  const [text, setText] = useState("");
  const [wordArray, setWordArray] = useState([]);
  const analyzeText = () => {
    // split every part of the string in the textarea into an array of individual, case-sensitive words.
    const words = text.toLowerCase().split(/[^a-zA-Z0-9']+/).filter(w => w.length > 0); // regular expression allows for apostrophes
    setWordArray(words);
    console.log(words);
  }
  return (
    <div className="App">
      <div className="App">
        <header className="App-header">
          <label>Text Analyzer</label>
          <textarea 
            className="text-input" 
            placeholder="Enter the text you need analyzed..."
            value={text}
            onChange={(e) => setText(e.target.value)}/>
          <button onClick={analyzeText}>Analyze Text</button>
        </header>
         <p style={{color: 'white'}}>This text contains NUMBER OF SENTENCES</p>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <WordFrequency wordArray={wordArray}></WordFrequency>
        </div>
       
      </div>
    </div>
    
  );
}

export default App;
