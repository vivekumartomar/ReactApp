import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline.js";
const Title =()=>(  
    <a href="/">
        <img 
        className="logo"
        src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj" 
        alt="logo" />
        </a>
    );


const Header = ()=>{
    const isOnline = useOnline();
    console.log(isOnline);
    return (
    <div className="header">
        <Title/>
        <div className="nav-items">
            {(isOnline)? <h3>✅</h3> : <h3>🔴</h3>}
            <ul>
            <li><Link to={'/about'}>About Us</Link></li>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/contact'}>Contact Us</Link></li>
            <li><Link to={'/instamart'}>InstaMart</Link></li>
            <li>Cart</li>
            </ul>  
        </div>     
    </div>
    )
}

export default Header;