import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const StoreOldData = () => {
  const dispatch = useDispatch();
  const { likedProducts } = useSelector((state) => state.addToWishListReducer);
  const { compareProducts } = useSelector((state) => state.addToCompareReducer);
  const { currentUser } = useSelector((state) => state.userReducers);
  const { adminUser } = useSelector((state) => state.adminReducer);

  useEffect(() => {
    dispatch({ type: "defineLikedProducts", payload: JSON.parse(localStorage.getItem("likedProducts")) || [] });
    dispatch({ type: "defineCompareProducts", payload: JSON.parse(localStorage.getItem("compareProducts")) || [] });
    dispatch({ type: "currentUser", payload: JSON.parse(localStorage.getItem("currentUser")) || [] });
    dispatch({ type: "adminUser", payload: JSON.parse(localStorage.getItem("adminUser")) || [] });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("beforeunload", function () {
        localStorage.setItem("likedProducts", JSON.stringify(likedProducts));
        localStorage.setItem("compareProducts", JSON.stringify(compareProducts));
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
      });
    }
  }, [likedProducts, compareProducts, currentUser, adminUser]);
};

export default StoreOldData;
