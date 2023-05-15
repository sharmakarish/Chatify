import React, { useContext, useState } from "react";
import Cam from "../img/cam.png";
import Add from "../img/add.png";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const Chatbox = () => {
  const { data } = useContext(ChatContext);
  const [background, setBackground] = useState("#131e24");
  const [messages, setMessages] = useState([]);

  

  const handleBackgroundChange = (option) => {
    switch (option.value) {
      case "Light Mode":
        setBackground("white");
        break;
      case "Dark Mode":
        setBackground("#131e24");
        break;
      case "Night Light":
        setBackground("#abaa9e");
        break;
      default:
        setBackground("#131e24");
        break;
    }
  };

  const options = ["Dark Mode", "Light Mode", "Night Light"];

  const defaultOption = options[0];

  return (
    <div className="chatbox" style={{ backgroundColor: background }}>
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <Dropdown
            options={options}
            onChange={handleBackgroundChange}
            value={defaultOption}
            placeholder="Select an option"
          />
        </div>
      </div>
      <Messages messages={messages} background={background} />
      <Input />
    </div>
  );
};

export default Chatbox;



