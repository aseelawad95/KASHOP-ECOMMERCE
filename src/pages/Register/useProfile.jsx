import { useEffect, useState } from "react";

function UserProfile() {
  const [userId, setUserId] = useState(1);
  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log("Fetching user:", userId);
         
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
      
  }, [userId]);

  return (
    <div>
      <h2>{user?.name ?? "Loading..."}</h2>
      <p>User ID: {userId}</p>

      <button onClick={() => setUserId((prev) => prev + 1)}>
        Next User
      </button>
    </div>
  );
}

export default UserProfile;