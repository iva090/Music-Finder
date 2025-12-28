import './App.css';
import { Route, Switch } from 'react-router-dom';
import Mainpage from './pages/Mainpage';
import Favorites from './pages/favorites';

function App() {
  return (
    <div>
      <Switch>
        <Route path='/' exact>
          <Mainpage />
        </Route>
        <Route path='/favorites'>
          <Favorites />
        </Route>
      </Switch>
    </div>
  )
}

export default App
