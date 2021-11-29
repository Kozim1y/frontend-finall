import './App.scss';
import { Route, Switch } from 'react-router';


// Pages
import Home from './pages/Home/Home';
import Channel from './pages/Channel/Channel';
// // import Channel
import Video from './pages/Video/Video';
import Header from './Components/Header/Header';

// Components


function App() {
  return (
    <>
    <Header />
    {/* <Header /> */}
      <Switch>
        <Route path="/channel" component={Channel}></Route>
        <Route path="/video" component={Video}></Route>
        <Route path="/" component={Home} exact></Route>
      </Switch>
    </>
  );
}

export default App;