import React from "react";
import styled from 'styled-components';
import lens from '../lens.jpg'
import MovieDetails from "./MovieDetails";



const Dashboard = () => {
  return (
    <DashboardStyles>
      <h2>The Shoppies</h2>
      <div className="search-box">
        <label htmlFor="searchText">Movie Title</label>
        <input type="text" name="searchText" id="searchText" />
      </div>
      <div className="actions-area">
        <div>
          <p className="search-string">Results for "Rambo"</p>
          <ul>
            <MovieDetails />
            <MovieDetails />
            <MovieDetails />
          </ul>
        </div>
        <div>
          <p>Nominations</p>
          <ul>
            <MovieDetails />
          </ul>
        </div>
      </div>
    </DashboardStyles>
  );
};

export default Dashboard;

const DashboardStyles = styled.div`

text-align: left;
margin-top: 70px;

  h2 {
    margin-bottom: 10px;
    font-size: 1.2rem;
    color: #444;
  }

  .search-box {
    background-color: white;
    padding: 1rem;
    box-shadow: 0 0 0 0.3px black;
    border-radius: 3px;

    label {
      width: 100%;
      display: block;
      margin-bottom: 10px;
      font-size: 0.9rem;
      color: #444;
    }

    input {
    background-image: url(${lens});
    background-size: 30px;
    background-color: white;
    background-repeat: no-repeat;
    background-position: center left;
    outline: none;
    padding: 10px 30px;
    display: inline-block;
    width: 100%;
    border: 1px solid #999;
    border-radius: 4px;
    font-size: 1rem;
    }
  }

  .actions-area {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-top: 20px;

      div {
        flex-basis: 49%;
        background-color: white;
        padding: 1rem;
        border: 1px solid #999;
        border-radius: 4px;

        p {
          margin-bottom: 15px;
        }
      }
    }
  
`