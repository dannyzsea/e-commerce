import React from "react";
import "./TotalPrice.css";
import { useStateValue } from "./StateProvider";
import CurrencyFormat from "react-currency-format";
import { getCartTotal } from "./reducer";
function TotalPrice() {
  const [{ cart }, dispatch] = useStateValue();
  return (
    <div className="totalprice">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal ({cart.length} items): <strong>{value}</strong>
            </p>
            <small className="totalprice__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getCartTotal(cart)} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed to CheckOut</button>
    </div>
  );
}

export default TotalPrice;
