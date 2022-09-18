import './App.css';
import { saveAs } from 'file-saver';
import { useState } from 'react';

function App() {
  const [memeTemplate, setMemeTemplate] = useState('doge');
  const [uperText, setUperText] = useState('');
  const [downText, setDownText] = useState('');
  const [url, setUrl] = useState('https://api.memegen.link/images/doge/just/try.jpeg');

  return (
    <div className="container">
      <h1> Meme Generator</h1>
      <div>
        <img data-test-id="meme-image" src={url} alt="meme" />
      </div>
      <label>
        Meme template
        <input
          value={memeTemplate}
          onChange={(event) => {
            setMemeTemplate(event.currentTarget.value);
          }}
        />
      </label>

      <label>
        Top text
        <input
          value={uperText}
          onChange={(event) => {
            setUperText(event.currentTarget.value);
          }}
        />
      </label>

      <label>
        Bottom text
        <input
          value={downText}
          onChange={(event) => {
            setDownText(event.currentTarget.value);
          }}
        />
      </label>

      <button
        onClick={() => {
          setUrl(function () {
            if (uperText.length > 0) {
              return `https://api.memegen.link/images/${memeTemplate}/${uperText}/${downText}.jpg`;
            } else {
              return `https://api.memegen.link/images/${memeTemplate}/_/${downText}.jpg`;
            }
          });
        }}
      >
        Generate
      </button>

      <button
        onClick={() => {
          saveAs(
            // Put your image url here.
            url,
            `meme-${memeTemplate}.jpg`,
          );
        }}
      >
        Download
      </button>
    </div>
  );
}

export default App;
