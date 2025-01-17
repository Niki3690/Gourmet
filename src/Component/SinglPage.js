import React from 'react';
import { useParams } from 'react-router-dom';
import { HomeBestSellingHampers, BestSellingHamperBest, ProductShop } from './DataDetails';
import { useSelector, useDispatch } from "react-redux";
import { add } from "./Store/Cartslice";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useEffect } from "react";


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1
    }
};

const SinglPage = () => {

    useEffect(() => {
        document.title = "singlepage-Gourment"
    }, [])


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
            <div className='row justify-content-center'>
                <div className='col-sm-11 col-md-6 col-lg-4'>
                    <Carousel
                        swipeable={true}
                        draggable={true}
                        showDots={true}
                        responsive={responsive}
                        ssr={true}
                        infinite={true}
                        autoPlay={false}
                        keyBoardControl={true}
                        customTransition="all .5"
                        transitionDuration={500}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px"

                    >
                        <img src={demo.image} alt={demo.title} className="carousel-image" />
                    </Carousel>
                </div>
                <div className='col-sm-12 col-md-6 col-lg-6'>
                    <div style={{ padding: 15 }}>
                        <h4 className='mt-3'>{demo.title}</h4>
                        <hr />
                        <h2 className="abc mt-3">₹{demo.price}.00</h2>
                        <h6 className='mt-3 fw-normal lh-lg'>{demo.description}</h6>
                    </div>
                    <div className=''>
                        <button
                            type="button"
                            className="btn btn-outline-danger bg-danger text-white mt-2 px-5 fw-semibold rounded-0 py-2 bbbb"
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



            <h3 className='my-4 underline underline-red underline-3'>Related products</h3>
            <Carousel responsive={responsive}>

                {allProducts.map((demo) => {
                    return (
                        <>
                            <div className="card pb-2 mx-2">
                                <div className="text-center">
                                    {/* <h4>{demos.id}</h4> */}
                                    <img src={demo.image} alt={demo.title} className="qq" />
                                    <h5 style={{ color: 'black', height: 50 }} className="mt-3">{demo.title}</h5>
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
                                </div></div>
                        </>
                    )
                })}

            </Carousel>
        </div>


    );
};

export default SinglPage