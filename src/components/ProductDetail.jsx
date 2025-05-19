import { useParams } from "react-router-dom";
import { AllProducts } from "../data/products";
export default function ProductDetail() {
  const { itemId } = useParams();
  const product = AllProducts.find(it=> it.id == itemId);
  return (
    <div>
      <h1>
        Producto detail: {product.title}
      </h1>
      <p>Code: {product.id}</p>
      <p>Price: {product.price}</p>
      <img src={product.image} alt={product.title} />
    </div>
  );
}
