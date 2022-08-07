import PropTypes from 'prop-types';
import { FriendListWrap } from './FriendListItem.styled';
import { CheckSpanWrap } from './FriendListItem.styled';
export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <FriendListWrap>
            <CheckSpanWrap>{isOnline}</CheckSpanWrap>
            <img src={avatar} alt="User avatar" width="48" />
            <p >{name}</p>
        </FriendListWrap>
    )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
}