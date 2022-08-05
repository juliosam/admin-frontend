export interface RootObject {
    data: Data;
    meta: Meta;
}

export interface Meta {
    pagination: Pagination
}

export interface Pagination{
    page: number;
    pageCount: number;
    pageSize: number;
    total: number; 
}

export interface Data {
    id: number;
    attributes: Attributes;
}

export interface Attributes {
    PurchaseDate: Date;
    DueDate: string;
    PO: string;
    status: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    clientMail: string;
    Adress: string;
    products: Products;
}

export interface Products {
    data: Datum[];
}

export interface Datum {
    id: number;
    attributes: Attributes2;
}

export interface Attributes2 {
    name: string;
    type: string;
    brand: string;
    Description: string;
    Price: number;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    stock: number;
    productID: string;
}

