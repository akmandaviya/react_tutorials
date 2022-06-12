import React  from 'react'
import Tweet from './Tweet'
import "./App.css"

const App = () => {


  return (
    <div className='app'>
     <Tweet name ="Ajay" message = "This is a random tweet" likes="25464646"/>
     <Tweet name ="Sonu"  message = "Hey how are you ?" likes="646561"/>
     <Tweet name ="Ashok"  message ="What is the time ?" likes="45641"/>
     <Tweet name ="Ajay" message="Hey wassup ?" likes="4546"/>
    </div>
  )
}


export default App


//by seeing div we think its html, but no actuall it is JSX
//internally it is working as React.createElement(div)


// We can also write in this way if not to use rafce

// function App1 () {
//   return (
//     <> <h1>This is again React</h1></>
//   )
// }

// export default App1
