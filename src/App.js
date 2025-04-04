import { useEffect, useState } from "react";
import Movie from './components/Movie.js'

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year")
      .then(reponse => reponse.json())   /* fetch의 결과값이 들어옴 , json형식으로 변환*/
      .then(json => setMovies(json.data.movies))    /* 변환된 data를 movies상태에 저장 */
      .then(setLoading(false));
  }, [])
  console.log(movies);
  return <div>
    {loading ? <h1>loading...</h1> : <div>{movies.map((movie) =>
      <Movie
        key={movie.id}
        id={movie.id}
        title={movie.title}
        coverImg={movie.medium_cover_image}
        summary={movie.summary}
        genres={movie.genres}
      />)}</div>}
  </div>

}
export default App;
