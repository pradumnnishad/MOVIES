/* ************************************    MOVIES PROJECT     ****************************************
1> dynamic values.
2> adding styles.
3> Multiple comp.
4> Event Handling.
5> Use State.
6> Displaying multiple data.
7> Conditional rendering. 

to get the suggestion/Snippet for any tag or normal js keyword we have to save the module
as the extension (((jsx)))

* only number,String,Arrays and objects values are accessible in jsx.

How to access dynamic values in jsx?
Ans:- we have to write within curly braces like {val.a}.

How to put styles in jsx?
Ans:- create an object key as property in CamelCasing and values as value.
let s={
    (style):"value"
    property:value,
}
<Tag style={s}

let box={
    backgroundColor:"red",
    width:"250px",
    height:"auto",
    borderRadius:"10px"
}
<div className='box' style={box}>
=> it is little difficult to use inline css
 => better use external css.

 What is component?
 Ans:- Function which call jsx value is known as components

 To create one documents follow the below three steps:
 1>First character of Document name always be in Capital.
 2>Documents name and function name will be always same.
 3> always export the function explicitily to invoke in other documents.
*/
import './App.css'

function app(){
    let val="Hello World"

    return (
        <div>
            <h1>{val}</h1>
        </div>
    );
}
export default app;
