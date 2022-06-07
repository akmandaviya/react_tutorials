import React from 'react' //(1)

const App = () => { //functional component //(2)
  return ( //(3)
    // <div>
    //   Welcome to my world!!

    //   <h1>Hello World</h1>
    // </div>


    //now fragments
    <>    

      <myName />

     <h1>Hello world</h1>
     <p>This is the begining of React</p>
     <p className="className">
       Here className is used in place of class
     </p>
   
    </>

  )
}

const myName = () => {
  return <h1>Abdulkarim Mandaviya</h1>
}

export default App


//-------------------------------------------------------------------------------------------------

// Three things are very important :-
// import React from "react"
// any one function (functional Component)
// It should always return JSX. 

// After React 17.0 Version, Now no need to write import React from "react" Anymore
//it will work if we remove it also.

//JSX is HTML look alike elements, but not HTML. They are JavaScript Extension Syntax or Javascript XML
   // It always return single element
  //  Use Div or React Fragment to wrap all your JSX Code--> fragments -> <> </>
  // ClassName in place of class and HTMLfor in place of for
  // Need to close all non closing Tags in JSX
  // Use camelCase for attributes


  //What is nested component ?
  //component in component.