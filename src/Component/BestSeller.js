import React from "react";
import { BestSellingHamperBest } from "./DataDetails";
import { useSelector, useDispatch } from "react-redux";
import { add } from "./Store/Cartslice";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const BestSeller = () => {

  useEffect(() => {
    document.title = "bestseller-Gourment"
  }, [])


  let names = useSelector((state) => state.cart)
  let dispatch = useDispatch()


  let ADD = (demo) => {
    let demoss = names.find((cartIdea) => cartIdea.id === demo.id);
    if (!demoss) {
      dispatch(add(demo));
    }
  }
  return (
    <div>
      <div>
        <h2 className="text-center mt-5 fw-bold ">BEST SELLING HAMPERS</h2>
        <div className="aass"></div>
      </div>

      <div className="container mt-5">
        <div className="row">
          {BestSellingHamperBest.map((demo) => (
            <div key={demo.id} className="col-sm-12 col-md-6 col-lg-4 my-3 tttt">
              <div className="card pb-2">
                <div className="text-center">
                  <Link to={`/demo/${demo.id}`}>
                    <img src={demo.image} alt={demo.title} className="qq" />
                    <h5 className="text-dark">{demo.title}</h5>
                    <h5 className="abc">₹{demo.price}.00</h5>
                  </Link>
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

export default BestSeller;
