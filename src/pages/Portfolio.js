import Data from '../data/ImageData.json'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { MovieDataContext1 } from "../newContext"


export const Portfolio = ({ data }) => {
    const navigate = useNavigate();
    const [isActive, setIsActive] = useState(false);
    const [isActive1, setIsActive1] = useState(false);
    const { setIsData1 } = MovieDataContext1()




    if (isActive) return navigate('/Booking');
    if (isActive1) return navigate('/Tab3D');
    return (
        <div className='main2'>
            <h1>PORTFOLIO</h1>
            <input type="radio" className='tabs__radio' name='tabs-example' id='tab1' checked />
            <label for="tab1" className='tabs__label'>2D</label>
            <div className='tabs__content'>
                <div className='flex-wrapper'>
                    {Data && Data.map(data => {
                        let arr = [data.kind2d, data.kind3d, data.name2d,
                        data.name3d, data.image2d, data.image3d, data.content]
                        return (
                            <div className='grid'>
                                <a onClick={() => { setIsData1(arr); setIsActive(true) }}>
                                    <img className="box" src={data.image2d} style={{ width: "200px", height: "200px" }}></img>
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
            </div>


            <input type="radio" className='tabs__radio' name='tabs-example' id='tab2' />
            <label for="tab2" className='tabs__label'>3D</label>
            <div className='tabs__content'>
                <div className='flex-wrapper'>
                    {Data && Data.map(data => {
                        let arr = [data.kind2d, data.kind3d, data.name2d,
                        data.name3d, data.image2d, data.image3d, data.content]
                        return (
                            <div className='grid'>
                                <a onClick={() => { setIsData1(arr); setIsActive1(true) }}>
                                    <img className="box" src={data.image3d} style={{ width: "200px", height: "200px" }}></img>
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
            </div>

        </div>


    )
}