import React from "react";

import {
    Routes,
    Route
} from "react-router-dom";


import HomePage from "./pages/home";

import Shop from "./pages/shop";

import ProductDetail from "./pages/product-detail";

import Blog from "./pages/blog";

import BlogDetail from "./pages/blog/BlogDetail";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";
import About from "./pages/about";

import "./App.css";



function App() {


    return (


        <Routes>




            <Route

                path="/"

                element={<HomePage />}

            />




            <Route

                path="/shop"

                element={<Shop />}

            />





            <Route

                path="/product-detail/index/:id"

                element={<ProductDetail />}

            />







            {/* DANH SÁCH BLOG */}

            <Route

                path="/blog"

                element={<Blog />}

            />







            {/* CHI TIẾT BLOG */}

            <Route

                path="/blog-detail/:id"

                element={<BlogDetail />}

            />

            <Route

                path="/cart"

                element={<Cart />}

            />

            <Route

                path="/checkout"

                element={<Checkout />}

            />

            <Route path="/login" element={<Login />} />

            <Route path="/register" element={<Register />} />
            
            <Route path="/forgot-password" element={<ForgotPassword />} />

            <Route path="/about" element={<About />} />


        </Routes>


    );


}


export default App;