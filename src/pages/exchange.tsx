import React, { useState } from "react";
import "./styles/exchange.css";
import BlockChainService from "../services/blockchain_service";

import CircularProgress from "@mui/material/CircularProgress/CircularProgress";
import { useAppSelector } from "../app/hooks";
import { selectTransaction } from "../features/transactionSlice";

const ethereum = window.ethereum;

function Exchange() {
  const blockchainService = new BlockChainService();
  const transactionState = useAppSelector(selectTransaction);
  // const [modal] = useGlobalState('modal')
  // const [connectedAccount] = useGlobalState("connectedAccount");
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState("");
  const [remark, setRemark] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    // console.log(ethereum);
    if (!address || !amount || !remark) return;
    setLoading(true);
    const connectedAccount = transactionState.connectedAccount;
    const keyword = "";
    blockchainService
      .sendTransaction({ address, amount, connectedAccount, remark, keyword })
      .then(() => {
        setLoading(false);
        resetForm();
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        alert(error);
      });
  };

  const resetForm = () => {
    setAddress("");
    setAmount("");
    setRemark("");
  };

  return (
    <div className="exchange">
      <div className="form-container">
        <h4>Tranfer ETH</h4>

        <input
          placeholder="Address To"
          type="text"
          name="address"
          onChange={(e) => setAddress(e.target.value)}
          value={address}
        />

        <input
          placeholder="Amount (ETH)"
          type="number"
          step={0.0001}
          name="amount"
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
        />

        <input
          placeholder="Remark"
          type="text"
          name="remark"
          onChange={(e) => setRemark(e.target.value)}
          value={remark}
        />

        {loading ? (
          <CircularProgress />
        ) : (
          <button className="" onClick={handleSubmit}>
            SEND
          </button>
        )}
      </div>
    </div>
  );
}

export default Exchange;
