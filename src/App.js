import "antd/dist/antd.css";
import "./App.css";
import MainPageComponent from "./MainPage/index";
import ProductPageComponent from "./ProductPage";
import UploadPageComponent from "./UploadPage";
import { Link, Switch, Route } from "react-router-dom";
import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

function App() {
  return (
    <div>
      <div id="header">
        <div id="header-area">
          <Link to={"/"}>
            <img src="/images/icons/logo.png" alt="" />
          </Link>
          <Button
            size="large"
            onClick={function(){}}
            icon={<DownloadOutlined />}
          >상품 업로드</Button>
        </div>
      </div>
      <div id="body">
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
      <div id="footer"></div>
    </div>
  );
}

export default App;
