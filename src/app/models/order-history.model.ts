export interface Orders{
    OrderId?:number;
    ticker?:String;
    averagePrice?:number; //price to buy in db
    numShares?:number;
    TotalPrice?:number;
    OrderType?:String; //status code in db
    lastPurchaseDate?:String;
}