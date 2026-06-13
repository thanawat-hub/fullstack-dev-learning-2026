import './App.css'
import WelcomeMessage from './components/WelcomeMessage'
import Users from './components/Users'
import { users } from './data/users.js'
import Counter from './components/Counter'

import Timer from './components/time_app/Timer'

function App() {
  const appStyle = {
    color: 'yellow'
  };
 
  return (
    <div style={appStyle} className="mt-10">
      <WelcomeMessage />
      <Users/>
      <Counter/>
      {/* <Timer/> */}
    </div>
  );
}
export default App