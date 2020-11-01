import React from 'react';
import { Link } from 'react-router-dom';
import Movie from './Video/watch.mp4';

const random = Math.floor(Math.random() * 10);

const random2 = Math.floor(Math.random() * 10);
function Data(props) {
    const Videosrc = Movie;
    return (
        <Link to="/movie" className="link" >
        <div className="movie_poster">
            <div className="poster">
                <img src={props.imgUrl} alt="imgUrl" />
            </div>
            <div className="movie_discription">
                <h4>{props.title}</h4>
                <a href={Videosrc}> <i className="fa fa-play-circle" aria-hidden="true"></i></a>
                <span >{random + "." + random2}</span>
            </div>
            <div className="discription">
                <p>{props.discription}</p>
            </div>
            
        </div>
        </Link>
    )
};

export default Data;
