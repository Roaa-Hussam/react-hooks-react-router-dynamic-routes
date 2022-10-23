import { Link } from "react-router-dom"

export default function MoviesList({ movies }) {

    return (
        <ul>
            {Object.keys(movies).map((movieID) => (
                <li key={movieID}>
                    <Link to={`/movies/${movieID}`}>{movies[movieID].title}</Link>
                </li>
            )
            )}
        </ul>
    )
}