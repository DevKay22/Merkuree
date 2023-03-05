import React, { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import CoinsSection from "../components/coins_section";
import Contact from "../components/contact";
import Footer from "../components/footer";
import Nav from "../components/nav";
import GoUpFab from "../components/go_up";
import CoinModel from "../models/coin_model";
import CoinService from "../services/coin_service";

import "./styles/home.css";
import BlockChainService from "../services/blockchain_service";
import {
  selectTransaction,
  setCurrentAccount,
} from "../features/transactionSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";

function HomePage() {
  const dispatch = useAppDispatch();
  const transactionState = useAppSelector(selectTransaction);
  const coinService = new CoinService();
  const blockchainService = new BlockChainService();

  const init = async () => {
    const res = await coinService.fetcAllCoins();
    setCoins(res);
  };
  const connectToWallet = async () => {
    const res = await blockchainService.connectWallet();
    if (typeof res === "string") {
      dispatch(setCurrentAccount(res));
    }
  };

  const [coins, setCoins] = useState<CoinModel[]>([]);
  const isConnected = transactionState.connectedAccount !== null;
  const navigate = useNavigate();
  useEffect(() => {
    init();
  }, []);

  return (
    <div className="homepage">
      <GoUpFab />
      {/* NAV */}
      <Nav />
      {/* BODY */}
      <div className="homepage__body">
        <div className="homepage__body_header">
          <p>UNIFIED PRODUCT, SIMPLIFIED TRADING</p>
          <h1>Fast, Safe and Free</h1>
          <p>Merkury is a decentralized market place for peer-to-peer transaction of ethers.</p>
          <div className="homepage__trading_buttons">
            {isConnected ? (
              <></>
            ) : (
              <button
                className="homepage_rounded_trading_button"
                onClick={connectToWallet}
              >
                Connect Wallet
              </button>
            )}
            {/* <button className="homepage_rounded_trading_outlined_button">
              Add Liquidity
            </button> */}
          </div>
        </div>
        <h3 className="avalaible_coins">Crypto Coins Update</h3>
        <CoinsSection coins={coins} />
      </div>
      <Footer />
      <Contact />
    </div>
  );
}

export default HomePage;

/*
<div className="hompage__header">
        
        <h1>Merkury</h1>
        
        <nav className="homepage__nav">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
            <li>
              <Link to="/exchange">Exchange</Link>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="footer">Contact</a>
            </li>
          </ul>
        </nav>
        <div>
          {isAuthenticated ? (
            <div className="homepage__authenticated_section">
              
              <p>John</p>
            </div>
          ) : (
            <div>
              <button
                className="homepage__rounded_button"
                onClick={navigateToLogin}
              >
                Sign In
              </button>
              <button
                className="homepage__rounded_button"
                onClick={() => navigate("/register")}
              >
                Sign Up
              </button>
            </div>
          )}
        </div>
      </div>
*/
