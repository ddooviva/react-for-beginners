import PropTypes from 'prop-types'

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string.isRequired)
}

function Movie({ id, title, coverImg, summary, genres }) {
    return (
        <div key={id}>
            <img src={coverImg} />
            <h1 >{title}</h1>
            <p>{summary}</p>
            <ul>{genres.map((genre) => <li key={genre}>{genre}</li>)}</ul>
        </div>)
}

export default Movie;