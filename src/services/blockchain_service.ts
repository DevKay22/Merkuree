import { ethers } from "ethers";
// import { setGlobalState } from "../store";

import { contractAbi, contractAddress } from "../utils/constants";
import SendMoneyDto from "../models/send_money_dto";

const ethereum = window.ethereum!;

export default class BlockChainService {
  createEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionsContract = new ethers.Contract(
      contractAddress,
      contractAbi,
      signer
    );

    return transactionsContract;
  };
  sendTransaction = async (props: SendMoneyDto) => {
    try {
      if (ethereum) {
        const transactionsContract = this.createEthereumContract();
        const parsedAmount = ethers.utils.parseEther(props.amount);

        await ethereum.request({
          method: "eth_sendTransaction",
          params: [
            {
              from: props.connectedAccount,
              to: props.address,
              gas: "0x5208",
              value: parsedAmount._hex,
            },
          ],
        });

        const transactionHash = await transactionsContract.addToBlockchain(
          props.address,
          parsedAmount,
          props.remark,
          props.keyword
        );

        // setIsLoading(true);
        console.log(`Loading - ${transactionHash.hash}`);
        await transactionHash.wait();
        console.log(`Success - ${transactionHash.hash}`);
        // setIsLoading(false);

        const transactionsCount =
          await transactionsContract.getTransactionCount();

        // setTransactionCount(transactionsCount.toNumber());
        window.location.reload();
      } else {
        console.log("No ethereum object");
      }
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };

  checkIfWalletIsConnect = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length) {
        // setCurrentAccount(accounts[0]);
        // getAllTransactions();
        console.log(accounts);
        return accounts;
      } else {
        console.log("No accounts found");
      }
    } catch (error) {
      console.log(error);
    }
  };
  connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      // setCurrentAccount(accounts[0]);
      window.location.reload();
      return accounts[0] as string;
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };
}
