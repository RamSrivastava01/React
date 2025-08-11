import { useState } from "react"
import "./Playbutton.css"
function Playbutton({ title, children, message, onPlay, onPause }) {
    const [playing, setPlaying] = useState(false)
    function handleClick(e) {
        console.log(e.target

        )
        // alert(message.concat(title))
        if (playing) { onPause() }
        else { onPlay() }
        setPlaying(!playing)
    }
    return (
        <>
            <button className="playBtn"
                onClick={handleClick}>{playing ? "▶️" : "⏸️"}</button>
        </>
    )
}

export default Playbutton