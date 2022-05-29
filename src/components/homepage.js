import * as React from "react";
import './homepage.css'
export default function Homepage() {

    return (<div style={{ backgroundColor:"rgb(241, 241, 241)"}}>
        <div role="img" className="mp">
            <div id="inr" style={{ width:"92%",height:"600px",margin:"auto",textAlign:"center"}}>
                <h1 className="display-6" style={{ color:"rgb(200, 181, 105)",fontWeight:"bold",fontSize:"25px",letterSpacing:"5px",paddingTop:"125px"}}>NEW PRODUCT</h1>
                <h1 className="display-1" style={{ color: "white", fontWeight: "bold", fontSize: "55px", letterSpacing: "5px", paddingTop: "20px" }}>XX99 MARK II HEADPHONES</h1>
                <p className="h2" style={{ color:"rgb(194, 194, 194)", fontWeight: "bold", fontSize: "25px", letterSpacing: "5px", paddingTop: "25px" }}>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                <button type="button" style={{ borderRadius: "30px", marginTop: "24px",fontWeight: "bold", fontSize: "25px", letterSpacing: "3px" }} className="btn btn-warning btn-lg">SEE PRODUCT</button>
                <br/>
                <button type="button" style={{ borderRadius: "70px", marginTop: "28px" }} className="btn btn-danger btn-lg"><i className="fa-solid fa-circle-down fa-xl"></i></button>
                </div>
        </div>
        <div className="container" id="ite" style={{ width: "100%", height: "500px", margin: "auto", textAlign: "center" }}>
            <div className="row" style={{paddingTop:"50px"}}>
                <div className="col-12 col-md-4 card"><a href="" className="alert alert-dark"><img src="https://raw.githubusercontent.com/a331998513/audiophile-ecommerce-website/main/src/assets/category-headphones/desktop/image-xx99-mark-one.jpg" className="card-img-top hvr-wobble-skew" alt="..."/>
                    <div className="card-body">
                        <p className="card-text">HEADPHONES</p>
                    </div>
                </a>  </div>
                <div className="col-12 col-md-4  card"><a href="" className="alert alert-dark"><img src="https://raw.githubusercontent.com/a331998513/audiophile-ecommerce-website/main/src/assets/category-speakers/desktop/image-zx9.jpg" className="card-img-top hvr-wobble-skew" alt="..." />
                    <div className="card-body">
                        <p className="card-text">SPEAKERS</p>
                    </div>
                </a></div>
                <div className="col-12 col-md-4  card"><a href="" className="alert alert-dark"><img src="https://raw.githubusercontent.com/a331998513/audiophile-ecommerce-website/main/src/assets/category-earphones/desktop/image-yx1-earphones.jpg" className="card-img-top hvr-wobble-skew" alt="..." />
                    <div className="card-body">
                        <p className="card-text">EARPHONES</p>
                    </div>
                </a> </div>
            </div>
        </div>
        </div>)
}