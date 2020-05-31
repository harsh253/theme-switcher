import React, {Component} from 'react';
import OverviewCard from '../components/OverviewCard';
import fb from '../images/icon-facebook.svg';
import ig from '../images/icon-instagram.svg';
import twt from '../images/icon-twitter.svg';
import yt from '../images/icon-youtube.svg';

const data = [
    {
        socialMedia:'facebook',
        imgSrc: fb,
        likesCount: 52,
        likesInc: false,
        likesIncTrend: 2,
        views: 87,
        viewInc: true,
        viewTrend: 3
    },
    {
        socialMedia:'instagram',
        imgSrc: ig,
        likesCount: 5462,
        likesInc: true,
        likesIncTrend: 2257,
        views: 52+'k',
        viewInc: true,
        viewTrend: 1375
    },
    {
        socialMedia:'twitter',
        imgSrc: twt,
        likesCount: 507,
        likesInc: true,
        likesIncTrend: 553,
        retweets: 117,
        retweetsInc: true,
        retweetTrend: 303
    },
    {
        socialMedia:'youtube',
        imgSrc: yt,
        likesCount: 107,
        likesInc: false,
        likesIncTrend: 19,
        views: 1407,
        viewInc: false,
        viewTrend: 12
    }
]


class OverviewContainer extends Component{
    render(){
        var cards = []
        var count = 0;
        for(var i=0;i<data.length;){
            cards.push(
                <OverviewCard id={count} data={data[i]}></OverviewCard>
            )
            if(count%2!==0){
                i++;
            }
            count+=1;
            
        }

        return(
            <div className="overview-container">
                <h2>Overview - Today</h2>
                <div className="overview-cards-container">
                    {cards}
                    <div style={{minWidth:'190px'}}></div>
                </div>
            </div>
        )
    }
}

export default OverviewContainer;