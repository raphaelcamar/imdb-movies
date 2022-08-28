import { Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from "history";
import { Container } from '../../components/templates';
import { MovieDetails, Movies } from '../../pages';

const customHistory = createBrowserHistory();

export const Home = (): React.ReactElement => {
  return (
    <Router history={customHistory}>
      <Container>
          <Switch>
            <Route exact path="/">
              <Movies />
            </Route>
            <Route path="/movie/:id">
              <MovieDetails />
            </Route>
          </Switch>
      </Container>
    </Router>
  );
}
