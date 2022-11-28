import { User } from "./users";

export interface Remittance {
    id: string;
    user: User;
    amount: number;
    paidOn: Date;
    updatedOn: Date;
}