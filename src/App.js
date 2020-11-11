import { Redirect, Route, Switch } from 'react-router-dom';
import Album from './pages/Album';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/album/:id' component={Album} />
        <Redirect to='/' />
      </Switch>
    </>
  );
}

export default App;
