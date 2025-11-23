import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import WordFrequency from './components/WordFrequency';
function App() {

  const [text, setText] = useState("");
  const [wordArray, setWordArray] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [btnHover, setBtnHover] = useState(false);

  const analyzeText = () => {
    // split every part of the string in the textarea into an array of individual, case-sensitive words.
    const words = text.toLowerCase().split(/[^a-zA-Z0-9']+/).filter(w => w.length > 0); // regular expression allows for apostrophes
    setWordArray(words);
    setSentenceCounter(SentenceCount(text));
    setShowResults(true);
    console.log(words);
  }

  const [sentenceCounter, setSentenceCounter] = useState(0);

  const SentenceCount = (inputText) => {
    
    let count = 0;

    for (let i = 0; i < inputText.length; i++) {
      if (inputText[i] === '.' || inputText[i] === '!' || inputText[i] === '?') {
        count++;
      }
    }
    return count;
  }
 
  return (
      <div className="App" style={{padding: '2rem'}}>
        <header className="App-header">
          <label style={{padding: '1rem', fontSize: '32px', fontWeight: 'bold', color: 'greenyellow'}}>Text Analyzer</label>
          <textarea 
            className="text-input" 
            placeholder="Enter the text you need analyzed..."
            value={text}
            onChange={(e) => setText(e.target.value)}/>
          <button 
            onClick={analyzeText} 
            style={{backgroundColor: 'greenyellow', fontSize: '20px', borderRadius: '5px', transform: btnHover ? 'scale(1.05)' : 'scale(1)'}}
            onMouseEnter={() => setBtnHover(true)}
            onMouseLeave={() => setBtnHover(false)}
            >Analyze Text
          </button>
        </header>
         <p style={{color: 'greenyellow'}}>This text contains {sentenceCounter} Sentences</p>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          {showResults && <WordFrequency wordArray={wordArray} />} {/* Conditionally render the word frequency if the showResults flag is also true */}
        </div>
      </div>
  );
}

export default App;
