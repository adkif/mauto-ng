import { ICustomer } from "./icustomer";
import { IProduct } from "./iproduct";

interface IPackage{
  product: IProduct,
  quantity: number
}

export interface ICart {
  customer: ICustomer,
  orders: IPackage[],
}
