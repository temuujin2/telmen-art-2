
import { MovieDataContext1 } from "../newContext"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


export function Booking() {
    const { isData1 } = MovieDataContext1()
    return (
        <div className="contents">
            <div className="content-view">
                <Carousel className="main-slide">
                    <div>
                        <img src={isData1[4]} alt="for 2d" />
                        <p className="legend">{isData1[2]}</p>
                    </div>
                    <div>
                        <img src={isData1[4]} alt="for 2d" />
                        <p className="legend">{isData1[2]}</p>
                    </div>
                    <div>
                        <img src={isData1[4]} alt="for 2d" />
                        <p className="legend">{isData1[2]}</p>
                    </div>
                    <div>
                        <img src={isData1[4]} alt="for 2d" />
                        <p className="legend">{isData1[2]}</p>
                    </div>
                    <div>
                        <img src={isData1[4]} alt="for 2d" />
                        <p className="legend">{isData1[2]}</p>
                    </div>
                    <div>
                        <img src={isData1[4]} alt="for 2d" />
                        <p className="legend">{isData1[2]}</p>
                    </div>
                </Carousel>
                <div className="content-text">
                    <p><span>{isData1[2]}</span></p>
                    <p>Бүтээлийн төрөл: <b>{isData1[0]}</b></p>
                    <p>Дэлгэрэнгүй мэдээлэл: <b>{isData1[6]}</b></p>
                </div>
            </div>
        </div>
    )
}
