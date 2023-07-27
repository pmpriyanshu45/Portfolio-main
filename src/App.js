import Header from "./MyComponent/Header"
import Home  from "./MyComponent/Home"
import { About } from "./MyComponent/About"
import { Portfolio } from "./MyComponent/Portfolio"
import { Contact } from "./MyComponent/Contact"
import { Route, Switch } from 'react-router-dom';
import {Error} from './MyComponent/Error';

function App() {
  return (
    <>
      <div className="bg-circles">
        <div className="circle-1"></div>
        <div className="circle-2"></div>
        <div className="circle-3"></div>
        <div className="circle-4"></div>
      </div>
      <div className="overlay"></div>
      <div className="main">
        <Header/>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route path='/about' component={About}></Route>
          <Route path='/portfolio' component={Portfolio}></Route>
          <Route path='/contact' component={Contact}></Route>
          <Route component={Error}></Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
