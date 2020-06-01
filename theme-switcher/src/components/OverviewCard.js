import React,{Component} from 'react';
import inc from '../images/icon-up.svg';
import dec from '../images/icon-down.svg';

class OverviewCard extends Component{
    render(){
        let displayName;
        let displayCount;
        let viewsTrend;
        let viewTrendCount;

        if(this.props.id%2 !== 0){
            if(this.props.data.socialMedia === 'facebook'){
                displayName = 'Page Views'
                displayCount = this.props.data.views
                viewsTrend = this.props.data.viewInc
                viewTrendCount = this.props.data.viewTrend
            }else if(this.props.data.socialMedia === 'instagram'){
                displayName = 'Profile Views'
                displayCount = this.props.data.views
                viewsTrend = this.props.data.viewInc
                viewTrendCount = this.props.data.viewTrend
            }else if(this.props.data.socialMedia === 'twitter'){
                displayName = 'Retweets'
                displayCount = this.props.data.retweets
                viewsTrend = this.props.data.retweetsInc
                viewTrendCount = this.props.data.retweetTrend
            }else if(this.props.data.socialMedia === 'youtube'){
                displayName = 'Total Views'
                displayCount = this.props.data.views
                viewsTrend = this.props.data.viewInc
                viewTrendCount = this.props.data.viewTrend
            }
        }else{
            displayName = 'Likes'
            displayCount = this.props.data.likesCount
            viewsTrend = this.props.data.likesInc
            viewTrendCount = this.props.data.likesIncTrend
        }

        return(
            <div className="card-container">
                <div className="overview-display">
                    <div className="display-name">
                        <h6>{displayName}</h6>
                    </div>
                    <div className="social-media-img">
                        <img alt="social-media-img" src={this.props.data.imgSrc}></img>
                    </div>
                </div>
                <div className="overview-insights">
                    <div className="counts">
                        <h4><b>{displayCount}</b></h4>
                    </div>
                    <div className="trend">
                        <img alt="trend" src={`${viewsTrend ? inc: dec}`}></img>
                        <h6 className={`${viewsTrend ? 'green' : 'red'}`}>{viewTrendCount}%</h6>
                    </div>
                </div>
            </div>
        )
    }
}

export default OverviewCard;