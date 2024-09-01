import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface UserProfile {
  id: string;
  username: string;
  perfs: Record<string, null>;
  title: string;
  url: string;
}

interface UserProfileProps {
  username?: string;
}

const UserProfile: React.FC<UserProfileProps> = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const { username } = useParams<{ username: string }>();
  useEffect(() => {
    console.log(username);

    const fetchUserProfile = async () => {
      const response = await fetch(
        `http://localhost:3000/user-profile/${username}`
      );
      const data = await response.json();
      setProfile(data);
    };

    fetchUserProfile();
  }, [username]);

  return (
    <div>
      {profile ? (
        <div>
          <h2>
            {profile.username} ({profile.title})
          </h2>
          <p>
            Perfil: <a href={profile.url}>{profile.url}</a>
          </p>
          <pre>{JSON.stringify(profile.perfs, null, 2)}</pre>
        </div>
      ) : (
        <p>Cargando perfil...</p>
      )}
    </div>
  );
};

export default UserProfile;
