import Video from './Video.jsx';
function VideoList({ videos, deleteVideo, editVideo }) {
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
                deleteVideo={deleteVideo}
                editVideo={editVideo}
            >


            </Video>)}
        </>
    )
}
export default VideoList