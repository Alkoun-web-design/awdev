import React from 'react';
import { PauseIcon, PlayIcon } from './Icons';

export default function MusicPlayer() {

    const [isPlaying, setIsPlaying] = React.useState(true);
    const audioRef = React.useRef();

    function handlePlayMusic(){
      setIsPlaying(!isPlaying)
      if(!isPlaying){
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    };

  return (
    <div onClick={handlePlayMusic} className="mx-auto mt-4 text-sm font-[Roboto] bg-gray-900 md:rounded-full px-4 py-2 w-fit hover:text-gray-900 hover:bg-gray-100 hover:cursor-pointer transition-all">
      Permafrost - Scott Buckley 
      { isPlaying ? <PauseIcon /> : <PlayIcon /> }
      <audio ref={audioRef} className="md:inline bg-gray-900" src="/audio/scott-buckley-permafrost(chosic.com).mp3" 
        // controls 
        autoPlay loop   
      />
    </div>
  )
}