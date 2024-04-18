import { useState } from "react";
import EditProfile from "./components/EditProfile";
import UserProfile from "./components/UserProfile ";

const App = () => {
  const [editMode, setEditMode] = useState(false);
  const [userData, setUserData] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  });

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  return (
    <div>
      {editMode ? (
        <EditProfile userData={userData} />
      ) : (
        <UserProfile userData={userData} />
      )}
      <button onClick={toggleEditMode}>
        {editMode ? 'View Mode' : 'Edit Mode'}
      </button>
    </div>
  );
};

export default App;
