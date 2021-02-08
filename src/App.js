import CoverPage from "./Components/pages/CoverPage";
import { Route, Switch } from "react-router-dom";
import CVPage from "./Components/pages/CVPage";


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={CoverPage} />
        <Route path="/cv-details" component={CVPage} />
      </Switch>
    </div>
  );
}

export default App;
