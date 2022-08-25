export interface Orders{
    id?:number;
    ticker?:String;
    priceToBuy?:number; //price to buy in db
    numberOfShares?:number;
    TotalPrice?:number;
    STATUS_code?:String; //status code in db
    orderDate?:String;
}