export default class CoinModel {
  id?: string;
  name?: string;
  image?: string;
  market_cap_rank?: number;
  total_volume?: number;
  symbol?: string;
  index?: number;
  current_price?: number;
  price_change_percentage_24h: number = 0;
  high_24h: number = 0;
  low_24h: number = 0;
  constructor(json: any) {
    this.id = json.id;
    this.name = json.name;
    this.image = json.image;
    this.market_cap_rank = json.market_cap_rank;
    this.total_volume = json.total_volume;
    this.symbol = json.symbol;
    this.current_price = json.current_price;
    this.price_change_percentage_24h = json.price_change_percentage_24h;
    this.high_24h = json.high_24h;
    this.low_24h = json.low_24h;
  }
}
