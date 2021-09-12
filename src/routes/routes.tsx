import * as React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { HomePage } from 'pages/Home';
import { BMIPage } from 'pages/BMI';
import { ROUTES } from 'constants/routes';
import { useTransition, animated } from 'react-spring';
import { handlePageNavigationTransitions } from 'utils';

const Routes = () => {
  const location = useLocation();
  const transitions = useTransition(
    location,
    (location) => location.key,
    handlePageNavigationTransitions(location.pathname),
  );
  return (
    <div className={'app'}>
      {transitions.map(({ item, props: transition, key }) => {
        return (
          <animated.div key={key} style={transition} className="page">
            <Switch location={item}>
              <Route path={`${ROUTES.BMI}/:height/:weight`}>
                <BMIPage />
              </Route>
              <Route path={`${ROUTES.ROOT}`}>
                <HomePage />
              </Route>
            </Switch>
          </animated.div>
        );
      })}
    </div>
  );
};

export default Routes;
