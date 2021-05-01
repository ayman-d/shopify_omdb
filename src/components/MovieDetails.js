import React from 'react'
import styled from 'styled-components';

function MovieDetails(props) {
    return (
        <MovieDetailsStyles>
            <span>Movie Name </span>
            <span>(1999) </span>
            <button>Nominate</button>
        </MovieDetailsStyles>    
    )
}

export default MovieDetails

const MovieDetailsStyles = styled.li`

    margin-top: 5px;

    list-style-type: disc;
    margin-left: 40px;

    button {
        padding: 4px 10px;
    }


`