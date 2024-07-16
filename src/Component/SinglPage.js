import React from 'react';
import { useParams } from 'react-router-dom';
import { HomeBestSellingHampers, BestSellingHamperBest, ProductShop } from './DataDetails';
import { useSelector, useDispatch } from "react-redux";
import { add } from "./Store/Cartslice";

const SinglPage = () => {
    let { id } = useParams();
    id = parseInt(id);

    let names = useSelector((state) => state.cart);
    let dispatch = useDispatch();

    let ADD = (demo) => {
        let demoss = names.find((cartIdea) => cartIdea.id === demo.id);
        if (!demoss) {
            dispatch(add(demo));
        }
    };

    let allProducts = [...HomeBestSellingHampers, ...BestSellingHamperBest, ...ProductShop];

    let demo = allProducts.find((item) => item.id === id);

    return (
        <div className='container'>
            <div className="row justify-content-center">
                <div key={demo.id} className="col-lg-6 col-sm-11  ">
                    <div className="card pb-2">
                        <div className="">
                            <img src={demo.image} className="qqe" style={{ marginLeft: 50 }} />
                            <div style={{ padding: 15 }}>
                                <h5 className='mt-3 text-center'>{demo.title}</h5>
                                <h5 className='mt-3'>{demo.description}</h5>
                                <h4 className="abc mt-3 text-center">₹{demo.price}.00</h4>
                            </div>

                            <div className='text-center'>
                                <button
                                    type="button"
                                    className="btn btn-outline-danger bg-danger text-white mt-2 px-5 fw-semibold rounded-0 py-2 bbbb "
                                    style={{
                                        border: "2px solid",
                                        borderRadius: "0",
                                        borderWidth: "4px",
                                        borderStyle: "double",
                                        marginBottom: "25px"
                                    }}
                                    onClick={() => ADD(demo)}
                                >
                                    Add To Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SinglPage;

