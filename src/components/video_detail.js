import React from "react";
import Footer from "./footer";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Video Loading...</div>;
  }
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;
  return <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url} />
      </div>
      <div className="details">
        <div>
          <h4>Description</h4> {video.snippet.description}
        </div>
      </div>
      <Footer />
    </div>;
};

export default VideoDetail;
