import React from 'react';
import movies from '../movies';
import Data from './Data';

function createData(contact){
    return <Data
        key={contact.id}
        imgUrl={contact.imgUrl}
        title={contact.title}
        rating={contact.rating}
        url={contact.url}
    />
}

function Movie(props) {
    return (
        <div className="movie">
        {movies.map(createData)}
        </div>
    )
};


export default Movie;
