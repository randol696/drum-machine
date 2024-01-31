
import React from 'react';
import './App.css';
import { useState, useEffect, useRef} from 'react';

function App() {
  
  const [audioSrc, setAudioSrc] = useState('https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3');
  const [displayText, setDisplayText] =useState('');
  const audioRef = useRef('');
  const volumeRef = useRef(); 

  useEffect(() => { 

  
  document.addEventListener("keydown", function(event){

    switch(event.key){
      case "q":
        return keypressq()
      case "w":
        return keypressw()
      default:
    }
  });
},[]);



  function keypressq() {
    const newAudioSrc = 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3';
    setAudioSrc(newAudioSrc);
    audioRef.current.play();
    setDisplayText("Heater 1")
  
  }

  function keypressw() {
    const newAudioSrc = 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3';
    setAudioSrc(newAudioSrc);
    audioRef.current.play();
    setDisplayText("Heater 2")
   
  }

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value / 100;
    volumeRef.current = newVolume;
    audioRef.current.volume = newVolume;
  };

  
  return (
    <div>
      <div id="drum-machine">
        <div className="buttons_container">
        <button className="drum-pad" id="q" type="button" onClick={() => {keypressq()}}>Q</button>
        <button className="drum-pad" id="w" type="button" onClick={() => {keypressw()}}>W</button>
        <button className="drum-pad" id="e" type="button" onClick={() => {keypressq()}}>E</button>
        <button className="drum-pad" id="a" type="button" onClick={() => {keypressq()}}>A</button>
        <button className="drum-pad" id="s" type="button" onClick={() => {keypressq()}}>S</button>
        <button className="drum-pad" id="d" type="button" onClick={() => {keypressq()}}>D</button>
        <button className="drum-pad" id="z" type="button" onClick={() => {keypressq()}}>Z</button>
        <button className="drum-pad" id="x" type="button" onClick={() => {keypressq()}}>X</button>
        <button className="drum-pad" id="c" type="button" onClick={() => {keypressq()}}>C</button>
        </div>
        <div id="display">
          <label className='switchBtn'>
          <input type="checkbox" />
          <div className="slide" >On Off </div>
          </label>
       
          <h2>Display{displayText}</h2>
          <input
            className="volume-range"
            type="range"
            min="0"
            max="100"
            onChange={handleVolumeChange}
          />
        </div>
 
      
   
      <audio  ref={audioRef} src={audioSrc} />
      </div>
      </div>
   
  );
}

export default App;
