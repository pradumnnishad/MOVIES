import { useEffect, useState } from 'react';
import Movieslist from './Movieslist';


function Home()
{
    let [movies , setMovies] = useState( null );
    let [pending , setPending] = useState( true );
    let [error , setError] = useState( null );
    
    // useEffect is a hook which can be used to add side effects for components.
    useEffect(()=>{
      setTimeout(()=>{
        fetch("http://localhost:4000/movies")
        .then( (res)=>{
                          if(res.ok == false)
                          {
                            throw Error("data that you are searching for is not present")
                          }
                          return res.json()
                      } )
        .then((data)=>{setMovies(data); setPending(false) })
        .catch((err)=>{setError(err.message); setPending(false) })
  
      } , 2000 )
    },[])
    return(
      <div>
        { error    &&  <h1>{error}</h1>}
        { pending  &&  <div className="loader"></div> }
        { movies   &&  <Movieslist movies={movies}  title="All movies"/>}
      </div>
    )
}
export default  Home