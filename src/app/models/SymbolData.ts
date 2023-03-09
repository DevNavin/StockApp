import { Sentiment } from "./Sentiment";

export interface SymbolData {
    symbol: string,
    data: Sentiment[],
}