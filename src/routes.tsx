import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Classes from './pages/Classes';
import NotFound from './pages/NotFound';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/courses" exact>
          <Courses />
        </Route>
        <Route path="/classes" exact>
          <Classes />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
