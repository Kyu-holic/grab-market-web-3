import "./App.css";
import MainPageComponent from "./MainPage/index";
import ProductPageComponent from "./ProductPage";
import UploadPageComponent from "./UploadPage";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route exact={true} path={"/"}>
          <MainPageComponent />
        </Route>{" "}
        <Route exact={true} path={"/products/:id"}>
          <ProductPageComponent />
        </Route>
        <Route exact={true} path={"/upload"}>
          <UploadPageComponent />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
