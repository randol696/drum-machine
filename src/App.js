import React, { useState, useEffect, useRef, useCallback } from 'react';
import './App.css';
import { audioList } from './audioBank.js';

function App() {
  const [displayText, setDisplayText] = useState('');
  const audioRef = useRef('');
  const volumeRef = useRef(0);
  const [audioId, setAudioID] = useState('');
  const [currentAudio, setCurrentAudio] = useState(null);

  const handleKeyPress = useCallback((pressedKey) => {
    const audio = audioList.find((audio) => audio.key === pressedKey.toLowerCase());
    if (audio) {
      const audioElement = new Audio(audio.src);
      setAudioID(audio.id);
      audioElement.play();
      setCurrentAudio(audio);
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
    const newVolume = e.target.value / 100;
    volumeRef.current = newVolume;
    audioRef.current.volume = newVolume;
  };
  
  console.log(audioId);
  return (
    <div>
      <div id="drum-machine">
        <div className="buttons_container">
          {audioList.map((audio, index) => (
            <div key={index}>
              <button className="drum-pad" id={audio.id} type="button" onClick={() => handleKeyPress(audio.key)}>{audio.id}
              </button>
               <audio className="clip" id={audio.id} src={currentAudio}  />
            </div>
          ))}
        </div>
        <div id="display">
          <label className='switchBtn'>
            <input type="checkbox" />
            <div className="slide" >On Off </div>
          </label>
          <h2>{displayText}</h2>
          <input
            className="volume-range"
            type="range"
            min="0"
            max="100"
            onChange={handleVolumeChange}
          />
        </div>
       
      </div>
    </div>
  );
}

export default App;
