import friends from "components/FriendList/friends.json";
import { FriendListItem } from "components/FriendListItem/FriendListItem";
import PropTypes from 'prop-types';

export const FriendList = () => {
    return (
        <ul>
            {friends.map(({ avatar, name, isOnline, id }) => (
                <FriendListItem
                    key={id} avatar={avatar}
                    name={name} isOnline={isOnline}
                />
            ))}
        </ul>
    )
};

FriendList.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired
}