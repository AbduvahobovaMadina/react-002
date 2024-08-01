import React from "react";
import "./clean.scss";
import img from "../../assets/image.png"
import { IoCheckmarkCircleOutline } from "react-icons/io5";

function Clean(){
    return(
        <div>
            <section className="clean">
                <div className="container">
                    <div className="clean__content">
                        <div className="clean__text">
                            <h2>Clean and fragrant soy wax</h2>
                            <h3>Made for your home and for your wellness</h3>
                            <ul>
                                <li><IoCheckmarkCircleOutline /><b>Eco-sustainable</b>:All recyclable materials, 0% CO2 emissions</li>
                                <li><IoCheckmarkCircleOutline /><b>Long burning</b>: No more waste. Created for last long.</li>
                                <li><IoCheckmarkCircleOutline /><b>Handmade</b>: All candles are craftly made with love.</li>
                                <li><IoCheckmarkCircleOutline /><b>Hyphoallergenic</b>: 100% natural, human friendly ingredients </li>
                            </ul>
                            <button>Learn more</button>
                        </div>
                        <div className="clean__img">
                            <img src={img} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Clean