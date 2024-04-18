const UserProfile = ({ userData }) => {
  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
      <p>Bio: {userData.bio}</p>
    </div>
  );
};
export default UserProfile;