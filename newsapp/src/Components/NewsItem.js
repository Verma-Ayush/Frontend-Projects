import React from "react";
import Badge from "./Badge";

const NewsItem = (props) => {
  let byDefImgUrl = "https://source.unsplash.com/400x400/?news";

  let { title, description, imageUrl, newsUrl, date } = props; //extracting from props by array destruct.

  return (
    <div className="container my-3">
      <div className="card">
        <img
          src={imageUrl ? imageUrl : byDefImgUrl}
          className="card-img-top"
          alt="!Found"
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <Badge date={date} />
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-muted">
              Published on {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            href={newsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
