import { Profile } from "./Profile/Profile";
import user from "../components/Profile/user.json";
import { Statistic } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";

export const App = () => {
  return (
    <>
      <Profile user={user} />
      <Statistic title={'Upload stats'} />
      <FriendList />
      <TransactionHistory />
    </>
  );
};
