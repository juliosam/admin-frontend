export interface RootObject {
    id: number;
    username: string;
    email: string;
    provider: string;
    confirmed: boolean;
    blocked: boolean;
    createdAt: Date;
    updatedAt: Date;
    Adress: string;
    orders: Orders[];
}


export interface Orders {
    PurchaseDate: Date;
    DueDate: string;
    PO: string;
    status: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    clientMail: string;
    Adress: string;
}

