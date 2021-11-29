import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../Context/.Context";
import "./Video.scss";


function Video() {
  const {movie, setMovie} = useContext(Context)
  const [videos, setVideos] = useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then((props) => props.json())
    .then((date) => setVideos(date.filter((vi)=> vi.albumId === movie)))
  },[])


  return(
    <>
      <div className="video-wrapper">
        <div className="video-wrapper__left">
          <div className="video">

          </div>
          <h4>Dude You Re Getting A Telescope</h4>

          <div className="div">
            <h6>123k views</h6>
            <ul>
              <li>123k</li>
              <li>435k</li>
              <li>Share</li>
              <li>...</li>
            </ul>
          </div>
          <br />
          <hr />

          <h4>Food vs Drink</h4>
          <h5 className="date">Published on 14 Jun 2019</h5>
          <p className="parag">A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action.</p>

        </div>

        {
          videos.length > 0 && (
            <ul className="video-list">
              {videos.map((v) => (
                <Link to="/video">
                <li className="video-list__item">
                  <img src={v.url} width="271" height="150" />
                  <h1>{v.albumId} - channel</h1>
                  <h2>{v.id} - video</h2>
                </li>
                </Link>
              ))}
            </ul>
          )
        }


      </div>
    </>
  )
}

export default Video;