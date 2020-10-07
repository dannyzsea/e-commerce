import React from "react";
import { useStateValue } from "./StateProvider";
import "./CheckOut.css";
import TotalPrice from "./TotalPrice";
import CheckOutProduct from "./CheckOutProduct";
function CheckOut() {
  const [{ cart }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__ad" src="" />
        {cart?.length === 0 ? (
          <div>
            <h2>You'r Cart is Empty!</h2>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your shopping Cart:</h2>
            {cart.map((item) => (
              <CheckOutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {cart.length > 0 && (
        <div className="checkout__right">
          <TotalPrice />
        </div>
      )}
    </div>
  );
}

export default CheckOut;
