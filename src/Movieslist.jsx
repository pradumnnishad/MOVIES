import Moviedetail from "./Moviedetail"
 import {Link} from "react-router-dom"
 function Movieslist({movies , title}){
    return (
        <div className="movies-list">
            <h1>{title}</h1>
            {
                movies.map((movie)=>{
                    return (
                        <Link to={`/Moviedetail${movie.id}`}>
                            <div className="movie">
                                <img src={movie.poster}/>
                                <h1>{movie.movieName}</h1>
                                </div></Link>
                )})
            }
        </div>
    )
}
export default Movieslist