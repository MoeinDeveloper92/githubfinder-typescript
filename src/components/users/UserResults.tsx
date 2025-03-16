import { use, useEffect } from 'react';
import Spinner from '../Spinner';
import UserItem from './UserItem';
import GithubContext from '../../context/github/GithubContext';

const UserResults = () => {
  const state = use(GithubContext);

  useEffect(() => {
    state?.fetchUser();
  }, []);

  if (state?.loading) {
    return <Spinner />;
  }
  return (
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 ">
      {state?.users.map((user) => (
        <UserItem key={user.email} user={user} />
      ))}
    </div>
  );
};

export default UserResults;
