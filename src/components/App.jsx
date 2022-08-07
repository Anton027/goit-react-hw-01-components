import { Profile } from "./Profile/Profile";
import user from "../components/Profile/user.json";
import data from 'components/Statistics/data.json';
import transactions from "components/TransactionHistory/transactions.json";
import friends from "components/FriendList/friends.json";
import { Statistic } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import { GlobalStyle } from './GlobalStyle';

export const App = () => {
  return (
    <>
      <Profile username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistic title="Upload stats"
        stats={data}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
      <GlobalStyle />
    </>
  );
};
