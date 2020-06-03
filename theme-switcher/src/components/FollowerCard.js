import React, {Component} from 'react';
import inc from '../images/icon-up.svg';
import dec from '../images/icon-down.svg';

class FollowerCard extends Component{
    render(){
        return(
            <div className="card-container">
                <div className="social-media">
                    <div className="social-media-img">
                        <img alt="social-media-img" src={this.props.data.imgSrc}></img>
                    </div>
                    <div className="social-media-handle">
                        <h6>{this.props.data.handle}</h6>
                    </div>
                </div>
                <div className="followers">
                    <div className="follower-count">
                        <h1><b>{this.props.data.followers}</b></h1>
                    </div>
                    <div className="followers-text">
                        <h5>FOLLOWERS</h5>
                    </div>
                </div>
                <div className="follower-insight">
                    <div className="trend">
                        <img alt="trend" src={`${this.props.data.followerInc ? inc: dec}`}></img>
                        <h6 className={`${this.props.data.followerInc ? 'green' : 'red'}`}>{this.props.data.count} Today</h6>
                    </div>
                </div>
            </div>
        )
    }
}

export default FollowerCard