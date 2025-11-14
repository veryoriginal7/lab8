import './App.css';
import React from 'react';
import { useRoutes } from 'react-router-dom'
import ReadPosts from './pages/ReadPosts'
import CreatePost from './pages/CreatePost'
import EditPost from './pages/EditPost'
import { Link } from 'react-router-dom'
import CrewmateDetail from './CrewmateDetail';
const App = () => {
  
  
  const descr = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'

  const posts = [
      {'id':'1', 
      'name': 'Cartwheel in Chelsea 🤸🏽‍♀️',
      'class':'Harvey Milian', 
      'race': descr},
      {'id':'2', 
      'name': 'Love Lock in Paris 🔒',
      'class':'Beauford Delaney',
      'race':descr},
      {'id':'3',
      'name': 'Wear Pink on Fridays 🎀',
      'class':'Onika Tonya', 
      'race':descr},
      {'id':'4', 
      'name': 'Adopt a Dog 🐶',
      'class':'Denise Michelle',
      'race':descr},
  ]


  // Sets up routes
 const element = useRoutes([
    { path: '/', element: <ReadPosts /> },
    { path: '/crewmate/:id', element: <CrewmateDetail /> },
    { path: '/edit/:id', element: <EditPost /> },
    { path: '/new', element: <CreatePost /> },
  ]);

  return ( 

    <div className="App">

      <div className="header">
        <h1>DND character sheets
        </h1>
        <Link to="/"><button className="headerBtn"> Explore Challenges 🔍  </button></Link>
        <Link to="/new"><button className="headerBtn"> Submit Character 🏆 </button></Link>
      </div>
      <div className="App">{element}</div>
    </div>

  )
}

export default App
