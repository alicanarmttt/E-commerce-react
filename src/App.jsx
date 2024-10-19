import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import Loading from "./components/Loading";
import RouterConfig from "./config/RouterConfig";
import PageContainer from "./container/PageContainer";
import Drawer from "@mui/material/Drawer";
import { calculateBasket, setDrawer } from "./redux/slices/basketSlice";
import { useEffect } from "react";
function App() {
  const { products, drawer, totalAmount } = useSelector(
    (store) => store.basket
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateBasket());
  }, []);

  return (
    <div>
      <PageContainer>
        <Header></Header>
        <RouterConfig></RouterConfig>
        <Loading></Loading>
        <Drawer
          className="drawer"
          sx={{ padding: "20px" }}
          anchor={"right"}
          open={drawer}
          onClose={() => dispatch(setDrawer())}
        >
          {products &&
            products.map((product) => {
              return (
                <div
                  key={product.id}
                  className="flex-row"
                  style={{ padding: "20px" }}
                >
                  <img
                    style={{ marginRight: "5px" }}
                    src={product.image}
                    width={50}
                    height={50}
                  />
                  <p style={{ width: "320px", marginRight: "5px" }}>
                    {product.title}({product.count})
                  </p>
                  <p
                    style={{
                      fontWeight: "bold",
                      marginRight: "10px",
                      width: "60px",
                    }}
                  >
                    {product.price}TL
                  </p>
                  <button
                    style={{
                      padding: "5px",
                      borderRadius: "5px",
                      border: "none",
                      backgroundColor: "red",
                      color: "white",
                      width: "50px",
                    }}
                  >
                    Sil
                  </button>
                </div>
              );
            })}
          <div className="tutar">
            <p>Toplam tutar: {totalAmount}</p>
          </div>
        </Drawer>
      </PageContainer>
    </div>
  );
}

export default App;
