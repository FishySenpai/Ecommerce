import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar/navbar"
import Home from "./components/home";
import Search from "./components/Search";
import "./App.css";
import ProductInfo from "./components/ProductInfo";
import {Sneakers, Login, Registration, CartUser, CheckOut, WishList, OrderedItems, Men, Women, Footer, WomenHome } from "./components";
import Products from "./components/Products";


function App() {
  return (
    <div className="App">
      <Router>
        <div className="min-h-screen">
          <Navbar />

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />

                </>
              }
            />
            <Route
              path="/women"
              element={
                <>
                  <WomenHome/>
                </>
              }
            />

            <Route path="/categories/men/:id" element={<Men />} />
            <Route path="/categories/women/:id" element={<Women />} />
           
            <Route path="/info/:id" element={<ProductInfo />} />
            <Route path="/search/:search" element={<Search />} />
            <Route
              path="/login"
              element={
                <>
                  <Login />
                </>
              }
            />
            <Route
              path="/register"
              element={
                <>
                  <Registration />
                </>
              }
            />
           
            <Route
              path="/cart"
              element={
                <>
                  <CartUser />
                </>
              }
            />
            <Route
              path="/wishlist"
              element={
                <>
                  <WishList />
                </>
              }
            />
            <Route
              path="/checkout"
              element={
                <>
                  <CheckOut />
                </>
              }
            />
            <Route
              path="/orders"
              element={
                <>
                  <OrderedItems />
                </>
              }
            />
          </Routes>
        <Footer/>
        </div>
      </Router>
    </div>
  );
}

export default App;
