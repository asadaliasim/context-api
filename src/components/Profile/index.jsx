import { useContext } from 'react';
import userContext from '../../context/UserContext';

function Profile() {
  const { user } = useContext(userContext);

  return (
    <>
      {!user && <div>Please Login </div>}
      {user && <div> Welcome {user} </div>}
    </>
  );
}

export default Profile;
