import "./index.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(function () {
    axios
      .get(
        `https://845da0c8-ed3c-4656-8a87-12d65bded7fb.mock.pstmn.io/products/${id}`
      )
      .then(function (result) {
        setProduct(result.data.product);
      })
      .catch(function (error) {
        console.error("에러 발생 : ", error);
      });
  }, []);

  if (product === null) {
    return <h1>상품 정보를 불러오고 있습니다..</h1>;
  }

  return (
    <div>
      <div id="image-box">
        <img src={"/" + product.imageUrl} />
      </div>
      <div id="profile-box">
        <img src="/images/icons/avatar.png" />
        <span>{product.seller}</span>
      </div>
      <div id="contents-box">
        <div id="name">{product.name}</div>
        <div id="price">{product.price}원</div>
        <div id="createdAt">2022년 6월 28일</div>
        <div id="description">{product.description}</div>
      </div>
    </div>
  );
}

export default ProductPage;
