import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Chat from "./Chat";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="app">
      <div className="app_body">
        <BrowserRouter>
          <Sidebar />
          <Switch>
            <Route path="/rooms/:roomId">
              <Chat />
            </Route>
            <Route path="/"></Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
