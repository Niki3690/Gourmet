import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, remove } from "./Store/Cartslice";
import { Link } from "react-router-dom";

const Cart = () => {
  let names = useSelector((state) => state.cart);
  let dispatch = useDispatch();

  let REMOVE = (demoId) => {
    dispatch(remove(demoId));
  };

  let INCR = (demoId) => {
    dispatch(increment(demoId));
  };

  let DECR = (demoId) => {
    dispatch(decrement(demoId));
  };

  let MainTotal = names.reduce(
    (cart, item) => cart + item.price * item.quantity,
    0
  );
  return (
    <div>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-10">
            {names.length === 0 ? (
              <h1 className="text-center">
                <img
                  src="https://www.pngkit.com/png/full/254-2549253_add-demos-to-your-cart-by-shopping-for.png"
                  className="kkkk"
                  alt="Empty Cart"
                />
              </h1>
            ) : (
              <table className="table border border-2 border-danger text-center table-bordered">
                <thead>
                  <tr className="fs-5">
                    <th scope="col">ID</th>
                    <th scope="col">IMAGE</th>
                    <th scope="col">TITLE</th>
                    <th scope="col">QUANTITY</th>

                    <th scope="col">PRICE</th>
                    <th scope="col">DELETE</th>
                  </tr>
                </thead>
                <tbody>
                  {names.map((demo, index) => {
                    let priceee = demo.price * demo.quantity;
                    return (
                      <tr className="align-middle">
                        <td>{index + 1}</td>
                        <td>
                          <img
                            src={demo.image}
                            alt={demo.title}
                            className="tt"
                          />
                        </td>
                        <td>{demo.title}</td>
                        <th scope="col">
                          <div className="juju">
                            <button
                              onClick={() => INCR(demo.id)}
                              type="button"
                              className="btn bg-danger text-white  fw-semibold rounded-0 py-2 bbbb me-3"
                            >
                              <i class="fa-solid fa-plus"></i>
                            </button>

                            <td>
                              <h4>{demo.quantity}</h4>
                            </td>

                            <button
                              onClick={() => DECR(demo.id)}
                              type="button"
                              className="btn bg-danger text-white  fw-semibold rounded-0 py-2 bbbb ms-3"
                            >
                              <i class="fa-solid fa-minus"></i>
                            </button>
                          </div>
                        </th>
                        <td>₹{priceee}.00</td>
                        <td>
                          <button
                            type="button"
                            className="btn bg-danger text-white  fw-semibold rounded-0 py-2 bbbb"
                            onClick={() => REMOVE(demo.id)}
                          >
                            <i class="fa-solid fa-trash"></i>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        </div>

        {names.length >0 &&(
        <div className="kiki">
          <div className="pppp">
            <h4 style={{ fontWeight: 700 }}>Cart Total</h4>
            <hr />
            <h5 className="item-total">
              Total Items: <span className="dsds">{names.length}</span>
            </h5>
            <h5 className="item-total mt-4">
              Subtotal: <span className="dsds">₹ {MainTotal}</span>
            </h5>
            <Link to="payment">
              <button className=" bbbb koko bg-danger">Checkout Page</button>
            </Link>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
