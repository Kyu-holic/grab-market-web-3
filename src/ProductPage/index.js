import "./index.css";
import { useParams } from "react-router-dom";

function ProductPage() {
  const { id } = useParams();

  return <div>ProductPage{id}</div>;
}

export default ProductPage;
