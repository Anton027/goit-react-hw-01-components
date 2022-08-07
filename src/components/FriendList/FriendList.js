import friends from "components/FriendList/friends.json";
import { Box } from 'components/Box';
import { FriendListItem } from "components/FriendListItem/FriendListItem";


export const FriendList = () => {
    return (
        <Box as={"ul"}>
            {friends.map(({ avatar, name, isOnline, id }) => (
                <FriendListItem
                    key={id} avatar={avatar}
                    name={name} isOnline={isOnline}
                />
            ))}
        </Box>
    )
};

