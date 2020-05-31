import React, {Component} from 'react';
import FollowersContainer from './FollowersContainer';
import OverviewContainer from './OverviewContainer';



var getBody = document.getElementsByTagName('body');

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            followers: 23004,
            toggled: false
        }
    }

    toggle = async() => {
        await this.setState({
            toggled: !this.state.toggled,
        })
        if(this.state.toggled){
            getBody[0].style.backgroundColor = 'hsl(0, 0%, 100%)'           
        }else{
            getBody[0].style.backgroundColor = 'hsl(230, 17%, 14%)'
        }
    }

    componentDidMount(){
        if(this.state.toggled){
            getBody[0].style.backgroundColor = 'hsl(0, 0%, 100%)'
        }else{
            getBody[0].style.backgroundColor = 'hsl(230, 17%, 14%)'
        }
    }

    render(){
        return(
            <div className={`app-container ${this.state.toggled ? 'light' : 'dark' }`}>
                <div className="header">
                    <div className="title">
                        <h3>Social Media Dashboard</h3>
                        <h6>Total Followers: {this.state.followers}</h6>
                    </div>
                    <div className="theme-toggler-container">
                        <div className="mode">
                            <h6>Dark Mode</h6>
                        </div>
                        <div className="switch-container">
                            <input type="checkbox" id="toggle" onClick={this.toggle}/>
                            <label htmlFor="toggle" className="switch"></label>
                        </div>
                    </div>
                </div>
                <FollowersContainer></FollowersContainer>
                <OverviewContainer></OverviewContainer>
            </div>
        )
    }
}

export default Home;