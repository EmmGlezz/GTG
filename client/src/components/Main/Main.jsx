import React, { useEffect, useState } from "react";
import "./Main.css";
import Panel from "./Sidebar/Panel";
import "bootstrap/dist/css/bootstrap.min.css";
import Pagination from "react-bootstrap/Pagination";
import Sidebar from "./Sidebar/sidebar";

export default function Main() {
	const [gamesRendered, setGamesRendered] = useState([]);
	const [loading, setLoading] = useState(false);
	const [page, setPage] = useState(0);

	// Number of pages to render (MAX 20 per page)
	const pagesNum = gamesRendered.length / 20;
	const pagesNumber = [];
	let active = page + 1;
	for (let index = 0; index < pagesNum; index++) {
		if (index === 0) {
			pagesNumber.push(
				<Pagination.Item
					key={index}
					active={index + 1 === active}
					onClick={() => setPage(index)}
				>
					{index + 1}
				</Pagination.Item>
			);
		} else {
			pagesNumber.push(
				<Pagination.Item
					key={index}
					active={index + 1 === active}
					onClick={() => setPage(index)}
				>
					{index + 1}
				</Pagination.Item>
			);
		}
	}

	// Separate games into arrays of 20
	const gamesPerPage = [];
	const pageSize = 20;
	for (let i = 0; i < gamesRendered.length; i += pageSize) {
		const chunk = gamesRendered.slice(i, i + pageSize);
		gamesPerPage.push(chunk);
	}

	console.log("Separated Games", gamesPerPage);
	useEffect(() => {
		GamesData();
	}, []);

	const GamesData = async () => {
		setLoading(true);
		const response = await fetch("/api/games");
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
						<div className='d-flex justify-content-center pt-4 pb-3'>
							<h1>Popular Games</h1>
						</div>

						{/* PAGINATION TOP */}
						<div className='d-flex align-items-end justify-content-end mt-3 mx-3'>
							<Pagination size='sm' className='mb-0'>
								<Pagination.First onClick={() => setPage(0)} />
								<Pagination.Prev
									onClick={() => {
										if (page > 0) {
											setPage(page - 1);
										}
									}}
								/>
								{pagesNumber}
								<Pagination.Next
									onClick={() => {
										if (page < pagesNum - 1) {
											setPage(page + 1);
										}
									}}
								/>
								<Pagination.Last onClick={() => setPage(pagesNum - 1)} />
							</Pagination>
						</div>

						{/* GAMES GRID */}
						<div className='gamesGrid bg-dark'>
							{" "}
							{gamesPerPage[page]?.map((game) => {
								const gameURL = game.cover.url.replace("thumb", "cover_big");
								return (
									<div className='pt1'>
										<Panel img={gameURL} name={game.name} gameId={game.id} />
									</div>
								);
							})}
						</div>

						{/* PAGINATION BOTTOM */}
						<div className='d-flex align-items-end justify-content-center mt-3'>
							<Pagination size='lg'>
								<Pagination.First onClick={() => setPage(0)} />
								<Pagination.Prev
									onClick={() => {
										if (page > 0) {
											setPage(page - 1);
										}
									}}
								/>
								{pagesNumber}
								<Pagination.Next
									onClick={() => {
										if (page < pagesNum - 1) {
											setPage(page + 1);
										}
									}}
								/>
								<Pagination.Last onClick={() => setPage(pagesNum - 1)} />
							</Pagination>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
