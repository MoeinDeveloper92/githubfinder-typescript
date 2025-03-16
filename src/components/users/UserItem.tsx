import { GithubUser } from '../../types';
import { Link } from 'react-router-dom';
type Props = {
  user: GithubUser;
};
const UserItem = ({ user }: Props) => {
  const { login, avatar_url } = user;

  return (
    <div className="card shadow-md compact side bg-base-100">
      <div className="flex flex-row items-center space-x-4 card-body">
        <div>
          <div className="avatar">
            <div className="rounded-full shadow w-14 h-14">
              <img src={avatar_url} alt="Profile Picture" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="card-title">{login}</h2>
          <Link
            to={`/users/${login}`}
            className="text-base-content text-opacity-40"
          >
            Visit Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
