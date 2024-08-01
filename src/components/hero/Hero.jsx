import React from "react";
import "./hero.scss";
import photo from "../../assets/bg-image.png";
import photo2 from "../../assets/rasm.jpg";


function Hero(){
    return (
        <div>
            <section className="hero">
            <img src={photo} alt="" />
                <div className="container">
                    <div className="hero__title">
                        <img src={photo2} alt="" />
                        <h3>The nature candle</h3>
                        <p>All handmade with natural soy wax, Candleaf is a companion for all your pleasure moments </p>
                        <button>Discovery our collection</button>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Hero