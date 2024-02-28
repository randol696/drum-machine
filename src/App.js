import React from 'react';
//import React, {useEffect } from 'react';
import './App.css';
import {DrumPads} from './audioBank.js'; 

const DrumPad = ({ drumKey, song, handleClick, url }) => {
  return (
      <button className="drum-pad" id={song} onClick={() => handleClick(drumKey,song)}>
          {drumKey}
          <audio className="clip" src={url} id={drumKey}/>
      </button>
  );
};

const DrumMachine = () => {
  
  const [currentSongText, setCurrentSongText] = React.useState('');

  React.useEffect(() => {
      const handleKeyPress = (e) => {
          const pad = DrumPads.find(
              item => item.key === e.key.toUpperCase(),
          );
          if (pad) document.getElementById(pad.song).click();
      };

      window.addEventListener('keypress', handleKeyPress);

      return () => {
          window.removeEventListener('keypress', handleKeyPress);
      };
  }, );
 
  const handleButtonClick = (key, song) => {
      document.getElementById(key).play();
      setCurrentSongText(song);
  };

  return (
      <div id="drum-machine">
          <div className="buttons_container">
              <div id="display-pads" >
                  {DrumPads.map(item => (
                      <DrumPad 
                          song={item.song}
                          key={item.key}
                          drumKey={item.key}
                          handleClick={handleButtonClick}
                          url={item.url}
                          className='drum-pad' />
                  ))}
              </div>
              
          </div>
          <div className="app_title">
              <h1>Drum Machine App</h1>
          </div>
          <p id="display" className="current-text">{currentSongText}</p>
      </div>
  );
};

const App = () => {
  return (
      <div className="App">
          <DrumMachine/>
      </div>
  );
};

export default App;