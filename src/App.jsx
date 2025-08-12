import './App.css';
import videoDB from './data/data.js';
import { useReducer, useState } from 'react';
import AddVideo from './components/AddVideo.jsx';
import VideoList from './components/VideoList.jsx';
import ThemeContext from './context/ThemeContext.js'
import { VideoContext } from './context/VideoContext.js';
import { VideoDispatchContext } from './context/VideoDispatchContext.js';

function App() {
    const [editableVideo, setEditableVideo] = useState(null)
    const [mode, setMode] = useState("dark")
    //REDUCER FUNCTION
    function videoReducer(videos, action) {
        switch (action.type) {
            case 'ADD':
                return [
                    ...videos,
                    { ...action.payload, id: videos.length + 1 }]
            case "DELETE":
                return videos.filter((item) => item.id != action.payload)

            case 'UPDATE':
                const index = videos.findIndex((v) => v.id == action.payload.id)
                const newVideos = [...videos]
                newVideos.splice(index, 1, action.payload)
                setEditableVideo(null)
                return newVideos
            default: videos
        }
    }
    const [videos, dispatch] = useReducer(videoReducer, videoDB)

    function editVideo(id) {
        setEditableVideo(videos.find((video) => video.id == id))
    }

    // const theme = useContext(ThemeContext)


    return (
        <>
            <ThemeContext.Provider value={mode}>
                <VideoContext.Provider value={videos}>
                    <VideoDispatchContext.Provider value={dispatch}>
                        <AddVideo
                            editableVideo={editableVideo}
                        >
                        </AddVideo>
                        <div className={`App ${mode}`}>
                            <VideoList
                                editVideo={editVideo}
                            >
                            </VideoList>
                        </div >
                    </VideoDispatchContext.Provider>
                </VideoContext.Provider>
            </ThemeContext.Provider>
        </>

    );
}

export default App;