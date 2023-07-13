import { DioAccount } from "./DioAccount";

export class PremiumAccount extends DioAccount {
    private bonus: number = 10;

    constructor(name: string, accountNumber: number, status: boolean) {
        super(name, accountNumber, status);
    }

    depositPremium = (deposit: number) => {
        if(this.validateStatus())  {
            this.balance += deposit + this.bonus;
            console.log(`Você depositou ${deposit} reais e ganhou um bônus de ${this.bonus} reais`);
        }
    }
}