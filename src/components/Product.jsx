import PropTypes from "prop-types";
import "../css/Product.css";
import { useNavigate } from "react-router-dom";

function Product({ product }) {
  const { id, price, image, title, description } = product;
  const navigate = useNavigate();
  return (
    <div className="card">
      <img className="image" src={image} alt="" />
      <div>
        <p className="p">{title}</p>
        <h3 style={{ textAlign: "center" }}>{price}₺</h3>
      </div>
      <div className="flex-row">
        <button
          onClick={() => navigate("/product-details/" + id)}
          className="btn-detay"
        >
          Detayına git
        </button>
      </div>
    </div>
  );
}

Product.propTypes = {
  product: PropTypes.object.isRequired,
};
export default Product;
