import friends from "components/FriendList/friends.json";

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <li>
            <span >{isOnline}</span>
            <img src={avatar} alt="User avatar" width="48" />
            <p >{name}</p>
        </li>
    )
}

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