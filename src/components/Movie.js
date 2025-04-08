import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string.isRequired)
}


function Movie({ id, title, coverImg, summary, genres }) {
    return (
        <div className="movie-card" key={id}>
            <img src={coverImg} />
            <div className="text-container">
                <h2>
                    <Link to={`/movie/${id}`}>{title}</Link></h2>
                <p>{summary}</p>
                <ul>{genres && genres.map((genre) => <li key={genre}>{genre}</li>)}</ul>
            </div>
        </div>)
}

export default Movie;