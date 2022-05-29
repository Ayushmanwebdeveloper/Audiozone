import * as React from "react";
import './navbar.css';
import {
    HeaderNavigation,
    ALIGN,
    StyledNavigationList,
    StyledNavigationItem
} from "baseui/header-navigation";
export default function Navbar() {
    
    return (
        <HeaderNavigation className="navbar fixed-top navbar-expand-md navbar-dark" style={{ width: '100%',height:'80px',color:'white' ,backgroundColor:'rgb(25, 25, 25)'}}>
            <StyledNavigationList $align={ALIGN.left}>
                <StyledNavigationItem style={{ fontWeight: 'bold', fontSize: '32px'}}>Audiozone</StyledNavigationItem>
            </StyledNavigationList>
           
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            
            <StyledNavigationList className="collapse navbar-collapse" id="navbarSupportedContent" $align={ALIGN.center} style={{ color: 'white'}}>
                <ul className="navbar-nav" style={{fontWeight:"bold",letterSpacing:"4px",wordSpacing:"15px"}}>
                    <li className="nav-item" >
                        <a className="nav-link active hvr-underline-from-center" aria-current="page" href="#"> <span>HOME</span> </a>
                </li>
                <li className="nav-item">
                        <a className="nav-link active hvr-underline-from-center" aria-current="page" href="#">HEADPHONES </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active hvr-underline-from-center" aria-current="page" href="#">SPEAKERS</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active hvr-underline-from-center" aria-current="page" href="#">EARPHONES</a>
                    </li>
                    
                    <li className="position-absolute nav-item top-0 end-0" style={{marginTop:'26px'}}>
                        <a className="nav-link active hvr-underline-from-center" aria-current="page" href="#"><i className="fa-solid fa-cart-arrow-down fa-xl"></i></a>
                        </li></ul>
              
            </StyledNavigationList>
          </HeaderNavigation>
    );
}

