import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface CreateTransactionDTO {
  id: string;
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    // TODO

    return this.transactions;
  }

  public getBalance(): Balance {
    // TODO

    const IncomeSum = this.transactions.reduce((total, elemento) => {
      if (elemento.type === 'income') {
        let newTotal = total;
        newTotal += elemento.value;
        return newTotal;
      }
      return total;
    }, 0);

    const OutcomeSum = this.transactions.reduce((total, elemento) => {
      if (elemento.type === 'outcome') {
        let newTotal = total;
        newTotal += elemento.value;
        return newTotal;
      }
      return total;
    }, 0);

    const balance = {
      income: IncomeSum,
      outcome: OutcomeSum,
      total: IncomeSum - OutcomeSum,
    };

    return balance;
  }

  public create({ title, value, type }: CreateTransactionDTO): Transaction {
    // TODO
    const transaction = new Transaction({ title, value, type });

    this.transactions.push(transaction);

    return transaction;
  }
}

export default TransactionsRepository;
