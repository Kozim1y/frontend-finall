import './Home.scss';

import Sidebar from "../../Components/sidebar/sidebar";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../../Context/.Context';


function Home() {
  const {movie, setMovie} = useContext(Context)
  var arr= [];
  const [vides, setVideos] = useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then((props) => props.json())
    .then((date) => setVideos(date))
  },[])

  let son = 100;
  for( let i=1; i<=son; i++){
    arr.push(i)
  }
  
 

  return (
    <div className="home">
      <Sidebar></Sidebar>
      
        <ul className="home-list">
          {arr.map((vi)=>(
            

            <li key={vi} className="home-list__item">
              <Link to="/channel" onClick={()=> setMovie(vi) }><h1 className="channel_name">{vi}-Channel</h1></Link>
              <ul key={Math.random()} className="inner-home_list">
              {vides.filter((v)=>v.albumId === vi).map((video)=>(
                <Link to="/video" onClick={()=> setMovie(video.albumId)}>
                <li key={video.id}>
                  <img src={video.url}  width="400" height="200"/>
                  <h4>{video.title}</h4>
                </li>
                </Link>
              ))}
            </ul>
            </li>
          ))}
        </ul>
      
    </div>
  )
}

export default Home;