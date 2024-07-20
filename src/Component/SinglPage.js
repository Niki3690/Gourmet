// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { HomeBestSellingHampers, BestSellingHamperBest, ProductShop } from './DataDetails';
// import { useSelector, useDispatch } from "react-redux";
// import { add } from "./Store/Cartslice";

// const SinglPage = () => {
//     let { id } = useParams();
//     id = parseInt(id);

//     let names = useSelector((state) => state.cart);
//     let dispatch = useDispatch();

//     let ADD = (demo) => {
//         let demoss = names.find((cartIdea) => cartIdea.id === demo.id);
//         if (!demoss) {
//             dispatch(add(demo));
//         }
//     };

//     let allProducts = [...HomeBestSellingHampers, ...BestSellingHamperBest, ...ProductShop];

//     let demo = allProducts.find((item) => item.id === id);

//     return (
//         <div className='container'>
//             <div className="row justify-content-center">
//                 <div key={demo.id} className="col-lg-6 col-sm-11  ">
//                     <div className="card pb-2">
//                         <div className="">
//                             <img src={demo.image} className="qqe" style={{ marginLeft: 50 }} />
//                             <div style={{ padding: 15 }}>
//                                 <h5 className='mt-3 text-center'>{demo.title}</h5>
//                                 <h5 className='mt-3'>{demo.description}</h5>
//                                 <h4 className="abc mt-3 text-center">₹{demo.price}.00</h4>
//                             </div>

//                             <div className='text-center'>
//                                 <button
//                                     type="button"
//                                     className="btn btn-outline-danger bg-danger text-white mt-2 px-5 fw-semibold rounded-0 py-2 bbbb "
//                                     style={{
//                                         border: "2px solid",
//                                         borderRadius: "0",
//                                         borderWidth: "4px",
//                                         borderStyle: "double",
//                                         marginBottom: "25px"
//                                     }}
//                                     onClick={() => ADD(demo)}
//                                 >
//                                     Add To Cart
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//             </div>
//         </div>
//     );
// };

// export default SinglPage;


import React from 'react';
import { useParams } from 'react-router-dom';
import { HomeBestSellingHampers, BestSellingHamperBest, ProductShop } from './DataDetails';
import { useSelector, useDispatch } from "react-redux";
import { add } from "./Store/Cartslice";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'; // Import the default styles


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

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
            <div className='row justify-content-center'>
                <div className='col-sm-11 col-md-6 col-lg-6'>
                    <Carousel
                        swipeable={true}
                        draggable={true}
                        showDots={true}
                        responsive={responsive}
                        ssr={true} // means to render carousel on server-side.
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
                        {/* You can add more carousel items here if needed */}
                    </Carousel>
                </div>
                <div className='col-sm-12 col-md-6 col-lg-6'>
                    <div style={{ padding: 15 }}>
                        <h3 className='mt-3'>{demo.title}</h3>
                        <hr />
                        <h2 className="abc mt-3">₹{demo.price}.00</h2>
                        <h6 className='mt-3 fw-normal lh-lg'>{demo.description}</h6>
                    </div>
                    <div className='text-center'>
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



            <h3 className='my-4'>Related products</h3>
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

            </Carousel>;
        </div>


    );
};

export default SinglPage