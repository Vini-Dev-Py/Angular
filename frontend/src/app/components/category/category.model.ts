import { Product } from "../product/product.model";

export interface Category {
    id?: number
    name: string
    description: string
    products: Product[]
}