import React from "react";

//using props here
function Tweet(props) {
    return(
        <div className="tweet">
            <h3>{props.name}</h3>
             <p>{props.message}</p>
             <h3>{props.likes}</h3>
        </div>
    )
}
export default Tweet


//Why we use props?
//We use props in React to pass data from one component to another (from a parent component to a child component(s)). 
//Props is just a shorter way of saying properties. 
//They are useful when you want the flow of data in your app to be dynamic


//instead of props we can also use js destructuring 
//function Tweet({name,message,likes})


// What is state ?
// a data or varible based on which our app renders itself
