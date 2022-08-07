import { InfoProfile } from "components/InfoProfile/InfoProfile";
import { UserInfo } from "components/UserInfo/UserInfo";
import { Box } from 'components/Box';
import PropTypes from 'prop-types';



export const Profile = (
  { username, tag, location, avatar, stats }
) => {
  return (
    <Box mb={40}
      display='flex'
        flexDirection='column'
        alignItems='center'
    >
      <Box mb={10}
        display='flex'
        flexDirection='column'
        alignItems='center'
      >
        <UserInfo imgUrl={avatar} label={username} text={tag} info={location} />
      </Box>
      <Box
        as={"ul"}
        display='flex'
        justifyContent='center'
        listStyle='none'
      >
        <InfoProfile label={`Followers`} quantity={stats.followers} />
        <InfoProfile label={`Views`} quantity={stats.views} />
        <InfoProfile label={`Likes`} quantity={stats.likes}/>
      </Box>
    </Box>
  );
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes:PropTypes.number.isRequired
    }).isRequired
  
};