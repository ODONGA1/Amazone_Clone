import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* THis is part of assignment to get number of items and total */}
              Subtotal (<strong>{basket.length}</strong> items):{" "}
              <strong>{`${value}`}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This is an order containing a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} // Part of Homework to get dynamic values
        displayType={"text"}
        thousandSeperator={true}
        prefix={"$"}
      />
      <button>Proceed To Checkout</button>
    </div>
  );
}

export default Subtotal;