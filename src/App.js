import './App.css';
import { saveAs } from 'file-saver';
import { useState } from 'react';

function App() {
  const [memeTemplate, setMemeTemplate] = useState('');
  const [uperText, setUperText] = useState('');
  const [downText, setDownText] = useState('');

  const [url, setUrl] = useState('https://api.memegen.link/images/doge.jpeg');

  function urlConstruct(memeType, topText, bottomText) {
    if (memeType === '') {
      memeType = 'feelsgood';
    }
    if (topText !== '') {
      topText = `/${topText}`;
    } else {
      topText = `/_`;
    }
    if (bottomText !== '') {
      bottomText = `/${bottomText}`;
    }
    return `${memeType}${topText}${bottomText}`;
  }
  console.log(urlConstruct(memeTemplate, uperText, downText));
  return (
    <div className="container">
      <h1> Meme Generator</h1>
      <div>
        <img src={url} alt="meme" data-test-id="meme-image" />
      </div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <label>
          Meme template
          <input
            value={memeTemplate}
            onChange={(event) => {
              setMemeTemplate(event.currentTarget.value);
            }}
          />
        </label>
      </form>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <label>
          Top text
          <input
            value={uperText}
            onChange={(event) => {
              setUperText(event.currentTarget.value);
            }}
          />
        </label>
      </form>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <label>
          Bottom text
          <input
            value={downText}
            onChange={(event) => {
              setDownText(event.currentTarget.value);
            }}
          />
        </label>
      </form>

      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <button
          onClick={() => {
            setUrl(
              `https://api.memegen.link/images/${urlConstruct(
                memeTemplate,
                uperText,
                downText,
              )}.jpg`,
            );
          }}
        >
          Generate
        </button>
      </form>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <button
          onClick={() => {
            saveAs(
              `https://api.memegen.link/images/${urlConstruct(
                memeTemplate,
                uperText,
                downText,
              )}.jpg`,
              `meme-${memeTemplate}.jpg`,
            ); // Put your image url here.
          }}
        >
          Download
        </button>
      </form>
    </div>
  );
}

export default App;
