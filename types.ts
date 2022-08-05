
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

    

    

