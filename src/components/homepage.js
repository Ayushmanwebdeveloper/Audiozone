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
        <div className="container" id="ite" style={{ width: "85%", margin: "auto", textAlign: "center" }}>
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
        <div className="container-fluid" id="hp" style={{height:"",width:"90%",margin:"auto"}}>
            <div className="row" style={{ marginTop:"130px"}}>
     <div className="col-sm-6">
                <img id="img1" className="img-fluid" src="https://a331998513.github.io/audiophile-ecommerce-website/static/media/image-speaker-zx9.153cd899.png"/>
     </div>
            <div className="col-sm-6" style={{textAlign:"centre",margin:"auto"}}>
                    <h1 style={{ color: "white", fontWeight: "bold", fontSize: "55px", letterSpacing: "5px", paddingTop: "100px",paddingLeft:"30px" }}>ZX9 <br/> SPEAKER</h1>
                    <p style={{ color: "rgb(194, 194, 194)", fontWeight: "bold", fontSize: "19px", letterSpacing: "5px", paddingTop: "25px", paddingLeft: "30px", }}>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p><br /><button type="button" style={{ borderRadius: "30px", marginTop: "24px", fontWeight: "bold", fontSize: "25px", letterSpacing: "3px", marginLeft: "25px" }} className="btn btn-dark btn-lg">SEE PRODUCT</button>
            </div>
            </div>
        </div>
        <div className="container-fluid" id="img2" style={{ height:"", width: "90%", margin: "auto" }}>
            <div className="row" style={{ marginTop: "110px" }}>
                <div className="col-sm-6"> <h1 style={{ color: "black", fontWeight: "bold", fontSize: "55px", letterSpacing: "5px", paddingTop: "100px", paddingLeft: "30px" }}>ZX7 <br /> SPEAKER</h1>
                    <p style={{ color: "#01345B", fontWeight: "bold", fontSize: "19px", letterSpacing: "5px", paddingTop: "25px", paddingLeft: "30px" }}>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p> <br /><div style={{}}><button type="button" style={{ borderRadius: "30px", marginTop: "24px", fontWeight: "bold", fontSize: "25px", letterSpacing: "3px",marginLeft:"25px" }} className="btn btn-dark btn-lg">SEE PRODUCT</button></div> </div>
            <div className="col-sm-6" ><img className="img-fluid" src="https://raw.githubusercontent.com/Ayushmanwebdeveloper/Audiozone/main/con-se-LaZQvguFRQw-unsplash__1_-removebg.png" /> 
            </div>
            </div>
        </div>
        <div className="container-fluid" id="img3" style={{ height: "", width: "90%", margin: "auto" }}>
            <div className="row" style={{ marginTop: "110px" }}>
                <div className="col-sm-6" ><img className="img-fluid" src="https://raw.githubusercontent.com/Ayushmanwebdeveloper/Audiozone/main/moises-gonzalez-MYfsSytG5dw-unsplash-removebg-preview.png" />
                </div> 
                <div className="col-sm-6"> <h1 style={{ color: "black", fontWeight: "bold", fontSize: "38px", letterSpacing: "5px", paddingTop: "100px", paddingLeft: "30px", textAlign: "center" }}>YX1 EARPHONES <br /> <button type="button" style={{ borderRadius: "30px", marginTop: "34px", fontWeight: "bold", fontSize: "25px", letterSpacing: "3px" }} className="btn btn-dark btn-lg">SEE PRODUCT</button></h1>
                    </div>
                
            </div>
        </div>
        <div className="container-fluid" id="" style={{ height: "", width: "90%", margin: "auto" }}>
            <div className="row" style={{ marginTop: "110px" }}>
                <div className="col-sm-6"> <h1 style={{ color: "black", fontWeight: "bold", fontSize: "45px", letterSpacing: "5px", paddingTop: "100px", paddingLeft: "30px" }}>BRINGING YOU THE <span style={{ color:"rgb(216, 125, 74)"}}> BEST</span> AUDIO GEAR</h1>
                    <p style={{ color: "#01345B", fontWeight: "bold", fontSize: "15px", letterSpacing: "2px", paddingTop: "25px", paddingLeft: "30px" }}>Located at the heart of New York City, Audiozone is the premier store for high end headphones, earphones, speakers, and audio accessories.We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products.Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment. </p> <br /><div style={{}}></div> </div>
                <div className="col-sm-6" ><img className="img-fluid" src="https://raw.githubusercontent.com/Ayushmanwebdeveloper/Audiozone/main/minh-pham-RsmOYMxmlYU-unsplash-removebg-preview.png" />
                </div>
            </div>
        </div>
        </div>)
}