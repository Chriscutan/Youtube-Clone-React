import React from "react";
import "../components/VideoRow.css";

function VideoRow({ views, subs, desc, timestamp, channel, title, image }) {
  return (
    <div className="videoRow">
      <img src={image} alt="" />
      <div className="videoRow__text">
        <h3>{title}</h3>
        <p className="videoRow__headline">
          {channel} .
          <span className="videoRow__subs">
            <span className="videoRow__subsNumber">{subs}</span> subscribers
          </span>{" "}
          . {views} views . {timestamp} days ago
        </p>
        <p className="videoRow__desc">{desc}</p>
      </div>
    </div>
  );
}

export default VideoRow;
