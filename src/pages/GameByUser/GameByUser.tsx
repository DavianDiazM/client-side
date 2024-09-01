import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Game {
  id: string;
  moves: string;
  opening: string;
  players: {
    white: {
      user: {
        name: string;
      };
      rating: number;
      ratingDiff: number;
    };
    black: {
      user: {
        name: string;
      };
      rating: number;
      ratingDiff: number;
    };
  };
}

interface UserGamesProps {
  username?: string;
}

const UserGames: React.FC<UserGamesProps> = () => {
  const [games, setGames] = useState<Game[]>([]);
  const { username } = useParams<{ username: string }>();

  useEffect(() => {
    const fetchUserGames = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/games-by-user/${username}`
        );
        const data = await response.json();
        if (Array.isArray(data)) {
          setGames(data);
        } else {
          console.error("Expected an array of games");
        }
      } catch (error) {
        console.error("Error fetching games:", error);
      }
    };

    fetchUserGames();
  }, [username]);

  return (
    <div>
      <h2>Juegos de {username}</h2>
      {games.length > 0 ? (
        games.map((game) => (
          <div key={game.id}>
            <h3>Juego {game.id}</h3>
            <p>Apertura: {game.opening}</p>
            <p>Movimientos: {game.moves}</p>
            <p>
              Blanco: {game.players.white.user.name} (Rating:{" "}
              {game.players.white.rating}, Diff: {game.players.white.ratingDiff}
              )
            </p>
            <p>
              Negro: {game.players.black.user.name} (Rating:{" "}
              {game.players.black.rating}, Diff: {game.players.black.ratingDiff}
              )
            </p>
          </div>
        ))
      ) : (
        <p>No se encontraron juegos para este usuario.</p>
      )}
    </div>
  );
};

export default UserGames;
