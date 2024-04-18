import { useState } from "react";

const EditProfile = ({ userData }) => {
  const [name, setName] = useState(userData.name);
  const [email, setEmail] = useState(userData.email);
  const [bio, setBio] = useState(userData.bio);

  return (
    <div>
      <h2>Edit Profile</h2>
      <label>Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label>Bio:</label>
      <textarea value={bio} onChange={(e) => setBio(e.target.value)} />
    </div>
  );
};
export default EditProfile;
