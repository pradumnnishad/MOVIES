import { useState } from "react"


function DisplayMultiple( {val} )
{


    return(
        <section>
            {
             val.map( (v)=>{return(<h1>{v}</h1>) } )
            }
        </section>
    )
}
export default DisplayMultiple