import './App.css'
import WelcomeMessage from './components/WelcomeMessage'
import Users from './components/Users'
import { users } from './data/users.js'
import Counter from './components/Counter'
function App() {
  const appStyle = {
    color: 'yellow'
  };
 
  return (
    <div style={appStyle} className="mt-10">
      <WelcomeMessage />
      <Users/>
      <Counter/>
    </div>
  );
}
export default App