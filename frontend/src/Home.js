import { useEffect, useState } from 'react';
import Card from './Card';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Home() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/?page='+page)
    .then(response => {
      setMovies(response.data);
    })
    .catch(error => {
      console.log(error);
    });
  }, [page]);

  return (
    <div>
      <hr className="mb-8" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 justify-items-center">
      {
        movies.map((movie, index) => {
          return (
            <Link to={'/'+movie.href} key={movie._id.$oid}>
              <Card movie={movie} />
            </Link>  
          )
        })
      }
      </div>

      <div className="join mb-12">
        <input className="join-item btn btn-square" type="radio" name="options" aria-label="1" defaultChecked onClick={() => setPage(1)} />
        <input className="join-item btn btn-square" type="radio" name="options" aria-label="2" onClick={() => setPage(2)} />
        <input className="join-item btn btn-square" type="radio" name="options" aria-label="3" onClick={() => setPage(3)} />
      </div>
    </div>
  )
}

export default Home;