import React, { useEffect, useState } from 'react'
import './App.css'
import Home from './Home'
import { Tweeteditor } from './Tweeteditor'
import { Chaine } from './Chaine'
import { Containerhome } from './Containerhome'
import axios from 'axios'

function App() {
  
  const [post, setPost] = useState([]);

  useEffect(() => {

    try {
      axios.all([
        axios.get("https://my-json-server.typicode.com/amare53/twiterdb/posts"),
        axios.get("https://my-json-server.typicode.com/amare53/twiterdb/users"),
      ])
        .then(
          axios.spread((posts, users) => {
            
            setPost(posts.data);
            
          })
        )

    }
    catch (err) {
      console.log(err);
    }

  }, [])

  return (
    <Containerhome>
      <Home />
      <Tweeteditor />
      {
        post.map((mychaine, index) => <Chaine props={mychaine} key={index} />)
      }
    </Containerhome>


  )
}


export default App;

