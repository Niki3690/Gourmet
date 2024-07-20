import React from "react";
import { HomeBestSellingHampers } from "./DataDetails";
import { useSelector, useDispatch } from "react-redux";
import { add } from "./Store/Cartslice";
import { Link } from "react-router-dom";
import { useEffect } from "react";
const Home = () => {


  useEffect(()=>{
    document.title="Gourment"
  },[])

  let names = useSelector((state) => state.cart);
  let dispatch = useDispatch();

  let ADD = (demo) => {
    let demoss = names.find((cartIdea) => cartIdea.id === demo.id);
    if (!demoss) {
      dispatch(add(demo));
    }
  };
  return (
    <div>
      <div class="cc">
        <img src="https://gourmetliving.com.au/wp-content/uploads/2022/10/slider.webp" />

        <div class="ee text-white text-end me-3 ">
          <h1>
            With All NEW <br />
            HAMPERS COLEECTION
          </h1>
        </div>
      </div>

      <div className="bg-dark text-white py-3">
        <div className="row justify-content-center align-demoss-center g-3">
          <div className="col-sm-12 col-md-12 col-lg-4  ">
            <div className="d-flex justify-content-center align-demoss-center ff">
              <i className="fs-1 me-4 mt-2 fa-solid fa-truck"></i>
              <p className="fs-5 fw-semibold">
                FREE DELIVERY
                <br />
                <span className="fs-6">ON / ABOVE ₹100</span>
              </p>
            </div>
          </div>

          <div className="col-sm-12 col-md-12 col-lg-4  ">
            <div className="d-flex justify-content-center align-demoss-center ff">
              <i className="fs-1 me-4 mt-2 fa-solid fa-award"></i>
              <p className="fs-5 fw-semibold">
                BEST SELLING
                <br />
                <span className="fs-6">HAMPERS</span>
              </p>
            </div>
          </div>

          <div className="col-sm-12 col-md-12 col-lg-4 justify-content-center">
            <div className="d-flex justify-content-center align-demoss-center ff">
              <i className="fs-1 me-4 mt-2 fa-solid fa-lock"></i>
              <p className="fs-5 fw-semibold">
                SECURED
                <br />
                <span className="fs-6">SHOPPING SITE</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-center mt-5 fw-bold ">BEST SELLING HAMPERS</h2>
      </div>

      <div className="container mt-5">
        <div className="row">
          {HomeBestSellingHampers.map((demo) => (
            <div key={demo.id} className="col-sm-12 col-md-6 col-lg-4 my-3 tttt">
              <div className="card pb-2">
                <div className="text-center">
                  <Link to={`/demo/${demo.id}`}>
                    <img src={demo.image} alt={demo.title} className="qq" />
                    <h5 style={{ color: 'black' }} className="mt-3">{demo.title}</h5>
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

export default Home;

