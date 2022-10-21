import { MovieDataContext1 } from "../newContext"
import { useNavigate } from 'react-router-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';




export function Tab3D() {
    const backBtn = useNavigate();
    const { isData1 } = MovieDataContext1();
    return (

        <div className="contents">
            <div className="content-view">
                <Carousel className="main-slide">
                    <div>
                        <img src={isData1[5]} alt="for 3D" />
                        <p className="legend">{isData1[2]}</p>
                    </div>
                    <div>
                        <img src={isData1[5]} alt="for 3D" />
                        <p className="legend">{isData1[2]}</p>
                    </div>
                    <div>
                        <img src={isData1[5]} alt="for 3D" />
                        <p className="legend">{isData1[2]}</p>
                    </div>
                    <div>
                        <img src={isData1[5]} alt="for 3D" />
                        <p className="legend">{isData1[2]}</p>
                    </div>
                    <div>
                        <img src={isData1[5]} alt="for 3D" />
                        <p className="legend">{isData1[2]}</p>
                    </div>
                    <div>
                        <img src={isData1[5]} alt="for 3D" />
                        <p className="legend">{isData1[2]}</p>
                    </div>
                </Carousel>
                <div className="content-text">
                    <button onClick={() => backBtn(-1)}>Back</button>
                    <p>Бүтээлийн нэр: <span>{isData1[3]}</span></p>
                    <p>Бүтээлийн төрөл: <b>{isData1[1]}</b></p>
                    <p>Дэлгэрэнгүй мэдээлэл: <b>{isData1[6]}</b></p>
                </div>
            </div>
        </div>

    )
}
