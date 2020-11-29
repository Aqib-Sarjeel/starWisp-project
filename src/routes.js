import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import SideBar from "./components/sideBar";

import MyPage from "./Page/MyPage";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MyPage} />
        <Route path="/sideBar" component={SideBar} />
      </Switch>
    </BrowserRouter>
  );
}
