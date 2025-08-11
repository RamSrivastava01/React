import './App.css';
import videoDB from './data/data.js';
import { useReducer, useState } from 'react';
import AddVideo from './components/AddVideo.jsx';
import VideoList from './components/VideoList.jsx';

function App() {
    //REDUCER FUNCTION
    function videoReducer(videos, action) {
        switch (action.type) {
            case 'ADD':
                return ""
            default: videos
        }
    }
    const [videos, dispatch] = useReducer(videoReducer, videoDB)
    // const [videos, setVideos] = useState(videoDB)
    const [editableVideo, setEditableVideo] = useState(null)
    //FUNCTION FOR ADDING THE VIDEO
    function addVideo(video) {
        setVideos([
            ...videos,
            { ...video, id: videos.length }

        ])

    }
    //FUNCTION FOR DELETING THE VIDEO
    function deleteVideo(id) {
        setVideos(videos.filter((item) => item.id != id))


    }

    // FUNCTION FOR UPDATING THE VIDEO
    function editVideo(id) {
        setEditableVideo(videos.find((video) => video.id == id))
    }

    function updateVideo(video) {
        const index = videos.findIndex((v) => v.id == video.id)
        const newVideos = [...videos]
        newVideos.splice(index, 1, video)
        setVideos(newVideos)
        // console.log(video)
    }
    return (
        <>
            <AddVideo
                updateVideo={updateVideo}
                addVideo={addVideo}
                editableVideo={editableVideo}
            >

            </AddVideo>
            <div className="App">

                <VideoList
                    videos={videos}
                    deleteVideo={deleteVideo}
                    editVideo={editVideo}
                >

                </VideoList>

            </div >
        </>

    );
}

export default App;