
import { Link } from "react-router-dom";
function Nav(){ 
return(
<nav>
    
<Link to="/">Home</Link><br />
<div>
<input type="search" placeholder="search movie name" />
<Link to="/Addmovie">Add New Movies</Link>
<Link to="/favourites">Favourites</Link>

</div>

</nav>
)
} 
export default Nav;