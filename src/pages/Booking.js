
import { MovieDataContext1 } from "../newContext"
export function Booking() {

    const { isData1 } = MovieDataContext1()
    return (
        <div className="contents">
            <img className="ContentBg" src={isData1[4]} alt="for 2D"/>
            <div className="content-view">
                <img src={isData1[4]} alt="for 2D" />
                <div className="content-text">
                    <p>Бүтээлийн нэр: &#160;&#160;&#160;<span>{isData1[2]}</span></p>
                    <p>Бүтээлийн төрөл: &#160;&#160;&#160;<b>{isData1[0]}</b></p>
                    <p>Дэлгэрэнгүй мэдээлэл: &#160;&#160;&#160;<b>{isData1[6]}</b></p>
                </div>
            </div>
        </div>
    )
}