import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../Components/sidebar/sidebar";
import { Context } from "../../Context/.Context";
import "./Channel.scss";

const Channel = ()=> {
  const {movie, setMovie} = useContext(Context)
  const [videos, setVideos] = useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then((props) => props.json())
    .then((date) => setVideos(date.filter((vi)=> vi.albumId === movie)))
  },[])

  return(
    <div className="channel">
      <Sidebar />

      <div>
        <div className="channel__box">{movie}-channel</div>
        <h2 className="channel__name"><span>{movie}</span>-chanel</h2>
      {
          videos.length > 0 && (
            <ul className="channel-list">
              {videos.map((v) => (
                <Link to="/video">
                <li className="channel-list__item">
                  <img src={v.url} width="200" height="150" />
                  {/* <h4>{v.title}</h4>/ */}
                  <h1>{v.albumId} - channel</h1>
                  <h2>{v.id} - video</h2>
                </li>
                </Link>
              ))}
            </ul>
          )
        }
      </div>
    </div>
  )
}

export default Channel;