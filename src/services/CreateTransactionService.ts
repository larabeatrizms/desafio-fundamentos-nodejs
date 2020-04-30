import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

interface Request {
  id: string;
  title: string;
  value: number;
  type: 'income' | 'outcome';
}
/**
 * {
  "id": "uuid",
  "title": "Salário",
  "value": 3000,
  "type": "income"
    }
 */
class CreateTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute({ id, title, value, type }: Request): Transaction {
    // TODO
    const transaction = this.transactionsRepository.create({
      id,
      title,
      value,
      type,
    });

    return transaction;
  }
}

export default CreateTransactionService;
