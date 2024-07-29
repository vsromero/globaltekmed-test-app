import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import axios from 'axios';

function Details() {
  let { movieHref }   = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    axios.get('http://34.70.220.139:3000/'+movieHref)
        .then(response => {
          setMovie(response.data);
        })
        .catch(error => {
          console.log(error);
        });
  }, [movieHref]);

  return (
    <div>
      <hr className="mb-8" />

      <div className="card lg:card-side bg-base-100 shadow-xl mb-20 max-w-screen-2xl mx-auto">
        <img
            src={ movie.thumbnail }
            alt="Album"
            className="my-12 mx-auto lg:hidden" 
        />  
        <div className="card-body lg:w-1/3">
          <h2 className="card-title text-4xl font-bold">{ movie.title }</h2>
          <div className="text-left font-semibold">{ movie.year }</div>
          {/* <p className="text-left">{ movie.genres.join(', ') }</p> */}
          <div className="text-left mt-6">{ movie.extract }</div>

          <div className="card-actions justify-start my-12">
            <button className="btn btn-primary">Get Tickets</button>
            <button className="btn">Watch Trailer</button>
          </div>
        </div>

        <img
            src={ movie.thumbnail }
            alt="Album"
            className="my-8 mx-20 hidden lg:block"
            width="400"
            height="600"
        />

      </div>

      <Link to="/" className="btn btn-wide btn-primary mb-12">Back</Link>
    </div>
  )
}

export default Details;