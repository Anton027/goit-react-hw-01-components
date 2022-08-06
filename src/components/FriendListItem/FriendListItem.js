import PropTypes from 'prop-types';
export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <li>
            <span >{isOnline}</span>
            <img src={avatar} alt="User avatar" width="48" />
            <p >{name}</p>
        </li>
    )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
}