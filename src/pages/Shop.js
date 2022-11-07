import { useState } from 'react'
import ShopData from '../data/ShopData.json'
import ShopPrint from '../data/ShopDataTshirt.json'
import { useNavigate } from 'react-router-dom'
import imgBack_about from '../images/BGGGG.png'
import { ShopDataContext } from '../ShopDataContext'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import React from 'react'


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
        <Tabs>
            <div className="about-container">
            <h2>SHOP</h2>
                <TabList>
                    <Tab>PRINTS</Tab>
                    <Tab>3D MODELS</Tab>
                    <Tab>COLLECTIBLES</Tab>
                    <Tab>MERCH</Tab>
                    <Tab>TUTORIALS</Tab>
                </TabList>
            {/* ------- tab 1 ------ */}
            <TabPanel>
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
            </TabPanel>
            {/* ------- tab 2 ------ */}
            <TabPanel>
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
            </TabPanel>
            {/* ------- tab 3 ------ */}
            <TabPanel>
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
            </TabPanel>
            {/* ------- tab 4 ------ */}
            <TabPanel>
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
            </TabPanel>
            {/* ------- tab 5 ------ */}
            <TabPanel>
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
            </TabPanel>



            <img className="back-img-totem" src={imgBack_about}></img>

            </div>
        </Tabs>
    )
}