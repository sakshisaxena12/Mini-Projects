import React from "react";

class CartItem extends React.Component {
  render() {
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={style.image} />
        </div>
        <div className="right-block">
          {/*assiging inline styles*/}
          <div style={{ fontSize: 25 }}>Phone</div>
          <div style={{ color: "grey" }}>Rs. 1000</div>
          <div style={{ color: "grey" }}>Qty: 1</div>
          <div className="cart-item-action">
            <img
              style={{ height: 24 }}
              alt="increase"
              className="action-icons"
              src="https://www.flaticon.com/svg/vstatic/svg/1828/1828926.svg?token=exp=1612558668~hmac=4d9245b1fc5af858a4210fe4283dd066"
            />
            <img
              style={{ height: 24 }}
              alt="decrease"
              className="action-icons"
              src="https://www.flaticon.com/svg/vstatic/svg/992/992683.svg?token=exp=1612557847~hmac=361cfec6772aeb94224135070d4a00a2"
            />
            <img
              style={{ height: 25 }}
              alt="delete"
              className="action-icons"
              src="https://www.flaticon.com/svg/vstatic/svg/3096/3096673.svg?token=exp=1612558700~hmac=26a2bcb25769b7ed7e946540004d12be"
            />
          </div>
        </div>
      </div>
    );
  }
}

//styling using obj (since it is js)
const style = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: "grey",
  },
};

export default CartItem;
