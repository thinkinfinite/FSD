export interface StockExchange {
  id: number;
  name: string;
  brief: string;
  address: string;
  remarks?: string;
}

export interface Company {
  id: number;
  companyName: string;
  turnOver: string;
  ceo: string;
  directors: string;
  storckExchanges: string;
  sector: string;
  description: string;
  stockCode: string;
}

export interface Ipo {
  id: number;
  companyName: string;
  stockExchange: string;
  stockCode: string;
  shareNums: string;
  sector: string;
  description: string;
  sharePrice: number;
  openTime: Date;
  remarks: string;
}

export interface StockPrice {
  id: number;
  companyCode: string;
  currentPrice: number;
  date: string;
  stockExchange: string;
}
