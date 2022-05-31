export default function Footer(){
    return (<div>
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <a href=""  style={{ fontWeight: 'bold', fontSize: '25px',color:"white",marginLeft: "0px"}}>Audiozone</a>
                        <p className="text-justify" style={{ color: "#01345B", fontWeight: "bold", fontSize: "15px", letterSpacing: "2px", paddingTop: "25px",color:"rgb(216, 125, 74)"}}>
                            Audiozone is an all in one stop to fulfill your audio needs. Were a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
                        </p>
                    </div>
                    <div className="col-xs-6 col-md-3">
                       
                    </div>
                    <div className="col-xs-6 col-md-3">
                        <h6 style={{fontWeight:"bold"}}>Quick Links</h6>
                        <ul className="footer-links">
                            <li>
                                <a href="http://scanfcode.com/about/" style={{ color: "#01345B", fontWeight: "bold", fontSize: "15px", letterSpacing: "2px", paddingTop: "25px", color: "rgb(216, 125, 74)" }}>Home</a>
                            </li>
                            <li>
                                <a href="http://scanfcode.com/contact/" style={{ color: "#01345B", fontWeight: "bold", fontSize: "15px", letterSpacing: "2px", paddingTop: "25px", color: "rgb(216, 125, 74)" }}>Headphones</a>
                            </li>
                            <li>
                                <a href="http://scanfcode.com/contribute-at-scanfcode/" style={{ color: "#01345B", fontWeight: "bold", fontSize: "15px", letterSpacing: "2px", paddingTop: "25px", color: "rgb(216, 125, 74)" }}>
                                    Speakers
                                </a>
                            </li>
                            <li>
                                <a href="http://scanfcode.com/privacy-policy/" style={{ color: "#01345B", fontWeight: "bold", fontSize: "15px", letterSpacing: "2px", paddingTop: "25px", color: "rgb(216, 125, 74)" }}>Earphones</a>
                            </li>
                            <li>
                                <a href="http://scanfcode.com/sitemap/" style={{ color: "#01345B", fontWeight: "bold", fontSize: "15px", letterSpacing: "2px", paddingTop: "25px", color: "rgb(216, 125, 74)" }}>Cart</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-sm-6 col-xs-12">
                        <p className="copyright-text">
                            Ayushman © 2022 Coded by 
                            <a href="#" style={{color:"yellow"}}>Ayushman Tripathi</a>
                        </p>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <ul className="social-icons">
                            <li>
                                <a className="facebook" href="#">
                                    <i className="fa fa-linkedin" />
                                </a>
                            </li>
                            <li>
                                <a className="twitter" href="#">
                                    <i className="fa fa-github" />
                                </a>
                            </li>
                            <li>
                                <a className="dribbble" href="#">
                                    <i className="fa fa-instagram" />
                                </a>
                            </li>
                            <li>
                                <a className="linkedin" href="#">
                                    <i className="fa fa-facebook" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>

        </div>)
}