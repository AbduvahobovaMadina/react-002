import React from "react";
import "./footer.scss";
import footer from "../../assets/footer.svg"



function Footer(){
    return (
        <div>
            <footer className="footer">
                <div className="container">
                    <div className="wrapper">
                        <div className="card">
                            <img src={footer} alt="" />
                            <p>Your natural candle made for your home and for your wellness.</p>
                        </div>
                        <div className="card">
                            <b>Discovery</b>
                            <p>New season</p>
                            <p>Most searched</p>
                            <p>Most selled</p>
                        </div>
                        <div className="card">
                            <b>About</b>
                            <p>New season</p>
                            <p>Most searched</p>
                            <p>Most selled</p>
                        </div>
                        <div className="card">
                            <b>Info</b>
                            <p>New season</p>
                            <p>Most searched</p>
                            <p>Most selled</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default Footer