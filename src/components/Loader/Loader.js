import React from 'react'
import './loader.css'


const Loader = () => {
    return (
        <div className='loader'>
            <div class="tophattop">
                <div class="tophatbottom"></div>
            </div>
            <div id="head" class="frogface">
                <div class="sunglasses"></div>
                <div class="eye one">
                    <div id="p" upilOne class="pupil one "></div>
                </div>
                <div class="eye two">
                    <div id="p" upilTwo class="pupil two"></div>
                </div>
                <div class="frogmouth">
                    <div id="mouth" class="froglip">
                        <div id="tongue" class=""></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loader