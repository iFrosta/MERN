import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {ExamplePage} from "./pages/ExamplePage";

export const useRoutes = auth => {
  if (auth) {}

  return (
    <Switch>
      <Route path="/example" exact>
        <ExamplePage/>
      </Route>
    </Switch>
  )
}
