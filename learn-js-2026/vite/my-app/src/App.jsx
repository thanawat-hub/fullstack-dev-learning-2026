import './App.css'
import WelcomeMessage from './components/WelcomeMessage'
import Users from './components/Users'
import { users } from './data/users.js'
import Counter from './components/Counter'
import Timer from './components/time_app/Timer'
import Product from './components/Products'
import ProductFecth from './components/ProductFetch.jsx'

function App() {
  const appStyle = {
    color: 'yellow'
  };
 
  return (
    <div style={appStyle} className="mt-10">
      {/* <WelcomeMessage /> */}
      <Users/>
      {/* <Counter/> */}
      {/* <Timer/> */}
      {/* <Product /> ไม่ใช้แล้ว */}
      {/* <ProductFecth /> */}
    </div>
  );
}
export default App