import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import Classes from './pages/Classes';
import NotFound from './pages/NotFound';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/courses" exact component={Courses} />
        <Route path="/courses/:id" exact component={CourseDetail} />
        <Route path="/classes" exact component={Classes} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
