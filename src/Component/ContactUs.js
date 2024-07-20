import React, { useState, useEffect } from "react";

const ContactUs = () => {
  let [fname, setFname] = useState("");
  let [lname, setLname] = useState("");
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");
  let [comment, setComment] = useState("");
  let [error, setError] = useState(false);


  useEffect(() => {
    document.title = "contactus-Gourment"
  }, [])

  let SUBMITTED = (e) => {

    e.preventDefault();
    if (
      fname.length === 0 ||
      lname.length === 0 ||
      email.length === 0 ||
      phone.length === 0 ||
      comment.length === 0
    ) {
      setError(true);
    } else {
      setError(false);
      setFname("");
      setLname("");
      setEmail("");
      setPhone("");
      setComment("");
    }
  };
  return (
    <div>
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-sm-12 col-md-4 col-lg-4">
            <i class="fa-solid fa-phone fs-1 jj"></i>
            <h5 className="mt-4">PHONE</h5>
            <p className="mt-3">
              Gourmet Living Office
              <br />
              0427 293 265
            </p>
          </div>

          <div className="col-sm-12 col-md-12 col-lg-4">
            <i class="fa-solid fa-location-dot fs-1 jj"></i>
            <h5 className="mt-4">ADDRESS</h5>
            <p className="mt-3">
              633 Waterdale Road
              <br />
              Heidelberg West
              <br />
              Vic – 3081
            </p>
          </div>

          <div className="col-sm-12 col-md-12 col-lg-4">
            <i class="fa-solid fa-envelope fs-1 jj"></i>
            <h5 className="mt-4">EMAIL</h5>
            <p className="mt-3">info@gourmetliving.com.au</p>
          </div>
        </div>
      </div>

      <h3 className="text-center mt-5 fw-bold">CONTACT US</h3>

      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <form onSubmit={SUBMITTED}>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label fw-bold fs-6">
                  First Name<span className="text-danger fw-bold fs-6">*</span>
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  onChange={(e) => setFname(e.target.value)}
                  value={fname}
                  required
                />

                {error && fname.length === 0 ? <h6 className="mt-2 text-danger">plz fill this field!</h6> : ""}
              </div>
              <div class="mb-3">
                <label
                  for="exampleInputPassword1"
                  class="form-label fw-bold fs-6"
                >
                  Last Name<span className="text-danger fw-bold fs-6">*</span>
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                  onChange={(e) => setLname(e.target.value)}
                  value={lname}
                  required
                />
                {error && lname.length === 0 ? <h6 className="mt-2 text-danger">plz fill this field!</h6> : ""}
              </div>
              <div class="mb-3">
                <label
                  for="exampleInputPassword1"
                  class="form-label fw-bold fs-6"
                >
                  Email<span className="text-danger fw-bold fs-6">*</span>
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputPassword1"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                />
                {error && email.length === 0 ? <h6 className="mt-2 text-danger">plz fill this field!</h6> : ""}
              </div>

              <div class="mb-3">
                <label
                  for="exampleInputPassword1"
                  class="form-label fw-bold fs-6"
                >
                  Phone<span className="text-danger fw-bold fs-6">*</span>
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleInputPassword1"
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                  required
                />
                {error && phone.length === 0 ? <h6 className="mt-2 text-danger">plz fill this field!</h6> : ""}
              </div>

              <div class="mb-3">
                <label
                  for="exampleInputPassword1"
                  class="form-label fw-bold fs-6"
                >
                  Comment or Message<span className="text-danger fw-bold fs-6">*</span>
                </label>
                <textarea
                  type="textarea"
                  class="form-control"
                  id="exampleInputPassword1"
                  onChange={(e) => setComment(e.target.value)}
                  value={comment}
                  rows={4}
                  required
                />
                {error && comment.length === 0 ? <h6 className="mt-2 text-danger">plz fill this field!</h6> : ""}
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  class="btn btn-danger rounded-0  mt-4 px-4 py-2 ms-auto bbbb"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
