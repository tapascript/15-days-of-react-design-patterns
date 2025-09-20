// import UserProfile from "./messy-way/components/UserProfile";

import "./App.css";
import UserProfileContainer from "./with-pattern/components/profile/UserProfileContainer";
function App() {
  return (
    <div>
      <UserProfileContainer userId={1} />
    </div>
  );
}

export default App;
