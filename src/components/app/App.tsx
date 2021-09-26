import Root from "../root/Root";
import UrlPage, { UrlPageProps } from "../urlPage/UrlPage";

import React, { ReactElement } from "react";
import { BrowserRouter, Route, RouteProps, Switch } from "react-router-dom";

const App: React.FC = (): ReactElement => {
   return (
      <BrowserRouter>
         <Switch>
            <Route exact path="/">
               <Root text={"Click Me"} />
            </Route>
            <Route
               path="/UrlPage"
               render={(props: RouteProps) => (
                  <UrlPage {...(props.location.state as UrlPageProps)} />
               )}
            />
         </Switch>
      </BrowserRouter>
   );
};

export default App;
