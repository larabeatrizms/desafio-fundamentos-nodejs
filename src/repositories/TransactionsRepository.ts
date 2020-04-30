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
    // const groupingIncomeAndOutcome = this.transactions.reduce(
    //   (group, { value, type }) => {
    //     const key = type;
    //     const IncomeSum = 0;
    //     const OutcomeSum = 0;
    //     if (!group[key]) {
    //       group[key] = 0;
    //     }
    //     if (key === 'income') {
    //       group.key = IncomeSum + value;
    //     }
    //     if (key === 'outcome') {
    //       group[key] = OutcomeSum + value;
    //     }

    //     return group;
    //   },
    //   {},
    // );

    // const IncomeSum = this.transactions
    //   .filter(transaction => transaction.type === 'income')
    //   .reduce((total, trans) => (total += trans.value));

    const IncomeSum = this.transactions.reduce((total, elemento) => {
      if (elemento.type === 'income') return (total += elemento.value);
      return total;
    }, 0);

    const OutcomeSum = this.transactions.reduce((total, elemento) => {
      if (elemento.type === 'outcome') return (total += elemento.value);
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
