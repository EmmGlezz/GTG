import React, {useEffect, useState} from "react";
import "./Main.css";
import Panel from "./Sidebar/Panel";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./Sidebar/sidebar";
import { Link } from "react-router-dom";



export default function Main() {

  const [gamesRendered, setGamesRendered] = useState([])
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    GamesData()
  }, [])
  
  const GamesData = async () => {
    console.log('fetching')
    setLoading(true)
    const response = await fetch('/api/games');
    const data = await response.json()
    console.log(data)
    setGamesRendered(data)
    setLoading(false)
  }

  return (
    <div>
      {loading ? (
      <div className="loader-container">
        <img className="logo-anim" src="images/GTG_LOGO.png" alt="logo"/>
        <div className="spinner"></div>
        <div></div>
      </div>
      ) : (
      <div className="main-wrapper">
        <div className="Left-app">
          <Sidebar />
        </div>
        <div className="Right-app">
          <div className="gamesGrid bg-dark">
            {" "}
            {gamesRendered.map(game => {
              const gameURL = game.cover.url.replace("thumb", "cover_big")
              return (
                <div className="pt1">
                  <Panel img={gameURL} name={game.name} gameId={game.id}/>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      )}
    </div>
  );
}
