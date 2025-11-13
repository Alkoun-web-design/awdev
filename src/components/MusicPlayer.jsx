import React from 'react';
import { PauseIcon, PlayIcon } from './Icons';

export default function MusicPlayer() {

    const [isPlaying, setIsPlaying] = React.useState(false);
    const audioRef = React.useRef();

    React.useEffect(() => {
      if(isPlaying){
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }, [isPlaying])
    
    // function handlePlayMusic(){
    //   setIsPlaying(!isPlaying)
    //   if(!isPlaying){
    //     audioRef.current.play();
    //   } else {
    //     audioRef.current.pause();
    //   }
    // };

  return (
    <div 
      onClick={() => setIsPlaying(!isPlaying)}
      onKeyDown={(e) => {e.key === "Enter" ? setIsPlaying(!isPlaying) : null }}
      className="mx-auto mt-4 text-sm font-[Roboto] bg-gray-900 rounded-full px-4 py-2 w-fit hover:text-gray-900 hover:bg-gray-100 hover:cursor-pointer transition-all">
        Permafrost - Scott Buckley 
        { isPlaying ? <PauseIcon /> : <PlayIcon /> }
          <audio ref={audioRef} className="md:inline bg-gray-900" src="/audio/scott-buckley-permafrost(chosic.com).mp3" 
          // controls 
            loop   
      />
    </div>
  )
}