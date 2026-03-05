import { createAccount, deposit, withdraw, checkBalance, showTransactions } from './bank.js';
createAccount("John Doe", "123 Main St", "555-1234");
createAccount("Jane Smith", "456 Elm St", "555-5678");                                                                                                          
deposit(1, 1500);
checkBalance(1);
deposit(1, 1000);
checkBalance(1);
withdraw(1,20000)
checkBalance(1);
showTransactions(1)