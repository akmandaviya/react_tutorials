import React from 'react';
import "./style.css"


// //we can also write this way:-
//  import {Restaurant} from"./component/basics/Restaurant";
//  export const App = () => {
//   return (
//     <div>
//       <Restaurant/>
//     </div>
//   )
// }


const restaurant = () => {
  return (
    <>
   
    <div className="car-container">
      <div className="card">
        <div className="card-body">
          <span className="card-number card-circle subtle">1</span>
          <span className="card-author subtle"> Breakfast</span>
          <h2 className="card-title"> Maggi</h2>
          <span className="card-discription subtle">

           I love Maggi really. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Corrupti iusto numquam cumque quidem consequatur? Nesciunt autem quo hic earum dolor aut id quis sint ex reprehenderit laborum, 
            saepe itaque soluta!
          </span>

           <div className="class-read">Read</div>
        </div>
        <img src={image} alt="images" className="card-media"/>
        <span className="card-tag subtle">Order Now</span>
      </div>
    </div>
    </>
  )
}

export default restaurant
