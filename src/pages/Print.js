import { ShopDataContext } from '../ShopDataContext';
import { useNavigate } from 'react-router-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import BGG from '../images/BGGGG.png'
import React, { useState } from "react";
import PaypalCheckoutButton from "../component/PaypalCheckoutButton";




export const Print = () => {
    const backBtn = useNavigate();
    const { isShopData } = ShopDataContext();
    const product = {
        description: "Design+Code React Hooks Course",
        price: 19
    };
    return (

        <div className="contents">
            <img className="ContentBg" src={BGG} alt="for 3D" />
            <div className="content-view">
                <Carousel className="main-slide">
                    <div>
                        <img src={isShopData[4]} alt="for 3D" />
                        <p className="legend">{isShopData[2]}</p>
                    </div>
                    <div>
                        <img src={isShopData[4]} alt="for 3D" />
                        <p className="legend">{isShopData[2]}</p>
                    </div>
                    <div>
                        <img src={isShopData[4]} alt="for 3D" />
                        <p className="legend">{isShopData[2]}</p>
                    </div>
                    <div>
                        <img src={isShopData[4]} alt="for 3D" />
                        <p className="legend">{isShopData[2]}</p>
                    </div>
                </Carousel>
                <div className="content-text">
                    <button onClick={() => backBtn(-1)}>Back</button>
                    <p><span>{isShopData[2]}</span></p>
                    <p>Product kind: <b>{isShopData[1]}</b></p>
                    <p>Title: <b>{isShopData[5]}</b></p>
                    <p>Available: <b>{isShopData[5]}</b></p>
                    <div className="paypal-button-container2" >
                        <PaypalCheckoutButton product={product} />
                    </div >
                </div>
            </div>
        </div>

    )
}