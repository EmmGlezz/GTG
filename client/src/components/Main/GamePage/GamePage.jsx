import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar/sidebar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { TbWorldWww } from "react-icons/tb";
import {
  SiFandom,
  SiWikipedia,
  SiFacebook,
  SiTwitter,
  SiTwitch,
  SiInstagram,
  SiYoutube,
  SiApple,
  SiAndroid,
  SiSteam,
  SiReddit,
  SiEpicgames,
  SiDiscord,
} from "react-icons/si";
import { GiGamepad } from "react-icons/gi";
import { MdGames } from "react-icons/md";

import "./GamePage.css";

import { useParams } from "react-router-dom";

const GamePage = () => {
  const [gameRendered, setGameRendered] = useState({});
  const [loading, setLoading] = useState(false);
  const { gameId } = useParams();

  useEffect(() => {
    GameData();
  }, []); //eslint-disable-line
  const GameData = async () => {
    setLoading(true);
    const response = await fetch(`/api/game/${encodeURIComponent(gameId)}`); //Requests only the game matching the ID
    const data = await response.json();
    console.log(data[0]);
    setGameRendered(data);
    setLoading(false);
  };

  //Release Date
  const monthName = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const d = new Date(gameRendered[0]?.first_release_date * 1000);
  const day = d.getDate();
  const month = monthName[d.getMonth()];
  const year = d.getFullYear();
  const releaseDate = `${month} ${day}, ${year}`;

  //Release Date (How long ago)
  // const unixTime = new Date(Date.now() - (gameRendered[0]?.first_release_date))
  // const longAgo = unixTime
  // console.log(longAgo)

  //Format Screenshot
  const screenshotURL = gameRendered[0]?.artworks[0].url.replace(
    "thumb",
    "screenshot_big"
  );

  //Format Cover Image
  const coverURL = gameRendered[0]?.cover.url.replace("thumb", "cover_big");
  console.log(releaseDate);

  //Platforms
  let platforms_list = [];
  gameRendered[0]?.platforms.map((platform, idx) =>
    platforms_list.push(platform.name)
  );
  const platforms = platforms_list.join(", ");

  //Websites
  const websites_info = [
    {
      category: 1,
      description: "Official Website",
      icon: <TbWorldWww />,
      color: "#00425a",
    },
    {
      category: 2,
      description: "Wikia",
      icon: <SiFandom />,
      color: "#0AD7D6",
    },
    {
      category: 3,
      description: "Wikipedia",
      icon: <SiWikipedia />,
      color: "#636466",
    },
    {
      category: 4,
      description: "Facebook",
      icon: <SiFacebook />,
      color: "#3F5A94",
    },
    {
      category: 5,
      description: "Twitter",
      icon: <SiTwitter />,
      color: "#59A9EA",
    },
    {
      category: 6,
      description: "Twitch",
      icon: <SiTwitch />,
      color: "#9146FF",
    },
    {
      category: 8,
      description: "Instagram",
      icon: <SiInstagram />,
      color: "#E3405F",
    },
    {
      category: 9,
      description: "Youtube",
      icon: <SiYoutube />,
      color: "#FE0200",
    },
    {
      category: 10,
      description: "iPhone",
      icon: <SiApple />,
      color: "#9BB5CE",
    },
    {
      category: 11,
      description: "iPad",
      icon: <SiApple />,
      color: "#9BB5CE",
    },
    {
      category: 12,
      description: "Android",
      icon: <SiAndroid />,
      color: "#76BC55",
    },
    {
      category: 13,
      description: "Steam",
      icon: <SiSteam />,
      color: "#000000",
    },
    {
      category: 14,
      description: "Reddit",
      icon: <SiReddit />,
      color: "#FE4B22",
    },
    {
      category: 15,
      description: "Itch",
      icon: <GiGamepad />,
      color: "#FA5C5C",
    },
    {
      category: 16,
      description: "Epic Games",
      icon: <SiEpicgames />,
      color: "#2F2D2E",
    },
    {
      category: 17,
      description: "GOG",
      icon: <MdGames />,
      color: "#49138E",
    },
    {
      category: 18,
      description: "Discord",
      icon: <SiDiscord />,
      color: "#7288D4",
    },
  ];
  const websites_in_game = [];
  for (let i = 0; i < gameRendered[0]?.websites?.length; i++) {
    websites_in_game.push(gameRendered[0]?.websites[i]?.category);
  }

  return (
    <div>
      {loading ? (
        <div className="loader-container">
          <img className="logo-anim" src="images/GTG_LOGO.png" alt="logo" />
          <div className="spinner"></div>
          <div></div>
        </div>
      ) : (
        <div className="main-wrapper">
          <div className="Left-app">
            <Sidebar />
          </div>
          <div className="Right-app">
            <div className="d-flex flex-column align-items-center">
              <div className="header w-100">
                <img
                  width="100%"
                  height="100%"
                  style={{ objectFit: "cover" }}
                  src={screenshotURL}
                  alt={gameRendered[0]?.artworks[0].image_id}
                />
              </div>
              <div className="info d-flex flex-column align-items-center ">
                <div className="d-inline-flex align-items-end">
                  <img
                    className="cover"
                    src={coverURL}
                    alt={gameRendered[0]?.cover.image_id}
                  />
                  <div className="title ms-4">
                    <h1 className="fw-bold">{gameRendered[0]?.name}</h1>
                    <h2>{releaseDate}</h2>
                  </div>
                </div>
                <div className="about w-100 mt-4">
                  <p>
                    <span className="fw-bold text-uppercase">Genre: </span>
                    {gameRendered[0]?.genres[0].name}
                  </p>
                  <p>
                    <span className="fw-bold text-uppercase">Platforms: </span>
                    {platforms}
                  </p>
                  <p className="summary">{gameRendered[0]?.summary}</p>
                  <div className="d-flex justify-content-center">
                    {websites_info.map((website, idx) => {
                      for (let i = 0; i < websites_in_game.length; i++) {
                        if (websites_in_game[i] === website.category) {
                          return (
                            <div className="d-inline-flex justify-content-center align-items-center mx-2">
                              <a
                                href={gameRendered[0]?.websites[i].url}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <button
                                  className="d-flex align-items-center"
                                  style={{
                                    backgroundColor: `${website.color}`,
                                    color: "white",
                                    border: "none",
                                  }}
                                >
                                  {website.icon}
                                  <div className="mx-1"></div>
                                  {website.description}
                                </button>
                              </a>
                            </div>
                          );
                        }
                      }
                      return "";
                    })}
                  </div>
                </div>
              </div>
              <div className="screenshots mt-5">
                <h2>Screenshots</h2>
                <Row>
                  {gameRendered[0]?.screenshots?.map((screenshot, idx) => {
                    const screenshotURL = screenshot.url.replace(
                      "thumb",
                      "screenshot_big"
                    );
                    return (
                      <Col className="col-4 d-flex align-items-center justify-content-center my-3">
                        <img
                          className="screenshot_image"
                          src={screenshotURL}
                          alt={screenshot.image_id}
                        />
                      </Col>
                    );
                  })}
                </Row>
              </div>
              {/* MAYBE */}
              {/* <div className='technical_info'>

            </div> */}
              <div className="related"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GamePage;
