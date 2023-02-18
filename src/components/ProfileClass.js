import React from "react";
class Profile extends React.Component{
    constructor(props){
        super(props);
        console.log('constructor');
        //Create state
        this.state = {
            userInfo: {
                login: "dummy",
                login:"dumy"
            }
        }
    }
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/vivekumartomar")
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo:json
        })
    }
    componentDidUpdate(prevProps, prevState){
        if(this.state.count !== prevState.count ||
            this.state.count !== prevState.count){
                // code here
            }
        console.log('componentDidUpdate');
    }
    componentWillUnmount(){
        console.log('componentWillUnmount');
    }
    render(){
        console.log('render');
        return (
            <div>
                <h1> Profile class components</h1>
                <h3>Name : {this.state.userInfo.login}</h3>
                <h4>Email: {this.state.userInfo.login}</h4>
            </div>
        )
    }
}
export default Profile;