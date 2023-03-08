import { Avatar } from "@mui/material";
import React from "react";
import VerifiedIcon from "@mui/icons-material/CheckCircleOutlined";
import "../components/ChannelRow.css";

function ChannelRow({ image, channel, verified, subs, videos, desc }) {
  return (
    <div className="channelRow">
      <Avatar className="channelRow__logo" alt={channel} src={image} />
      <div className="channelRow__text">
        <h4>
          {channel} {verified && <VerifiedIcon />}
        </h4>
        <p>
          {subs} subscribers . {videos} videos
        </p>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default ChannelRow;
