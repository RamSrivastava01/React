import Video from './Video.jsx';
import axios from 'axios'

import useVideos from '../hooks/useVideos.js';
import { useEffect, useState } from 'react';
function VideoList({ editVideo }) {
    const [videos, setVideos] = useState([])
    const url = "https://my.api.mockaroo.com/frontend.json?key=3a41cb10"

    async function handleClick() {
        const res = await axios.get(url)
        // const { firstName, email } = res.data.users
        console.log(res.data)
        setVideos(res.data)
    }
    //DOING THE SAME THING USING useEFECT
    useEffect(() => {

    }, [])


    // const videos = useVideos()
    return (
        <>
            {videos.map((video) => <Video
                title={video.title}
                time={video.time}
                channel={video.channel}
                verified={video.verified}
                views={video.views}
                id={video.id}
                key={video.id}

                editVideo={editVideo}
            >


            </Video>)}
            <div>

                <button >Get Videos</button>
            </div>
        </>
    )
}
export default VideoList