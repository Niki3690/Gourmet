import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Navbar = () => {

  let names = useSelector((state) => state.cart)
  let dispatch = useDispatch()
  return (
    <>
      <div className="jjj">
        <div>
          <nav className="navbar navbar-expand-lg bg-danger text-white">
            <div className="container-fluid">
              <a className="navbar-brand fs-5 text-white fw-semibold" href="#">
                <i className="mx-3 fa-solid fa-phone "></i> 0427 293 265
              </a>
              <button
                className="navbar-toggler bg-white"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse "
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                  <li className="nav-item ">
                    <a
                      className="nav-link fs-5 text-white  fw-semibold"
                      aria-current="page"
                      href="#"
                    >
                      <i className="mx-3 fa-solid fa-envelope "></i>{" "}
                      info@gourmet.com
                    </a>
                  </li>
                </ul>
                <form className="d-flex" role="search">
                  <p className="fw-semibold fs-6 mt-3">
                    SUPPORTING LOCAL AUSTRALIAN PRODUCERS
                  </p>
                </form>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <div>
        <div class="aa">
          <img src="https://gourmetliving.com.au/wp-content/uploads/2022/10/logo-web-1.webp" />
        </div>
      </div>

      <div>
        <nav class="navbar navbar-expand-lg mb-5">
          <div class="container-fluid">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="collapse navbar-collapse justify-content-center"
              id="navbarNavAltMarkup"
            >
              <div class="navbar-nav fw-bold text-center">
                <Link to="/" class="nav-link ms-4 fs-5 zz">
                  HOME
                </Link>
                <Link to="bestseller" class="nav-link ms-4 fs-5 zz">
                  {" "}
                  BEST SELLER
                </Link>
                <Link to="hampers" class="nav-link ms-4 fs-5 zz">
                  HAMPERS
                </Link>
                <Link to="products" class="nav-link ms-4 fs-5 zz">
                  PRODUCTS
                </Link>
                <Link to="contactus" class="nav-link ms-4 fs-5 zz">
                  CONTACT US{" "}
                </Link>
              </div>
            </div>
            <div className="fs-4 ms-auto text-center icons">
              <span className="oooo">
                <Link to="cart">
                  <i className="fa-solid fa-cart-shopping me-5"></i>
                </Link>
                <span className="cart-count">{names.length}</span>
              </span>
              <span>
                <Link to="search">
                  <i className="fa-solid fa-magnifying-glass me-5"></i>
                </Link>
              </span>
            </div>
          </div>
        </nav>
      </div>

    </>
  );
};

export default Navbar;
