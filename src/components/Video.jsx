import './Video.css';
import Playbutton from './Playbutton.jsx'
import useVideoDispatch from '../hooks/useVideoDispatch.js';

function Video({ title, channel = "Coder Dost", views, time, verified, id, editVideo }) {
    const dispatch = useVideoDispatch()
    return (
        <>
            <div className='container'>
                <button className="close" onClick={() => dispatch({ type: 'DELETE', payload: id })}>X</button>
                <button className="edit" onClick={() => editVideo(id)}>🖊️</button>

                <div className="pic">
                    <img src={`https://picsum.photos/id/${id}/100/100`} alt="Katherine Johnson" />
                </div>
                <div className="title">{title}</div>
                <div className="channel">{channel} {verified ? "✅" : null}</div>
                <div className="views">
                    {views} views <span>.</span> {time}
                </div>
                <Playbutton
                    title={title}
                    onPlay={() => console.log("Playing", title)}
                    onPause={() => console.log("Paused", title)}
                    message="Play msg">

                </Playbutton>

            </div >
        </>
    );
}

export default Video;