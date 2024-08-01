import React from 'react'
import "./popular.scss"
import img1 from "../../assets/img1.png"
import img2 from "../../assets/img2.png"
import img3 from "../../assets/img3.png"
import img4 from "../../assets/img4.png"

const card = [
    {
      id: 1,
      img: img1,
      title: "Spiced Mint",
      price: "9.99$",
    },
    {
      id: 2,
      img: img2,
      title: "Spiced Mint",
      price: "9.99$",
    },
    {
      id: 3,
      img: img3,
      title: "Spiced Mint",
      price: "9.99$",
    },
    {
      id: 4,
      img: img4,
      title: "Spiced Mint",
      price: "9.99$",
    },
    
    
  ];

function Popular(){
    return(
        <div>
            <section className="product popular">
                <div className="container">
                    <h2>Products</h2>
                    <h3>Order it for you or for your beloved ones </h3>
                    <div className="product__wrapp">
                        {card?.map((el) => {
                            return (
                                <div key={el.id} className="card">
                                    <div className='card__img'>
                                        <img src={el.img} alt="" />
                                    </div>
                                    <div className="card__title">
                                        <p>{el.title}</p>
                                        <b className="price">{el.price}</b>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Popular