import React from "react";
import bg from "../../assets/bg.png";
import img from "../../assets/img.png"
import "./testimonial.scss";
import { IoStar,IoStarHalf } from "react-icons/io5";

function Testimonial(){
    return (
        <div>
            <div className="testimonial">
        <div className="container">
            <h2>Testimonials</h2>
            <h3>Some quotes from our happy customers</h3>
            <div className="testimonial__wrapp">
                <div className="testimonial__card">
                    <img src={bg} alt="" />
                    <div className="stars">
                    <IoStar className="star" />
                    <IoStar  className="star"/>
                    <IoStar className="star" />
                    <IoStar  className="star"/>
                    <IoStarHalf className="star" />
                    </div>
                <b>“I love it! No more air fresheners”</b>
                <p>Luisa</p>
                </div>
                <div className="testimonial__card">
                    <img src={img} alt="" />
                    <div className="stars">
                    <IoStar className="star" />
                    <IoStar  className="star"/>
                    <IoStar className="star" />
                    <IoStar  className="star"/>
                    <IoStarHalf className="star" />
                    </div>
                <b>“I love it! No more air fresheners”</b>
                <p>Edoardo</p>
                </div>
                <div className="testimonial__card">
                    <img src={bg} alt="" />
                    <div className="stars">
                    <IoStar className="star" />
                    <IoStar  className="star"/>
                    <IoStar className="star" />
                    <IoStar  className="star"/>
                    <IoStarHalf className="star" />
                    </div>
                <b>“I love it! No more air fresheners”</b>
                <p>Mart</p>
                </div>
            </div>
        </div>
            </div>

        </div>
    )
}


export default Testimonial