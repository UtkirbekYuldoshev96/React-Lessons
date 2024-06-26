import { toHaveDisplayValue } from "@testing-library/jest-dom/matchers";
import React from "react";

const formStyle = {
  maxWidth: "450px",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "15px",
  boxShodow: "0 0 10px rgba(0, 0, 0, 0.2)",
  borderRadus: "24px",
  padding: "25px 40px",
};

class ClassCRUD extends React.Component {
  constructor() {
    super();

    this.getBrand = this.getBrand.bind(this);
    this.getColor = this.getColor.bind(this);
    this.getStatus = this.getStatus.bind(this);
    this.getOperator = this.getOperator.bind(this);
    this.getMemory = this.getMemory.bind(this);
    this.getPrice = this.getPrice.bind(this);

    this.state = {
      mobileArray: [],
      brand: "",
      rang: "",
      status: "",
      operativ: "",
      xotira: "",
      narx: "",
    };
  }

  getBrand(event) {
    this.setState({ ...this.state, brand: event.target.value });
  }

  getColor(event) {
    this.setState({ ...this.state, rang: event.target.value });
  }
  getStatus(event) {
    this.setState({ ...this.state, status: event.target.value });
  }
  getOperator(event) {
    this.setState({ ...this.state, operativ: event.target.value });
  }

  getMemory(event) {
    this.setState({ ...this.state, xotira: event.target.value });
  }
  getPrice(event) {
    this.setState({ ...this.state, narx: event.target.value });
  }

  handLerSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <>
        <div className="class-crud-comp">
          <div className="container">
            <div className="row py-4">
              <form action="#" style={formStyle} onSubmit={this.handLerSubmit}>
                <input
                  type="text"
                  onChange={this.getBrand}
                  className="form-control"
                  placeholder="Brand"
                />
                <input
                  type="text"
                  onChange={this.getColor}
                  className="form-control"
                  placeholder="Rangi"
                />
                <div className="d-flex gap-3">
                  <label htmlFor="">Yangi</label>
                  <input type="radio" id="new" name="status" />
                  <label htmlFor="">B/U</label>
                  <input type="radio" id="old" name="status" />
                </div>

                <input
                  type="number"
                  onChange={this.getOperator}
                  className="form-control"
                  placeholder="Operativka"
                />
                <input
                  type="number"
                  onChange={this.getMemory}
                  className="form-control"
                  placeholder="Xotirasi"
                />
                <input
                  type="number"
                  onChange={this.getPrice}
                  className="form-control"
                  placeholder="Narxi"
                />

                <button className="btn btn-primary">Add is phone</button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ClassCRUD;
