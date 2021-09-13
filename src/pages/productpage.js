import Footer from "../components/footer";
import React from "react";
import NavBar from "../components/navbar";
import "../css/style.css";

const Productpage = () => {
    return(
        <div>
            <div>
            <NavBar />
            </div>
            <div >
            <img className="bannercart" alt="banner" src="https://dyanora.in/wp-content/uploads/2021/03/Dyanora-Front-Banner-002.jpg" />
            </div>
            <div>
                <input label="value" name="value" />
                <h5>
                    products
                </h5>
            </div>
            <div className="footer">
            <Footer />
            </div>
        </div>
    )
};
export default Productpage;