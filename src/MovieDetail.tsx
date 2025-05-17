import { useParams } from "react-router";

function MovieDetail() {
    const { movieId } = useParams();
    return<div>MovieDetail page {movieId}</div>;
}

export default MovieDetail;