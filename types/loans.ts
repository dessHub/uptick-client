import { User } from './users';
import { PaymentStatus } from './enums';

export interface Loan {
  id: number;
  user: User;
  guarantors: Array<User>;
  amount: number;
  balance: number;
  interestAccrued: number;
  interestRate: string;
  startDate: Date;
  endDate: Date;
  expectedEndDate: Date;
  status: PaymentStatus;
}

export interface Payment {
    id: number;
    user: User;
    amount: number;
    paidOn: Date;
    updatedOn: Date;
    loan: Loan; 
}
