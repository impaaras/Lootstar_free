import React from 'react';
import movies from '../movies'
import PosterI from './PosterI';


function createTitle (title){
    return <PosterI
        key={title.id}
        imgUrl={title.imgUrl}
        title={title.title}
        discription={title.discription}
        url={title.url}
    />
}
function Poster(props) {
    return (
        <div className="poster_image">
                {movies.map(createTitle)[Math.floor(Math.random() * [15] + 1)]}  
        </div>
    )
}

export default Poster;