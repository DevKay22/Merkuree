import { Route, Routes } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import Protected, { ProtectedRouteProps } from "./components/protected";
import Exchange from "./pages/exchange";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/resgister";
import { auth } from "./firebase_app";
import { selectAuth } from "./features/authSlice";
import { useAuthState } from "react-firebase-hooks/auth";
import Blog from "./pages/blog";
import BlockChainService from "./services/blockchain_service";
import { useEffect } from "react";
import {
  selectTransaction,
  setCurrentAccount,
} from "./features/transactionSlice";

function App() {
  const dispatch = useAppDispatch();
  const [user, loading, error] = useAuthState(auth);
  const authState = useAppSelector(selectAuth);
  const transactionState = useAppSelector(selectTransaction);
  const blockChainService = new BlockChainService();
  const isAuth: boolean = user !== null && user !== undefined && !loading;
  const defaultProtectedRouteProps: Omit<ProtectedRouteProps, "outlet"> = {
    isAuthenticated: isAuth,
    authenticationPath: "/",
  };

  const init = async () => {
    const response = await blockChainService.checkIfWalletIsConnect();
    console.log(response);
    dispatch(setCurrentAccount(response[0]));
  };
  useEffect(() => {
    init();
  }, []);
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/register" element={<RegisterPage />}></Route>
      <Route
        path="/exchange"
        element={
          <Protected {...defaultProtectedRouteProps} outlet={<Exchange />} />
        }
      ></Route>
      <Route path="/blog" element={<Blog />}></Route>
    </Routes>
  );
}

export default App;
