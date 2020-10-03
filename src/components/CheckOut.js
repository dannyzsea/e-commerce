import React from "react";
import { useStateValue } from "./StateProvider";
import "./CheckOut.css";
import CheckOutProduct from "./CheckOutProduct";
function CheckOut() {
  const [{ cart }] = useStateValue();
  return (
    <div className="checkout">
      <img
        className="checkout__ad"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRqYnm_TgPxUCE9Ey6a6SzZ03tYknS9P012tQ&usqp=CAU"
      />
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
              pice={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default CheckOut;
