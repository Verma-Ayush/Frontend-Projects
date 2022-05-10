import React from "react";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="ErrorPage">
      <div className="single-text">
        <h1>Dead End</h1>
        <div>
          <Link to="/">Back to home</Link>
        </div>
      </div>
    </div>
  );
}
