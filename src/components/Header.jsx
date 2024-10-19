import logo from "../images/Ekran görüntüsü 2024-10-17 171647.png";
import "../css/Header.css";
import { CiShoppingBasket } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { useDispatch, useSelector } from "react-redux";
import { setDrawer } from "../redux/slices/basketSlice";

function Header() {
  //buttona tıklayarak tema değiştirme.
  const [theme, setTheme] = useState(false);
  const navigate = useNavigate();
  const { products } = useSelector((store) => store.basket);
  const dispatch = useDispatch();
  const changeTheme = () => {
    const root = document.getElementById("root");
    setTheme(!theme);
    if (theme) {
      root.style.backgroundColor = "black";
      root.style.color = "#fff";
    } else {
      root.style.backgroundColor = "#fff";
      root.style.color = "black";
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div className="flex-row" onClick={() => navigate("/")}>
        <img className="logo" src={logo} alt="" />
        <p className="logo-text">HepsiŞurada</p>
      </div>
      <div className="flex-row">
        <input
          className="search-input"
          type="text"
          placeholder="Bir şeyler ara."
        />
        <div>
          {theme ? (
            <FaMoon className="icon" onClick={changeTheme} />
          ) : (
            <CiLight className="icon" onClick={changeTheme} />
          )}
          <Badge
            onClick={() => dispatch(setDrawer())}
            badgeContent={products.length}
            color="error"
          >
            <CiShoppingBasket style={{ marginRight: "6px" }} className="icon" />
          </Badge>
        </div>
      </div>
    </div>
  );
}

export default Header;
