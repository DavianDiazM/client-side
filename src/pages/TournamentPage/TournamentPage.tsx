import React, { useState } from "react";
import background from "../../assets/background.jpg";
import ButtonAccess from "../../components/ButtonAccess";
import { useNavigate } from "react-router-dom";

interface UserPageProps {
  children?: React.ReactNode;
}

const TournamentPage: React.FC<UserPageProps> = () => {
  const navigate = useNavigate();
  const [id, setID] = useState("");

  const handleTournamentByIdClick = () => {
    navigate(`/tournamentID/${id}`);
  };

  const handleUserRathingHistoryClick = () => {
    navigate(`/tournaments`);
  };

  return (
    <>
      <div
        className="w-screen h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="flex flex-col items-center mx-4">
          <ButtonAccess
            handleClick={handleTournamentByIdClick}
            text="Get Tournament By ID"
          />
          <input
            type="text"
            value={id}
            onChange={(e) => setID(e.target.value)}
            placeholder="Enter Username"
            className="mt-2 p-2 rounded border border-gray-300"
          />
        </div>
        <div className="flex flex-col items-center mx-4">
          <ButtonAccess
            handleClick={handleUserRathingHistoryClick}
            text="Get Current Tournaments "
          />
        </div>
      </div>
    </>
  );
};

export default TournamentPage;
