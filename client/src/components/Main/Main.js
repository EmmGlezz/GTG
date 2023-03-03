import "./Main.css";
import Panel from "./Sidebar/Panel";
import games from "./games";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./Sidebar/sidebar";
// import axios from "axios";

function createPanel(game) {
  return (
    <div className="pt1">
      <Panel img={game.img} name={game.name} link={game.link} />
    </div>
  );
}




export default function Main() {
  const SuggestedGames = games();
  const GamesData = async () => {
    const response = await fetch('http://localhost:5500/api/games');
    const data = await response.json()
    console.log(data)
  }

  return (
    <div className="main-wrapper">
      <div className="Left-app">
        <Sidebar />
      </div>
      <div className="Right-app">
        <div className="gamesGrid bg-dark">
        <button onClick={GamesData}>Fetch</button>
          {" "}
          {SuggestedGames.map(createPanel)}
        </div>
      </div>
    </div>
  );
}
