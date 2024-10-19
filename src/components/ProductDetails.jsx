import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setSelectedproduct } from "../redux/slices/productSlice";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { addToBasket, calculateBasket } from "../redux/slices/basketSlice";

function ProductDetails() {
  //urlde deki id yakalamak için params.
  const { id } = useParams();
  //product slice içindeki products state e ulaşmak için useSelector.
  const { products, selectedProduct } = useSelector((store) => store.product);
  //product slice içindeki fonksiyona ulamşmak için dispatch kullanılır.
  const dispatch = useDispatch();
  const { price, image, title, description } = selectedProduct;
  //Adet arttırma ve azaltma işlemleri için
  const [count, setCount] = useState(0);
  const increament = () => {
    setCount(count + 1);
  };
  const decreament = () => {
    if (count - 1 < 0) return;
    setCount(count - 1);
  };
  //eklenecek ürün
  const addBasket = () => {
    const payload = {
      id: id,
      price: price,
      image: image,
      title: title,
      description: description,
      count: count,
    };
    dispatch(addToBasket(payload));
    dispatch(calculateBasket());
  };
  useEffect(() => {
    getProductById();
  }, []);

  const getProductById = () => {
    products &&
      products.map((product) => {
        if (product.id == id) {
          dispatch(setSelectedproduct(product));
        }
      });
  };
  return (
    <div
      style={{
        marginTop: "30px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <div style={{ marginRight: "40px" }}>
        <img src={image} width={300} height={500} alt="" />
      </div>
      <div>
        <h1 style={{ fontFamily: "arial" }}>{title}</h1>
        <p style={{ fontFamily: "arial", fontSize: "20px" }}>{description}</p>
        <h1
          style={{
            fontSize: "20px",
            fontFamily: "arial",
            fontWeight: "bold",
            color: "red",
          }}
        >
          {price}₺
        </h1>
        <div style={{ display: "flex", alignItems: "center" }}>
          <CiCirclePlus
            onClick={increament}
            style={{ fontSize: "40px", marginRight: "5px" }}
          ></CiCirclePlus>
          <span style={{ fontSize: "35px" }}>{count}</span>
          <CiCircleMinus
            onClick={decreament}
            style={{ fontSize: "40px", marginLeft: "5px" }}
          ></CiCircleMinus>
        </div>
        <div>
          <button
            style={{
              marginTop: "25px",
              border: "none",
              padding: "10px",
              backgroundColor: "orange",
              borderRadius: "5px",
              color: "#fff",
            }}
            onClick={addBasket}
          >
            Sepete ekle
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
