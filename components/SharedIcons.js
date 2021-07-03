import React from "react";
import {FaEnvelope,FaCopy} from 'react-icons/fa'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fab);

const SharedIcons = ({ shareLink }) => {
  console.log(shareLink)
  const onCopy = (text) => {
    
    if (typeof window !== "undefined") {
      let inp = document.createElement("input");
      document.body.appendChild(inp);
      inp.value = text.textContent;
      inp.select();
      document.execCommand("copy", false);
      inp.remove();
    }
  };

  let icons = [
    {
      name: "fb",
      icon: <FontAwesomeIcon color={"#A1A1A1"} icon={["fab", "facebook-f"]} />,
      link: "https://www.facebook.com/sharer/sharer.php?u=".concat(shareLink),
    },
    {
      name: "in",
      icon: <FontAwesomeIcon color={"#A1A1A1"} icon={["fab", "linkedin"]} />,
      link: "  http://www.linkedin.com/shareArticle?mini=true&url=".concat(
        shareLink
      ),
    },
    {
      name: "tw",
      icon: <FontAwesomeIcon color={"#A1A1A1"} icon={["fab", "twitter"]} />,
      link: "https://twitter.com/intent/tweet?url=".concat(shareLink),
    },
    {
      name: "email",
      icon: <FaEnvelope color={"#A1A1A1"} />,
      link: "mailto:?subject=I wanted you to see this site&body=Check out this site ".concat(
        shareLink)
    },
    {
      name: "whatsapp",
      icon:  <FontAwesomeIcon color={"#A1A1A1"} icon={["fab", "whatsapp"]} />,
      link: "https://api.whatsapp.com/send?text=".concat(shareLink)
    }
  ];

  return (
    <div className="shared-content">
      {icons.map((icon, key) => (
        <a key={key} href={icon.link}>
          <div key={key} className="icon">
            {icon.icon}
          </div>
        </a>
      ))}
      <div onClick={()=>{onCopy(shareLink)}} style={{paddingLeft:'10px',cursor:'pointer', fontSize: '25px' }}>
        <FaCopy color={"#A1A1A1"}  />
      </div>
    </div>
  );
};

export default SharedIcons;
