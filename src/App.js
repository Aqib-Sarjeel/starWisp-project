import "./App.css";
import SideBar from "./components/sideBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MyPage from "./Page/MyPage";

function App() {
  return (
    <div>
      <Router>
        <SideBar />
        <MyPage />

        <Switch>
          <Route path="/" component={MyPage} />
          <Route path="/sideBar" component={SideBar} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
