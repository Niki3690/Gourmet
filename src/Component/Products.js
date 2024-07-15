import React from "react";
import { ProductShop } from "./DataDetails";
import { useSelector, useDispatch } from "react-redux";
import { add } from "./Store/Cartslice";

const Products = () => {
  let names = useSelector((state) => state.cart)
  let dispatch = useDispatch()


  let ADD = (demo) => {
    dispatch(add(demo))

  }
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          {ProductShop.map((demo) => (
            <div key={demo.id} className="col-sm-12 col-md-6 col-lg-4 my-3">
              <div className="card pb-2">
                <div className="text-center">
                  <img src={demo.image} alt={demo.title} className="qq" />
                  <h5>{demo.title}</h5>
                  <h5 className="abc">₹{demo.price}.00</h5>
                  <button
                    type="button"
                    className="btn btn-outline-danger bg-danger text-white mt-2 px-5 fw-semibold rounded-0 py-2 bbbb"
                    style={{
                      border: "2px solid",
                      borderRadius: "0",
                      borderWidth: "4px",
                      borderStyle: "double",
                    }}
                    onClick={() => ADD(demo)}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;