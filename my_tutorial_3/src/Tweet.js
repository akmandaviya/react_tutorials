import React from 'react'

const Tweet = (props) => {
  return (
    <div>
         <div className="tweet">
            <h3>{props.name}</h3>
             <p>{props.age}</p>
             <h3>{props.school}</h3>
        </div>
    </div>
  )
}

export default Tweet