import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";

 function Updatemovie(){
    let {id}=useParams();
    let h=useHistory();
    let[movieName,setMovieName]=useState("")
    let[hero,setheroName]=useState("")
    let[gener,setGener]=useState("")
    let[rating,setrating]=useState("")
    let[poster,setposter]=useState("")

    let handleUpdatemovie=(e)=>{
        e.preventDefault();
        let updateMovie={movieName,hero,gener,rating,poster}
        fetch("http://localhost:4000/movies/"+ id,
        {method:"PUT",
        headers:   {"Content-Type":"application/json"},
        body:   JSON.stringify(updateMovie)})
    .then(()=>{alert("movie updated successfully")
    h.push("/")
        // window.location.reload()
        })
    }
    return(
        <div className="update-movie">
            <h1>Update movie</h1>
            <hr/>
           <form onSubmit={handleUpdatemovie}>

            <label>Movie Name:</label><input type="text" value={movieName} onChange={(e)=>{setMovieName(e.target.value)}}/>

            <label>Hero:</label><input type="text" value={hero} onChange={(e)=>{setheroName(e.target.value)}} />

            <label>Gener:</label><input type="text" value={gener} onChange={(e)=>{setGener(e.target.value)}}/>

            <label>Rating</label><input type="text" min="0.1" max="5" value={rating} onChange={(e)=>{setrating(e.target.value)}}/>

            <label>Poster:</label><input type="url" value={poster} onChange={(e)=>{setposter(e.target.value)}}/>

            <input type="submit" value="Update Movie"/>
           </form>
        </div>
    )

   
 }
 export default Updatemovie