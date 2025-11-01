import type { Product } from "./product.interface";

export interface UserInterface {
    count:    number;
    pages:    number;
    products: Product[];
}


export interface User {
    id:       string;
    email:    string;
    fullName: string;
    isActive: boolean;
    roles:    string[];
}
