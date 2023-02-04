import { Grid } from "@mui/material";
import React from "react";
import CoinModel from "../models/coin_model";
import "./styles/coins_section.css";

interface IProps {
  coins: CoinModel[];
}

function CoinsSection({ coins }: IProps) {
  return (
    <div className="coins_section">
      <div className="coins_section_titles">
        <p>S/N</p>
        <p>NAME</p>
        <p>PRICE</p>
        <p>PRICE CHANGE</p>
        <p>VOLUME 24HRS</p>
        <p>LIQUIDITY</p>
      </div>

      {coins.map((coin) => (
        <div className="coins_section_item">
          {/* S/N */}
          <p className="serial_number">{coin.index}</p>
          {/* LeftMost */}
          <div className="coins_section_item_leftmost">
            <img alt="" src={coin.image} />
            <p>
              {coin.name} {coin.symbol}
            </p>
          </div>
          <p>${coin.current_price}</p>
          {coin.price_change_percentage_24h > 0 ? (
            <p className="high_price_change">
              {coin.price_change_percentage_24h}
            </p>
          ) : (
            <p className="low_price_change">
              {coin.price_change_percentage_24h}
            </p>
          )}
          <div className="volume_24hrs">
            <p>${coin.high_24h}</p>
            {/* <p>min</p> */}
          </div>
          <div className="liquidity">
            <p>${coin.low_24h}</p>
            {/* <p>min</p> */}
          </div>
        </div>
      ))}
    </div>
  );
}

export default CoinsSection;
