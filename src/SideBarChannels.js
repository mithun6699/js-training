import React from "react";
import "./SideBarChannels.css";
function SideBarChannels({ name }) {


  return (
    <div className="SideBarChannels">
      <h4 >
  <span className="SideBarChannels__hash">#</span> {name}{" "}
      </h4>
    </div>
  );
}

export default SideBarChannels;
