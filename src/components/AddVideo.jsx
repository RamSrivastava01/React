import { useEffect, useState } from "react";
import "./AddVideo.css"
function AddVideo({ addVideo, updateVideo, editableVideo }) {
    const initialValue = {
        time: "2 year ago",
        channel: "Coder Dost",
        verified: true,
        title: '',
        views: ''
    }
    const [isEditable, setIsEditable] = useState(false)
    const [video, setVideo] = useState(initialValue)
    //HANDLING SUBMIT
    function handleSubmit(e) {
        e.preventDefault();
        if (editableVideo) {
            updateVideo(video)
        } else {

            addVideo(video)
        }
        setVideo(initialValue)

    }
    //HANDLING CHANGE
    function handleChange(e) {
        setVideo({
            ...video,
            [e.target.name]: e.target.value
        })


    }
    useEffect(() => {
        if (editableVideo) {
            setVideo(editableVideo)
        }
    }, [editableVideo])



    return (
        <form className="addForm">
            <input
                type="text"
                onChange={handleChange}
                placeholder="Title"
                name="title"
                value={video.title}
            />

            <input type="text"
                onChange={handleChange}
                placeholder="Views"
                name="views"
                value={video.views}
            />

            <button onClick={handleSubmit}

                className='videos'>{editableVideo ? 'Edit' : 'Add'} video
            </button>
        </form>
    )
}
export default AddVideo