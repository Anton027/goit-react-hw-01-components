
import { Box } from 'components/Box';
import { FriendListItem } from "components/FriendListItem/FriendListItem";
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
    return (
        <Box as={"ul"}
            display='flex'
            flexDirection='column'
            alignItems='center'
            mb={40}
        >
            {friends.map((data) => (
                <FriendListItem
                    key={data.id} avatar={data.avatar}
                    name={data.name} isOnline={data.isOnline}
                />
            ))}
        </Box>
    )
};
FriendList.propTypes = {
    friends: PropTypes.array.isRequired
}
