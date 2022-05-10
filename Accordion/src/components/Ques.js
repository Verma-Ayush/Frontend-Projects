import React, { useState } from "react";

export default function Question({ title, info }) {
  const [showDesc, setshowDesc] = useState(0);
  return (
    <div className="tile">
      <div className="ques">
        <span className="tit">{title}</span>
        <button
          className="butt"
          onClick={() => {
            setshowDesc(!showDesc);
          }}
        >
          {showDesc ? "-" : "+"}
        </button>
      </div>
      {showDesc ? <div className="desc">{info}</div> : ""}
    </div>
  );
}
