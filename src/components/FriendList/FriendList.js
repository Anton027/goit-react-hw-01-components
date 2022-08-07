
import { Box } from 'components/Box';
import { FriendListItem } from "components/FriendListItem/FriendListItem";


export const FriendList = ({friends}) => {
    return (
        <Box as={"ul"}>
            {friends.map((data) => (
                <FriendListItem
                    key={data.id} avatar={data.avatar}
                    name={data.name} isOnline={data.isOnline}
                />
            ))}
        </Box>
    )
};

