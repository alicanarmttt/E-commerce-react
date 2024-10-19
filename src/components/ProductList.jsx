import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../redux/slices/productSlice";
import Product from "./Product";
function ProductList() {
  const dispatch = useDispatch();
  //getAllProducts çalıştıktan sonra  useSelector ile slice içindeki store--->(productSlice)---> state'e erişebiliyoruz.
  // ve o slice'ın initialstate'i bize döner.
  const { products } = useSelector((store) => store.product);
  console.log(products);
  //bu komponent ilk yüklendiğinde bütün ürünleri bana getir.
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  return (
    <div className="flex-row" style={{ flexWrap: "wrap", marginTop: "25px" }}>
      {products &&
        products.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
    </div>
  );
}

export default ProductList;
