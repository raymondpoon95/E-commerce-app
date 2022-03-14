import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { GlobalStyle } from "./global.styles";

import Header from "./components/header/Header";
import Homepage from "./pages/homepage/Homepage";
import ShopPage from "./pages/shop/Shop";
import SignInAndSignUp from "./pages/sign-in-sign-up/Sign-in-sign-up";
import CheckoutPage from "./pages/checkout/checkout";

import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSession } from "./redux/user/user.actions";

const App = () => {
  const currentUser = useSelector(selectCurrentUser); // useSelector is a hook that is used to replace mapStateToProps, this grabs the state
  const dispatch = useDispatch(); // useDispatch is a hook that is used to replace mapDispatchToProps

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop/*" element={<ShopPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route
          path="/signin"
          element={currentUser ? <Homepage /> : <SignInAndSignUp />}
        />
      </Routes>
    </div>
  );
};

export default App;
