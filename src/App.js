
import React from 'react';
import './App.css';
import { useState, useEffect, useRef} from 'react';

function App() {
  
  const [audioSrc, setAudioSrc] = useState('');
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
      case "e":
        return keypresse()
      case "a":
        return keypressa()  
      case "s":
        return keypresss()  
      case "d":
          return keypressd()
      case "z":
        return keypressz()      
      case "x":
        return keypressx()      
      case "c":
        return keypressc()   
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
  function keypresse() {
    const newAudioSrc = 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3';
    setAudioSrc(newAudioSrc);
    audioRef.current.play();
    setDisplayText("Heater 3")
   
  }
  function keypressa() {
    const newAudioSrc = 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3';
    setAudioSrc(newAudioSrc);
    audioRef.current.play();
    setDisplayText("Heater 4")
   
  }
  function keypresss() {
    const newAudioSrc = 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3';
    setAudioSrc(newAudioSrc);
    audioRef.current.play();
    setDisplayText("Clap")
   
  }
  function keypressd() {
    const newAudioSrc = 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3';
    setAudioSrc(newAudioSrc);
    audioRef.current.play();
    setDisplayText("Clap")
   
  }

  function keypressz() {
    const newAudioSrc = 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3';
    setAudioSrc(newAudioSrc);
    audioRef.current.play();
    setDisplayText("Clap")
   
  }
  function keypressx() {
    const newAudioSrc = 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3';
    setAudioSrc(newAudioSrc);
    audioRef.current.play();
    setDisplayText("Clap")
   
  }

  function keypressc() {
    const newAudioSrc = 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3';
    setAudioSrc(newAudioSrc);
    audioRef.current.play();
    setDisplayText("Clap")
   
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
        <button className="drum-pad" id="Q" type="button" onClick={() => {keypressq()}}>Q</button>
        <button className="drum-pad" id="W" type="button" onClick={() => {keypressw()}}>W</button>
        <button className="drum-pad" id="E" type="button" onClick={() => {keypressq()}}>E</button>
        <button className="drum-pad" id="A" type="button" onClick={() => {keypressq()}}>A</button>
        <button className="drum-pad" id="S" type="button" onClick={() => {keypressq()}}>S</button>
        <button className="drum-pad" id="D" type="button" onClick={() => {keypressq()}}>D</button>
        <button className="drum-pad" id="Z" type="button" onClick={() => {keypressq()}}>Z</button>
        <button className="drum-pad" id="X" type="button" onClick={() => {keypressq()}}>X</button>
        <button className="drum-pad" id="C" type="button" onClick={() => {keypressq()}}>C</button>
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
 
      
   
      <audio  className="clip" ref={audioRef} src={audioSrc} id={displayText}/>
      </div>
      </div>
   
  );
}

export default App;
