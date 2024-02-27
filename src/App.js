import React, { useState, useEffect, useCallback, useRef } from 'react';
import './App.css';
import { audioList } from './audioBank.js';

function App() {
  const [displayText, setDisplayText] = useState('');
  const audioRef = useRef(new Audio());

  const handleKeyPress = useCallback((pressedKey) => {
    const audio = audioList.find((audio) => audio.key === pressedKey.toLowerCase());
    if (audio) {
      audioRef.current.src = audio.src;
      audioRef.current.play();
      setDisplayText(audio.name);
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      handleKeyPress(event.key);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyPress]);

  const handleVolumeChange = (e) => {
    audioRef.current.volume = e.target.value / 100;
  };
  
  
  return (
    <div id="drum-machine">
      <div className="buttons_container">
        {audioList.map((audio, index) => (
          <div key={index} className="drum-pad" id={audio.id} onClick={() => handleKeyPress(audio.key)}>
            {audio.id}
            <audio className="clip" id={audio.id} src={audio.src}/>
          </div>
        ))}
      </div>
      <div id="display">
        <label className='switchBtn'>
          <input type="checkbox" />
          <div className="slide" >On Off </div>
        </label>
        <h2>{displayText}</h2>
        <input className="volume-range" type="range" min="0" max="100" onChange={handleVolumeChange} />
      </div>
    </div>
  );
}

export default App;