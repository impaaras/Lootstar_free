import React from 'react'
import Movie from './Video/watch.mp4';

const random = Math.floor(Math.random() * 9);
const random2 = Math.floor(Math.random() * 5);
function PosterI(props) {
  const Videosrc = Movie;
    return (
        <div className="banner">
        <div className="hero">
        <span>FREE</span>
        <h2>{props.title}</h2>
        <span >{random + "." + random2} Rating</span>
        <a href={Videosrc}><i className="fa fa-play-circle tag" ></i></a>
        <p>{props.discription}</p>
        <div className="play">
         <h3>Watch</h3>
         <p className="title_movie">{props.title}</p>
        <div className="play_dit">
           <i className="fa fa-plus" aria-hidden="true"></i>
             <p>WatchList</p>
           <i className="fa fa-share-alt" aria-hidden="true"></i>
             <p>Share</p>
        </div>
        </div>
        </div>
        
        <div className="poster_banner">
            <img src={props.imgUrl} 
            alt="poster_image"
            />
        </div>
        </div>
    )
}

export default PosterI;
