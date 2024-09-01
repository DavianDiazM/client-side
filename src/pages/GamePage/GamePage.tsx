import React, { useState } from "react";
import background from "../../assets/background.jpg";
import ButtonAccess from "../../components/ButtonAccess";
import { useNavigate } from "react-router-dom";

interface GamePageProps {
  children?: React.ReactNode;
}

const GamePage: React.FC<GamePageProps> = () => {
  const navigate = useNavigate();
  const [usernameProfile, setUsernameProfile] = useState("");
  const [usernameRatingHistory, setUsernameRatingHistory] = useState("");

  const handleGameByUserNameClick = () => {
    navigate(`/gameuser/${usernameProfile}`);
  };

  const handleUserRathingHistoryClick = () => {
    navigate(`/gameuserid/${usernameRatingHistory}`);
  };

  return (
    <>
      <div
        className="w-screen h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="flex flex-col items-center mx-4">
          <ButtonAccess
            handleClick={handleGameByUserNameClick}
            text="Get Game By UserName"
          />
          <input
            type="text"
            value={usernameProfile}
            onChange={(e) => setUsernameProfile(e.target.value)}
            placeholder="Enter Username"
            className="mt-2 p-2 rounded border border-gray-300"
          />
        </div>
        <div className="flex flex-col items-center mx-4">
          <ButtonAccess
            handleClick={handleUserRathingHistoryClick}
            text="----
            "
          />
          <input
            type="text"
            onChange={(e) => setUsernameRatingHistory(e.target.value)}
            placeholder="Enter Username"
            className="mt-2 p-2 rounded border border-gray-300"
          />
        </div>
      </div>
    </>
  );
};

export default GamePage;
