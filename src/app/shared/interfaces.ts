// final compilation does not include interfaces - used as a "guiderail" while developing app
export interface ICustomer {
    id: number;
    name: string;
    city: string;
    orderTotal?: number;
    customerSince: any;
}

export interface IOrder {
    customerId: number;
    orderItems: IOrderItem[];
}

export interface IOrderItem {
    id: number;
    productName: string;
    itemCost: number;
}