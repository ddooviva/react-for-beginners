import { useEffect, useState } from "react";
import Movie from '../components/Movie';

function App() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0); // 현재 카드 인덱스 상태

    useEffect(() => {
        fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year")
            .then((response) => response.json())
            .then((json) => setMovies(json.data.movies))
            .finally(() => setLoading(false));
    }, []);

    const nextMovies = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 3) % movies.length); // 다음 카드로 이동 (하나씩 이동)
    };

    const prevMovies = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 3 + movies.length) % movies.length); // 이전 카드로 이동 (하나씩 이동)
    };

    return (
        <div className="container">
            {loading ? <h1>Loading...</h1> : (
                <div>
                    <h1> Top {movies.length} Movies </h1>
                    <hr></hr>
                    <div className="movie-container">

                        <button className="arrow1" onClick={prevMovies}>&lt;</button> {/* 왼쪽 화살표 */}
                        {movies.slice(currentIndex, currentIndex + 3).map((movie) => ( // 세 개의 카드 표시
                            <Movie
                                key={movie.id}
                                id={movie.id}
                                title={movie.title}
                                coverImg={movie.medium_cover_image}
                                summary={movie.summary}
                                genres={movie.genres}
                            />
                        ))}
                        <button className="arrow2" onClick={nextMovies}>&gt;</button> {/* 오른쪽 화살표 */}
                    </div>
                </div>

            )}
        </div>
    );
}

export default App;