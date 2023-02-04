import * as axios from "axios";
import CoinModel from "../models/coin_model";
class CoinService {
  async fetcAllCoins(amount?: number | 20) {
    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${amount}&page=1&sparkline=false`;
    return await axios.default
      .get(url)
      .then((response) => {
        const items = response.data as [];
        const coins: CoinModel[] = [];

        if (items.length > 0) {
          for (let index = 0; index < items.length; index++) {
            const element = items[index];
            const coin = new CoinModel(element);
            coin.index = index +1 ;
            coins.push(coin);
          }
          return coins;
        }
        return [];
      })
      .catch((error) => {
        console.log(`Error: ${error}`);
        throw Error(error);
      });
  }
}

export default CoinService;
