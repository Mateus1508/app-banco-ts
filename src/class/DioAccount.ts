export class DioAccount {
    private name: string;
    private readonly accountNumber: number;
    balance: number = 0;
    private status: boolean = true;

    constructor(name: string, accountNumber: number, status: boolean) {
        this.name = name;
        this.accountNumber = accountNumber;
        this.status = status;
    }
/* 
    setName = (name: string): void => {
        this.name = name;
        console.log('Nome alterado com sucesso');
    } */

    deposit = (deposit: number): void => {
        if(this.validateStatus())  {
            this.balance += deposit;
            console.log(`${this.name} depositou ${deposit} reais`)
        }
    }

    withdraw  = (withdraw: number): void => {
        if(this.validateStatus())  {
            if (this.balance > withdraw) {
                this.balance -= withdraw;
                console.log(`${this.name} sacou ${withdraw} reais`)       
            }
            else {
                console.log(`Voce não tem saldo o suficiente ${this.name}`)
            }
        }
    }

    getBalance = (): void => {
        console.log(`O saldo de ${this.name} é ${this.balance} reais`);
    }

    protected validateStatus = (): boolean => {
        if(this.status) {
            return this.status;
        }
        throw new Error(`Conta para ${this.name} inválida`);
    }

}