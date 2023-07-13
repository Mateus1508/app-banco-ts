import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";
import { PremiumAccount } from "./class/PremiumAccount";

const peopleAccount: PeopleAccount = new PeopleAccount(1,'Mateus', 10, true);
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 11, true);
const premiumAccount: PremiumAccount = new PremiumAccount('Cristiano Ronaldo', 12, true);


const inactivePeopleAccount: PeopleAccount = new PeopleAccount(1, 'Luis', 10, false);
const inactiveCompanyAccount: CompanyAccount = new CompanyAccount('DIO inativa', 20, false);
const inactivePremiumAccount: PremiumAccount = new PremiumAccount('Neymar', 40, false);

// Depósitar

peopleAccount.deposit(50)
peopleAccount.getBalance();

companyAccount.deposit(25)
companyAccount.getBalance();

premiumAccount.deposit(2000);
premiumAccount.getBalance();

// Sacar

peopleAccount.withdraw(500) 
peopleAccount.getBalance();

companyAccount.withdraw(10) 
companyAccount.getBalance();

premiumAccount.withdraw(10) 
premiumAccount.getBalance();

// Empréstimo

companyAccount.getLoan(1000);
companyAccount.getBalance();

// Conta inativas 

try{
    inactivePeopleAccount.deposit(30);
}catch(e) {
    console.log("" + e);
}

try{
    inactivePeopleAccount.withdraw(20);
}catch(e) {
    console.log("" + e);
}

try{
    inactivePremiumAccount.deposit(3000);
}catch(e) {
    console.log("" +e);
}

try{
    inactivePremiumAccount.withdraw(2000);
}catch(e) {
    console.log("" + e);
}

try{
    inactiveCompanyAccount.deposit(100);
}catch(e) {
    console.log("" + e);
}

try{
    inactiveCompanyAccount.withdraw(50);
}catch(e) {
    console.log("" + e);
}

try{
    inactiveCompanyAccount.getLoan(1000);
}catch(e) {
    console.log("" + e);
}
 



