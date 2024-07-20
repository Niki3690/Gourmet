import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import BestSeller from "./Component/BestSeller";
import Hampers from "./Component/Hampers";
import Products from "./Component/Products";
import ContactUs from "./Component/ContactUs";
import Cart from "./Component/Cart";
import Navbar from "./Component/Navbar";
import Search from "./Component/Search";
import Footer from "./Component/Footer";
import { Provider } from "react-redux";
import store from "./Component/Store/Store";
import Payment from "./Component/Payment"
import SinglePage from "./Component/SinglPage"
import ErrorPage from "./Component/ErrorPage";

const App = () => {
    return (
        <div>
            <Provider store={store}>
                <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="bestseller" element={<BestSeller />} />
                        <Route path="hampers" element={<Hampers />} />
                        <Route path="products" element={<Products />} />
                        <Route path="contactus" element={<ContactUs />} />
                        <Route path="cart" element={<Cart />} />
                        <Route  element={<ErrorPage />} />
                        <Route path="search" element={<Search />} />
                        <Route path="cart/Payment" element={<Payment />} />
                        <Route path="/demo/:id" element={<SinglePage />} />
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </Provider>
        </div>
    );
};

export default App;
