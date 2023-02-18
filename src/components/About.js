import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import ProfileClass from "./ProfileClass";

const About = () =>{
    return (<h1 className="mainBody">About Us
    <ProfileClass  test="abc"/>
    <Profile name="test" />
    
    </h1>)

}

export default About;