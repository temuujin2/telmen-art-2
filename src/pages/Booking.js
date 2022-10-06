
import { MovieDataContext1 } from "../newContext"
export function Booking() {

    const { isData1, setIsData1 } = MovieDataContext1()
    return (
        <div className="contents">
            <img className="ContentBg" src={isData1[4]}></img>
            <div className="content-view">
                <img src={isData1[4]}></img>
                <div className="content-text">
                    <p>Бүтээлийн нэр: &#160;&#160;&#160;<b>{isData1[2]}</b></p>
                    <p>Бүтээлийн төрөл: &#160;&#160;&#160;<a>{isData1[0]}</a></p>
                    <p>Дэлгэрэнгүй мэдээлэл: &#160;&#160;&#160;<a>{isData1[6]}</a></p>
                </div>
            </div>
        </div>
    )
}