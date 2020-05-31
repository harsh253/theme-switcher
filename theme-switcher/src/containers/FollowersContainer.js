import React, {Component} from 'react';
import FollowerCard from '../components/FollowerCard';
import fb from '../images/icon-facebook.svg';
import ig from '../images/icon-instagram.svg';
import twt from '../images/icon-twitter.svg';
import yt from '../images/icon-youtube.svg';

const data = [
    {
        imgSrc: fb,
        handle: 'harshj',
        followers: 1987,
        followerInc: true,
        count: 12
    },
    {
        imgSrc: twt,
        handle: 'harshj',
        followers: 1044,
        followerInc: true,
        count: 99
    },
    {
        imgSrc: ig,
        handle: 'harsh.jaiswal29',
        followers: 11+'k',
        followerInc: true,
        count: 1999
    },
    {
        imgSrc: yt,
        handle: 'harshj',
        followers: 8239,
        followerInc: false,
        count: 144
    }
]

class FollowersContainer extends Component{
    render(){

        var cards = data.map((data,key)=>{
            return (
                <FollowerCard data = {data} key={key}></FollowerCard>
            )
        })

        return(
            <div className="followers-container">
                {cards}
            </div>
        )
    }
}

export default FollowersContainer