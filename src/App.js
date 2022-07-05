import "antd/dist/antd.css";
import "./App.css";
import MainPageComponent from "./MainPage/index";
import ProductPage from "./ProductPage";
import UploadPage from "./UploadPage";
import { Route, useHistory, Link } from "react-router-dom";
import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

function App() {
  const history = useHistory();

  function toUpload() {
    history.push("/upload");
  }

  return (
    <div>
      <div id="header">
        <div id="header-area">
          <Link to={"/"}>
            <img src="/images/icons/logo.png" alt="" />
          </Link>
          <Button size="large" icon={<DownloadOutlined />} onClick={toUpload}>
            상품 업로드
          </Button>
        </div>
      </div>
      <div id="body">
        <Route exact={true} path="/">
          <MainPageComponent />
        </Route>
        <Route exact={true} path="/products/:id">
          <ProductPage />
        </Route>
        <Route exact={true} path="/upload">
          <UploadPage />
        </Route>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default App;
