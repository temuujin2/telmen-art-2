import { ShopDataContext } from '../ShopDataContext';
import PaypalCheckoutButton from "../component/PaypalCheckoutButton";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import BGG from '../images/BGGGG.png'




export const Models = () => {
    const product = {
        description: "Design+Code React Hooks Course",
        price: 19
    };
    const { isShopData } = ShopDataContext();
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
                    <p><span>{isShopData[2]}</span><br></br><b>{isShopData[1]}</b></p>
                    <p>Title: <b>{isShopData[5]}</b></p>
                    <p>Available: <b>{isShopData[3]}</b></p>
                    <div className="paypal-button-container2" >
                        <div className='no-paypal'>Buy Now</div>
                        <PaypalCheckoutButton product={product} />
                    </div >
                </div>
            </div>
        </div>

    )
}