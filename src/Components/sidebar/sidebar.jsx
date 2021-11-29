import "../../Components/sidebar/sidebar.scss";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { Context } from "../../Context/.Context";
import { useState } from "react";

//images
import home from "../../Assets/Images/home.svg";
import trending from "../../Assets/Images/trending.svg";
import subscriptions from "../../Assets/Images/subscriptions.svg";
import library from "../../Assets/Images/library.svg";
import history from "../../Assets/Images/history.svg";
import watch from "../../Assets/Images/clock.svg";
import favourites from "../../Assets/Images/favarite.svg";
import liked from "../../Assets/Images/liked.svg";
import music from "../../Assets/Images/music.svg";
import game from "../../Assets/Images/game.svg";
import show from "../../Assets/Images/show.svg";

function Sidebar() {
  const {movie, setMovie} = useContext(Context)

 let  arr=[]
  let son = 100;
  for( let i=1; i<=son; i++){
    arr.push(i)
  }

  console.log(movie);
  return(
    <>
      <div className="sidebar-wrapper">
        <ul className="sidebar-list">

          <li>
            <Link to="/">
              <img src={home} alt="icon" />
              <b className="home">Home</b>
            </Link>
          </li>

          <li>
            <Link to="/">
              <img src={trending} alt="icon" />
              <b>Trending</b>
            </Link>
          </li>

          <li>
            <Link to="/">
              <img src={subscriptions} alt="icon" />
              <b>Subscriptions</b>
            </Link>
          </li>

          <li className="br">
            <Link to="/">
              <img src={library} alt="icon" />
              <b>Library</b>
            </Link>
          </li>

          <li>
            <Link to="/">
              <img src={history} alt="icon" />
              <b>History</b>
            </Link>
          </li>

          <li>
            <Link to="/">
              <img src={watch} alt="icon" />
              <b>Watch later</b>
            </Link>
          </li>

          <li>
            <Link to="/">
              <img src={favourites} alt="icon" />
              <b>Favourites</b>
            </Link>
          </li>

          <li>
            <Link to="/">
              <img src={liked} alt="icon" />
              <b>Liked videos</b>
            </Link>
          </li>

          <li>
            <Link to="/">
              <img src={music} alt="icon" />
              <b>Music</b>
            </Link>
          </li>

          <li>
            <Link to="/">
              <img src={game} alt="icon" />
              <b>Games</b>
            </Link>
          </li>

          <li>
            <Link to="/">
              <img src={show} alt="icon" />
              <b>Show more</b>
            </Link>
          </li>
        </ul>

            <ul className="sidebar__list2">
            {
              arr.map((r)=>(
               <Link to="/channel" key={r} onClick={()=> setMovie(r)}>
                 <li key={r}>{r} - channel</li>
               </Link>
              ))
            }
            
            </ul>
      </div>
    </>
  )
  
}

export default Sidebar;