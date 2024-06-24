import React from "react";

export default function Card(props) {
  return (
    <>
      <div>
        <div className="title">
          <h2>Demo</h2>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>

        <div className="card">
          <div className="card-header">
            <h3>Lorem, ipsum dolor.</h3>
          </div>
          <div className="card-body">
            <button>click</button>
            <button>view more</button>
          </div>
        </div>
      </div>
    </>
  );
}
