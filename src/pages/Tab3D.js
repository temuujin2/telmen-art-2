import { MovieDataContext1 } from "../newContext"

export function Tab3D() {

    const { isData1 } = MovieDataContext1()
    return (
        <div className="contents">
            <img className="ContentBg" src={isData1[5]} alt="for 3D"/>
            <div className="content-view">
                <img src={isData1[5]} alt="for 3D"/>
                <div className="content-text">
                    <p>Бүтээлийн нэр: <span>{isData1[2]}</span></p>
                    <p>Бүтээлийн төрөл: <b>{isData1[0]}</b></p>
                    <p>Дэлгэрэнгүй мэдээлэл: <b>{isData1[6]}</b></p>
                </div>
            </div>
        </div>
    )
}