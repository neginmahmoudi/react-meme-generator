import './App.css';
import { saveAs } from 'file-saver';
import { useState } from 'react';

function App() {
  const [memeTemplate, setMemeTemplate] = useState('doge');
  const [uperText, setUperText] = useState('');
  const [downText, setDownText] = useState('');
  const [url, setUrl] = useState('https://api.memegen.link/images/doge.jpeg');

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
            setUrl(
              `https://api.memegen.link/images/${
                memeTemplate.length > 0 ? memeTemplate : 'doge'
              }/${uperText.length > 0 ? uperText : '_'}/${
                downText.length > 0 ? downText : '_'
              }.jpg`,
            );
          }}
        />
      </label>

      <label>
        Top text
        <input
          value={uperText}
          onChange={(event) => {
            setUperText(event.currentTarget.value);
            setUrl(
              `https://api.memegen.link/images/${
                memeTemplate.length > 0 ? memeTemplate : 'doge'
              }/${uperText.length > 0 ? uperText : '_'}/${
                downText.length > 0 ? downText : '_'
              }.jpg`,
            );
          }}
        />
      </label>

      <label>
        Bottom text
        <input
          value={downText}
          onChange={(event) => {
            setDownText(event.currentTarget.value);
            setUrl(
              `https://api.memegen.link/images/${
                memeTemplate.length > 0 ? memeTemplate : 'doge'
              }/${uperText.length > 0 ? uperText : '_'}/${
                downText.length > 0 ? downText : '_'
              }.jpg`,
            );
          }}
        />
      </label>

      <button
        onClick={() => {
          setUrl(
            `https://api.memegen.link/images/${
              memeTemplate.length > 0 ? memeTemplate : 'doge'
            }/${uperText.length > 0 ? uperText : '_'}/${
              downText.length > 0 ? downText : '_'
            }.jpg`,
          );
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
