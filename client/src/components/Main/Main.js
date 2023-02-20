import "./Main.css";
import Panel from "./Sidebar/Panel";
import games from "./games";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./Sidebar/sidebar";

function createPanel(game) {
  return (
    <div className="pt1">
      <Panel img={game.img} name={game.name} link={game.link} />
    </div>
  );
}

export default function Main() {
  const SuggestedGames = games();

  return (
    <div className="main">
      <div className="Left-app">
        <Sidebar />
      </div>
      <div className="Right-app">
        <div className="gamesGrid bg-dark">
          {" "}
          {SuggestedGames.map(createPanel)}
        </div>
      </div>
    </div>
  );
}
