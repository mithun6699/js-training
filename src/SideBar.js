import React from "react";
import "./sidebar.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import AddIcon from "@material-ui/icons/Add";
import InfoIcon from '@material-ui/icons/Info';
import CallIcon from '@material-ui/icons/Call';
import SideBarChannels from "./SideBarChannels";
import Avatar from '@material-ui/core/Avatar';
import { useState } from "react";

function SideBar() {
  const [data ,setdata] = useState(["Mithun"]
  )
  const AddMember= ()=>{
    // debugger
    const name = prompt("Enter your Name ")

    setdata([...data,name])
  }
    return (
        <div className="sidebar">
            {/* <h1>I am a sidebar</h1> */}
            <div className="sidebar__top">
                <h1>G T Mithun Raj</h1>
                <ExpandMoreIcon/>
            </div>

            <div className="sidebar__channels">
                <div className="sidebar__channelsheader">
                    <div className="sidebar__header">
                        <ExpandMoreIcon/>
                        <h4>Mithun Training</h4>
                    </div>
                    <AddIcon className="sidebar__addchannel" onClick={AddMember}/>
                </div>

                <div className="sidebar__channelslist">
                  {data.map((item)=>(<SideBarChannels name = {item}/>))}
                    

                    {/* <SideBarChannels/>

                    <SideBarChannels/> */}

                </div>
            </div>
            <div className="sidebar__voice">
                <SignalCellularAltIcon className="sidebar__voiceicon" fontSize="large"/>
                <div className="sidebar__voice__info">
                    <h3>
                        Voice Connected</h3>
                    <p>hello</p>
                </div>
                <div className="sidebar__voiceicons">
                    <InfoIcon/>
                    <CallIcon/>
                </div>
            </div>
            <div className="sidebarprofile">
                <Avatar/>
                <h5>Mithun Raj</h5>
                <div className="sidebar__voiceicons">
                <InfoIcon/>
                <CallIcon/>
                </div>
             
            </div>

        </div>
    );
}

export default SideBar;
