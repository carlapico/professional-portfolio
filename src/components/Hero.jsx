import './hero.css'
import headshot from "./boca-code-headshot.png"
import bwheadshot from './blackandwhiteheadshot.png'


function Hero () {
    return (
        <div className='hero-component'>
            <div className='herotextandbutton'>
                <h1 className='heroh1'> Hi, my name is Carla. I am a Software Engineer from Boca Code. </h1>
                <button>Download Resume</button>
            </div>
                {/* <img id='headshot' src={headshot} alt="Carla's Headshot" /> */}
                <img id='headshot' src={bwheadshot} alt="Carla's Headshot" />

        </div>
    )
}

export default Hero