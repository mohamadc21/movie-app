const imagesAPI = "https://image.tmdb.org/t/p/w1280";

function Movie({title, image, overview, vote_average}) {

    function checkVote(vote_average) {
        if(vote_average >= 8) {
            return 'green';
        } else if(vote_average >=5) {
            return 'orange';
        } else {
            return 'red';
        }
    }

    return (
        <div className="movie">
            <img src={image ? (imagesAPI + image) : 'https://st4.depositphotos.com/23594922/29747/v/950/depositphotos_297474190-stock-illustration-no-image-vector-illustration-isolated.jpg'} />
            <div className="movie-content">
                <h4>{title}</h4>
                <span className={`vote ${checkVote(vote_average)}`}>{Math.floor(vote_average)}</span>
            </div>
            <div className="overview">
                <h4>Overview</h4>
                <p>{overview}</p>
            </div>
        </div>
    )
}

export default Movie;