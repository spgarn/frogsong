import React from 'react'
import './loader.css'


const Loader = () => {
    return (
        <div className='loader'>
            <div className="tophattop">
                <div className="tophatbottom"></div>
            </div>
            <div id="head" className="frogface">
                <div className="sunglasses"></div>
                <div className="eye one">
                    <div id="p" className="pupil one "></div>
                </div>
                <div className="eye two">
                    <div id="p" className="pupil two"></div>
                </div>
                <div className="frogmouth">
                    <div id="mouth" className="froglip">
                        <div id="tongue" className=""></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loader