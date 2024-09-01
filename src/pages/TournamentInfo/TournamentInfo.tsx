import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface TournamentInfo {
  id: string;
  fullName: string;
  status: string;
  nbPlayers: number;
  podium: Array<{
    name: string;
    rank: number;
    rating: number;
    score: number;
  }>;
}

interface TournamentInfoProps {
  id?: string;
}

const TournamentInfo: React.FC<TournamentInfoProps> = () => {
  const [info, setInfo] = useState<TournamentInfo | null>(null);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchTournamentInfo = async () => {
      const response = await fetch(`http://localhost:3000/tournament/${id}`);
      const data = await response.json();
      setInfo({
        id: data.id,
        fullName: data.fullName,
        status: data.isFinished ? "Finalizado" : "En curso",
        nbPlayers: data.nbPlayers,
        podium: data.podium.map((player: any) => ({
          name: player.name,
          rank: player.rank,
          rating: player.rating,
          score: player.score,
        })),
      });
    };

    fetchTournamentInfo();
  }, [id]);

  return (
    <div>
      {info ? (
        <div>
          <h2>{info.fullName}</h2>
          <p>Estado: {info.status}</p>
          <p>Jugadores: {info.nbPlayers}</p>
          <h3>Podio</h3>
          {info.podium.map((player) => (
            <div key={player.rank}>
              <p>Nombre: {player.name}</p>
              <p>Rango: {player.rank}</p>
              <p>Rating: {player.rating}</p>
              <p>Puntuación: {player.score}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Cargando información del torneo...</p>
      )}
    </div>
  );
};

export default TournamentInfo;
