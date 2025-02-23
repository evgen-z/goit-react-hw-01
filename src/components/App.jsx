
import './App.css';
import Profile from './module-profile/Profile';
import userData from '../userData.json';
import Friendlist from './module-friendlist/FriendList';
import friends from '../friends.json';
import TransactionHistory from './module-transactions/TransactionHistory'; 
import transactions from '../transactions.json';

function App() {
  

  return (
    <div>
      <Profile 
      name={userData.username}
      tag={userData.tag}
      location={userData.location}
      image={userData.avatar}
      stats={userData.stats}
      />
      <Friendlist friends={friends} />
      <TransactionHistory items={transactions}/>
    </div>
  )
};

export default App;
