import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface RatingHistory {
  name: string;
  points: [number, number, number, number][];
}

interface UserRatingHistoryProps {
  username?: string;
}

const UserRatingHistory: React.FC<UserRatingHistoryProps> = () => {
  const [history, setHistory] = useState<RatingHistory[]>([]);
  const { username } = useParams<{ username: string }>();

  useEffect(() => {
    const fetchRatingHistory = async () => {
      const response = await fetch(
        `http://localhost:3000/user-rating-history/${username}`
      );
      const data = await response.json();
      setHistory(data);
    };

    fetchRatingHistory();
  }, [username]);

  return (
    <div>
      <h2>Historial de Calificaciones de {username}</h2>
      {history.map((entry, index) => (
        <div key={index}>
          <h3>{entry.name}</h3>
          <ul>
            {entry.points.map((point, idx) => (
              <li key={idx}>{`Fecha: ${point[0]}-${point[1] + 1}-${
                point[2]
              }, Calificación: ${point[3]}`}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default UserRatingHistory;
