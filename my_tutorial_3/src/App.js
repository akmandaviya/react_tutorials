import React,{useState} from 'react'
import Tweet from './Tweet'
import './App.css';

const App = () => {
    const [users, setUsers] = useState([
        {
        name: "Tapu",
        age: 10,
        school : "Shakti High School"
        },
    
        {
        name: "sonu",
        age: 8,
        school : "Sacred Hearts High School"
        },
    
        {
        name: "Goli",
        age: 9,
        school : "Central Public School"
        },
    
        {
          name: "Gogi",
          age: 11,
          school : "Sophia Convent"
          }
       ])

  return (
    <div className='app'>
      {users.map(user => (
        <Tweet name={user.name} message ={user.age} school= {user.school}/>
      ))}
    </div>
  )
}

export default App
