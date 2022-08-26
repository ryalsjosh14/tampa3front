export interface Orders{
    id?:number;
    ticker?:String;
    priceToBuy?:number; //price to buy in db
    numberOfShares?:number;
    TotalPrice?:number;
    status_CODE?:String; //status code in db
    orderDate?:String;
}