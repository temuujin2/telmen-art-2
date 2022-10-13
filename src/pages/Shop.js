import { useState } from 'react'
import ShopData from '../data/ShopData.json'
import ShopPrint from '../data/ShopDataTshirt.json'
import { useNavigate } from 'react-router-dom'
import imgBack_about from '../images/BGGGG.png'
import { ShopDataContext } from '../ShopDataContext'



export const Shop = () => {
    const navigate = useNavigate();
    const [isNavigate1, setIsNavigate1] = useState(false);
    const [isNavigate2, setIsNavigate2] = useState(false);
    const [isNavigate3, setIsNavigate3] = useState(false);
    const [isNavigate4, setIsNavigate4] = useState(false);
    const [isNavigate5, setIsNavigate5] = useState(false);
    const { setIsShopData } = ShopDataContext()

    if (isNavigate1) return navigate('/Print');
    if (isNavigate2) return navigate('/Models');
    if (isNavigate3) return navigate('/Collectibles');
    if (isNavigate4) return navigate('/Merch');
    if (isNavigate5) return navigate('/Tutorials');

    return (
        <div className="about-container">
            <h2>SHOP</h2>
            {/* ------- tab 1 ------ */}
            <input type="radio" className='tabs__radio2' name='tabs-example' id='tab-1'/>
            <label for="tab-1" className='tabs__label-2' >PRINTS</label>
            <div className="tabs__content-2" style={{ color: "white" }}>
                <div className='flex-wrapper-shop'>
                    {ShopData && ShopData.map(data => {
                        let arr = [data.id, data.kind, data.name,
                        data.available, data.image, data.title]
                        return (
                            <div className='grid-shop'>
                                <a onClick={() => { setIsShopData(arr); setIsNavigate1(true) }}>
                                    <img className="box-shop" src={data.image} style={{ width: "200px", height: "200px" }} alt="for portfolio" />
                                    <div className='grid-text-shop'>
                                        <p>{data.kind}</p>
                                        <span>{data.name}</span>
                                        <button>learn more</button>
                                    </div>
                                </a>
                            </div>
                        )
                    })}
                </div>
            </div>
            {/* ------- tab 2 ------ */}
            <input type="radio" className='tabs__radio2' name='tabs-example' id='tab-2' />
            <label for="tab-2" className='tabs__label-2'>3D MODELS</label>
            <div className="tabs__content-2" style={{ color: "white" }}>
                <div className='flex-wrapper-shop'>
                    {ShopPrint && ShopPrint.map(data => {
                        let arr = [data.id, data.kind, data.name,
                        data.available, data.image, data.title]
                        return (
                            <div className='grid-shop'>
                                <a onClick={() => { setIsShopData(arr); setIsNavigate2(true) }}>
                                    <img className="box-shop" src={data.image} style={{ width: "200px", height: "200px" }} alt="for portfolio" />
                                    <div className='grid-text-shop'>
                                        <p>{data.kind}</p>
                                        <span>{data.name}</span>
                                        <button>learn more</button>
                                    </div>
                                </a>
                            </div>
                        )
                    })}
                </div>
            </div>
            {/* ------- tab 3 ------ */}
            <input type="radio" className='tabs__radio2' name='tabs-example' id='tab-3' />
            <label for="tab-3" className='tabs__label-2'>COLLECTIBLES</label>
            <div className="tabs__content-2" style={{ color: "white" }}>
                <div className='flex-wrapper-shop'>
                    {ShopData && ShopData.map(data => {
                        let arr = [data.id, data.kind, data.name,
                        data.available, data.image, data.title]
                        return (
                            <div className='grid-shop'>
                                <a onClick={() => { setIsShopData(arr); setIsNavigate3(true) }}>
                                    <img className="box-shop" src={data.image} style={{ width: "200px", height: "200px" }} alt="for portfolio" />
                                    <div className='grid-text-shop'>
                                        <p>{data.kind}</p>
                                        <span>{data.name}</span>
                                        <button>learn more</button>
                                    </div>
                                </a>
                            </div>
                        )
                    })}
                </div>
            </div>
            {/* ------- tab 4 ------ */}
            <input type="radio" className='tabs__radio2' name='tabs-example' id='tab-4' />
            <label for="tab-4" className='tabs__label-2'>MERCH</label>
            <div className="tabs__content-2" style={{ color: "white" }}>
                <div className='flex-wrapper-shop'>
                    {ShopData && ShopData.map(data => {
                        let arr = [data.id, data.kind, data.name,
                        data.available, data.image, data.title]
                        return (
                            <div className='grid-shop'>
                                <a onClick={() => { setIsShopData(arr); setIsNavigate4(true) }}>
                                    <img className="box-shop" src={data.image} style={{ width: "200px", height: "200px" }} alt="for portfolio" />
                                    <div className='grid-text-shop'>
                                        <p>{data.kind}</p>
                                        <span>{data.name}</span>
                                        <button>learn more</button>
                                    </div>
                                </a>
                            </div>
                        )
                    })}
                </div>
            </div>
            {/* ------- tab 5 ------ */}
            <input type="radio" className='tabs__radio2' name='tabs-example' id='tab-5' />
            <label for="tab-5" className='tabs__label-2'>TUTORIALS</label>
            <div className="tabs__content-2" style={{ color: "white" }}>
                <div className='flex-wrapper-shop'>
                    {ShopData && ShopData.map(data => {
                        let arr = [data.id, data.kind, data.name,
                        data.available, data.image, data.title]
                        return (
                            <div className='grid-shop'>
                                <a onClick={() => { setIsShopData(arr); setIsNavigate5(true) }}>
                                    <img className="box-shop" src={data.image} style={{ width: "200px", height: "200px" }} alt="for portfolio" />
                                    <div className='grid-text-shop'>
                                        <p>{data.kind}</p>
                                        <span>{data.name}</span>
                                        <button>learn more</button>
                                    </div>
                                </a>
                            </div>
                        )
                    })}
                </div>
            </div>



            <img style={{ zIndex: '-5' }} src={imgBack_about} alt="background"></img>
        </div>
    )
}