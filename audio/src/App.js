import React, { Component } from "react"
import Sound2 from "./song/backgroundMusic.mp3"
import { Howl } from 'howler'

 const sound = new Howl({
  src: [Sound2],
 });

// eslint-disable-next-line import/no-anonymous-default-export
export default class extends Component {
  PlayAudio = () => {
   if (sound.playing() === false) { //using this conditional to make sure sound doesnt repeat on top of its self
      sound.play()
   }
  }

  PauseAudio = () => {
    sound.pause()
  }

  RenderButtonAndSound = () => {
      return (
       <div>
         <button onClick={() => this.PlayAudio()}>
          Play Music
        </button>
        
        <button onClick={() => this.PauseAudio()}>
          Pause Music
        </button>
       </div>
      )
  }

  render() {
    return (
      <div className="App">
        {this.RenderButtonAndSound()}
      </div>
    )
  }
}