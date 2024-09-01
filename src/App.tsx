import background from "./assets/background.jpg";
import ButtonAccess from "./components/ButtonAccess.tsx";
import { useNavigate } from "react-router-dom";

interface AppProps {
  children?: React.ReactNode;
}

const App: React.FC<AppProps> = () => {
  const navigate = useNavigate();

  const handleUserClick = () => {
    navigate("/userpage");
  };

  const handleGameClick = () => {
    navigate("/gamepage");
  };

  const handleTournamentClick = () => {
    navigate("/tournamentpage");
  };

  return (
    <>
      <div
        className="w-screen h-screen bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${background})` }}
      >
        <ButtonAccess handleClick={handleUserClick} text="User Endpoints" />
        <ButtonAccess handleClick={handleGameClick} text="Game Endpoints" />
        <ButtonAccess
          handleClick={handleTournamentClick}
          text="Tournament Endpoints"
        />
      </div>
    </>
  );
};

export default App;
