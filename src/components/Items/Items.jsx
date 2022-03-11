import React from "react";
import Item from "../Item/Item";
import "./Items.css";

export default class Items extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          name: "Apple",
          img: "https://images.heb.com/is/image/HEBGrocery/prd-medium/001558019.jpg",
          vitaminCAmount: 4.6,
        },
        {
          name: "Orange",
          img: "https://i0.wp.com/www.baqala.store/wp-content/uploads/2021/03/orange.jpg?fit=500%2C500&ssl=1",
          vitaminCAmount: 53,
        },
        {
          name: "Banana",
          img: "https://www.cppng.com/file/download/2020-06/35116-6-banana-bunch.png",
          vitaminCAmount: 8,
        },
        {
          name: "Avocado",
          img: "https://5.imimg.com/data5/MQ/TP/MY-29885087/fresh-avocado-500x500.jpg",
          vitaminCAmount: 10,
        },
        {
          name: "Coconut",
          img: "https://4.imimg.com/data4/YT/DI/MY-12878195/fresh-coconut-500x500.jpg",
          vitaminCAmount: 3,
        },
        {
          name: "Cherry",
          img: "https://iranfreshfruit.net/wp-content/uploads/2020/01/red-cherry-2.jpg",
          vitaminCAmount: 10,
        },
        {
          name: "Kohlrabi",
          img: "https://media.istockphoto.com/photos/kohlrabi-with-leaves-on-isolated-white-backround-picture-id468138612?k=20&m=468138612&s=612x612&w=0&h=1li61ihryT8kXRSyAObiIibwfpd3XTf_Zdvy3Deveso=",
          vitaminCAmount: 62,
        },
        {
          name: "Pepper",
          img: "https://topseedsinternational.com/wp-content/uploads/2020/01/ARNON_141_studio-6-2-scaled-500x500.jpg",
          vitaminCAmount: 143,
        },
        {
          name: "Tomato",
          img: "https://www.freepnglogos.com/uploads/tomato-png/tomato-puree-manufacturer-and-supplier-lemonconcentrate-3.png",
          vitaminCAmount: 13,
        },
      ],
      sum: 0,
    };
  }

  OneItemSelected = (selectedItem) => {
    let total = this.state.sum;
    total = total + selectedItem;
    // Math.round(total);
    // console.log(Math.round(total));
    this.setState({ sum: total });
  };

  OneItemUnSelected = (selectedItem) => {
    let total = this.state.sum;
    total = total - selectedItem;
    // Math.round(total);
    // console.log(Math.round(total));
    this.setState({ sum: total });
  };

  render() {
    return (
      <>
        <h1>My Fruits & Vegetables info</h1>
        <h2>The Total Of Vitamin C is : {this.state.sum}</h2>

        <div className="Credits">
          <h6 style={{ textAlign: "left", margin: 0, paddingLeft: 15 }}>
            Created by Asaf Yacobovich & Ariel Hillel
          </h6>
        </div>
        <div className="items">
          {this.state.items.map((item) => {
            return (
              <Item
                key={item.name}
                funcSelect={this.OneItemSelected}
                funcUnSelect={this.OneItemUnSelected}
                name={item.name}
                img={item.img}
                vitaminCAmount={item.vitaminCAmount}
              />
            );
          })}
        </div>
      </>
    );
  }
}
