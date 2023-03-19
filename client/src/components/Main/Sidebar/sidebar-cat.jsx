import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import ModalCentered from "./ModalCentered";
import { Link } from "react-router-dom";

const mainCategories = [
	{
		id: 4,
		name: "Fighting",
		slug: "fighting",
    icon: "/images/cat_icons/fighting.png",
	},
	{
		id: 5,
		name: "Shooter",
		slug: "shooter",
    icon: "/images/cat_icons/shooter.png",
	},
	{
		id: 8,
		name: "Platform",
		slug: "platform",
    icon: "/images/cat_icons/platform.png",
	},
	{
		id: 10,
		name: "Racing",
		slug: "racing",
    icon: "/images/cat_icons/racing.png",
	},
	{
		id: 12,
		name: "Role-playing (RPG)",
		slug: "role-playing-rpg",
    icon: "/images/cat_icons/rpg-game.png",
	},
	{
		id: 14,
		name: "Sport",
		slug: "sport",
    icon: "/images/cat_icons/sports.png",
	},
	{
		id: 31,
		name: "Adventure",
		slug: "adventure",
    icon: "/images/cat_icons/adventure.png",
	},
	{
		id: 32,
		name: "Indie",
		slug: "indie",
    icon: "/images/cat_icons/indie.png",
	},
];

const extraCategories = [
	{
		id: 7,
		name: "Music",
		slug: "music",
    icon: "/images/cat_icons/music.png",
	},
	{
		id: 9,
		name: "Puzzle",
		slug: "puzzle",
    icon: "/images/cat_icons/puzzle.png",
	},
	{
		id: 11,
		name: "Real Time Strategy (RTS)",
		slug: "real-time-strategy-rts",
		icon: "/images/cat_icons/rts.png",
	},
	{
		id: 13,
		name: "Simulator",
		slug: "simulator",
    icon: "/images/cat_icons/simulation.png",
	},
	{
		id: 15,
		name: "Strategy",
		slug: "strategy",
    icon: "/images/cat_icons/strategy.png",
	},
	{
		id: 16,
		name: "Turn-based strategy (TBS)",
		slug: "turn-based-strategy-tbs",
    icon: "/images/cat_icons/turn-based-strategy.png",
	},
	{
		id: 24,
		name: "Tactical",
		slug: "tactical",
    icon: "/images/cat_icons/tactical.png",
	},
	{
		id: 26,
		name: "Quiz/Trivia",
		slug: "quiz-trivia",
    icon: "/images/cat_icons/quiz.png",
	},
	{
		id: 25,
		name: "Hack and slash/Beat 'em up",
		slug: "hack-and-slash-beat-em-up",
    icon: "/images/cat_icons/hack-slash.png",
	},
	{
		id: 30,
		name: "Pinball",
		slug: "pinball",
    icon: "/images/cat_icons/pinball.png",
	},
	{
		id: 33,
		name: "Arcade",
		slug: "arcade",
    icon: "/images/cat_icons/arcade.png",
	},
	{
		id: 34,
		name: "Visual Novel",
		slug: "visual-novel",
    icon: "/images/cat_icons/visual-novel.png",
	},
	{
		id: 35,
		name: "Card & Board Game",
		slug: "card-and-board-game",
    icon: "/images/cat_icons/board-game.png",
	},
	{
		id: 36,
		name: "MOBA",
		slug: "moba",
    icon: "/images/cat_icons/moba.png",
	},
	{
		id: 2,
		name: "Point-and-click",
		slug: "point-and-click",
    icon: "/images/cat_icons/point-click.png",
	},
];

function SideCat() {
	const [modalShow, setModalShow] = useState(false);
	// const [categories, setCategories] = useState([])

	// useEffect(() => {
	//   Genres()
	// }, [])

	// const Genres = async () => {
	//   // setLoading(true)
	//   const response = await fetch('http://localhost:5500/api/genres');
	//   const data = await response.json()
	//   console.log(data)
	//   setCategories(data)
	//   // setLoading(false)
	// }
	console.log(modalShow);

	return (
		<div class='sidebarCat'>
			{mainCategories.map((category) => (
				<div className='form-check' key={category.id}>
          <Link to={`/genre/${category.id}`} className='d-flex align-items-center mainCat'>
            <img width={'32px'} src={category.icon} style={{filter: 'invert(100%) sepia(100%) saturate(1%) hue-rotate(5deg) brightness(105%) contrast(101%)'}} alt="" />
            <h3 class='fs-5' htmlfor='flexCheckDefault' style={{marginBottom: '0', marginLeft: '0.5rem'}}>
              {category.name}
            </h3>
          </Link>
					<hr className='w-100' style={{ borderTop: "1px solid white" }} />
				</div>
			))}
			<div className='d-flex justify-content-center'>
				<Button
					variant='primary'
					onClick={() => setModalShow(true)}
					className='w-75'
					style={{
						backgroundColor: "#00425a",
						boxShadow: "0 4px 9px -4px #00425a",
					}}
				>
					More Categories
				</Button>
			</div>
			<ModalCentered
				show={modalShow}
				onHide={() => setModalShow(false)}
				categories={extraCategories}
			/>
		</div>
	);
}

export default SideCat;
