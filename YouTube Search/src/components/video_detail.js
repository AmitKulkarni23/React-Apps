// We do not need any recording of state
// as we are just embedding teh title, image and link to the video from
// Youtube. Therefore use a functional component

// Boilerplate setup
import React from 'react';


const VideoDetail = (props) => {
    const video = props.video;
    if(!video ){
        return <div>Loading...</div>;
    }
    // Embed URL
    const videoID = video.id.videoId;

    // Creating our own URL
    //const url = "https://youtube.com/embed" + videoID;
    // String interpolation / string injection / shoving another string into
    // this string in ES6

     const url = `https://youtube.com/embed/${videoID}`;
     
    return (
        <div className="VideoDetail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>

            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>

    );
};

export default VideoDetail;
