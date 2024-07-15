import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Payment = () => {

    let [fname, setFname] = useState("")
    let [lname, setLname] = useState("")
    let [address, setAddress] = useState("")
    let [city, setCity] = useState("")
    const [state, setState] = useState("");
    let [pin, setPin] = useState("")
    let [error, setError] = useState(false)



    let SUBMIT = (e) => {
        e.preventDefault()

        if (fname.length === 0 || lname.length === 0 || address.length === 0 || city.length === 0 || pin.length === 0 || state.length === 0) {
            setError(true)
        } else {
            setError(false)
            setFname("")
            setLname("")
            setAddress("")
            setCity("")
            setPin("")
            setState("");

        }
    }

    return (
        <div>
            <div>
                <h3 className="text-center mt-5 fw-bold">Checkout Page</h3>
                <form onSubmit={SUBMIT}
                    className="row g-3 needs-validation justify-content-center mt-5"
                    noValidate
                >
                    <div className="col-7">
                        <label htmlFor="validationCustom01" class="form-label fw-bold fs-6">
                            First name<span className="text-danger fw-bold fs-6">*</span>
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="validationCustom01"
                            value={fname}
                            onChange={(e) => setFname(e.target.value)}
                            required
                        />

                        {error && fname.length === 0 ? <h6 className="mt-2 text-danger">plz fill this field!</h6> : ""}
                    </div>
                    <div className="col-7">
                        <label htmlFor="validationCustom02" class="form-label fw-bold fs-6">
                            Last name<span className="text-danger fw-bold fs-6">*</span>
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="validationCustom02"
                            value={lname}
                            onChange={(e) => setLname(e.target.value)}

                            required
                        />
                        {error && lname.length === 0 ? <h6 className="mt-2 text-danger">plz fill this field!</h6> : ""}
                    </div>
                    <div className="col-7">
                        <label htmlFor="validationCustomUsername" class="form-label fw-bold fs-6">
                            Address<span className="text-danger fw-bold fs-6">*</span>
                        </label>
                        <div className="input-group has-validation">
                            <input
                                type="text"
                                className="form-control"
                                id="validationCustomUsername"
                                aria-describedby="inputGroupPrepend"
                                required
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />


                        </div>
                        {error && address.length === 0 ? <h6 className="mt-2 text-danger">plz fill this field!</h6> : ""}
                    </div>
                    <div className="col-7">
                        <label htmlFor="validationCustom03" class="form-label fw-bold fs-6">
                            City<span className="text-danger fw-bold fs-6">*</span>
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="validationCustom03"
                            required
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                        {error && city.length === 0 ? <h6 className="mt-2 text-danger">plz fill this field!</h6> : ""}

                    </div>
                    <div className="col-7">
                        <label htmlFor="validationCustom04" className="form-label fw-bold fs-6">
                            State<span className="text-danger fw-bold fs-6">*</span>
                        </label>
                        <select
                            className="form-select"
                            id="validationCustom04"
                            required
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                        >
                            <option value="">Select</option>
                            <option value="Gujarat">Gujarat</option>
                            <option value="Maharashtra">Maharashtra</option>
                            <option value="Rajasthan">Rajasthan</option>
                        </select>
                        {error && state.length === 0 && <h6 className="mt-2 text-danger">Please select a state!</h6>}
                    </div>
                    <div className="col-7">
                        <label htmlFor="validationCustom05" class="form-label fw-bold fs-6">
                            Pin code<span className="text-danger fw-bold fs-6">*</span>
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            id="validationCustom05"
                            required
                            value={pin}
                            onChange={(e) => setPin(e.target.value)}
                        />
                        {error && pin.length === 0 ? <h6 className="mt-2 text-danger">plz fill this field!</h6> : ""}

                    </div>
                    <div className="col-7">
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="invalidCheck"
                                required
                            />

                            <label className="form-check-label" htmlFor="invalidCheck">
                                Agree to terms and conditions
                            </label>

                        </div>
                    </div>
                    <div className="col-12 text-center ms-auto">
                        <button className="btn btn-danger bbbb fw-bold fs-6 px-3 py-2 mt-5" type="submit">
                            Payment Process
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Payment;
