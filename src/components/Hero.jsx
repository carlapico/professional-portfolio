import './hero.css'
import headshot from "./boca-code-headshot.png"


function Hero () {
    return (
        
        <div class="hero-component">

            <h1>Professional Portfolio</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit repellat dolore neque nesciunt omnis, quas perspiciatis. Atque voluptatem sequi at facilis esse odit nulla possimus, dolore non doloribus itaque eius.</p>
            <img id='headshot' src={headshot} alt="Carla's Headshot" />
            <br /> 
            <button>Download Resume</button>
                
         </div>
    )
}

export default Hero