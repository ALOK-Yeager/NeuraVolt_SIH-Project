import gLight from "../assets/gLight.svg" ; 
import yLight from "../assets/yLight.svg" ; 

function HeroSection()
{

    return(


        <div className="hero-section">


            <div className="hero-grey-light"><img src={gLight} alt="grey-lighting"></img></div>
            <div className="hero-yellow-light"><img src={yLight} alt="yellow-lighting"></img></div>


            <div className="hero-content">

                <h1 className="hero-title">Predicting Power, Perfecting Effieciency</h1>

                <p className="hero-desc">AI-driven insights for optimized electricity demand forecasting and sustainable energy solutions.</p>

                <button className="hero-btn">Know More</button>
                
            </div>



{/* 
            <div className="hero-yellow-light"><img src={yLight} alt="yellow-lighting"></img></div> */}


        </div>
    )
}


export default HeroSection ; 