import React from "react";

class CartItem extends React.Component {
  //state in react:
  constructor()
  {
    super();
    this.state={
      title: 'Phone',
      price: 10,
      Qty: 1
    }
    {/*when we have multiple event handlers can be put in the constructor itself
    this.increaseQuantity=this.increaseQuantity.bind(this);
  */}
  }

  increaseQuantity = () => {
    console.log('this',this.state);
  }


  render() {
    const {title,price,Qty}=this.state;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={style.image} />
        </div>
        <div className="right-block">
          {/*assiging inline styles*/}
          <div style={{ fontSize: 25 }}>{title}</div>
          <div style={{ color: "grey" }}>Rs {price}</div>
          <div style={{ color: "grey" }}>Qty: {Qty}</div>
          <div className="cart-item-action">
            <img
              style={{ height: 24 }}
              alt="increase"
              className="action-icons"
              src="http://image.flaticon.com/icons/svg/992/992651.svg"
              onClick={this.increaseQuantity}
            />
            {/*onClick={this.increaseQuantity.bind(this)*/}
            <img
              style={{ height: 24 }}
              alt="decrease"
              className="action-icons"
              src="http://image.flaticon.com/icons/svg/1665/1665612.svg"
            />
            <img
              style={{ height: 25 }}
              alt="delete"
              className="action-icons"
              src="http://image.flaticon.com/icons/svg/1214/1214428.svg"
            />
          </div>
        </div>
      </div>
    );
  }
}

//styling using obj since it is js
const style = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: "grey",
  },
};

export default CartItem;
