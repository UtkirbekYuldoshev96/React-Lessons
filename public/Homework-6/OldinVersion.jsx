import React from "react";

class OldinVersion extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };
    this.menusVoid = this.menusVoid.bind(this);
    this.plusVoid = this.plusVoid.bind(this);
  }
  
  menusVoid() {
    this.setState({ count: this.state.count - 1 });
  }

  plusVoid() {
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    return (
      <>
        <h3>Counter app</h3>
        <div>
          <button onClick={this.menusVoid} className="btn btn-light">
            -
          </button>
          <button className="btn btn-primary text-white">
            {this.state.count}
          </button>
          <button onClick={this.plusVoid} className="btn btn-light">
            +
          </button>
        </div>
      </>
    );
  }
}

export default OldinVersion;
