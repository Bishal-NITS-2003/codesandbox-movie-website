import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../components/header";

function Details() {
  const { title, year } = useParams();

  const decodedTitle = decodeURIComponent(title);

  const [movie, setMovie] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    async function fetchMovie() {
      try {
        const response = await axios.get("https://www.omdbapi.com/", {
          params: {
            apikey: process.env.API_KEY,
            t: decodedTitle,
            y: year,
          },
        });
        console.log(response.data);
        setMovie(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    }

    fetchMovie();
  }, [decodedTitle, year]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <Header />
      <div className="container movie-container">
        <div className="row">
          <div className="col-md-4">
            <img
              src={movie.Poster}
              alt={movie.Title}
              className="movie-poster"
            />
          </div>
          <div className="col-md-8 movie-details">
            <div className="movie-title">{movie.Title}</div>
            <p>
              <strong>Duration:</strong> {movie.Runtime}
            </p>
            <p>
              <strong>Genre:</strong> {movie.Genre}
            </p>
            <p>
              <strong>Release Date:</strong> {movie.Released}
            </p>
            <p>
              <strong>Actors:</strong> {movie.Actors}
            </p>
            <p>
              <strong>Director:</strong> {movie.Director}
            </p>
            <p>
              <strong>Plot:</strong> {movie.Plot}
            </p>
            <p>
              <strong>IMDb Rating:</strong> {movie.imdbRating}/10
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
