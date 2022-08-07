import { InfoProfile } from "components/InfoProfile/InfoProfile";
import { UserInfo } from "components/UserInfo/UserInfo";
import { Box } from 'components/Box';
import PropTypes from 'prop-types';


export const Profile = ({ user:
  { username, tag, location, avatar, stats }
}) => {
  return (
    <Box >
      <Box>
        <UserInfo imgUrl={avatar} label={username} text={tag} info={location} />
      </Box>
      <Box as={"ul"}>
        <InfoProfile label={`Followers`} quantity={stats.followers} />
        <InfoProfile label={`Views`} quantity={stats.views} />
        <InfoProfile label={`Likes`} quantity={stats.likes}/>
      </Box>
    </Box>
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