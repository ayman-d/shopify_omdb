import React from "react";
import styled from "styled-components";

function MovieDetails(props) {
  const handleClick = (e) => {
    console.log(e.target.outerText);
  };

  return (
    <MovieDetailsStyles>
      <span>{props.title} </span>
      <span>{props.year} </span>
      <button onClick={handleClick}>
        {props.list === "results" ? "Nominate" : "Remove"}
      </button>
    </MovieDetailsStyles>
  );
}

export default MovieDetails;

const MovieDetailsStyles = styled.li`
  margin-top: 5px;

  list-style-type: disc;
  margin-left: 40px;

  button {
    padding: 4px 10px;
  }
`;
