import { ICategory } from "./icategory";

export interface IProduct {
  id:number,
  name:string,
  cover:string,
  description:string,
  price:number,
  category:ICategory,
  quantity:number
}
