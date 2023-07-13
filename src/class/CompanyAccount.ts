import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {

    constructor(name: string, accountNumber: number, status: boolean) {
        super(name, accountNumber, status);
    }

    getLoan = (loan: number) => {
        if(this.validateStatus())  {
            this.balance += loan;
            console.log(`Você pegou um emprestimo de ${loan} reais`);
        }
    }
}