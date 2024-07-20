import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="text-white p-4 rrr  justify-content-center">
      <div className="container-fluid mx-2">
        <div className="row ">
          <div className="col-sm-12 col-md-6 col-lg-3">
            <h5>GOURMET LIVING</h5>

            <p className="mt-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi eveniet nobis fugiat delectus quam sit, sint voluptatem optio quibusdam molestias, commodi omnis soluta id. Consectetur eius, animi dolore quidem rem quasi exercitationem.
            </p>

            <img
              src="https://gourmetliving.com.au/wp-content/uploads/2022/10/logo_hd-1536x403.webp"
              className="lll"
            ></img>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-3">
            <h5>QUICK LINKS</h5>

            <ul className="mt-3">
              <li className="mt-3">
                <Link to="/">HOME</Link>
              </li>
              <li className="mt-3">
                <Link to="bestseller">BESTSELLER</Link>
              </li>
              <li className="mt-3">
                <Link to="hampers">HAMPERS</Link>
              </li>
              <li className="mt-3">
                <Link to="products">PRODUCTS</Link>
              </li>
              <li className="mt-3">
                <Link to="contactus">CONTACT US</Link>
              </li>
            </ul>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-3">
            <h5>GET IN TOUCH</h5>

            <p className="mt-3 fs-5">
              <i class="fa-solid fa-phone me-3 "></i> 042 702 5808
            </p>
            <p className="fs-5">
              <i class="fa-solid fa-envelope me-3"></i>info@gourmet.com
            </p>
            <i class="fa-brands fa-facebook me-3"></i>
            <i class="fa-brands fa-instagram"></i>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-3">
            <img
              src="https://gourmetliving.com.au/wp-content/uploads/2022/10/payment-removebg-preview.png"
              className="ww"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
