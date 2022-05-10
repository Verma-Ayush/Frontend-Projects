import React from "react";

const Badge = (props) => {
  let newsday = new Date(props.date).getDay();
  let today = new Date().getDay();
  if (newsday === today)
    return (
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        New
        <span className="visually-hidden">unread messages</span>
      </span>
    );
  else return <div></div>;
};

export default Badge;
