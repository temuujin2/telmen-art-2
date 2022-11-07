import { useState } from 'react';
import 'react-tabs/style/react-tabs.css';
import Data from '../data/ImageData.json';
import { useNavigate } from 'react-router-dom';
import { MovieDataContext1 } from "../newContext";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import React from 'react'

export const Portfolio = ({ data }) => {
    const navigate = useNavigate();
    const [isActive, setIsActive] = useState(false);
    const [isActive1, setIsActive1] = useState(false);
    const { setIsData1 } = MovieDataContext1()




    if (isActive) return navigate('/Booking');
    if (isActive1) return navigate('/Tab3D');
    return (
        <Tabs className="top_tab">
            <div className='main2'>
                <h1>PORTFOLIO</h1>
                <TabList>
                    <Tab>2D</Tab>
                    <Tab>3D</Tab>
                </TabList>
                <TabPanel>
                    <div className='flex-wrapper'>
                        {Data && Data.map(data => {
                            let arr = [data.kind2d, data.kind3d, data.name2d,
                            data.name3d, data.image2d, data.image3d, data.content]
                            return (
                                <div className='grid'>
                                    <a onClick={() => { setIsData1(arr); setIsActive(true) }}>
                                        <img className="box" src={data.image2d} style={{ width: "200px", height: "200px" }} alt="for portfolio" />
                                        <div className='grid-text'>
                                            <p>{data.kind2d}</p>
                                            <span>{data.name2d}</span>
                                            <button>learn more</button>
                                        </div>
                                    </a>
                                </div>
                            )
                        })}
                    </div>
                </TabPanel>



                <TabPanel>
                    <div className='flex-wrapper'>
                        {Data && Data.map(data => {
                            let arr = [data.kind2d, data.kind3d, data.name2d,
                            data.name3d, data.image2d, data.image3d, data.content]
                            return (
                                <div className='grid'>
                                    <a onClick={() => { setIsData1(arr); setIsActive1(true) }}>
                                        <img className="box" src={data.image3d} style={{ width: "200px", height: "200px" }} alt="for 3D" />
                                        <div className='grid-text'>
                                            <p>{data.kind3d}</p>
                                            <span>{data.name3d}</span>
                                            <button>learn more</button>
                                        </div>
                                    </a>
                                </div>
                            )
                        })}
                    </div >
                </TabPanel>
            </div>


        </Tabs>


    )
}