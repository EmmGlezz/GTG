import { useEffect, useState} from "react";
import Sidebar from "../Sidebar/sidebar";
import Panel from "../Sidebar/Panel";
import { useParams } from "react-router-dom";

const GenrePage = () => {
	const [gamesRendered, setGamesRendered] = useState([]);
	const [loading, setLoading] = useState(false);
    const {genreId} = useParams()

	useEffect(() => {
		GamesData();
	}, [genreId]);

	const GamesData = async () => {
		setLoading(true);
		const response = await fetch(`/api/genres/${encodeURIComponent(genreId)}`);
		const data = await response.json();
		console.log(data);
		setGamesRendered(data);
		setLoading(false);
	};

	return (
		<div>
			{loading ? (
				<div className='loader-container'>
					<img className='logo-anim' src='images/GTG_LOGO.png' alt='logo' />
					<div className='spinner'></div>
					<div></div>
				</div>
			) : (
				<div className='main-wrapper'>
					<div className='Left-app'>
						<Sidebar />
					</div>
					<div className='Right-app'>
						<div className="d-flex justify-content-center pt-4 pb-3">
							<h1>
								{gamesRendered[0]?.genres[0]?.name}
							</h1>
						</div>
						<div className='gamesGrid bg-dark'>
							{" "}
							{gamesRendered.length ? gamesRendered.map((game) => {
								const gameURL = game.cover.url.replace("thumb", "cover_big");
								return (
									<div className='pt1'>
										<Panel img={gameURL} name={game.name} gameId={game.id} />
									</div>
								);
							}) : null}
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default GenrePage;