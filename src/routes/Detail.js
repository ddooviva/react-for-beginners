import { useState, useEffect } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';

function Detail() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [detail, setDetail] = useState(null);
    const history = useHistory();

    useEffect(() => {
        fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((json) => {
                if (json.data && json.data.movie) {
                    setDetail(json.data.movie);
                }
            })
            .catch((error) => {
                console.error("Error fetching movie details:", error);
            })
            .then(() => console.log(detail)).finally(() => setLoading(false));
    }, [id]);

    const handleNavigation = () => {
        history.push(detail.url);
    };

    return (
        loading ? <h1>Loading...</h1> : (
            <div>
                <h1>
                    {detail ? detail.title : 'Movie Title'}
                    <a href={detail.url} target="_blank" rel="noopener noreferrer">자세히 보기</a>
                </h1>

            </div>
        )
    );
}

export default Detail;