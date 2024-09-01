import React, { useEffect, useState } from "react";

interface Game {
  id: string;
  moves: string;
  opening: string;
  players: {
    white: string;
    black: string;
  };
}

const GameExport: React.FC<{ gameId: string }> = ({ gameId }) => {
  const [game, setGame] = useState<Game | null>(null);

  useEffect(() => {
    const fetchGame = async () => {
      const response = await fetch(`http://localhost:3000/game/${gameId}`);
      const data = await response.json();
      setGame(data);
    };

    fetchGame();
  }, [gameId]);

  return (
    <div>
      {game ? (
        <div>
          <h2>Juego {game.id}</h2>
          <p>Apertura: {game.opening}</p>
          <p>Movimientos: {game.moves}</p>
          <p>Blanco: {game.players.white}</p>
          <p>Negro: {game.players.black}</p>
        </div>
      ) : (
        <p>Cargando juego...</p>
      )}
    </div>
  );
};

export default GameExport;
