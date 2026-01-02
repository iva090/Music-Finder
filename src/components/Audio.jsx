import { Pause, Play } from "lucide-react";
import { useRef, useState } from "react";

function AudioPlayer(props) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    const audioRef = useRef(null)

    function handlePlay() {
        audioRef.current.play()
        setIsPlaying(true)
    }

    function handlePause() {
        audioRef.current.pause()
        setIsPlaying(false)
    }

    function handlePlayPause() {
        if(isPlaying){
            handlePause();
        } else {
            handlePlay();
        }
    }

    const handleSeek = (e) => {}
    return (
        <div>
            <input
                type="range"
                min="0"
                max={duration}
                value={currentTime}
                onChange={handleSeek}
                className="w-full accent-regal-blue"
                />
                
            
            <audio ref={audioRef} src={props.src} />

            <div>
                <p>{currentTime}</p>
                <p>{duration}</p>
            </div>

            <button onClick={handlePlayPause}>
                {isPlaying ? <Pause /> : <Play />}
            </button>
        </div>
    )
}

export default AudioPlayer;