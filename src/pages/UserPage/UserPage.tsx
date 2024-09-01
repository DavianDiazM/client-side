import React, { useState } from "react";
import background from "../../assets/background.jpg";
import ButtonAccess from "../../components/ButtonAccess";
import { useNavigate } from "react-router-dom";

interface UserPageProps {
  children?: React.ReactNode;
}

const UserPage: React.FC<UserPageProps> = () => {
  const navigate = useNavigate();
  const [usernameProfile, setUsernameProfile] = useState("");
  const [usernameRatingHistory, setUsernameRatingHistory] = useState("");

  const handleUserProfileClick = () => {
    navigate(`/userprofile/${usernameProfile}`);
  };

  const handleUserRathingHistoryClick = () => {
    navigate(`/userratinghistory/${usernameRatingHistory}`);
  };

  return (
    <>
      <div
        className="w-screen h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="flex flex-col items-center mx-4">
          <ButtonAccess
            handleClick={handleUserProfileClick}
            text="Get User Profile By UserName"
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
            text="Get User Rating History By UserName"
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

export default UserPage;
