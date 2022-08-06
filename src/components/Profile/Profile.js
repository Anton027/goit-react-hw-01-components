import { InfoProfile } from "components/InfoProfile/InfoProfile";
import { UserInfo } from "components/UserInfo/UserInfo";
import PropTypes from 'prop-types';


export const Profile = ({ user:
  { username, tag, location, avatar, stats }
}) => {
  return (
    <div >
      <div>
        <UserInfo imgUrl={avatar} label={username} text={tag} info={location} />
      </div>
      <ul>
        <InfoProfile label={`Followers`} quantity={stats.followers} />
        <InfoProfile label={`Views`} quantity={stats.views} />
        <InfoProfile label={`Likes`} quantity={stats.likes}/>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes:PropTypes.number.isRequired
    }).isRequired
  }).isRequired
};