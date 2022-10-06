
import imgBack_about from '../images/BGGGG.png'


export function Shop() {
    return (
        <div className="about-container">
            <h2>SHOP</h2>
            {/* ------- tab 1 ------ */}
            <input type="radio" className='tabs__radio2' name='tabs-example' id='tab-1' />
            <label for="tab-1" className='tabs__label-2'>PRINTS</label>
            <div className="tabs__content-2" style={{ color: "white" }}>PRINTS CONTENTS</div>
            {/* ------- tab 2 ------ */}
            <input type="radio" className='tabs__radio2' name='tabs-example' id='tab-2' />
            <label for="tab-2" className='tabs__label-2'>3D MODELS</label>
            <div className="tabs__content-2" style={{ color: "white" }}>3D MODELS CONTENTS</div>
            {/* ------- tab 3 ------ */}
            <input type="radio" className='tabs__radio2' name='tabs-example' id='tab-3' />
            <label for="tab-3" className='tabs__label-2'>COLLECTIBLES</label>
            <div className="tabs__content-2" style={{ color: "white" }}>COLLECTIBLES CONTENTS</div>
            {/* ------- tab 4 ------ */}
            <input type="radio" className='tabs__radio2' name='tabs-example' id='tab-4' />
            <label for="tab-4" className='tabs__label-2'>MERCH</label>
            <div className="tabs__content-2" style={{ color: "white" }}>MERCH CONTENTS</div>
            {/* ------- tab 5 ------ */}
            <input type="radio" className='tabs__radio2' name='tabs-example' id='tab-5' />
            <label for="tab-5" className='tabs__label-2'>TUTORIALS</label>
            <div className="tabs__content-2" style={{ color: "white" }}>TUTORIALS CONTENTS</div>



            <img src={imgBack_about}></img>
        </div>
    )
}