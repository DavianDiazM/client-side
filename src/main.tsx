import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserProfile from "./pages/UserProfile/UserProfile.tsx";
import "./index.css";
import UserPage from "./pages/UserPage/UserPage.tsx";
import UserRatingHistory from "./pages/UserRatingHistory/UserRatingHistory.tsx";
import GamePage from "./pages/GamePage/GamePage.tsx";
import UserGames from "./pages/GameByUser/GameByUser.tsx";
import TournamentPage from "./pages/TournamentPage/TournamentPage.tsx";
import TournamentInfo from "./pages/TournamentInfo/TournamentInfo.tsx";
import CurrentTournaments from "./pages/TournamentCurrent/TournamentCurrent.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/userpage" element={<UserPage />} />
        <Route path="/userprofile/:username" element={<UserProfile />} />
        <Route
          path="/userratinghistory/:username"
          element={<UserRatingHistory />}
        />
        <Route path="/gamepage" element={<GamePage />} />
        <Route path="/gameuser/:username" element={<UserGames />} />
        <Route path="/exportgame/:gameId" element={<UserGames />} />
        <Route path="/tournamentpage" element={<TournamentPage />} />{" "}
        <Route path="/tournaments" element={<CurrentTournaments />} />
        <Route path="/tournamentID/:id" element={<TournamentInfo />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
