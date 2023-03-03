import React, {useEffect, useState} from "react";
import "./Main.css";
import Panel from "./Sidebar/Panel";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./Sidebar/sidebar";
// import axios from "axios";




export default function Main() {

  const [gamesRendered, setGamesRendered] = useState([])

  useEffect(() => {
    GamesData()
  }, [])
  
  const GamesData = async () => {
    const response = await fetch('http://localhost:5500/api/games');
    const data = await response.json()
    console.log(data)
    setGamesRendered(data)
  }

  return (
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
                <Panel img={gameURL} name={game.name} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}
