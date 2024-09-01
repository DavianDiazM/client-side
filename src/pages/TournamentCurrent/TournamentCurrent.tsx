import React, { useEffect, useState } from "react";

interface Tournament {
  id: string;
  fullName: string;
  status: string;
}

const CurrentTournaments: React.FC = () => {
  const [tournaments, setTournaments] = useState<Tournament[]>([]);

  useEffect(() => {
    const fetchTournaments = async () => {
      try {
        const response = await fetch("http://localhost:3000/tournaments");
        const data = await response.json();
        const createdTournaments = data.created.map((tournament: any) => ({
          id: tournament.id,
          fullName: tournament.fullName,
          status: tournament.status === 10 ? "En curso" : "Finalizado",
        }));
        setTournaments(createdTournaments);
      } catch (error) {
        console.error("Error fetching tournaments:", error);
      }
    };

    fetchTournaments();
  }, []);

  return (
    <div>
      <h2>Torneos Actuales</h2>
      <ul>
        {tournaments.map((tournament) => (
          <li key={tournament.id}>
            {tournament.fullName} - {tournament.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CurrentTournaments;
