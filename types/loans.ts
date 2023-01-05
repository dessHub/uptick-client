import { User } from './users';
import { PaymentStatus } from './enums';

interface Loan {
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

interface Payment {
    id: number;
    user: User;
    amount: number;
    paidOn: Date;
    updatedOn: Date;
    loan: Loan; 
}

interface LoanApplicationObject {
    firstName: string,
    lastName: string,
    phoneNo: string,
    idNo: string,
    type: 0 | 1,
    amount: number,
    interest: 7 | 10,
    guarantors: Guarantor[],
    idFile: string,
    loanFile: string
}

interface Guarantor {
    member: string,
    quaranteePercentage: number,
    quatanteeAmount: number,
}

export type {Loan, Payment, LoanApplicationObject, Guarantor}
