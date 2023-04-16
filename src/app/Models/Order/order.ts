export interface Order {
    orderId?:number;
    orderUserId:number;
    orderUserName:string;
    orderUserAddress:string;
    orderUserContactNumber:number|null;
    orderUserAlternateNumber:number|null;
    orderAmount:number;
    orderProductId:number
}
