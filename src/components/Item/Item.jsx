import React from "react";
import "./Item.css";

export default class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="item-card">
        <div className="item-image">
          <img width={250} src={this.props.img} />
        </div>
        <div className="item-info">
          <h3 className="nameOfItem">{this.props.name}</h3>
          <h4 className="description">
            {this.props.vitaminCAmount} mg for 100g
          </h4>
          <input
            className="checkbox"
            type="checkbox"
            onChange={(x) => {
              if (x.target.checked === true) {
                this.props.funcSelect(Number(this.props.vitaminCAmount));
              } else {
                this.props.funcUnSelect(Number(this.props.vitaminCAmount));
              }
            }}
          />
        </div>
      </div>
    );
  }
}
